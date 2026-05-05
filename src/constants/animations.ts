import type { AnimationPresets } from "@/types/animation";

export const ANIMATION_PRESETS: AnimationPresets = {
  default: {
    duration: 1,
    ease: "power3.out",
    stagger: 0.15,
    scrollTriggerStart: "top 80%",
  },
  lineDraw: {
    duration: 1.4,
    ease: "power3.out",
    delay: 0.5,
    scrollTriggerStart: "top 80%",
  },
  cardReveal: {
    duration: 1,
    ease: "back.out(1.2)",
    stagger: 0.15,
    scrollTriggerStart: "top 80%",
  },
  headerReveal: {
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.12,
    scrollTriggerStart: "top 80%",
  },
  parallax: {
    duration: 1,
    ease: "none",
    scrollTriggerStart: "top bottom",
  },
};
