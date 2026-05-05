"use client";

import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from '@/lib/gsap';

export default function Magnetic({ children }: { children: ReactNode }) {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = magnetic.current;
    if (!element) return;

    // Only activate on devices with a fine pointer (mouse), skip touch devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // Use GSAP quickTo for highly performant animations tracking the mouse
    const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();

      // Calculate distance from center of element
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Move element (intensity can be adjusted via multiplier)
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      // Return to original position
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={magnetic} className="inline-block">
      {children}
    </div>
  );
}
