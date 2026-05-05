"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const s = sectionRef.current;
    if (!s) return;

    [line1Ref, line2Ref, line3Ref, line4Ref].forEach((ref, i) => {
      if (ref.current) {
        gsap.from(ref.current, {
          scaleX: 0,
          duration: 1.4,
          delay: 0.2 + i * 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: s, start: "top 85%" },
        });
      }
    });
  }, { scope: sectionRef });

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

      {/* Footer Navigation */}
      <div className="bg-brand-accent pb-12 pt-10">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-6 text-sm md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <span className="font-serif text-3xl tracking-[0.2em] text-white block mb-1">
              DIORA
            </span>
            <span className="text-[10px] tracking-[0.4em] text-white/70 block mb-6">
              B E A U T Y
            </span>
            <p className="text-white/70">عناية خاصة. ثقة تامة.</p>
          </div>

          {/* Shop Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 font-semibold tracking-wide text-white">تسوق</h4>
            <div ref={line1Ref} className="w-16 h-[2px] origin-right bg-gradient-to-l from-white/60 to-transparent rounded-full mb-6" />
            <ul className="flex flex-col gap-4 text-white/70">
              <li><a href="#">المنتجات</a></li>
              <li><a href="#">كريم Check Out</a></li>
              <li><a href="#">المجموعات</a></li>
            </ul>
          </div>

          {/* About Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 font-semibold tracking-wide text-white">عن ديورا</h4>
            <div ref={line2Ref} className="w-16 h-[2px] origin-right bg-gradient-to-l from-white/60 to-transparent rounded-full mb-6" />
            <ul className="flex flex-col gap-4 text-white/70">
              <li><a href="#">فلسفتنا</a></li>
              <li><a href="#">المكونات</a></li>
              <li><a href="#">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 font-semibold tracking-wide text-white">الدعم</h4>
            <div ref={line3Ref} className="w-16 h-[2px] origin-right bg-gradient-to-l from-white/60 to-transparent rounded-full mb-6" />
            <ul className="flex flex-col gap-4 text-white/70">
              <li><a href="#">تواصل معنا</a></li>
              <li><a href="#">الشحن والاسترجاع</a></li>
              <li><a href="#">الشروط والأحكام</a></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 font-semibold tracking-wide text-white">تابعونا</h4>
            <div ref={line4Ref} className="w-16 h-[2px] origin-right bg-gradient-to-l from-white/60 to-transparent rounded-full mb-6" />
            <div className="flex gap-5">
              {/* Instagram */}
              <svg className="h-5 w-5 cursor-pointer text-white/70 transition-colors hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              {/* Facebook */}
              <svg className="h-5 w-5 cursor-pointer text-white/70 transition-colors hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              {/* Twitter/X */}
              <svg className="h-5 w-5 cursor-pointer text-white/70 transition-colors hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="container mx-auto mt-16 flex flex-col items-center gap-4 border-t border-white/15 px-6 pt-8 text-xs text-white/50 md:flex-row md:justify-between">
          <span>© 2026 Diora Beauty. جميع الحقوق محفوظة.</span>
          <span>صُمم بعناية لثقتك.</span>
        </div>
      </div>
    </footer>
  );
}
