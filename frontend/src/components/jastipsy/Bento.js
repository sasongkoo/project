import { BellRing, ShieldCheck, Zap } from "lucide-react";
import { FadeUp, MaskedLines } from "./Reveal";

const IMG_HANDS =
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop";
const IMG_NEON =
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop";
const IMG_STAGE =
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1600&auto=format&fit=crop";

function ImageCard({ span, tag, title, desc, img, tall = false }) {
  return (
    <FadeUp
      className={`group relative overflow-hidden border border-white/10 bg-surface ${span}`}
      y={44}
    >
      <div className={`flex flex-col ${tall ? "h-full min-h-[420px] md:min-h-[520px]" : "h-72 md:h-80"}`}>
        <div className="flex items-start justify-between p-7 md:p-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyber">{tag}</p>
            <h3 className="mt-2 font-display text-2xl uppercase tracking-wide text-white md:text-3xl">
              {title}
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">{desc}</p>
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="img-duotone absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-cyber/15 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
        </div>
      </div>
    </FadeUp>
  );
}

function InfoCard({ span, icon: Icon, title, desc }) {
  return (
    <FadeUp className={`group border border-white/10 bg-surface p-7 transition-colors duration-300 hover:border-cyber/50 md:p-8 ${span}`}>
      <div className="flex h-11 w-11 items-center justify-center border border-cyber/40 text-cyber transition-colors duration-300 group-hover:bg-cyber group-hover:text-void">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-xl uppercase tracking-wide text-white md:text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
    </FadeUp>
  );
}

export default function Bento() {
  return (
    <section id="layanan" data-testid="services-bento" className="bg-void py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp y={16} className="mb-5 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyber">Layanan</span>
              <span className="h-px w-12 bg-cyber/50" />
            </FadeUp>
            <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
              <MaskedLines
                inView
                lines={[
                  <span key="1">Apa saja yang</span>,
                  <span key="2" className="text-cyber">kami war?</span>,
                ]}
              />
            </h2>
          </div>
          <FadeUp delay={0.2} className="max-w-sm">
            <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
              Kalau tiketnya dijual online dan selalu habis dalam hitungan menit — itu medan perang
              kami.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          <ImageCard
            span="md:col-span-7 md:row-span-2"
            tall
            tag="Fokus utama"
            title="Konser & Musik"
            desc="Stadion penuh, serverDrop selesai 3 menit. Kami tahu ritmenya — dari presale sampai general sale."
            img={IMG_HANDS}
          />
          <ImageCard
            span="md:col-span-5"
            tag="Musim panas"
            title="Festival & Event"
            desc="Festival musik, komedi, sampai pop culture — satu-dua hari, ratusan ribu peminat."
            img={IMG_NEON}
          />
          <ImageCard
            span="md:col-span-5"
            tag="Di luar panggung"
            title="Olahraga & Lainnya"
            desc="Pertandingan olahraga, esports, theater, sampai seminar — kalau bertiket, kami bisa war."
            img={IMG_STAGE}
          />
          <InfoCard
            span="md:col-span-4"
            icon={BellRing}
            title="Update real-time"
            desc="Kamu selalu tahu status pesanan — dari jam war, posisi antrian, sampai e-tiket diteruskan."
          />
          <InfoCard
            span="md:col-span-4"
            icon={ShieldCheck}
            title="Aman & transparan"
            desc="Tiket dibeli lewat kanal resmi event atas nama kamu. Tanpa tiket abal-abal, tanpa drama."
          />
          <InfoCard
            span="md:col-span-4"
            icon={Zap}
            title="Tim war berpengalaman"
            desc="Terbiasa ngejar penjualan tercepat dengan strategi antrian dan rencana cadangan."
          />
        </div>
      </div>
    </section>
  );
}
