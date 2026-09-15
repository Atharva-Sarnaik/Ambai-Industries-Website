"use client";

import React from "react";
import Image from "next/image";
import IntroSection from "@/components/sections/IntroSection";
import AgriculturalIconsSection from "@/components/sections/AgriculturalIconsSection";

export default function PastureCowsSequence() {
  return (
    <div className="relative w-full z-30">
      {/* 1. STUCK COWS IMAGE IN BACKGROUND */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/cattle/gir-cattle-pasture.jpg"
          alt="Purebred Indian Gir cattle grazing in lush rural pasture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Subtle natural vignetting & contrast enhancement */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/25" />

        {/* Minimal Editorial Badge / Caption at bottom of cows image */}
        <div className="absolute bottom-8 left-0 right-0 z-10 text-center px-4">
          <div className="inline-block bg-black/45 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 shadow-2xl">
            <p className="font-display font-medium text-xs sm:text-sm text-[#F5F0E8] tracking-wider uppercase">
              Indigenous Gir Cattle · Dairy Nutrition Sourced from Indian Soil
            </p>
          </div>
        </div>
      </div>

      {/* 2. SECTION 1: KISAN DHARA FEEDS (extended upward to meet HeroSection directly with zero cow image gap) */}
      <div className="relative z-10" style={{ marginTop: "-100vh" }}>
        <IntroSection />
      </div>

      {/* 3. EXPOSURE GAP: Window size for optimal pasture view */}
      <div className="relative z-0 h-[85vh] sm:h-[95vh] pointer-events-none" />

      {/* 4. SECTION 2: 100% INDIAN GRAIN & ICONS (scrolls over the stuck cows image with full deckle edges) */}
      <div className="relative z-10">
        <AgriculturalIconsSection />
      </div>
    </div>
  );
}
