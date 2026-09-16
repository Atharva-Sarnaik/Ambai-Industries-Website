"use client";

import React from "react";
import Image from "next/image";
import { rawMaterialsData } from "@/data/materials";
import EditorialReveal from "@/components/ui/EditorialReveal";
import TornEdgeLight from "@/components/ui/TornEdgeLight";
import TornEdgeLightBottom from "@/components/ui/TornEdgeLightBottom";
import CollageSlider from "@/components/ui/CollageSlider";

export default function RawMaterialsSection() {
  return (
    <div className="relative w-full md:-mt-[100vh]" style={{ zIndex: 50 }}>
      {/* Static Background Image: sticky at top: 0 behind the white header! */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/raw-materials/materials-spread.jpg"
          alt="Carefully selected raw ingredients"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Atmospheric dark contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
      </div>

      {/* ============================================================
          1. HEADER SECTION: FROM CAREFULLY SELECTED INGREDIENTS
          Full-width white section like AgriculturalIconsSection
          with top and bottom torn edges
      ============================================================ */}
      <div className="relative z-10" style={{ marginTop: "-100vh" }}>
        <section
          id="raw-materials-header"
          className="relative w-full min-h-screen bg-[#FFFFFF] text-[#1A1A1A] flex flex-col justify-center py-20 sm:py-28 overflow-visible"
          style={{
            zIndex: 10,
            backgroundImage: "url('/images/ui/white-wood-bg.png')",
            backgroundRepeat: "repeat",
          }}
        >
          {/* Top Torn Paper Edge peeling over Wheat Bran Product */}
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
              style={{ fontSize: "clamp(5rem, 16vw, 15rem)" }}
            >
              INGREDIENTS
            </span>
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center">
            <EditorialReveal yOffset={20}>
              <div className="inline-block bg-[#F5F0E8] px-6 py-2 rounded-full border border-[#D4C9B8] mb-4 shadow-sm">
                <span className="font-display font-bold text-xs text-[#0D4B34] tracking-widest uppercase">
                  TRANSPARENT INGREDIENT SOURCING
                </span>
              </div>
              <h2
                className="font-display font-bold text-[#0D4B34] leading-tight mb-2 tracking-tight"
                style={{ fontSize: "clamp(2rem, 3.6vw, 3.6rem)" }}
              >
                From Carefully Selected Ingredients
              </h2>
              <p className="font-display font-semibold text-[#8B1A1A] text-xl sm:text-2xl mb-4">
                काळजीपूर्वक निवडलेल्या कच्च्या मालापासून निर्मित
              </p>
              <p className="font-body text-[#4A4A4A] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                A superior cattle feed starts with wholesome, unadulterated raw grains. We screen, clean, and grade every batch before processing.
              </p>
            </EditorialReveal>
          </div>

          {/* Bottom Torn Paper Edge peeling away to reveal the static raw materials background below */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-[98%] pointer-events-none z-20 w-full overflow-hidden leading-none">
            <TornEdgeLightBottom
              fillColor="#FFFFFF"
              heightClass="h-16 sm:h-20 md:h-24"
              className="w-full"
            />
          </div>
        </section>
      </div>

      {/* ============================================================
          2. RAW MATERIALS SHOWCASE SEQUENCE
          Alternating items are transparent over this static background
      ============================================================ */}
      <div className="relative z-10 mt-16 sm:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-36 pb-24 sm:pb-48">
          {/* MOBILE VIEW: Collage Slider */}
          <div className="block lg:hidden">
            <EditorialReveal yOffset={24}>
              <CollageSlider
                variant="circle"
                slides={rawMaterialsData.map((material, index) => ({
                  id: material.id,
                  image: material.image,
                  tag: `INGREDIENT ${String(index + 1).padStart(2, "0")} · ${material.category}`,
                  title: material.name,
                  description: material.description,
                  details: [
                    { label: "Role in Feed", value: material.roleInFeed },
                    { label: "Quality Standard", value: material.selectionCriteria },
                  ],
                }))}
              />
            </EditorialReveal>
          </div>

          {/* PC VIEW: Original Alternating Layout */}
          <div className="hidden lg:block space-y-44">
            {rawMaterialsData.map((material, index) => {
              const isImageLeft = index % 2 === 0;

              return (
                <EditorialReveal key={material.id} yOffset={35}>
                  <div className="grid grid-cols-12 gap-14 items-center">
                    {/* Image Column */}
                    <div
                      className={`col-span-5 flex justify-center ${
                        isImageLeft ? "order-1" : "order-2"
                      }`}
                    >
                      <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
                        <Image
                          src={material.image}
                          alt={material.name}
                          fill
                          sizes="40vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold font-display bg-[#8B1A1A] text-white shadow-lg">
                            {material.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Column */}
                    <div
                      className={`col-span-7 space-y-5 text-left text-white ${
                        isImageLeft ? "order-2" : "order-1"
                      }`}
                    >
                      <div>
                        <span className="text-xs uppercase tracking-widest text-[#F5F0E8]/70 font-semibold font-body block mb-1.5">
                          INGREDIENT {String(index + 1).padStart(2, "0")} · {material.category}
                        </span>
                        <h3
                          className="font-display font-bold text-white leading-tight mb-1 drop-shadow-md tracking-tight"
                          style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)" }}
                        >
                          {material.name}
                        </h3>
                        <p className="font-display font-semibold text-[#DEAC4F] text-xl mb-3">
                          {material.localName}
                        </p>
                        <p className="font-body text-base text-white/90 leading-relaxed max-w-xl">
                          {material.description}
                        </p>
                      </div>

                      {/* 2 Translucent Glass Spec Badges: Role in Feed & Quality Standard */}
                      <div className="grid grid-cols-2 gap-3.5 pt-1 max-w-xl">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15 text-left">
                          <span className="font-display font-bold text-xs text-[#DEAC4F] uppercase tracking-wider block mb-1">
                            Role in Feed
                          </span>
                          <p className="font-body text-xs text-white/85 leading-relaxed">
                            {material.roleInFeed}
                          </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15 text-left">
                          <span className="font-display font-bold text-xs text-white uppercase tracking-wider block mb-1">
                            Quality Standard
                          </span>
                          <p className="font-body text-xs text-white/85 leading-relaxed">
                            {material.selectionCriteria}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </EditorialReveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================
          SCROLL TRANSITION BUFFER:
          Keeps materials-spread.jpg stuck at top: 0 while ProcessSection's
          white header sweeps upward over it.
      ============================================================ */}
      <div
        className="hidden md:block h-screen pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
