import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeUp, MaskedLines } from "./Reveal";

const FAQS = [
  {
    q: "Apa itu Jastipsy?",
    a: "Jastipsy adalah jasa titip (jastip) untuk membeli tiket event yang penuh perang — konser, festival, event olahraga, dan lainnya. Kamu titip, kami yang bertarung di jam penjualan.",
  },
  {
    q: "Bagaimana cara pesannya?",
    a: "Paling gampang langsung DM Instagram @jastipsy, atau isi form pesanan di halaman ini. Tim kami akan lanjutkan via DM untuk konfirmasi detail dan biaya.",
  },
  {
    q: "Berapa biaya jasanya?",
    a: "Fee disesuaikan dengan event, kategori tiket, dan level kesusahannya. Rincian lengkapnya kami kirim transparan lewat DM sebelum kamu lanjut — tanpa biaya tersembunyi.",
  },
  {
    q: "Apakah tiketnya dijamin dapat?",
    a: "Kami pakai strategi antrian yang teruji dan rencana cadangan di setiap war. Kalau di luar dugaan tiket tidak berhasil didapat, kabar ini kami sampaikan langsung dan transparan ke kamu.",
  },
  {
    q: "Kapan sebaiknya saya pesan?",
    a: "Segera setelah pengumuman event. Slot jastip dibatasi per jadwal war supaya setiap pesanan dapat perhatian penuh — makin cepat, makin aman.",
  },
  {
    q: "Apakah tiketnya atas nama saya?",
    a: "Ya. Pembelian dilakukan lewat kanal resmi event, dan e-tiket diteruskan langsung ke kamu untuk di-claim atas namamu sendiri.",
  },
];

export default function Faq() {
  return (
    <section id="faq" data-testid="faq-section" className="border-t border-white/10 bg-void py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <FadeUp y={16} className="mb-5 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyber">FAQ</span>
            <span className="h-px w-12 bg-cyber/50" />
          </FadeUp>
          <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
            <MaskedLines inView lines={[<span key="1">Yang sering</span>, <span key="2" className="text-outline">ditanyakan</span>]} />
          </h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="border-t border-white/10">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-white/10">
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="py-6 text-left font-display text-lg uppercase tracking-wide text-white no-underline transition-colors duration-200 hover:no-underline hover:text-cyber md:text-xl [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-cyber"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-zinc-400 md:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
