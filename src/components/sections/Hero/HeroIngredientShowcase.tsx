"use client";

import Image from "next/image";
import { INGREDIENTS_SHORT } from "@/constants/ingredients";

export default function HeroIngredientShowcase() {
  return (
    <div className="absolute left-8 top-[30%] -translate-y-1/2 z-20 flex flex-col items-center gap-4 hero-animate">
      <div className="flex flex-col gap-3">
        {INGREDIENTS_SHORT.map((ing) => (
          <div key={ing.label} className="group relative flex flex-col items-center gap-1.5">
            <div className="relative h-20 w-20 rounded-full border-2 border-white/20 bg-white/10 p-1.5 backdrop-blur-md transition-all duration-500 hover:border-brand-pink/50 hover:bg-white/20 hover:shadow-[0_0_24px_rgba(230,139,190,0.25)]">
              <Image
                src={ing.src}
                alt={ing.label}
                fill
                sizes="80px"
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-[10px] uppercase tracking-[0.15em] text-white/70 transition-colors duration-300 group-hover:text-white/90">{ing.label}</span>
          </div>
        ))}
      </div>
      <div className="w-px h-4 bg-white/20" />
      <p className="text-center text-[11px] leading-relaxed text-white/60 max-w-[100px]">
        مكونات طبيعية.<br />تركيبة مطورة.
      </p>
    </div>
  );
}
