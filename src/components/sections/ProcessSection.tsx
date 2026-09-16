"use client";

import React from "react";
import Image from "next/image";
import { companyData } from "@/data/company";
import EditorialReveal from "@/components/ui/EditorialReveal";
import TornEdgeLight from "@/components/ui/TornEdgeLight";
import TornEdgeLightBottom from "@/components/ui/TornEdgeLightBottom";
import CollageSlider from "@/components/ui/CollageSlider";
import DoubleCollageSlider from "@/components/ui/DoubleCollageSlider";

interface ProcessStep {
  step: string;
  tag: string;
  title: string;
  hindiTitle: string;
  description: string;
  image: string;
  controlStage: string;
  operationalFocus: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    tag: "Cleanliness First",
    title: "Raw Material Intake & Screening",
    hindiTitle: "कच्च्या मालाची निवड आणि स्वच्छता",
    description:
      "All incoming grains (yellow maize, wheat, sorghum, and bran) are unloaded onto high-amplitude screening beds with aspirators to extract fine dust, stones, husk, and broken foreign matter.",
    image: "/images/manufacturing/step-intake.jpg",
    controlStage: "Intake Quality Gate",
    operationalFocus: "100% Foreign-Matter Removal",
  },
  {
    step: "02",
    tag: "Calibrated Sizing",
    title: "Controlled Particle Milling",
    hindiTitle: "नियंत्रित हॅमर मिल ग्राइंडिंग",
    description:
      "Cleaned whole grains enter heavy-duty calibrated hammer mills fitted with precise aperture screens. Grist size is controlled to maintain optimal rumen retention and prevent digestive acidosis.",
    image: "/images/manufacturing/step-milling.jpg",
    controlStage: "Calibrated Screens",
    operationalFocus: "Optimal Rumen Coarse Grist",
  },
  {
    step: "03",
    tag: "Batch Uniformity",
    title: "Homogeneous Batch Mixing",
    hindiTitle: "अचूक न्यूट्रिएंट बॅच ब्लेंडिंग",
    description:
      "Coarse milled grains, pure wheat bran flakes, and protein fractions are loaded into industrial ribbon mixers. Automated batch timing ensures uniform dispersion of every component.",
    image: "/images/manufacturing/step-mixing.jpg",
    controlStage: "Ribbon Blender Timing",
    operationalFocus: "Zero Hotspots · CV < 5%",
  },
  {
    step: "04",
    tag: "Moisture-Secure",
    title: "Automated Bagging & Sealing",
    hindiTitle: "स्वयंचलित शिलाई आणि पॅकेजिंग",
    description:
      "Finished blended feed is systematically weighed into breathable 50 kg multi-wall woven polypropylene bags, stitched with industrial thread, and palletized for dry, puncture-resistant dispatch.",
    image: "/images/manufacturing/step-bagging.jpg",
    controlStage: "Digital Load-Cell Weight",
    operationalFocus: "50 kg Multi-Wall Sacks",
  },
];

interface ProcessSectionProps {
  isolated?: boolean;
  withSpacer?: boolean;
}

export default function ProcessSection({ isolated = false, withSpacer = false }: ProcessSectionProps) {
  return (
    <div className={`relative w-full ${isolated ? "" : "md:-mt-[100vh]"}`} style={{ zIndex: 60 }}>
      {/* Background Image: sticky for home parallax, absolute-fill for isolated pages */}
      <div className={`${isolated ? "absolute inset-0" : "sticky top-0 h-screen"} w-full z-0 pointer-events-none`}>
        {isolated ? (
          <div className="sticky top-0 w-full h-[100vh] overflow-hidden">
            <Image
              src="/images/manufacturing/facility-interior.jpg"
              alt="Ambai Industries Manufacturing Facility"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-105"
            />
            {/* Subtle clear contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
          </div>
        ) : (
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src="/images/manufacturing/facility-interior.jpg"
              alt="Ambai Industries Manufacturing Facility"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-105"
            />
            {/* Subtle clear contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
          </div>
        )}
      </div>

      {/* ============================================================
          1. HEADER SECTION: MANUFACTURING INTEGRITY
          Full-width white wood texture section with deckle edges
      ============================================================ */}
      <div className="relative z-10" style={{ marginTop: isolated ? 0 : "-100vh" }}>
        <section
          id="process-header"
          className="relative w-full min-h-screen bg-[#FFFFFF] text-[#1A1A1A] flex flex-col justify-center py-20 sm:py-28 overflow-visible"
          style={{
            zIndex: 10,
            backgroundImage: "url('/images/ui/white-wood-bg.png')",
            backgroundRepeat: "repeat",
          }}
        >
          {/* Top Torn Paper Edge peeling over Raw Materials */}
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
              INTEGRITY
            </span>
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center">
            <EditorialReveal yOffset={20}>
              <div className="inline-block bg-[#F5F0E8] px-6 py-2 rounded-full border border-[#D4C9B8] mb-4 shadow-sm">
                <span className="font-display font-bold text-xs text-[#0D4B34] tracking-widest uppercase">
                  MANUFACTURING INTEGRITY
                </span>
              </div>
              <h2
                className="font-display font-bold text-[#0D4B34] leading-tight mb-2 tracking-tight"
                style={{ fontSize: "clamp(2rem, 3.6vw, 3.6rem)" }}
              >
                From Ingredient to Finished Feed
              </h2>
              <p className="font-display font-semibold text-[#8B1A1A] text-xl sm:text-2xl mb-4">
                धान्यापासून तयार पशुखाद्यापर्यंतचा प्रवास
              </p>
              <p className="font-body text-[#4A4A4A] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                A systematic, controlled 4-phase manufacturing sequence designed to preserve natural grain nutrition and ensure batch-to-batch uniformity.
              </p>
            </EditorialReveal>
          </div>

          {/* Bottom Torn Paper Edge peeling away to reveal the sticky mill background below */}
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
          2. MANUFACTURING PROCESS SHOWCASE
      ============================================================ */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-36 pb-24 sm:pb-48">
          
          {/* MOBILE VIEW */}
          <div className="block lg:hidden">
            <EditorialReveal yOffset={24}>
              <CollageSlider 
                slides={processSteps.map(item => ({
                  id: item.step,
                  image: item.image,
                  tag: `STEP ${item.step} · ${item.tag}`,
                  title: item.title,
                  description: item.description,
                }))} 
              />
            </EditorialReveal>
          </div>

          {/* PC VIEW */}
          <div className="hidden lg:block">
            <EditorialReveal yOffset={24}>
              <DoubleCollageSlider 
                slides={processSteps.map(item => ({
                  id: item.step,
                  image: item.image,
                  tag: `STEP ${item.step} · ${item.tag}`,
                  title: item.title,
                  description: item.description,
                }))} 
              />
            </EditorialReveal>
          </div>

        </div>
      </div>

      {/* 100vh Spacer to allow CtaSection (or next section) to overlap and parallax over this section */}
      {(!isolated || withSpacer) && (
        <div className="hidden md:block h-[100vh] w-full pointer-events-none" />
      )}
    </div>
  );
}
