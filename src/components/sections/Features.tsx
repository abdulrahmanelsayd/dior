"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { FEATURES } from "@/constants/features";

export default function Features() {
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

    // Image slides in from right with scale
    tl.from(".features-image", {
      x: 80,
      opacity: 0,
      scale: 1.05,
      duration: 1.4,
      ease: "power3.out",
    });

    // Line draw
    if (lineRef.current) {
      tl.from(lineRef.current, {
        scaleX: 0,
        duration: 1.4,
        ease: "power3.out",
      }, "-=0.6");
    }

    // Header elements fade up
    tl.from(".features-header", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    }, "-=0.8");

    // Feature items stagger in elegantly
    tl.from(".features-item", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.18,
      ease: "power3.out",
    }, "-=0.5");

    // Subtle parallax on the image
    gsap.to(".features-image", {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      id="features-section"
      ref={sectionRef}
      className="py-24 px-8 lg:py-32 lg:px-16 overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Right Column - Image (appears on right in RTL) */}
        <div className="features-image overflow-hidden rounded-2xl lg:order-2">
          <Image
            src="/assets/images/features-bg-with-jarr.png"
            alt="DIORA product features"
            width={800}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Left Column - Stacked Text (appears on left in RTL) */}
        <div className="flex flex-col lg:order-1">
          <p className="features-header font-sans text-sm uppercase tracking-widest text-brand-muted mb-4">
            من DIORA
          </p>
          <h2 className="features-header font-serif text-3xl leading-tight text-brand-text mb-4 lg:text-5xl">
            الأكثر شهرة لتفتيح المناطق الحساسة
          </h2>

          <div ref={lineRef} className="w-24 h-[3px] origin-right bg-gradient-to-l from-brand-accent to-brand-accent/20 rounded-full mb-12" />

          <div className="flex flex-col divide-y divide-brand-text/10">
            {FEATURES.map((feature) => (
              <div
                key={feature.number}
                className="features-item flex gap-6 py-8 first:pt-0 last:pb-0"
              >
                <span className="font-serif text-2xl text-brand-pink shrink-0">
                  {feature.number}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl text-brand-text">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-brand-muted">
                    {feature.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
