// ── GSAP Animation Config ────────────────────────────
export interface ScrollTriggerConfig {
  trigger?: HTMLElement | string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export interface RevealConfig {
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
  scrollTrigger?: ScrollTriggerConfig;
}

export interface LineDrawConfig {
  selector: string;
  duration?: number;
  delay?: number;
  ease?: string;
  scrollTrigger?: ScrollTriggerConfig;
}

export interface StaggerRevealConfig {
  selector: string;
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  scrollTrigger?: ScrollTriggerConfig;
}

// ── Animation Presets ────────────────────────────────
export interface AnimationPreset {
  duration: number;
  ease: string;
  stagger: number;
  scrollTriggerStart: string;
}

export interface AnimationPresets {
  default: AnimationPreset;
  lineDraw: Omit<AnimationPreset, "stagger"> & { delay: number };
  cardReveal: AnimationPreset;
  headerReveal: AnimationPreset;
  parallax: Omit<AnimationPreset, "stagger">;
}
