"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useAnimatedStats } from "@/hooks/useAnimatedStats";
import ProductShowcase from "./ProductShowcase";
import OrderForm from "./OrderForm";
import LossFraming from "./LossFraming";

export default function ProductDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { statsRef, animatedStats, statsVisible } = useAnimatedStats();

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Text stagger from right
    const textElements = textRef.current?.querySelectorAll(".product-animate");
    if (textElements) {
      gsap.from(textElements, {
        x: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    }

    // Line draw
    if (lineRef.current) {
      gsap.from(lineRef.current, {
        scaleX: 0,
        duration: 1.4,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    }

    // Image fade + scale up
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      id="shop-section"
      ref={sectionRef}
      className="py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <ProductShowcase
          textRef={textRef}
          lineRef={lineRef}
          imageRef={imageRef}
          animatedStats={animatedStats}
          statsVisible={statsVisible}
          statsRef={statsRef}
        />
        <OrderForm />
        <LossFraming />
      </div>
    </section>
  );
}
