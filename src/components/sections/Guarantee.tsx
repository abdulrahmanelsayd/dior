"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { GUARANTEES } from "@/constants/guarantees";
import { Icon } from "@/components/shared";

export default function Guarantee() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.from(".guarantee-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-10 px-6 lg:py-14 lg:px-12 bg-brand-bg/50">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-brand-muted mb-2">مفيش أي مخاطرة</p>
          <h2 className="font-serif text-2xl lg:text-3xl text-brand-text">
            ضماننا لكي: فلوسك أو النتيجة
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {GUARANTEES.map((item) => {
              return (
            <div
              key={item.title}
              className="guarantee-item flex-1 bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-brand-pink/15 flex items-center justify-center">
                <Icon iconId={item.iconId} className="w-5 h-5 text-brand-pink-dark" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-brand-text mb-2">{item.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{item.description}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
