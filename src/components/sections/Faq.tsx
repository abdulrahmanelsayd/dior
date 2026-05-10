"use client";

import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import { FAQS } from '@/constants/faqs';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = containerRef.current?.children;
    if (elements) {
      gsap.fromTo(elements, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, { scope: sectionRef });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" ref={sectionRef} className="py-14 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl" ref={containerRef}>
        
        
        <div className="text-center mb-8 lg:mb-12 flex flex-col items-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-pink-dark/70 mb-1 font-semibold">
            الدعم والأسئلة
          </span>
          <div className="w-16 h-[2px] bg-gradient-to-l from-brand-accent to-brand-accent/20 rounded-full mb-2" />
          <h2 className="font-serif text-3xl lg:text-4xl text-brand-text mb-3">
            أسئلة شائعة
          </h2>
        </div>

        
        <div className="flex flex-col border-t border-brand-text/10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="border-b border-brand-text/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-right focus:outline-none group"
                >
                  <span className={`font-serif text-lg lg:text-xl transition-colors duration-300 ${isOpen ? 'text-brand-pink-dark' : 'text-brand-text group-hover:text-brand-pink-dark'}`}>
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0 text-brand-muted transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="w-5 h-5 font-light" strokeWidth={1.5}/>
                    ) : (
                      <Plus className="w-5 h-5 font-light" strokeWidth={1.5}/>
                    )}
                  </span>
                </button>
                
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-brand-muted text-sm lg:text-base leading-relaxed pr-2 lg:pr-4 max-w-3xl border-r-2 border-brand-pink/30">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
