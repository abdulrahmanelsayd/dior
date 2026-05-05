"use client";

import { useCallback } from "react";
import Image from "next/image";
import { useCarousel } from "@/hooks/useCarousel";
import { HERO_IMAGES } from "@/constants/hero";

export default function HeroCarousel() {
  const { current, goTo, goNext, goPrev } = useCarousel();

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        goPrev();
        break;
      case "ArrowRight":
        e.preventDefault();
        goNext();
        break;
    }
  }, [goPrev, goNext]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero image carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative w-full aspect-video focus:outline-none"
    >
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img.src}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${HERO_IMAGES.length}`}
          className="absolute inset-0"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="100vw"
            priority={i === 0}
            className={`object-cover object-center transition-all duration-[1500ms] ease-in-out ${i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          />
        </div>
      ))}

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Prev / Next arrows */}
      <button
        onClick={goPrev}
        className="absolute left-4 bottom-[35%] z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/70 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/40"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/70 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/40"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      {/* Dot indicators + Order button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6">
        <button
          onClick={() => { const el = document.getElementById('shop-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
          className="group relative overflow-hidden rounded-full border border-brand-pink/40 bg-brand-pink/80 px-10 py-4 backdrop-blur-xl transition-all duration-500 hover:border-brand-accent/60 hover:bg-brand-pink hover:shadow-[0_0_40px_rgba(219,112,147,0.3)] hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-3 text-white">
            <span className="text-[12px] uppercase tracking-[0.3em] font-light">اطلبي الآن</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="font-serif text-base">350 ج.م</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 5 5 12 12 19" /></svg>
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </button>

        <div className="flex items-center gap-3" role="tablist" aria-label="Slide navigation">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              role="tab"
              onClick={() => goTo(i)}
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
