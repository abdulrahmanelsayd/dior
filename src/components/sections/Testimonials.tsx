import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { REVIEWS, RATING_VALUE, RATING_COUNT } from "@/constants/reviews";

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-brand-pink"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <ScrollReveal animation="stagger" stagger={0.15}>
          {/* Section Header */}
          <div data-reveal className="mb-16 flex flex-col items-center text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-muted/70 mb-2">
              قصص حقيقية. ثقة حقيقية.
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-l from-brand-accent to-brand-accent/20 rounded-full mb-4" />
            <h2 className="font-serif text-3xl text-brand-text lg:text-4xl">
              محبوب من الآلاف
            </h2>
            {/* Rating Summary */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-brand-pink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-brand-muted">{RATING_VALUE} من 5 — بناءً على {RATING_COUNT} تقييم</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {REVIEWS.map((review, index) => (
              <div
                key={index}
                data-reveal
                className="relative h-64 overflow-hidden rounded-xl p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col justify-between lg:h-72"
              >
                <Image
                  src={review.image}
                  alt="Review background"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/5" />
                <div className="relative z-10 flex h-full flex-col">
                  <Stars />
                  <p className="mt-auto mb-4 font-serif text-base leading-relaxed text-white/90 lg:text-lg">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <span className="text-xs tracking-wider text-white/60">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
