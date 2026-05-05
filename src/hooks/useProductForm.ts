import { useState, useCallback } from "react";
import type { UseProductFormReturn } from "@/types/hooks";

const SUBMISSION_DELAY = 1500;

export function useProductForm(): UseProductFormReturn {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, SUBMISSION_DELAY);
  }, []);

  return { isSubmitted, isSubmitting, handleSubmit };
}
