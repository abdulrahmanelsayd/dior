"use client";

import { useState, useEffect, useCallback } from "react";
import {
  SOCIAL_PROOF_NAMES,
  SOCIAL_PROOF_CITIES,
  SOCIAL_PROOF_TIME_AGO,
  SOCIAL_PROOF_INITIAL_DELAY,
  SOCIAL_PROOF_MIN_INTERVAL,
  SOCIAL_PROOF_MAX_INTERVAL,
  SOCIAL_PROOF_DISPLAY_DURATION,
} from "@/constants/social-proof";

interface Toast {
  id: number;
  name: string;
  city: string;
  time: string;
}

let toastId = 0;

export default function SocialProofToast() {
  const [toast, setToast] = useState<Toast | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showToast = useCallback(() => {
    const newToast: Toast = {
      id: ++toastId,
      name: SOCIAL_PROOF_NAMES[Math.floor(Math.random() * SOCIAL_PROOF_NAMES.length)],
      city: SOCIAL_PROOF_CITIES[Math.floor(Math.random() * SOCIAL_PROOF_CITIES.length)],
      time: SOCIAL_PROOF_TIME_AGO[Math.floor(Math.random() * SOCIAL_PROOF_TIME_AGO.length)],
    };

    setToast(newToast);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, SOCIAL_PROOF_DISPLAY_DURATION);
  }, []);

  useEffect(() => {
    // First toast after initial delay
    const initialTimer = setTimeout(() => {
      showToast();
    }, SOCIAL_PROOF_INITIAL_DELAY);

    // Then at variable intervals using recursive setTimeout
    let timeoutId: ReturnType<typeof setTimeout>;
    const scheduleNext = () => {
      const delay = SOCIAL_PROOF_MIN_INTERVAL + Math.random() * (SOCIAL_PROOF_MAX_INTERVAL - SOCIAL_PROOF_MIN_INTERVAL);
      timeoutId = setTimeout(() => {
        showToast();
        scheduleNext();
      }, delay);
    };
    scheduleNext();

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeoutId);
    };
  }, [showToast]);

  if (!toast) return null;

  return (
    <div
      className={`fixed bottom-24 right-4 lg:right-8 z-40 transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"
      }`}
    >
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-brand-pink/20 px-5 py-4 flex items-center gap-3 max-w-[280px]">
        <div className="w-10 h-10 rounded-full bg-brand-pink/20 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-pink-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-medium text-brand-text">
            {toast.name} من {toast.city}
          </p>
          <p className="text-[10px] text-brand-muted">
            طلبت كريم Check Out {toast.time}
          </p>
        </div>
      </div>
    </div>
  );
}
