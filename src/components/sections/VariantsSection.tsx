"use client";

import React, { useState } from "react";
import { Sparkles, Check, ArrowRight, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { getWhatsAppEnquiryUrl } from "@/lib/whatsapp";
import EditorialReveal from "@/components/ui/EditorialReveal";
import OrganicSectionDivider from "@/components/ui/OrganicSectionDivider";

const variantTiers = [
  {
    id: "fine",
    name: "Fine Variant",
    tagline: "Standard Fine-Milled Daily Ration",
    summary:
      "A finely crushed particle formulation designed for easy ingestion and seamless blending into wet mash or dry fodder rations.",
    particleSize: "Fine to medium granules (< 2.5 mm)",
    recommendedUsage: "Daily maintenance feeding, mixing with green chaff, dry straw, and young stock preparations.",
    features: [
      "Smooth particle texture with minimal feed rejection",
      "Easily soaks in water or whey preparations",
      "Consistent daily energy and bulk contribution",
      "Economical daily ration solution for broad dairy operations"
    ],
    packaging: "50 kg Standard Woven Sacks",
  },
  {
    id: "deluxe",
    name: "Deluxe Variant",
    tagline: "Balanced Coarse Grain Blend",
    summary:
      "Formulated with an enhanced proportion of cracked energy kernels and selected fibrous flakes, promoting natural chewing and rumen salivation.",
    particleSize: "Coarse cracked kernels & broad flakes (2.5 mm – 4.5 mm)",
    recommendedUsage: "Lactating cows and milking buffaloes requiring balanced energy and dietary fiber support.",
    features: [
      "Optimal balance of coarse cracked maize and broad wheat bran",
      "Encourages natural cud chewing and healthy rumen pH",
      "Enhanced aroma and natural grain palatability",
      "Popular choice among commercial dairy farmers"
    ],
    packaging: "50 kg Heavy-Duty Poly-Woven Sacks",
  },
  {
    id: "super-deluxe",
    name: "Super Deluxe Variant",
    tagline: "Selected Heavy-Grain Premium Blend",
    summary:
      "Our premier manufacturing grade, featuring premium screened whole-grain fractions, high-density cracked maize, and broad-flake wheat bran.",
    particleSize: "Evenly graded coarse crumble & large flakes",
    recommendedUsage: "High-producing dairy herds, indigenous Gir/Sahiwal dairy units, and intensive milk production routines.",
    features: [
      "Highest proportion of dense, sound grain fractions",
      "Maximum purity and screening with minimal grain dust",
      "Superior intake response and nutritional density",
      "Preferred by progressive dairy farm owners and breeders"
    ],
    packaging: "50 kg Moisture-Resistant Multi-Wall Sacks",
  },
];

export default function VariantsSection() {
  const [activeTab, setActiveTab] = useState("deluxe");
  const selected = variantTiers.find((v) => v.id === activeTab) || variantTiers[1];

  return (
    <section className="pt-24 sm:pt-32 pb-0 bg-[#F5F0E8] border-t border-[#D5DED3] relative overflow-hidden paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditorialReveal>
          <SectionHeading
            eyebrow="MANUFACTURING GRADES"
            title="Understanding Product Variants"
            hindiTitle="विभिन्न वेरिएंट्स की जानकारी"
            description="We manufacture our cattle feed products in three distinct particle and formulation grades to match diverse feeding practices across Indian farms."
          />
        </EditorialReveal>

        {/* Tab Switcher */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-[#EDE7D9] border border-[#D4C9B8] shadow-inner">
            {variantTiers.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-display font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0D4B34] text-white shadow-md"
                      : "text-[#4A4A4A] hover:text-[#0D4B34]"
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Variant Card */}
        <div className="mt-10 mb-20 max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border border-[#D4C9B8] shadow-lg transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#D4C9B8]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8B1A1A] font-body font-semibold">
                Nutritional Profile Grade
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0D4B34] mt-0.5">
                {selected.name}
              </h3>
            </div>
            <span className="self-start sm:self-auto text-xs font-display font-semibold px-3 py-1 rounded-full bg-[#F5F0E8] text-[#0D4B34] border border-[#D4C9B8]">
              {selected.tagline}
            </span>
          </div>

          <div className="py-6 space-y-6">
            <p className="font-body text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
              {selected.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F5F0E8] p-4 rounded-xl border border-[#D4C9B8]">
                <span className="text-xs uppercase tracking-wider font-display font-semibold text-[#0D4B34] block mb-1">
                  Particle Granulation:
                </span>
                <span className="text-xs sm:text-sm text-[#4A4A4A]">
                  {selected.particleSize}
                </span>
              </div>

              <div className="bg-[#F5F0E8] p-4 rounded-xl border border-[#D4C9B8]">
                <span className="text-xs uppercase tracking-wider font-display font-semibold text-[#0D4B34] block mb-1">
                  Recommended Feeding Routine:
                </span>
                <span className="text-xs sm:text-sm text-[#4A4A4A]">
                  {selected.recommendedUsage}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <span className="text-xs uppercase tracking-wider font-display font-semibold text-[#0D4B34] block mb-3">
                Key Processing Characteristics:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selected.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1A1A1A]">
                    <Check className="w-4 h-4 text-[#8B1A1A] flex-shrink-0 mt-0.5" />
                    <span className="font-body">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#D4C9B8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-body text-xs text-[#4A4A4A]">
              <strong>Standard Packaging:</strong> {selected.packaging}
            </span>

            <a
              href={getWhatsAppEnquiryUrl("Cattle Feed", selected.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-bold text-white bg-[#0D4B34] hover:bg-[#1A6B4A] shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span>Enquire About {selected.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Organic Paper Edge: Variants -> Cattle Story */}
      <OrganicSectionDivider
        variant="torn-deckle"
        position="bottom"
        fillColor="#F5F0E8"
        secondaryFillColor="#EDE7D9"
        heightClass="h-10 sm:h-14"
      />
    </section>
  );
}
