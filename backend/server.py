from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import Annotated, List, Optional
from pydantic import BaseModel, Field, ConfigDict, BeforeValidator
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


def _oid_to_str(v):
    return str(v)


PyObjectId = Annotated[str, BeforeValidator(_oid_to_str)]


def utcnow():
    return datetime.now(timezone.utc)


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True, arbitrary_types_allowed=True)

    id: Optional[PyObjectId] = Field(default=None, alias="_id")

    def to_mongo(self) -> dict:
        d = self.model_dump(by_alias=True)
        if d.get("_id") is None:
            d.pop("_id", None)
        return d

    @classmethod
    def from_mongo(cls, doc: dict):
        return cls.model_validate(doc)


class Order(BaseDocument):
    name: str
    instagram: str
    category: str
    event_name: str
    event_date: str = ""
    notes: str = ""
    status: str = "baru"
    created_at: datetime = Field(default_factory=utcnow)


class OrderCreate(BaseModel):
    name: str
    instagram: str
    category: str
    event_name: str
    event_date: str = ""
    notes: str = ""


@api_router.get("/")
async def root():
    return {"message": "Jastipsy API berjalan"}


@api_router.post("/orders", status_code=201)
async def create_order(input: OrderCreate):
    order = Order(**input.model_dump())
    doc = order.to_mongo()
    doc["created_at"] = doc["created_at"].isoformat()
    result = await db.orders.insert_one(doc)
    return {
        "id": str(result.inserted_id),
        "message": "Pesanan diterima. Kami lanjutkan via DM Instagram kamu.",
    }


@api_router.get("/orders", response_model=List[Order])
async def list_orders():
    docs = await db.orders.find().sort("created_at", -1).to_list(200)
    for d in docs:
        if isinstance(d.get("created_at"), str):
            d["created_at"] = datetime.fromisoformat(d["created_at"])
    return [Order.from_mongo(d) for d in docs]


@api_router.get("/orders/{order_id}", response_model=Order)
async def get_order(order_id: str):
    doc = await db.orders.find_one({"_id": order_id})
    if not doc:
        raise HTTPException(status_code=404, detail="Pesanan tidak ditemukan")
    if isinstance(doc.get("created_at"), str):
        doc["created_at"] = datetime.fromisoformat(doc["created_at"])
    return Order.from_mongo(doc)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
