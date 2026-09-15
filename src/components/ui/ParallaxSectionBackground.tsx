"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParallaxSectionBackgroundProps {
  src: string;
  alt: string;
  priority?: boolean;
  speed?: number; // 0.1 to 0.6 (default ~0.3)
  overlayClassName?: string;
  className?: string;
}

export default function ParallaxSectionBackground({
  src,
  alt,
  priority = false,
  speed = 0.3,
  overlayClassName = "bg-black/40",
  className = "",
}: ParallaxSectionBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Disable parallax for users who prefer reduced motion or on small mobile viewports
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile) {
      return;
    }

    const container = containerRef.current;
    const imageLayer = imageLayerRef.current;
    if (!container || !imageLayer) return;

    // Headroom percentage based on speed
    const yShiftPercent = Math.min(25, Math.max(8, speed * 50));

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageLayer,
        {
          yPercent: -yShiftPercent,
        },
        {
          yPercent: yShiftPercent,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Parallax layer with extra vertical headroom to prevent letterboxing */}
      <div
        ref={imageLayerRef}
        className="absolute -top-[20%] -bottom-[20%] left-0 right-0 w-full h-[140%] will-change-transform"
        style={{ willChange: "transform" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Lighting / Vignette Overlay */}
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
    </div>
  );
}
