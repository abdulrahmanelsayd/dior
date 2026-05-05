"use client";

import { useState, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import Magnetic from './Magnetic';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky bar after scrolling down 800px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-700 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="bg-white/85 backdrop-blur-md border-t border-brand-pink/20 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
        <div className="container mx-auto px-6 lg:px-16 py-3 lg:py-4 flex flex-row items-center justify-between">
          
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-brand-text text-sm lg:text-base">كريم Check Out</span>
              <span className="text-[10px] lg:text-xs text-brand-muted">مبيض المناطق الحساسة بالمسك</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-brand-pink-dark text-lg sm:ml-4">350 ج.م</span>
              <span className="text-[9px] text-brand-muted line-through">450 ج.م</span>
            </div>
          </div>

          {/* Left Side (RTL) - Action */}
          <Magnetic>
          <button onClick={() => { const el = document.getElementById('order-form'); if (el && lenis) lenis.scrollTo(el, { offset: -80 }); }} className="bg-brand-pink-dark text-white rounded-full px-6 lg:px-10 py-2.5 text-xs lg:text-sm tracking-wide shadow-md hover:bg-brand-accent transition-colors">
            اطلبي الآن
          </button>
          </Magnetic>

        </div>
      </div>
    </div>
  );
}
