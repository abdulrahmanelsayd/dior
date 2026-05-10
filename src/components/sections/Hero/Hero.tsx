"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = containerRef.current?.querySelectorAll(
      ".hero-animate"
    );
    if (!elements) return;

    gsap.from(elements, {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power2.out",
    });

    if (lineRef.current) {
      gsap.from(lineRef.current, {
        scaleX: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden">
      <HeroCarousel />
    </section>
  );
}
