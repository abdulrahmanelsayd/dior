"use client";

import { useState, useEffect, useCallback } from "react";
import { useLenis } from 'lenis/react';
import { NAV_LINKS } from "@/constants/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ctaText, setCtaText] = useState("اطلبي الآن");
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      const vh = window.innerHeight;
      if (y < vh * 1.5) setCtaText("اطلبي الآن");
      else if (y < vh * 4) setCtaText("خصم 22%");
      else if (y < vh * 6) setCtaText("350 ج.م");
      else setCtaText("اطلبي الآن");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((target: string) => {
    const el = document.getElementById(target);
    if (el && lenis) {
      lenis.scrollTo(el, { offset: -80 });
    }
    setMobileOpen(false);
  }, [lenis]);

  const ctaBg = scrolled ? "bg-white text-brand-accent" : "bg-brand-pink-dark/80 text-white backdrop-blur-sm border border-white/20";

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-brand-accent/90 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8 h-16">
        {/* Navigation Links - Left side in RTL */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="font-sans text-[13px] text-white/80 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center lg:hidden w-10 h-10"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </div>
        </button>

        {/* Logo */}
        <button onClick={() => lenis?.scrollTo(0)} className="absolute left-1/2 -translate-x-1/2">
          <span className="font-serif text-xl lg:text-2xl tracking-[0.15em] text-white">
            DIORA
          </span>
        </button>

        {/* CTA Button */}
        <button
          onClick={() => scrollTo("shop-section")}
          className={`rounded-full px-5 py-2 text-xs tracking-wide font-medium transition-all duration-300 hover:scale-105 ${ctaBg}`}
        >
          {ctaText}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-accent/95 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col items-center gap-5 py-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="font-sans text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("shop-section")}
              className="mt-2 rounded-full bg-white px-6 py-2.5 text-xs tracking-wide font-medium text-brand-accent transition-all hover:scale-105"
            >
              اطلبي الآن
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
