import type { ReactNode } from "react";

// ── Shared Primitives ────────────────────────────────
export interface ChildrenProps {
  children: ReactNode;
}

export interface ClassNameProps {
  className?: string;
}

// ── UI Components ────────────────────────────────────
export type CountdownTimerProps = ClassNameProps;

export type MagneticProps = ChildrenProps;

export type SmoothScrollProps = ChildrenProps;

export type ScrollRevealProps = ChildrenProps & {
  animation?: "fade-up" | "fade-in" | "stagger";
  stagger?: number;
  duration?: number;
  delay?: number;
};

// ── Section Header ───────────────────────────────────
export interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

// ── Icon Mapping ─────────────────────────────────────
export interface IconMapValue {
  component: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export type IconMap = Record<string, IconMapValue>;
