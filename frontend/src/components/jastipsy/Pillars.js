import { FadeUp } from "./Reveal";

const PILLARS = [
  {
    n: "01",
    t: "CEPAT",
    d: "Respons instan di jam-jam sibuk war tiket. Slot kecil, eksekusi kilat.",
  },
  {
    n: "02",
    t: "TEGAS",
    d: "Strategi antrian yang teruji — siap menghadapi sistem antrean paling brutal sekalipun.",
  },
  {
    n: "03",
    t: "AMAN",
    d: "Semua tiket dibeli lewat kanal resmi event dan diteruskan langsung ke kamu.",
  },
];

export default function Pillars() {
  return (
    <section data-testid="pillars-band" className="bg-void py-20 md:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px bg-white/10 px-5 md:grid-cols-3 md:px-10">
        {PILLARS.map((p, i) => (
          <FadeUp
            key={p.n}
            delay={i * 0.12}
            className="group bg-void p-8 transition-colors duration-300 hover:bg-surface md:p-10"
          >
            <p className="font-mono text-xs tracking-[0.3em] text-cyber">{p.n}</p>
            <h3 className="mt-4 font-display text-5xl uppercase leading-none tracking-tight text-white transition-colors duration-300 group-hover:text-cyber md:text-6xl">
              {p.t}
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">{p.d}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
