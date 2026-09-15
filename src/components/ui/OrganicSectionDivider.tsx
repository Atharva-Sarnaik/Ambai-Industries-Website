"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type OrganicDividerVariant =
  | "torn-deckle"
  | "rolling-pasture"
  | "torn-layered"
  | "subtle-crest";

interface OrganicSectionDividerProps {
  variant?: OrganicDividerVariant;
  position?: "top" | "bottom";
  fillColor: string;
  secondaryFillColor?: string;
  flipX?: boolean;
  parallax?: boolean;
  className?: string;
  heightClass?: string;
}

export default function OrganicSectionDivider({
  variant = "torn-deckle",
  position = "bottom",
  fillColor,
  secondaryFillColor,
  flipX = false,
  parallax = false,
  className = "",
  heightClass = "h-14 sm:h-20 md:h-24",
}: OrganicSectionDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax || !containerRef.current) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { yPercent: position === "bottom" ? -10 : 10 },
        {
          yPercent: position === "bottom" ? 10 : -10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [parallax, position]);

  const isTop = position === "top";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none select-none pointer-events-none z-10 ${
        isTop ? "relative -mb-[1px]" : "relative -mt-[1px]"
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full block ${heightClass} ${flipX ? "-scale-x-100" : ""} ${
          isTop ? "-scale-y-100" : ""
        }`}
      >
        {/* VARIANT 1: Torn Deckle — micro-irregularities, natural physical paper teeth and asymmetrical dips */}
        {variant === "torn-deckle" && (
          <>
            {secondaryFillColor && (
              <path
                d="M0,120 L0,55 Q50,48 110,58 T240,49 Q330,62 420,44 T580,56 Q690,38 780,52 T940,42 Q1050,60 1160,46 T1310,54 Q1390,44 1440,50 L1440,120 Z"
                fill={secondaryFillColor}
                opacity={0.35}
              />
            )}
            <path
              d="M0,120 L0,68 
                 C35,66 70,72 105,64 
                 C140,56 175,69 210,61 
                 C250,52 285,46 325,50 
                 C365,54 400,66 440,62 
                 C480,58 515,44 555,42 
                 C595,40 630,55 670,51 
                 C710,47 745,35 785,38 
                 C825,41 860,56 900,53 
                 C940,50 975,41 1015,44 
                 C1055,47 1090,62 1130,59 
                 C1170,56 1205,43 1245,45 
                 C1285,47 1320,60 1360,57 
                 C1400,54 1425,62 1440,59 
                 L1440,120 Z"
              fill={fillColor}
            />
          </>
        )}

        {/* VARIANT 2: Rolling Pasture — asymmetrical gentle rolling hills with organic hand-drawn crests */}
        {variant === "rolling-pasture" && (
          <>
            {secondaryFillColor && (
              <path
                d="M0,120 L0,70 C180,95 340,35 520,60 C700,85 880,30 1060,55 C1240,80 1360,45 1440,65 L1440,120 Z"
                fill={secondaryFillColor}
                opacity={0.3}
              />
            )}
            <path
              d="M0,120 L0,78 
                 C140,105 260,48 410,68 
                 C560,88 680,38 840,58 
                 C1000,78 1140,42 1290,62 
                 C1370,72 1415,55 1440,60 
                 L1440,120 Z"
              fill={fillColor}
            />
          </>
        )}

        {/* VARIANT 3: Torn Layered — two physical paper layers overlapping with slight shadow depth */}
        {variant === "torn-layered" && (
          <>
            <path
              d="M0,120 L0,50 
                 C80,62 160,38 250,54 
                 C340,70 430,42 520,58 
                 C610,74 710,46 800,60 
                 C890,74 990,44 1080,56 
                 C1170,68 1270,40 1360,54 
                 C1400,60 1425,52 1440,54 
                 L1440,120 Z"
              fill={secondaryFillColor || fillColor}
              opacity={secondaryFillColor ? 1 : 0.4}
            />
            <path
              d="M0,120 L0,66 
                 C70,74 150,52 230,68 
                 C310,84 400,58 480,72 
                 C560,86 650,60 740,74 
                 C830,88 920,62 1010,76 
                 C1100,90 1200,64 1290,78 
                 C1360,88 1410,72 1440,74 
                 L1440,120 Z"
              fill={fillColor}
            />
          </>
        )}

        {/* VARIANT 4: Subtle Crest — gentle asymmetrical elevation with handcrafted micro-variation */}
        {variant === "subtle-crest" && (
          <path
            d="M0,120 L0,84 
               C110,72 230,92 350,80 
               C470,68 590,94 710,78 
               C830,62 950,90 1070,76 
               C1190,62 1310,86 1440,74 
               L1440,120 Z"
            fill={fillColor}
          />
        )}
      </svg>
    </div>
  );
}
