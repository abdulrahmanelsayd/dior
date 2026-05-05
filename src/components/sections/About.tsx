import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section
      id="about-section"
      className="py-24 px-8 lg:py-32 lg:px-16"
    >
      <ScrollReveal animation="stagger" stagger={0.15}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Image (appears on left in RTL) */}
          <div data-reveal className="py-24 lg:py-32 overflow-hidden rounded-2xl">
            <Image
              src="/assets/images/about-silk-jar.png"
              alt="DIORA product"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Column - Text (appears on right in RTL) */}
          <div className="flex flex-col justify-center gap-6">
            <p data-reveal className="font-sans text-sm uppercase tracking-widest text-brand-muted">
              عن ديورا
            </p>

            <h2 data-reveal className="font-serif text-4xl leading-tight text-brand-text lg:text-5xl">
              عناية صُممت خصيصاً لكِ
            </h2>

            <div data-line className="mt-5 w-24 h-[3px] origin-right bg-gradient-to-l from-brand-accent to-brand-accent/20 rounded-full" />

            <p data-reveal className="font-sans leading-relaxed text-brand-muted">
              ديورا ليست مجرد منتجات للعناية بالبشرة، إنها وعد بالراحة، العناية، والثقة المطلقة.
            </p>

            <p data-reveal className="font-sans leading-relaxed text-brand-muted">
              تركيباتنا مطورة خصيصاً لاحتضان البشرة الحساسة بمكونات لطيفة وفعالة تدعم إشراقتك الطبيعية.
            </p>

            <a
              data-reveal
              href="#shop-section"
              className="font-sans text-sm uppercase tracking-wider text-brand-text transition-colors duration-300 hover:text-brand-pink"
            >
              اطلبي الآن
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
