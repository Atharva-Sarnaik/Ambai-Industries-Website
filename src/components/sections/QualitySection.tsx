"use client";

import React from "react";
import { CheckCircle, Scale, Eye, ThermometerSun, FileCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import EditorialReveal from "@/components/ui/EditorialReveal";
import OrganicSectionDivider from "@/components/ui/OrganicSectionDivider";

const qualityPillars = [
  {
    icon: Eye,
    title: "Visual & Odour Screening",
    description:
      "Raw grains are examined upon receipt for natural color, lack of discoloration, absence of insect damage, and clean agricultural fragrance.",
  },
  {
    icon: ThermometerSun,
    title: "Moisture Content Control",
    description:
      "Moisture levels are systematically verified to protect against fungal development and ensure long shelf-life during warehouse storage.",
  },
  {
    icon: Scale,
    title: "Precision Batch Weighing",
    description:
      "Ingredients are weighed on calibrated digital load cells before mixing, ensuring that every production run strictly adheres to the formulation standard.",
  },
  {
    icon: FileCheck,
    title: "Batch Traceability",
    description:
      "Each batch is tagged with a manufacturing lot number, recording the date of milling and specific ingredient source for operational accountability.",
  },
];

export default function QualitySection() {
  return (
    <section className="bg-[#EDE7D9] pt-20 sm:pt-28 pb-0 relative overflow-hidden paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditorialReveal>
          <SectionHeading
            eyebrow="BATCH DISCIPLINE"
            title="Consistency Matters"
            hindiTitle="गुणवत्ता आणि सातत्याचे महत्त्व"
            description="Dairy farming requires dependability. When cattle receive uniform rations daily, digestion remains stable and milk productivity remains consistent."
          />
        </EditorialReveal>

        <div className="mt-16 mb-20">
          <EditorialReveal stagger={0.12} yOffset={28}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#F5F0E8] p-6 sm:p-8 rounded-2xl border border-[#D4C9B8] hover:border-[#8B1A1A] hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#8B1A1A] text-white flex items-center justify-center mb-6 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="font-display font-bold text-xl text-[#0D4B34] mb-3 leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="font-body text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#D4C9B8] flex items-center gap-1.5 font-body text-xs text-[#0D4B34] font-semibold">
                      <CheckCircle className="w-4 h-4 text-[#8B1A1A]" />
                      <span>Standard Operating Protocol</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </EditorialReveal>
        </div>
      </div>

      {/* Organic Paper Edge: Warm Beige Quality -> Whitewash Variants (#F5F0E8) */}
      <OrganicSectionDivider
        variant="subtle-crest"
        position="bottom"
        fillColor="#F5F0E8"
        flipX={true}
        heightClass="h-12 sm:h-16"
      />
    </section>
  );
}
