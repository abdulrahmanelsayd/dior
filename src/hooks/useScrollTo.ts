import { useLenis } from "lenis/react";
import { useCallback } from "react";
import type { UseScrollToReturn } from "@/types/hooks";

const DEFAULT_OFFSET = -80;

export function useScrollTo(): UseScrollToReturn {
  const lenis = useLenis();

  const scrollTo = useCallback(
    (targetId: string, offset: number = DEFAULT_OFFSET) => {
      const el = document.getElementById(targetId);
      if (el && lenis) {
        lenis.scrollTo(el, { offset });
      }
    },
    [lenis]
  );

  return { scrollTo };
}
