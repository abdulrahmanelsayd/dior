"use client";

import { useRef, useState, useCallback } from "react";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="text-xs uppercase tracking-widest text-brand-muted">قبل</span>
        <span className="text-[10px] text-brand-pink-dark">← اسحبي →</span>
        <span className="text-xs uppercase tracking-widest text-brand-muted">بعد</span>
      </div>

      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none shadow-lg bg-brand-bg"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* After image (full width behind) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/after-result.png"
          alt="بعد الاستخدام"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-y-0 right-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/before-result.png"
            alt="قبل الاستخدام"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)] -translate-x-1/2 z-10"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-pink-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded-full z-20">قبل</span>
        <span className="absolute top-4 left-4 bg-brand-pink-dark/80 backdrop-blur-sm text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded-full z-20">بعد</span>
      </div>

      <p className="text-center text-[10px] text-brand-muted mt-3">نتائج حقيقية بعد 14 يوم من الاستخدام المنتظم</p>
    </div>
  );
}
