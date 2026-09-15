"use client";

import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms (e.g. 100, 200, 300 for stagger)
  threshold?: number; // intersection threshold 0-1, default 0.15
}

/**
 * ScrollReveal — lightweight IntersectionObserver-based reveal component.
 * No Framer Motion needed. Pure CSS transition triggered by class toggle.
 * 
 * Usage:
 * <ScrollReveal>
 *   <SectionHeading ... />
 * </ScrollReveal>
 * 
 * For staggered children:
 * <ScrollReveal delay={100}><Card /></ScrollReveal>
 * <ScrollReveal delay={200}><Card /></ScrollReveal>
 * <ScrollReveal delay={300}><Card /></ScrollReveal>
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay via style, then add revealed class
          setTimeout(() => {
            el.classList.add("scroll-revealed");
          }, delay);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}
