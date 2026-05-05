// ── Product ──────────────────────────────────────────
export interface ChecklistItem {
  text: string;
}

export interface ProductStat {
  key: string;
  value: number;
  label: string;
}

export interface AnimatedStats {
  brightening: number;
  softness: number;
  satisfaction: number;
}

// ── Hero ─────────────────────────────────────────────
export interface HeroImage {
  src: string;
  alt: string;
  mobileSrc?: string;
}

// ── Ingredients ──────────────────────────────────────
export interface IngredientShort {
  src: string;
  label: string;
}

export interface IngredientFull {
  src: string;
  title: string;
  subtitle: string;
  desc: string;
  benefits: string[];
}

// ── Features ─────────────────────────────────────────
export interface Feature {
  number: string;
  title: string;
  paragraph: string;
}

// ── Steps (HowToUse) ─────────────────────────────────
export interface Step {
  number: string;
  title: string;
  description: string;
  iconId: string;
}

// ── Reviews (Testimonials) ───────────────────────────
export interface Review {
  image: string;
  quote: string;
  name: string;
}

// ── FAQ ──────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer: string;
}

// ── Guarantee ────────────────────────────────────────
export interface GuaranteeItem {
  iconId: string;
  title: string;
  description: string;
}

// ── Navigation ───────────────────────────────────────
export interface NavLink {
  label: string;
  target: string;
}

// ── Social Proof ─────────────────────────────────────
export interface SocialProofToast {
  id: number;
  name: string;
  city: string;
  time: string;
}

// ── Governorate ──────────────────────────────────────
export type Governorate = string;

// ── Countdown ────────────────────────────────────────
export interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}
