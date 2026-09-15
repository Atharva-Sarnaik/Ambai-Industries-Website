"use client";

import React from "react";
import EditorialReveal from "@/components/ui/EditorialReveal";
import TornEdgeLight from "@/components/ui/TornEdgeLight";
import TornEdgeLightBottom from "@/components/ui/TornEdgeLightBottom";

export default function AgriculturalIconsSection() {
  return (
    <section
      id="agricultural-icons-section"
      className="relative w-full min-h-screen bg-[#FFFFFF] text-[#1A1A1A] flex flex-col justify-center py-20 sm:py-28 overflow-visible"
      style={{
        zIndex: 10,
        backgroundImage: "url('/images/ui/white-wood-bg.png')",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Leading Torn Paper Edge scrolling up over the Cows image */}
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
          style={{ fontSize: "clamp(6rem, 20vw, 18rem)" }}
        >
          PURITY
        </span>
      </div>

      {/* Content Container: 3 Agricultural Feature Icons */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full my-auto">
        <EditorialReveal stagger={0.14} yOffset={28}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 text-center">
            {/* 1. 100% Indian Grain (Cow icon) */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 text-[#8B1A1A]">
                <svg viewBox="0 0 64 64" className="w-14 h-14" fill="currentColor">
                  {/* Stylized cow/cattle silhouette */}
                  <path d="M52 24c0-2-1-3-3-3h-4c-1-3-3-5-6-5h-8c-2 0-4 1-5 3-2-1-4-1-6 0l-4-2c-1-1-3 0-3 1v2c-2 1-3 3-3 5v8c0 2 1 4 3 5v14c0 1 1 2 2 2h4c1 0 2-1 2-2v-12h12v12c0 1 1 2 2 2h4c1 0 2-1 2-2V40c2-1 3-3 3-5v-3c2-1 3-2 3-4v-4zm-34 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-6 2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm32 8c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-6h24v6z" />
                  <circle cx="16" cy="22" r="2" fill="#FAF6EE" />
                  <circle cx="48" cy="22" r="2" fill="#FAF6EE" />
                </svg>
              </div>
              <h3
                className="font-display font-bold text-[#0D4B34] text-xl sm:text-2xl mb-2"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)" }}
              >
                100% Indian Grain
              </h3>
              <p className="font-body text-[#4A4A4A] text-xs sm:text-sm leading-relaxed max-w-xs">
                Sourced directly from verified farmers and agricultural mandis. Zero synthetic filler.
              </p>
            </div>

            {/* 2. Our Own Mill (Barn/facility icon) */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 text-[#8B1A1A]">
                <svg viewBox="0 0 64 64" className="w-14 h-14" fill="currentColor">
                  {/* Stylized barn/mill silhouette */}
                  <path d="M32 8L10 24v32h14V40h16v16h14V24L32 8zm-2 20h-8v-8h8v8zm12 0h-8v-8h8v8z" />
                  <rect x="22" y="22" width="6" height="6" fill="#FAF6EE" />
                  <rect x="36" y="22" width="6" height="6" fill="#FAF6EE" />
                </svg>
              </div>
              <h3
                className="font-display font-bold text-[#0D4B34] text-xl sm:text-2xl mb-2"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)" }}
              >
                Our Own Mill
              </h3>
              <p className="font-body text-[#4A4A4A] text-xs sm:text-sm leading-relaxed max-w-xs">
                Equipped milling and blending facility with automated batch controls for consistent sizing.
              </p>
            </div>

            {/* 3. Locally Operated (Tractor/farm icon) */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 text-[#8B1A1A]">
                <svg viewBox="0 0 64 64" className="w-14 h-14" fill="currentColor">
                  {/* Stylized tractor silhouette */}
                  <path d="M48 28h-8v-8c0-2.2-1.8-4-4-4h-8c-2.2 0-4 1.8-4 4v4h-6c-2.2 0-4 1.8-4 4v8h4c0-4.4 3.6-8 8-8s8 3.6 8 8h6c1.1-6.9 7.1-12 14-12 7.7 0 14 6.3 14 14s-6.3 14-14 14c-4.3 0-8.2-2-10.7-5.1L33 49c-.6.6-1.4 1-2.3 1H18c-1.1 0-2-.9-2-2v-4h-4v8c0 1.1.9 2 2 2h2c1.1 3.5 4.3 6 8.1 6 4.7 0 8.5-3.8 8.5-8.5v-.5h4.6c2.4 4.2 6.9 7 12.1 7 7.7 0 14-6.3 14-14s-6.3-14-14-14zm-20-8h6v8h-6v-8zm-6 24c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm26 10c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z" />
                  <circle cx="48" cy="44" r="5" fill="#FAF6EE" />
                </svg>
              </div>
              <h3
                className="font-display font-bold text-[#0D4B34] text-xl sm:text-2xl mb-2"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)" }}
              >
                Locally Operated
              </h3>
              <p className="font-body text-[#4A4A4A] text-xs sm:text-sm leading-relaxed max-w-xs">
                Family-owned operation serving dairy farmers with transparent pricing and punctual dispatch.
              </p>
            </div>
          </div>
        </EditorialReveal>
      </div>

      {/* Trailing Torn Paper Bottom Edge peeling away to reveal the Product Background */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[98%] pointer-events-none z-10 w-full overflow-hidden leading-none">
        <TornEdgeLightBottom
          fillColor="#FFFFFF"
          heightClass="h-16 sm:h-20 md:h-24"
          className="w-full"
        />
      </div>
    </section>
  );
}
