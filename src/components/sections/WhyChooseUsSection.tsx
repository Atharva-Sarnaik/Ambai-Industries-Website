"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import EditorialReveal from "@/components/ui/EditorialReveal";
import TornEdgeLight from "@/components/ui/TornEdgeLight";
import TornEdgeLightBottom from "@/components/ui/TornEdgeLightBottom";
import CollageSlider from "@/components/ui/CollageSlider";
import DoubleCollageSlider from "@/components/ui/DoubleCollageSlider";

interface PrincipleItem {
  id: string;
  tag: string;
  title: string;
  hindiTitle: string;
  description: string;
  image: string;
  standard: string;
  farmerBenefit: string;
}

const principles: PrincipleItem[] = [
  {
    id: "01",
    tag: "Process Consistency",
    title: "Consistent Manufacturing",
    hindiTitle: "सातत्यपूर्ण आणि प्रमाणित उत्पादन",
    description:
      "A structured approach to dependable feed production. Standard operating controls ensure every batch maintains identical particle granulation and blending uniformity.",
    image: "/images/manufacturing/facility-interior.jpg",
    standard: "Batch-Level Recipe Lock",
    farmerBenefit: "Stable Daily Milk Yield",
  },
  {
    id: "02",
    tag: "Unadulterated Grains",
    title: "Selected Ingredients",
    hindiTitle: "पारदर्शक आणि शुद्ध कच्चा माल",
    description:
      "Direct attention to the grains entering our mill. Sourced from verified mandis and screened for moisture, physical cleanliness, and wholesome whole-grain density.",
    image: "/images/raw-materials/wholesome-wheat.jpg",
    standard: "Direct Mandi Procurement",
    farmerBenefit: "Zero Synthetic Fillers",
  },
  {
    id: "03",
    tag: "Targeted Nutrition",
    title: "Product Variety & Grades",
    hindiTitle: "विविध गरजेनुसार ग्रेड्स",
    description:
      "Multiple feed formulations with distinct particle variants tailored to match various dairy herd sizes, feeding habits, and operational budgets.",
    image: "/images/products/maize-feed.jpg",
    standard: "Fine · Deluxe · Super Options",
    farmerBenefit: "Energy for Desi & Crossbred",
  },
  {
    id: "04",
    tag: "Punctual Dispatch",
    title: "Reliable Supply",
    hindiTitle: "विश्वसनीय पुरवठा आणि सुरक्षित पॅकिंग",
    description:
      "Serving feed distributors, retail counters, and dairy owners with punctual dispatch in secure 50 kg multi-wall sacks.",
    image: "/images/manufacturing/bagging-line.jpg",
    standard: "Multi-Wall Poly Sacks",
    farmerBenefit: "Fresh Mill-Direct Dispatch",
  },
];

export default function WhyChooseUsSection() {
  return (
    <div className="relative w-full md:-mt-[100vh]" style={{ zIndex: 70 }}>
      {/* Sticky Background Image: Clear dairy farm barn scene behind white header */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/farmers/dairy-partnership-bg.jpg"
          alt="Indian Dairy Farm Shed with Gir Cows"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Subtle clear contrast scrim (clear background, not total green) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
      </div>

      {/* ============================================================
          1. HEADER SECTION: OUR FOUNDATION
          Full-width white wood texture section with deckle edges
      ============================================================ */}
      <div className="relative z-10" style={{ marginTop: "-100vh" }}>
        <section
          id="why-choose-us-header"
          className="relative w-full min-h-screen bg-[#FFFFFF] text-[#1A1A1A] flex flex-col justify-center py-20 sm:py-28 overflow-visible"
          style={{
            zIndex: 10,
            backgroundImage: "url('/images/ui/white-wood-bg.png')",
            backgroundRepeat: "repeat",
          }}
        >
          {/* Top Torn Paper Edge peeling over Manufacturing Section */}
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
              FOUNDATION
            </span>
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center">
            <EditorialReveal yOffset={20}>
              <div className="inline-block bg-[#F5F0E8] px-6 py-2 rounded-full border border-[#D4C9B8] mb-4 shadow-sm">
                <span className="font-display font-bold text-xs text-[#0D4B34] tracking-widest uppercase">
                  OUR FOUNDATION
                </span>
              </div>
              <h2
                className="font-display font-bold text-[#0D4B34] leading-tight mb-2 tracking-tight"
                style={{ fontSize: "clamp(2rem, 3.6vw, 3.6rem)" }}
              >
                Why Cattle Owners & Dealers Partner with Us
              </h2>
              <p className="font-display font-semibold text-[#8B1A1A] text-xl sm:text-2xl mb-4">
                आमच्यासोबत भागीदारी करण्याची मुख्य कारणे
              </p>
              <p className="font-body text-[#4A4A4A] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Built on transparent manufacturing practices, dependable raw material selection, and long-term commercial integrity with Indian dairy farmers.
              </p>
            </EditorialReveal>
          </div>

          {/* Bottom Torn Paper Edge peeling away to reveal the static dairy background below */}
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
          2. CORE PRINCIPLES SHOWCASE
      ============================================================ */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-36 pb-24 sm:pb-48">
          
          {/* MOBILE VIEW */}
          <div className="block lg:hidden">
            <EditorialReveal yOffset={24}>
              <CollageSlider 
                slides={principles.map(item => ({
                  id: item.id,
                  image: item.image,
                  tag: `PILLAR ${item.id} · ${item.tag}`,
                  title: item.title,
                  description: item.description,
                  details: [
                    { label: "Standard", value: item.standard },
                    { label: "Benefit", value: item.farmerBenefit },
                  ],
                }))} 
              />
            </EditorialReveal>
          </div>

          {/* PC VIEW */}
          <div className="hidden lg:block">
            <EditorialReveal yOffset={24}>
              <DoubleCollageSlider 
                slides={principles.map(item => ({
                  id: item.id,
                  image: item.image,
                  tag: `PILLAR ${item.id} · ${item.tag}`,
                  title: item.title,
                  description: item.description,
                  details: [
                    { label: "Standard", value: item.standard },
                    { label: "Benefit", value: item.farmerBenefit },
                  ],
                }))} 
              />
            </EditorialReveal>
          </div>

        </div>
      </div>

      {/* ============================================================
          SCROLL TRANSITION BUFFER:
          Keeps dairy-partnership-bg.jpg stuck at top: 0 while CtaSection's
          white header sweeps upward over it.
      ============================================================ */}
      <div
        className="hidden md:block h-screen pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
