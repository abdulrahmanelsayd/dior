"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { INGREDIENTS_FULL } from "@/constants/ingredients";

export default function Ingredients() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
      },
    });

    if (lineRef.current) {
      tl.from(lineRef.current, {
        scaleX: 0,
        duration: 1.6,
        ease: "power3.out",
      }, 0);
    }

    tl.from(".ing-heading", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, 0.2);

    tl.from(".ing-sub", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    }, 0.5);

    tl.from(".ing-card", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.25,
      ease: "power3.out",
    }, 0.4);

    tl.from(".ing-ornament", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)",
    }, 0.8);
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="ingredients-section"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      {/* Soft radial glow behind cards */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-pink/8 blur-[120px]" />

      <div className="container relative mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center lg:mb-14">
          <div className="ing-ornament mb-3 flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-accent/40" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-brand-muted">
              Natural Ingredients
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-brand-accent/40" />
          </div>

          <h2 className="ing-heading font-serif text-3xl leading-snug text-brand-text lg:text-4xl">
            مكونات طبيعية.
            <span className="block text-brand-accent">تركيبة مطورة.</span>
          </h2>

          <div
            ref={lineRef}
            className="mt-4 h-[2px] w-24 origin-center bg-gradient-to-r from-transparent via-brand-accent to-transparent rounded-full"
          />

          <p className="ing-sub mt-4 max-w-md text-xs leading-relaxed text-brand-muted">
            أعشاب وزهور الطبيعة — خالي من المواد الكيميائية الضارة
          </p>
        </div>

        {/* Circles */}
        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory no-scrollbar items-center justify-start gap-10 md:flex-row md:overflow-x-visible md:snap-none md:justify-center md:gap-16 lg:gap-20">
          {INGREDIENTS_FULL.map((ing, i) => (
            <div
              key={ing.subtitle}
              className="ing-card group flex min-w-[85vw] snap-center flex-shrink-0 flex-col items-center gap-4 md:min-w-0"
            >
              {/* Circle image */}
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-brand-pink/20 p-1 transition-all duration-700 group-hover:border-brand-pink/60 group-hover:shadow-[0_0_40px_rgba(230,139,190,0.2)] lg:h-56 lg:w-56">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={ing.src}
                    alt={ing.subtitle}
                    fill
                    sizes="(max-width: 768px) 192px, 224px"
                    className="object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110"
                  />
                </div>
                {/* Pink tint on hover */}
                <div className="absolute inset-0 rounded-full bg-brand-pink/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg leading-snug text-brand-text text-center lg:text-xl">
                {ing.title}
              </h3>

              {/* Description */}
              <p className="max-w-[240px] text-xs leading-relaxed text-brand-muted text-center lg:text-sm">
                {ing.desc}
              </p>

              {/* Benefits */}
              <ul className="mt-2 flex flex-col gap-1.5">
                {ing.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-[11px] text-brand-muted lg:text-xs">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-brand-pink" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom ornament */}
        <div className="ing-ornament mt-10 flex items-center justify-center gap-2 lg:mt-14">
          <span className="h-px w-8 bg-brand-accent/20" />
          <span className="text-[9px] uppercase tracking-[0.4em] text-brand-muted/50">
            ✦
          </span>
          <span className="h-px w-8 bg-brand-accent/20" />
        </div>
      </div>
    </section>
  );
}
