import { Instagram } from "lucide-react";
import { MaskedLines, FadeUp } from "./Reveal";
import { scrollToId } from "@/lib/lenis";

const IG_URL = "https://instagram.com/jastipsy";

export default function FinalCta() {
  return (
    <section data-testid="final-cta" className="relative overflow-hidden border-t border-white/10 bg-void py-28 md:py-40">
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-neon/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-cyber/15 blur-[140px]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <FadeUp y={16} className="mb-6 flex items-center gap-3">
          <span className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-neon" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-300">
            Slot war dibatasi per jadwal
          </span>
        </FadeUp>
        <h2 className="font-display uppercase leading-[0.92] tracking-tight text-6xl sm:text-7xl lg:text-[9rem]">
          <MaskedLines
            inView
            lines={[
              <span key="1" className="text-white">SIAP WAR TIKET</span>,
              <span key="2" className="text-cyber">BARENG KAMI?</span>,
            ]}
          />
        </h2>
        <FadeUp delay={0.25} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-cta-dm-btn"
            className="inline-flex items-center gap-2 bg-cyber px-9 py-5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-void shadow-[0_0_40px_rgba(230,255,0,0.25)] transition-all duration-200 hover:scale-[1.03] hover:bg-neon hover:shadow-[0_0_40px_rgba(255,0,127,0.35)] active:scale-[0.98]"
          >
            <Instagram className="h-4 w-4" />
            DM @jastipsy
          </a>
          <button
            data-testid="final-cta-form-btn"
            onClick={() => scrollToId("order")}
            className="inline-flex items-center gap-2 border border-white/25 px-9 py-5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-cyber hover:text-cyber active:scale-[0.98]"
          >
            Isi form pesanan
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
