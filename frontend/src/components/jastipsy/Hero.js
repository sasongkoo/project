import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Instagram, Ticket } from "lucide-react";
import { MaskedLines, FadeUp, EASE } from "./Reveal";
import { scrollToId } from "@/lib/lenis";

const IG_URL = "https://instagram.com/jastipsy";
const HERO_IMG =
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2400&auto=format&fit=crop";

function TicketStub() {
  return (
    <div className="w-[300px] border border-void/20 bg-cyber text-void shadow-[0_30px_80px_rgba(230,255,0,0.18)]">
      <div className="flex items-center justify-between border-b border-dashed border-void/30 px-5 py-3">
        <span className="font-display text-lg tracking-wide">JASTIPSY</span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">e-ticket</span>
      </div>
      <div className="px-5 py-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-void/60">Status</p>
        <p className="font-display text-3xl leading-tight">SECURED</p>
        <div className="mt-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-void/70">
          <Ticket className="h-3.5 w-3.5" />
          1 tiket / terbaik tersedia
        </div>
      </div>
      <div className="relative border-t border-dashed border-void/30 px-5 py-3">
        <div className="barcode h-7 w-full" />
        <p className="mt-2 font-mono text-[10px] tracking-[0.3em] text-void/60">*JSTPY-WAR-TEAM*</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rX = useSpring(my, { stiffness: 120, damping: 16 });
  const rY = useSpring(mx, { stiffness: 120, damping: 16 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    my.set(((e.clientY - r.top) / r.height - 0.5) * -10);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
    >
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Kerumunan konser dengan sorot lampu panggung"
          className="img-duotone h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/80" />

      <motion.div
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.01 } }}
        className="pointer-events-none absolute right-10 top-1/3 z-10 hidden lg:block"
      >
        <motion.div
          data-testid="ticket-stub"
          style={{ rotateX: rX, rotateY: rY, transformPerspective: 900 }}
          initial={{ opacity: 0, y: 60, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 1.2, delay: 1, ease: EASE }}
          className="pointer-events-auto"
        >
          <TicketStub />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <FadeUp y={16} className="mb-6 flex items-center gap-3">
          <span className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-cyber" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-300">
            Jasa titip tiket — @jastipsy
          </span>
        </FadeUp>

        <h1
          data-testid="hero-title"
          className="font-display uppercase leading-[0.92] tracking-tight text-6xl sm:text-7xl lg:text-[9.5rem]"
        >
          <MaskedLines
            delay={0.15}
            lines={[
              <span key="1" className="text-white">WAR TIKET?</span>,
              <span key="2" className="text-outline">KAMI YANG</span>,
              <span key="3" className="text-cyber">ANTRI.</span>,
            ]}
          />
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <FadeUp delay={0.7} className="max-w-xl">
            <p data-testid="hero-sub" className="text-base leading-relaxed text-zinc-300 md:text-lg">
              Jastipsy adalah jasa titip buat ngejar tiket yang selalu sold out — konser, festival,
              sampai event olahraga. Kamu tinggal nunggu kabar gembira, kami yang berburu di garis
              depan.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta-dm"
                className="inline-flex items-center gap-2 bg-cyber px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-void shadow-[0_0_30px_rgba(230,255,0,0.25)] transition-all duration-200 hover:scale-[1.03] hover:bg-neon hover:shadow-[0_0_30px_rgba(255,0,127,0.3)] active:scale-[0.98]"
              >
                <Instagram className="h-4 w-4" />
                Order via DM
              </a>
              <button
                data-testid="hero-cta-form"
                onClick={() => scrollToId("order")}
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-cyber hover:text-cyber active:scale-[0.98]"
              >
                Isi form pesanan
              </button>
            </div>
          </FadeUp>

          <FadeUp delay={0.85} className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 md:flex-col md:items-end md:gap-2">
            <span>Update real-time</span>
            <span className="hidden h-px w-16 bg-white/20 md:block" />
            <span>Tiket atas nama kamu</span>
          </FadeUp>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-5 z-10 hidden items-center gap-3 md:left-10 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
        <motion.span
          className="block h-10 w-px bg-gradient-to-b from-cyber to-transparent"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
