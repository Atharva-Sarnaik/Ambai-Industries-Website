"use client";

import React from "react";
import Image from "next/image";
import EditorialReveal from "@/components/ui/EditorialReveal";
import TornEdgeLight from "@/components/ui/TornEdgeLight";

export default function PastureSceneSection() {
  return (
    <section
      className="pin-panel relative w-full h-screen overflow-hidden bg-[#0A2A1E] text-white flex flex-col justify-end pb-0"
      style={{ zIndex: 25 }}
    >
      {/* Full-bleed Pasture / Cows photograph pinned in background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/cattle/gir-cattle-pasture.jpg"
          alt="Purebred Indian Gir cattle grazing in green pasture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Subtle natural vignetting & contrast enhancement */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/30" />
      </div>

      {/* Minimal Editorial Badge / Caption */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full text-center mb-6 sm:mb-8">
        <EditorialReveal yOffset={20}>
          <div className="inline-block bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 shadow-2xl">
            <p className="font-display font-medium text-xs sm:text-sm text-[#F5F0E8] tracking-wider uppercase">
              Indigenous Gir Cattle · Dairy Nutrition Sourced from Indian Soil
            </p>
          </div>
        </EditorialReveal>
      </div>

      {/* Bottom Torn Edge Light */}
      <div className="relative z-10 w-full">
        <TornEdgeLight
          fillColor="#F5F0E8"
          secondaryFillColor="#E2D8C3"
          heightClass="h-20 sm:h-24 md:h-28"
          className="w-full"
        />
      </div>
    </section>
  );
}
