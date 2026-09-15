"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface OrganicMaskedRevealProps {
  children: React.ReactNode;
  sheetColor?: string; // Default whitewash '#F5F0E8'
  className?: string;
  triggerHook?: string; // e.g. "top 75%"
}

export default function OrganicMaskedReveal({
  children,
  sheetColor = "#F5F0E8",
  className = "",
  triggerHook = "top 75%",
}: OrganicMaskedRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sheetRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      if (sheetRef.current) {
        sheetRef.current.style.display = "none";
      }
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sheetRef.current,
        { yPercent: 0 },
        {
          yPercent: -115,
          duration: 1.4,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerHook,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [triggerHook]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Content to be revealed (e.g. image) */}
      {children}

      {/* Covering paper sheet with organic torn bottom edge */}
      <div
        ref={sheetRef}
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-full pointer-events-none z-20 will-change-transform flex flex-col"
        style={{ transform: "translateY(0%)" }}
      >
        {/* Solid paper sheet body */}
        <div
          className="w-full flex-grow"
          style={{ backgroundColor: sheetColor }}
        />

        {/* Handcrafted irregular torn edge at bottom of sheet */}
        <div className="w-full relative -mt-[1px] leading-none overflow-hidden">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-16 block"
          >
            <path
              d="M0,0 L0,45 
                 C50,55 90,38 140,52 
                 C190,66 230,42 280,58 
                 C330,74 380,48 430,62 
                 C480,76 530,44 580,56 
                 C630,68 680,36 730,52 
                 C780,68 830,40 880,58 
                 C930,76 980,48 1030,64 
                 C1080,80 1130,46 1180,54 
                 C1230,62 1280,38 1330,50 
                 C1370,60 1410,42 1440,48 
                 L1440,0 Z"
              fill={sheetColor}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
