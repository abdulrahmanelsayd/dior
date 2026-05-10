"use client";

import Image from "next/image";
import { CHECKLIST_ITEMS, PRODUCT_ORIGINAL_PRICE } from "@/constants/product";
import CountdownTimer from "@/components/ui/CountdownTimer";
import type { AnimatedStats } from "@/types/data";

interface ProductShowcaseProps {
  textRef: React.RefObject<HTMLDivElement | null>;
  lineRef: React.RefObject<HTMLDivElement | null>;
  imageRef: React.RefObject<HTMLDivElement | null>;
  animatedStats: AnimatedStats;
  statsVisible: boolean;
  statsRef: React.RefObject<HTMLDivElement | null>;
}

export default function ProductShowcase({
  textRef,
  lineRef,
  imageRef,
  animatedStats,
  statsVisible,
  statsRef,
}: ProductShowcaseProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
      {/* Right Column - Text (appears on right in RTL) */}
      <div ref={textRef} className="flex flex-col items-start">
        <p className="product-animate text-sm uppercase tracking-[0.25em] text-brand-muted/70 mb-1">
          منتجنا الأساسي
        </p>
        <div className="w-16 h-[2px] bg-gradient-to-l from-brand-accent to-brand-accent/20 rounded-full mb-2" />
        <h2 className="product-animate font-serif text-4xl text-brand-text tracking-wide lg:text-5xl">
          كريم Check Out
        </h2>
        <div ref={lineRef} className="mt-3 mb-4 w-24 h-[3px] origin-right bg-gradient-to-l from-brand-accent to-brand-accent/20 rounded-full" />
        <p className="product-animate text-lg text-brand-muted mb-4">
          مبيض المناطق الحساسة بالمسك الأبيض
        </p>
        <ul className="mb-8 flex flex-col gap-3">
          {CHECKLIST_ITEMS.map((item) => (
            <li key={item.text} className="product-animate flex items-center gap-3">
              <svg
                className="h-5 w-5 shrink-0 text-brand-pink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-sm text-brand-muted">{item.text}</span>
            </li>
          ))}
        </ul>

        <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-8 pb-4 border-b border-brand-text/10 w-full max-w-md">
          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-2xl text-brand-pink-dark">{statsVisible ? animatedStats.brightening : 0}%</span>
            <span className="text-[10px] text-brand-muted uppercase tracking-wider mt-1">تفتيح ملحوظ</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-2xl text-brand-pink-dark">{statsVisible ? animatedStats.softness : 0}%</span>
            <span className="text-[10px] text-brand-muted uppercase tracking-wider mt-1">نعومة فائقة</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-2xl text-brand-pink-dark">{statsVisible ? animatedStats.satisfaction : 0}%</span>
            <span className="text-[10px] text-brand-muted uppercase tracking-wider mt-1">رضا العملاء</span>
          </div>
        </div>

        {/* Price + Urgency */}
        <div className="product-animate flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl text-brand-text">349 ج.م</span>
            <span className="text-[10px] text-brand-muted line-through">{PRODUCT_ORIGINAL_PRICE}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-[10px] text-red-600 font-medium">
            <span className="animate-pulse-soft h-1.5 w-1.5 rounded-full bg-red-500" />
            خصم 22%
          </div>
        </div>

        <CountdownTimer className="product-animate mb-4" />

      </div>

      {/* Left Column - Image (appears on left in RTL) */}
      <div
        ref={imageRef}
        className="relative mx-auto aspect-square w-full"
      >
        <Image
          src="/assets/images/product-checkout-isolated.png"
          fill
          sizes="50vw"
          className="object-contain drop-shadow-2xl"
          alt="كريم Check Out"
        />
      </div>
    </div>
  );
}
