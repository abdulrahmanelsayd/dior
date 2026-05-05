"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(endTime: number): TimeLeft {
  const diff = Math.max(0, endTime - Date.now());
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export default function CountdownTimer({ className }: { className?: string }) {
  // Set end time to 24 hours from now, persisted in localStorage
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const STORAGE_KEY = "diora_offer_end";

    let endTime: number;
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      endTime = parseInt(stored, 10);
      if (endTime < Date.now()) {
        endTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, endTime.toString());
      }
    } else {
      endTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, endTime.toString());
    }

    setTimeLeft(getTimeLeft(endTime));
    setMounted(true);

    const interval = setInterval(() => {
      const remaining = getTimeLeft(endTime);
      setTimeLeft(remaining);
      if (remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`flex items-center gap-2 ${className || ''}`}>
      <div className="flex items-center gap-1">
        <span className="bg-brand-text text-white text-sm lg:text-base font-mono rounded-md px-2 py-1 min-w-[2.2rem] text-center">{pad(timeLeft.hours)}</span>
        <span className="text-brand-muted text-xs">:</span>
        <span className="bg-brand-text text-white text-sm lg:text-base font-mono rounded-md px-2 py-1 min-w-[2.2rem] text-center">{pad(timeLeft.minutes)}</span>
        <span className="text-brand-muted text-xs">:</span>
        <span className="bg-brand-text text-white text-sm lg:text-base font-mono rounded-md px-2 py-1 min-w-[2.2rem] text-center">{pad(timeLeft.seconds)}</span>
      </div>
      <span className="text-[10px] text-red-500 font-medium animate-pulse-soft">ينتهي العرض</span>
    </div>
  );
}
