import { Instagram } from "lucide-react";
import { LogoFull } from "./Logo";
import { FadeUp } from "./Reveal";
import { scrollToId } from "@/lib/lenis";

const IG_URL = "https://instagram.com/jastipsy";

const LINKS = [
  { label: "Cara Kerja", id: "cara-kerja" },
  { label: "Layanan", id: "layanan" },
  { label: "Form Pesanan", id: "order" },
  { label: "FAQ", id: "faq" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-white/10 bg-void pt-16">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <LogoFull />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              Jasa titip tiket untuk semua event yang selalu sold out. Kamu santai, kami yang antri.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`footer-link-${l.id}`}
                onClick={() => scrollToId(l.id)}
                className="text-left font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-200 hover:text-cyber"
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-instagram-link"
            className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-cyber hover:text-cyber"
          >
            <Instagram className="h-4 w-4" />
            @jastipsy
          </a>
        </div>

        <p className="mt-14 select-none overflow-hidden whitespace-nowrap text-center font-display text-[13vw] uppercase leading-[0.85] text-outline opacity-60">
          JASTIPSY
        </p>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            © {new Date().getFullYear()} Jastipsy. Semua tiket via kanal resmi event.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            Made for the front row
          </p>
        </div>
      </div>
    </footer>
  );
}
