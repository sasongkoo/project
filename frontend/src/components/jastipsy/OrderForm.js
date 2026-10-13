import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Instagram, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FadeUp, MaskedLines } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const IG_URL = "https://instagram.com/jastipsy";

const CATEGORIES = ["Konser", "Festival", "Event Olahraga", "Theater & Musical", "Lainnya"];

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    instagram: "",
    category: "",
    event_name: "",
    event_date: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const set = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await axios.post(`${API}/orders`, form);
      toast.success("Pesanan diterima!", {
        description: "Kami lanjutkan via DM Instagram kamu.",
      });
      setForm({ name: "", instagram: "", category: "", event_name: "", event_date: "", notes: "" });
    } catch (err) {
      toast.error("Gagal mengirim pesanan.", {
        description: "Coba lagi, atau langsung DM @jastipsy.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order" data-testid="order-section" className="border-t border-white/10 bg-void py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeUp y={16} className="mb-5 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyber">Form pesanan</span>
            <span className="h-px w-12 bg-cyber/50" />
          </FadeUp>
          <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
            <MaskedLines
              inView
              lines={[
                <span key="1">Kirim target,</span>,
                <span key="2" className="text-outline">kami eksekusi.</span>,
              ]}
            />
          </h2>
          <FadeUp delay={0.2} className="mt-8 space-y-4">
            {[
              "Isi form — kurang dari satu menit.",
              "Kami konfirmasi biaya & ketersediaan lewat DM.",
              "Tiket secured, e-tiket diteruskan ke DM kamu.",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mt-0.5 font-mono text-xs tracking-[0.2em] text-cyber">0{i + 1}</span>
                <p className="text-sm leading-relaxed text-zinc-300 md:text-base">{t}</p>
              </div>
            ))}
          </FadeUp>
          <FadeUp delay={0.3}>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="order-ig-card"
              className="mt-10 flex items-center justify-between gap-4 border border-white/10 bg-surface p-6 transition-colors duration-300 hover:border-cyber/50"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center bg-cyber text-void">
                  <Instagram className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                    Mau tanya-tanya dulu?
                  </p>
                  <p className="font-display text-xl tracking-wide text-white">DM @JASTIPSY</p>
                </div>
              </div>
              <Send className="h-4 w-4 text-cyber" />
            </a>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <form
            data-testid="order-form"
            onSubmit={onSubmit}
            className="space-y-6 border border-white/10 bg-surface p-7 md:p-10"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="order-name" className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                  Nama *
                </Label>
                <Input
                  id="order-name"
                  data-testid="order-name-input"
                  required
                  value={form.name}
                  onChange={(e) => set("name")(e.target.value)}
                  placeholder="Nama kamu"
                  className="h-11 rounded-none border-white/15 bg-void/60 text-white placeholder:text-zinc-600 focus-visible:ring-cyber"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order-ig" className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                  Username Instagram *
                </Label>
                <Input
                  id="order-ig"
                  data-testid="order-instagram-input"
                  required
                  value={form.instagram}
                  onChange={(e) => set("instagram")(e.target.value)}
                  placeholder="@username"
                  className="h-11 rounded-none border-white/15 bg-void/60 text-white placeholder:text-zinc-600 focus-visible:ring-cyber"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                Kategori event *
              </Label>
              <Select required value={form.category} onValueChange={set("category")}>
                <SelectTrigger
                  data-testid="order-category-trigger"
                  className="h-11 w-full rounded-none border-white/15 bg-void/60 text-white data-[placeholder]:text-zinc-600"
                >
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-white/15 bg-popover">
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c} data-testid={`order-category-item-${c}`}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="order-event" className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                Nama event & lokasi *
              </Label>
              <Input
                id="order-event"
                data-testid="order-event-input"
                required
                value={form.event_name}
                onChange={(e) => set("event_name")(e.target.value)}
                placeholder="cth: Festival Juara — Jakarta"
                className="h-11 rounded-none border-white/15 bg-void/60 text-white placeholder:text-zinc-600 focus-visible:ring-cyber"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="order-date" className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                Tanggal penjualan / event
              </Label>
              <Input
                id="order-date"
                data-testid="order-date-input"
                type="date"
                value={form.event_date}
                onChange={(e) => set("event_date")(e.target.value)}
                className="h-11 rounded-none border-white/15 bg-void/60 text-white focus-visible:ring-cyber"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="order-notes" className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                Catatan
              </Label>
              <Textarea
                id="order-notes"
                data-testid="order-notes-input"
                value={form.notes}
                onChange={(e) => set("notes")(e.target.value)}
                placeholder="Kategori tiket, jumlah, budget, dll."
                className="min-h-[90px] rounded-none border-white/15 bg-void/60 text-white placeholder:text-zinc-600 focus-visible:ring-cyber"
              />
            </div>

            <Button
              type="submit"
              data-testid="submit-order-btn"
              disabled={loading}
              className="h-13 w-full rounded-none bg-cyber py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-void shadow-[0_0_30px_rgba(230,255,0,0.2)] transition-all duration-200 hover:bg-neon hover:text-white active:scale-[0.99]"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Mengirim...
                </>
              ) : (
                <>
                  Kirim pesanan <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
