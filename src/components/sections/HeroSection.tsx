"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { companyData } from "@/data/company";
import EditorialReveal from "@/components/ui/EditorialReveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroSectionProps {
  videoSrc?: string;
}

export default function HeroSection({ videoSrc }: HeroSectionProps) {
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isMobile || prefersReducedMotion || !heroContentRef.current) return;

    const ctx = gsap.context(() => {
      // Fade out opacity to 0 as hero content approaches sticky header bottom edge
      gsap.to(heroContentRef.current, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top",
          end: "+=260",
          scrub: true,
        },
      });
    }, heroSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroSectionRef}
      className="relative w-full h-screen overflow-hidden bg-[#0A3828] text-white flex flex-col justify-between z-10"
    >
      {/* Background Media: Looping video if provided, otherwise high-res photograph */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            src={videoSrc}
            className="w-full h-full object-cover object-center scale-[1.20] origin-[30%_30%]"
          />
        ) : (
          <Image
            src="/images/hero/hero-mill.jpg"
            alt={`${companyData.name} Cattle Feed Manufacturing Mill`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
        )}
      </div>

      {/* Top spacer */}
      <div className="h-16" />

      {/* Hero Content: Centered editorial headline with fade-out under header */}
      <div
        ref={heroContentRef}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto my-auto py-8 will-change-transform"
      >
        <EditorialReveal delay={0.15} stagger={0.12} yOffset={28}>
          {/* Large chunky headline */}
          <h1
            className="font-display font-black text-white leading-tight mb-4 drop-shadow-md tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 7.5vw, 5.2rem)" }}
          >
            From Our Mill,
            <br />
            To Your Herd
          </h1>

          {/* Subtitle */}
          <p
            className="font-display font-medium text-white/95 mb-0 max-w-2xl mx-auto drop-shadow-sm tracking-wide"
            style={{ fontSize: "clamp(1.1rem, 2.8vw, 1.5rem)" }}
          >
            Quality Cattle Feed. Honest Ingredients. Dependable Supply.
          </p>

        </EditorialReveal>
      </div>

      {/* Bottom Area: Scroll Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center pb-8 sm:pb-10">
        <div className="flex flex-col items-center gap-1.5 opacity-80 select-none pointer-events-none">
          <span className="font-body text-[10px] uppercase tracking-widest text-white/80 font-semibold">
            Scroll Down
          </span>
          <div className="w-4 h-7 rounded-full border border-white/60 flex items-start justify-center pt-1">
            <div className="w-1 h-1.5 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
