"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { ScrollRevealProps } from "@/types/components";

export default function ScrollReveal({
  children,
  animation = "fade-up",
  stagger = 0.15,
  duration = 1,
  delay = 0,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    const selector =
      animation === "stagger"
        ? el.children
        : el.querySelectorAll("[data-reveal]");

    if (!selector || (selector as NodeList).length === 0) return;

    const config: gsap.TweenVars = {
      y: animation === "fade-in" ? 0 : 30,
      opacity: 0,
      duration,
      stagger: animation === "stagger" ? stagger : 0,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    };

    gsap.from(selector, config);

    // Also animate the line draws inside
    const lines = el.querySelectorAll("[data-line]");
    if (lines.length > 0) {
      gsap.from(lines, {
        scaleX: 0,
        duration: 1.4,
        delay: delay + 0.5,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    }
  }, { scope: containerRef });

  return <div ref={containerRef}>{children}</div>;
}
