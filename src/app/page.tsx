import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import PastureCowsSequence from "@/components/sections/PastureCowsSequence";
import ProductsStickyShowcase from "@/components/sections/ProductsStickyShowcase";
import RawMaterialsSection from "@/components/sections/RawMaterialsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CtaSection from "@/components/sections/CtaSection";
import PinnedScrollManager from "@/components/ui/PinnedScrollManager";

export default function HomePage() {
  return (
    <>
      {/* GSAP ScrollTrigger Pinned Panel Manager */}
      <PinnedScrollManager />

      {/* Panel 1: Hero Mill Scene with Video */}
      <HeroSection videoSrc="/videos/ambai-hero.mp4" />

      {/* Sequence: Stuck Cows Image with both Kisan Dhara Feeds and 100% Indian Grain sections scrolling over it */}
      <PastureCowsSequence />

      {/* Products Showcase: Maize Feed & Wheat Bran each with static background and scrolling description */}
      <ProductsStickyShowcase />

      {/* Raw Grains & Ingredient Sourcing (z-50) */}
      <RawMaterialsSection />

      {/* Controlled Manufacturing Sequence (z-60) */}
      <ProcessSection />

      {/* Operational Principles & Farmer Support (z-70) */}
      <WhyChooseUsSection />

      {/* Panoramic Countryside CTA & Commercial Desk (z-80) */}
      <CtaSection />
    </>
  );
}
