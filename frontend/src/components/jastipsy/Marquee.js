const ITEMS = [
  "WAR TIKET ANTI GAGAL",
  "JASTIP TIKET KONSER",
  "FESTIVAL & OLAHRAGA",
  "SOLD OUT? BUKAN HALANGAN",
  "@JASTIPSY",
];

function Sequence({ hidden }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {ITEMS.map((t, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`whitespace-nowrap px-6 font-display text-5xl uppercase leading-none md:px-10 md:text-7xl ${
              i % 2 === 0 ? "text-foreground" : "text-outline"
            }`}
          >
            {t}
          </span>
          <span className="text-2xl text-cyber md:text-3xl">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section data-testid="marquee-band" className="overflow-hidden border-y border-white/10 bg-void py-7 md:py-9">
      <div className="marquee-track">
        <Sequence />
        <Sequence hidden />
      </div>
    </section>
  );
}
