"use client";

import React from "react";
import EditorialReveal from "@/components/ui/EditorialReveal";
import TornEdgeLight from "@/components/ui/TornEdgeLight";
import TornEdgeLightBottom from "@/components/ui/TornEdgeLightBottom";

export default function IntroSection() {
  return (
    <section
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] bg-[#FFFFFF] text-[#1A1A1A] flex flex-col justify-center py-20 sm:py-28"
      style={{
        zIndex: 20,
        backgroundImage: "url('/images/ui/white-wood-bg.png')",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Upward Torn Paper Edge on top of Kisan Dhara Feeds Section */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[98%] pointer-events-none z-10 w-full overflow-hidden leading-none">
        <TornEdgeLight
          fillColor="#FFFFFF"
          heightClass="h-16 sm:h-20 md:h-24"
          className="w-full"
        />
      </div>

      {/* Subtle background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display font-bold text-[#0D4B34]/[0.025] whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 18vw, 18rem)" }}
        >
          AMBAI INDUSTRIES
        </span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full mb-4 sm:mb-6">
        {/* Brand Editorial Heading & Story */}
        <div className="text-center max-w-3xl mx-auto">
          <EditorialReveal stagger={0.12} yOffset={24}>
            {/* Big chunky heading */}
            <h2
              className="font-display font-bold text-[#0D4B34] leading-tight mb-3 tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)" }}
            >
              AMBAI INDUSTRIES FEEDS
            </h2>

            {/* Subtitle in burgundy red */}
            <p className="font-display font-semibold text-[#8B1A1A] text-lg sm:text-xl mb-4 tracking-wide">
              100% Indian Grain · 100% Consistent Quality
            </p>

            {/* Red divider rule */}
            <span className="divider-burgundy mb-5" />

            {/* Description paragraphs */}
            <div className="space-y-3 font-body text-[#4A4A4A] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              <p>
                Our mill is family-owned and operated with decades of expertise in Indian cattle nutrition.
                We source maize, wheat, sorghum, and bran directly from trusted local mandis, ensuring
                freshness and consistency in every 50 kg bag.
              </p>

              <p>
                Our goal is to bring the most nutritious, affordable cattle feed directly
                from our manufacturing facility to your farm — supporting healthy herds and
                dependable daily milk yield.
              </p>
            </div>
          </EditorialReveal>
        </div>
      </div>

      {/* Downward Torn Paper Edge on bottom of Kisan Dhara Feeds Section */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[98%] pointer-events-none z-20 w-full overflow-hidden leading-none">
        <TornEdgeLightBottom
          fillColor="#FFFFFF"
          heightClass="h-16 sm:h-20 md:h-24"
          className="w-full"
        />
      </div>
    </section>
  );
}
