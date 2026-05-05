"use client";

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      document.body.style.cursor = 'none';

      const cursor = cursorRef.current;
      if (!cursor) return;

      const onMouseMove = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.15,
          ease: "power2.out"
        });
      };

      const handleHover = () => {
        gsap.to(cursor, { scale: 1.3, duration: 0.25, ease: "back.out(1.7)" });
      };

      const handleHoverOut = () => {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      };

      window.addEventListener('mousemove', onMouseMove);

      const interactiveElements = document.querySelectorAll('a, button, input, [role="button"], [data-cursor="pointer"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleHoverOut);
      });

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleHover);
          el.removeEventListener('mouseleave', handleHoverOut);
        });
      };
    }
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-6 h-6"
      >
        <path d="M6.75 4.5a1.25 1.25 0 0 1 2.5 0v6a.75.75 0 0 0 1.5 0V6a1.25 1.25 0 0 1 2.5 0v7.5a.75.75 0 0 0 1.5 0V7.5a1.25 1.25 0 0 1 2.5 0v7.22c.84-.33 1.72-.52 2.5-.52 1.17 0 2.01.43 2.5 1.06.43.56.38 1.26-.1 1.74l-2.77 2.77a5.26 5.26 0 0 1-3.73 1.54H11.5a5.26 5.26 0 0 1-3.73-1.54L5.16 17.1A2.25 2.25 0 0 1 4.5 15.5V6.75a1.25 1.25 0 0 1 2.5 0V10a.75.75 0 0 0 1.5 0V4.5h.25Z" />
      </svg>
    </div>
  );
}
