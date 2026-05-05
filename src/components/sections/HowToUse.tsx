"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { STEPS } from "@/constants/steps";
import { Icon } from "@/components/shared";

export default function HowToUse() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
    });

    tl.from(".howto-header", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    });

    if (lineRef.current) {
      tl.from(lineRef.current, {
        scaleX: 0,
        duration: 1.4,
        ease: "power3.out",
      }, "-=0.6");
    }

    tl.from(".howto-step", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.2,
      ease: "power3.out",
    }, "-=0.5");
  }, { scope: sectionRef });

  return (
    <section id="howto-section" ref={sectionRef} className="py-24 px-8 lg:py-32 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="howto-header text-sm uppercase tracking-widest text-brand-muted mb-4">
            سهلة الاستخدام
          </p>
          <h2 className="howto-header font-serif text-3xl text-brand-text lg:text-4xl">
            ٣ خطوات فقط لثقتك
          </h2>
          <div ref={lineRef} className="mt-5 w-24 h-[3px] mx-auto origin-right bg-gradient-to-l from-brand-accent to-brand-accent/20 rounded-full" />
        </div>

        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 lg:flex-row lg:overflow-x-visible lg:snap-none lg:gap-12">
          {STEPS.map((step, index) => {
              return (
            <div
              key={step.number}
              className="howto-step min-w-[85vw] snap-center flex-shrink-0 text-center lg:min-w-0 lg:flex-1"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-brand-pink/15 flex items-center justify-center">
                <Icon iconId={step.iconId} className="h-7 w-7 text-brand-pink-dark" strokeWidth={1.5} />
              </div>
              <span className="font-serif text-4xl text-brand-pink/30 block mb-2">{step.number}</span>
              <h3 className="font-serif text-xl text-brand-text mb-2">{step.title}</h3>
              <p className="font-sans text-sm text-brand-muted leading-relaxed max-w-[240px] mx-auto">{step.description}</p>
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block mt-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-pink/30 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
