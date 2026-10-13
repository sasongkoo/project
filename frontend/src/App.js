import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "./components/jastipsy/ErrorBoundary";
import { lenisRef } from "./lib/lenis";
import Nav from "./components/jastipsy/Nav";
import Hero from "./components/jastipsy/Hero";
import Marquee from "./components/jastipsy/Marquee";
import Pillars from "./components/jastipsy/Pillars";
import HowItWorks from "./components/jastipsy/HowItWorks";
import Bento from "./components/jastipsy/Bento";
import OrderForm from "./components/jastipsy/OrderForm";
import Faq from "./components/jastipsy/Faq";
import FinalCta from "./components/jastipsy/FinalCta";
import Footer from "./components/jastipsy/Footer";
import "./App.css";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="grain relative min-h-screen bg-void font-sans text-foreground">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Pillars />
          <HowItWorks />
          <Bento />
          <OrderForm />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <Toaster theme="dark" position="bottom-right" />
      </div>
    </ErrorBoundary>
  );
}
