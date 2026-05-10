"use client";

import { useRef } from "react";

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <footer ref={sectionRef}>
      {/* Newsletter Section */}
      <div className="bg-brand-accent py-24">
        <div className="container mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">
            الثقة تبدأ بالعناية
          </p>
          <p className="text-sm text-white mb-10 leading-relaxed">
            انضمي لعائلة ديورا للحصول على عروض حصرية ونصائح لروتينك اليومي.
          </p>
          <form className="flex w-full flex-col justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full border border-white/30 bg-white/10 px-6 py-4 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none sm:w-80 rounded-sm"
              required
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-white px-10 py-4 text-sm text-brand-accent tracking-wider transition-all duration-300 hover:bg-brand-bg rounded-sm"
            >
              اشتركي الآن
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-brand-accent pb-6 pt-6">
        <div className="container mx-auto flex flex-col items-center gap-2 px-6 text-xs text-white/50 md:flex-row md:justify-between">
          <span>© 2026 Diora Beauty. جميع الحقوق محفوظة.</span>
          <span>صُمم بعناية لثقتك.</span>
        </div>
      </div>
    </footer>
  );
}
