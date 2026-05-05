import type { AnimatedStats, TimeLeft, SocialProofToast } from "./data";

// ── useScrollTo ──────────────────────────────────────
export interface UseScrollToReturn {
  scrollTo: (targetId: string, offset?: number) => void;
}

// ── useScrollPosition ────────────────────────────────
export interface UseScrollPositionReturn {
  scrollY: number;
  isScrolled: boolean;
}

// ── useAnimatedStats ─────────────────────────────────
export interface UseAnimatedStatsReturn {
  statsRef: React.RefObject<HTMLDivElement | null>;
  animatedStats: AnimatedStats;
  statsVisible: boolean;
}

// ── useProductForm ───────────────────────────────────
export interface UseProductFormReturn {
  isSubmitted: boolean;
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

// ── useGovernorateSearch ─────────────────────────────
export interface UseGovernorateSearchReturn {
  govSearch: string;
  setGovSearch: React.Dispatch<React.SetStateAction<string>>;
  govDropdownOpen: boolean;
  setGovDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedGov: string;
  filteredGovernorates: string[];
  selectGovernorate: (gov: string) => void;
}

// ── useCarousel ──────────────────────────────────────
export interface UseCarouselReturn {
  current: number;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
}

// ── useCountdown ─────────────────────────────────────
export interface UseCountdownReturn {
  timeLeft: TimeLeft;
  mounted: boolean;
}

// ── useExitIntent ────────────────────────────────────
export interface UseExitIntentReturn {
  isOpen: boolean;
  handleClose: () => void;
}

// ── useSocialProof ───────────────────────────────────
export interface UseSocialProofReturn {
  toast: SocialProofToast | null;
  isVisible: boolean;
}
