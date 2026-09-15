"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollDrivenContentProps {
  children: React.ReactNode;
  travelDistance?: number; // default 40px
  className?: string;
}

export default function ScrollDrivenContent({
  children,
  travelDistance = 40,
  className = "",
}: ScrollDrivenContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Content enters with slight upward travel and gently continues upward as next section covers it
      gsap.fromTo(
        ref.current,
        {
          y: travelDistance,
          opacity: 0.85,
        },
        {
          y: -travelDistance * 0.7,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            end: "bottom 15%",
            scrub: 0.5,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [travelDistance]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
