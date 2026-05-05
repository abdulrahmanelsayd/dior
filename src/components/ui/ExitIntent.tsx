"use client";

import { useState, useEffect, useCallback } from "react";

export default function ExitIntent() {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !dismissed && !sessionStorage.getItem("diora_exit_shown")) {
      setIsOpen(true);
      sessionStorage.setItem("diora_exit_shown", "1");
    }
  }, [dismissed]);

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const handleClose = () => {
    setIsOpen(false);
    setDismissed(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 p-8 lg:p-10 text-center relative animate-fade-up">
        <button
          onClick={handleClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center text-brand-muted hover:text-brand-text transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-brand-pink/20 flex items-center justify-center">
          <span className="text-3xl">💖</span>
        </div>

        <h3 className="font-serif text-2xl text-brand-text mb-3">استني!</h3>
        <p className="text-brand-muted text-sm leading-relaxed mb-6">
          قبل ما تروحي — خدي خصم <span className="text-brand-pink-dark font-bold">30%</span> على كريم Check Out.
          <br />
          العرض ده للعميلات الجدد بس.
        </p>

        <a
          href="#shop-section"
          onClick={handleClose}
          className="inline-block bg-brand-pink-dark text-white rounded-full px-8 py-3.5 text-sm tracking-wide font-medium shadow-md transition-all duration-300 hover:bg-brand-accent hover:scale-105 hover:shadow-lg mb-4"
        >
          هاخد الخصم — اطلبي الآن
        </a>

        <button
          onClick={handleClose}
          className="block mx-auto text-xs text-brand-muted/60 hover:text-brand-muted transition-colors mt-2"
        >
          لا شكراً، هفوت الفرصة
        </button>
      </div>
    </div>
  );
}
