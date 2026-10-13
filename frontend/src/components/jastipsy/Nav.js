import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { LogoFull } from "./Logo";
import { scrollToId } from "@/lib/lenis";

const IG_URL = "https://instagram.com/jastipsy";

const LINKS = [
  { label: "Cara Kerja", id: "cara-kerja" },
  { label: "Layanan", id: "layanan" },
  { label: "Form Pesanan", id: "order" },
  { label: "FAQ", id: "faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 150 : 0);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? "border-white/10 bg-black/60 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
          <button
            data-testid="nav-logo-home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="transition-transform duration-200 hover:scale-[1.03]"
          >
            <LogoFull />
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-200 hover:text-cyber"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-cta-dm"
              className="hidden items-center gap-2 border border-cyber/60 bg-cyber px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-void transition-all duration-200 hover:bg-neon hover:border-neon hover:text-white md:inline-flex"
            >
              <Instagram className="h-4 w-4" />
              Order via DM
            </a>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white md:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center bg-void/95 px-8 backdrop-blur-xl md:hidden">
          {LINKS.map((l, i) => (
            <button
              key={l.id}
              data-testid={`mobile-menu-link-${l.id}`}
              onClick={() => go(l.id)}
              className="border-b border-white/10 py-5 text-left font-display text-4xl uppercase tracking-wide text-white transition-colors hover:text-cyber"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {l.label}
            </button>
          ))}
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mobile-menu-cta-dm"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-cyber px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-void"
          >
            <Instagram className="h-4 w-4" />
            Order via DM @jastipsy
          </a>
        </div>
      )}
    </>
  );
}
