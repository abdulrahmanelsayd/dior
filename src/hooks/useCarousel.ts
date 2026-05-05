import { useState, useCallback } from "react";
import { HERO_IMAGES } from "@/constants/hero";
import type { UseCarouselReturn } from "@/types/hooks";

export function useCarousel(): UseCarouselReturn {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  return { current, goTo, goNext, goPrev };
}
