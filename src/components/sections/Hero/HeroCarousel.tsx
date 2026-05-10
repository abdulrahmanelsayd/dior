"use client";

import Image from "next/image";
import { HERO_IMAGES } from "@/constants/hero";

export default function HeroCarousel() {
  const img = HERO_IMAGES[0];

  return (
    <div className="relative w-full aspect-video focus:outline-none">
      <picture>
        {img.mobileSrc && (
          <source media="(max-width: 767px)" srcSet={img.mobileSrc} />
        )}
        <source media="(min-width: 768px)" srcSet={img.src} />
        <Image
          src={img.mobileSrc || img.src}
          alt={img.alt}
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
      </picture>

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Order button */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 md:bottom-8">
        <button
          onClick={() => { const el = document.getElementById('shop-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
          className="group relative overflow-hidden rounded-full border border-brand-pink/40 bg-brand-pink/80 px-8 py-3 text-sm backdrop-blur-xl transition-all duration-500 hover:border-brand-accent/60 hover:bg-brand-pink hover:shadow-[0_0_40px_rgba(219,112,147,0.3)] hover:scale-105 md:px-10 md:py-4 md:text-base"
        >
          <span className="relative z-10 flex items-center gap-2 text-white md:gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-light md:text-[12px] md:tracking-[0.3em]">اطلبي الآن</span>
            <span className="w-px h-3 bg-white/30 md:h-4" />
            <span className="font-serif text-sm md:text-base">349 ج.م</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transition-transform duration-500 group-hover:-translate-x-1 md:h-4 md:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 5 5 12 12 19" /></svg>
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </button>
      </div>
    </div>
  );
}
