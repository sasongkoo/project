import { ArrowUpRight } from "lucide-react";
import { FadeUp, MaskedLines } from "./Reveal";

const STEPS = [
  {
    n: "/01",
    t: "Kirim event-nya",
    d: "DM @jastipsy atau isi form di bawah: sebutkan event, tanggal, dan kategori tiket yang kamu incar.",
  },
  {
    n: "/02",
    t: "Konfirmasi biaya",
    d: "Kami balas dengan rincian biaya jasa dan total harga tiket. Deal? Pesanan langsung masuk jadwal war.",
  },
  {
    n: "/03",
    t: "War day",
    d: "Tim Jastipsy standby penuh di jam penjualan, siap bertarung di barisan paling depan.",
  },
  {
    n: "/04",
    t: "Tiket secured",
    d: "Tiket dibeli atas nama kamu, e-tiketnya diteruskan langsung ke DM. Kamu tinggal berangkat.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" data-testid="how-it-works" className="bg-void py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp y={16} className="mb-5 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyber">Cara kerja</span>
              <span className="h-px w-12 bg-cyber/50" />
            </FadeUp>
            <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
              <MaskedLines
                inView
                lines={[
                  <span key="1">Empat langkah</span>,
                  <span key="2" className="text-outline">ke tiket di tangan</span>,
                ]}
              />
            </h2>
          </div>
          <FadeUp delay={0.2} className="max-w-sm">
            <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
              Semua prosesnya transparan. Kamu selalu tahu posisi pesananmu — dari antrian sampai
              e-tiket masuk DM.
            </p>
          </FadeUp>
        </div>

        <div className="border-t border-white/10">
          {STEPS.map((s, i) => (
            <FadeUp
              key={s.n}
              delay={i * 0.08}
              className="group grid grid-cols-12 items-baseline gap-4 border-b border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.03] md:py-12"
            >
              <p className="col-span-3 font-mono text-sm tracking-[0.2em] text-cyber md:col-span-2">
                {s.n}
              </p>
              <h3 className="col-span-9 font-display text-2xl uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-cyber md:col-span-5 md:text-4xl">
                {s.t}
              </h3>
              <div className="col-span-12 flex items-start justify-between gap-6 md:col-span-5">
                <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">{s.d}</p>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyber" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
