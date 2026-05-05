"use client";

import { ReactLenis, useLenis } from 'lenis/react';
import { ReactNode, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

function LenisGSAPSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);
    ScrollTrigger.refresh();
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.07, duration: 1.2, smoothWheel: true }}
    >
      <LenisGSAPSync />
      {children}
    </ReactLenis>
  );
}
