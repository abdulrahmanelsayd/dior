"use client";

import { useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useLenis } from 'lenis/react';

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const handleCTA = useCallback(() => {
    const el = document.getElementById('shop-section');
    if (el && lenis) lenis.scrollTo(el, { offset: -80 });
  }, [lenis]);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.from(".final-cta-animate", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-brand-accent">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <p className="final-cta-animate text-xs uppercase tracking-widest text-white/70 mb-2">
          جاهية للفرق؟
        </p>
        <h2 className="final-cta-animate font-serif text-3xl lg:text-5xl text-white mb-2 leading-tight">
          بشرة أفتح. ثقة أكبر. رائحة أنقى.
        </h2>
        <p className="final-cta-animate text-white/70 text-sm lg:text-base mb-5 max-w-md mx-auto">
          ابدأي رحلتك مع Check Out اليوم — تفتيح وترطيب وتعطير بالمسك الأبيض أو استرجاع مجاني.
        </p>
        <button
          onClick={handleCTA}
          className="final-cta-animate inline-block bg-white text-brand-text border border-brand-text/10 rounded-full px-10 py-4 text-sm tracking-wide font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          اطلبي الآن — 350 ج.م
        </button>
      </div>
    </section>
  );
}
