import { useRef, useState, useEffect } from "react";
import { PRODUCT_STATS, STATS_ANIMATION_DURATION } from "@/constants/product";
import type { UseAnimatedStatsReturn } from "@/types/hooks";
import type { AnimatedStats } from "@/types/data";

const INITIAL_STATS: AnimatedStats = { brightening: 0, softness: 0, satisfaction: 0 };

export function useAnimatedStats(): UseAnimatedStatsReturn {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<AnimatedStats>(INITIAL_STATS);
  const rafIdRef = useRef<number>(0);

  // IntersectionObserver to detect when stats section is visible
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [statsVisible]);

  // Animate stats when visible
  useEffect(() => {
    if (!statsVisible) return;

    const targets: Record<string, number> = {};
    PRODUCT_STATS.forEach((stat) => {
      targets[stat.key] = stat.value;
    });

    const duration = STATS_ANIMATION_DURATION;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        brightening: Math.round((targets.brightening ?? 0) * eased),
        softness: Math.round((targets.softness ?? 0) * eased),
        satisfaction: Math.round((targets.satisfaction ?? 0) * eased),
      });

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animate);
      }
    }

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [statsVisible]);

  return { statsRef, animatedStats, statsVisible };
}
