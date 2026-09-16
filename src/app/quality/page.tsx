import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, CheckCircle2, Scale, ThermometerSun, Eye, Package, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TornEdgeLight from "@/components/ui/TornEdgeLight";
import QualitySection from "@/components/sections/QualitySection";
import ProcessSection from "@/components/sections/ProcessSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Quality & Manufacturing Discipline",
  description:
    "Discover our disciplined cattle-feed manufacturing process, moisture screening, calibrated milling, and batch consistency protocols.",
};

export default function QualityPage() {
  return (
    <div className="relative w-full overflow-clip bg-[#F8F5EE]">
      {/* ============================================================
          1. HERO SECTION: Full-Bleed Image under Transparent Navbar
      ============================================================ */}
      <section className="relative w-full h-[55vh] min-h-[400px] overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-mill.jpg"
            alt="Ambai Industries manufacturing mill"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white pb-10">
           <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl drop-shadow-lg tracking-tight mb-4">
              Manufacturing Quality
           </h1>
           <p className="font-display font-semibold text-[#DEAC4F] text-xl sm:text-2xl drop-shadow-md">
              गुणवत्ता आणि निर्मिती प्रक्रिया
           </p>
        </div>
        
        {/* Paint Stroke Divider at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 w-full overflow-hidden leading-none translate-y-[2px]">
          <TornEdgeLight
            fillColor="#F8F5EE"
            heightClass="h-16 sm:h-24 md:h-32"
            className="w-full"
          />
        </div>
      </section>

      {/* Page Content */}
      <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <SectionHeading
          eyebrow="MANUFACTURING DISCIPLINE"
          title="Consistency in Every Batch"
          hindiTitle="गुणवत्ता आणि निर्मिती प्रक्रिया"
          description="In livestock nutrition, batch stability is everything. Our controlled manufacturing protocols ensure that your herd receives consistent nutritional value every day."
        />
      </div>

      {/* Quality Overview Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#CAD4C8]">
              <Image
                src="/images/manufacturing/bagging-line.jpg"
                alt="Automated bagging and batch monitoring line"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#C69234] font-semibold block">
              Process Standard
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#15392A]">
              Where Quality is Built into the Process, Not Added as an Afterthought
            </h2>
            <p className="text-base text-[#5C6761] leading-relaxed">
              We do not claim fictional or unverified certifications. Instead, our reputation is built on straightforward, verifiable operational discipline:
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#15392A] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#1C221F]">
                  <strong>100% Physical Grain Inspection:</strong> Rejection of broken, blackened, or damp grain lots at the unloading dock.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#15392A] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#1C221F]">
                  <strong>Strict Moisture Monitoring:</strong> Ensuring all grains are processed below standard moisture thresholds to prevent storage mold.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#15392A] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#1C221F]">
                  <strong>Calibrated Mesh Hammer Milling:</strong> Controlling coarse particle sizes so energy and fiber are digested naturally without causing acidosis.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#15392A] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#1C221F]">
                  <strong>Automated Weighing & Multi-Wall Packing:</strong> Guaranteed 50 kg bag weights sealed in breathable woven sacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reusable Process Section */}
      <ProcessSection isolated withSpacer />

      {/* CTA Section */}
      <CtaSection isolated={false} />
      </div>
    </div>
  );
}
