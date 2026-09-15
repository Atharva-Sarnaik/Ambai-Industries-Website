"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface EditorialRevealProps {
  children: React.ReactNode;
  delay?: number; // In seconds (e.g. 0.1)
  stagger?: number; // In seconds (e.g. 0.08)
  yOffset?: number; // default 28px
  duration?: number; // default 0.85s
  useBlur?: boolean; // subtle initial 4px blur
  className?: string;
  triggerHook?: string; // default "top 85%"
}

export default function EditorialReveal({
  children,
  delay = 0,
  stagger = 0.08,
  yOffset = 28,
  duration = 0.85,
  useBlur = true,
  className = "",
  triggerHook = "top 85%",
}: EditorialRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const elements = containerRef.current.children;
    if (!elements || elements.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: yOffset,
          filter: useBlur ? "blur(4px)" : "none",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration,
          delay,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerHook,
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, stagger, yOffset, duration, useBlur, triggerHook]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
