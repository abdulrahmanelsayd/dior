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
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
    });

    if (lineRef.current) {
      gsap.from(lineRef.current, {
        scaleX: 0,
        duration: 1.4,
        delay: 0.6,
        ease: "power3.out",
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden">
      <HeroCarousel />
    </section>
  );
}
