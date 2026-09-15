import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ShieldCheck, HeartHandshake, Factory, Sprout, CheckCircle2 } from "lucide-react";
import EditorialReveal from "@/components/ui/EditorialReveal";
import TornEdgeLight from "@/components/ui/TornEdgeLight";
import TornEdgeLightBottom from "@/components/ui/TornEdgeLightBottom";
import { companyData } from "@/data/company";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "About Our Mill & Agricultural Philosophy",
  description:
    "Learn about Ambai Industries cattle-feed manufacturing operations, raw grain selection standards, and commitment to the Indian dairy farming community.",
};

export default function AboutPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* ============================================================
          1. HERO SECTION: Full-Bleed Cows Image under Transparent Navbar
          (Matches Burgundy Brook Farm reference Image 1)
      ============================================================ */}
      <section className="relative w-full h-[75vh] sm:h-[85vh] min-h-[560px] overflow-hidden flex items-center justify-center pt-20 sm:pt-24">
        {/* Full-bleed Pasture Cows Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cattle/gir-cattle-pasture.jpg"
            alt="Purebred Indian Gir cattle grazing in lush rural green pasture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          {/* Atmospheric Contrast Scrim */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75" />
        </div>

        {/* Centered Hero Content (Matching reference Image 1) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <EditorialReveal stagger={0.12} yOffset={24}>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#F5F0E8]/80 font-semibold font-body block mb-3 drop-shadow-sm">
                ABOUT OUR ENTERPRISE
              </span>
              <h1
                className="font-display font-bold text-white leading-tight mb-2 drop-shadow-lg tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 6.5vw, 4.8rem)" }}
              >
                About Our Mill
              </h1>
              <p className="font-display font-semibold text-[#DEAC4F] text-xl sm:text-2xl mb-4 drop-shadow-md">
                हमारे मिल और विनिर्माण की कहानी
              </p>
              <p className="font-display font-medium text-base sm:text-xl text-[#F5F0E8] leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                Owned & Operated by our family to nourish Indian dairy herds!
              </p>
            </div>
          </EditorialReveal>
        </div>

        {/* Bottom Jagged Torn Paper Edge Transitioning into Story Section */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 w-full overflow-hidden leading-none translate-y-[2px]">
          <TornEdgeLight
            fillColor="#FFFFFF"
            heightClass="h-20 sm:h-28 md:h-36"
            className="w-full"
          />
        </div>
      </section>

      {/* ============================================================
          2. EDITORIAL STORY SECTION: Alternating Columns with Organic Pebble Images
          (Matches Burgundy Brook Farm reference Images 3 & 4)
      ============================================================ */}
      <section 
        className="relative w-full bg-[#FFFFFF] text-[#1A1A1A] py-20 sm:py-28"
        style={{
          backgroundImage: "url('/images/ui/white-wood-bg.png')",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Subtle background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="font-display font-bold text-[#0D4B34]/[0.025] whitespace-nowrap"
            style={{ fontSize: "clamp(6rem, 20vw, 20rem)" }}
          >
            HERITAGE
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          {/* ------------------------------------------------------------
              STORY ROW 1: Text on Left, Organic Blob Image on Right
              (Reference Image 3: Story starts with Patriarch + Red Barn Blob)
          ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <EditorialReveal stagger={0.1} yOffset={20}>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8B1A1A] font-bold font-body block mb-2">
                    ESTABLISHED WITH PURPOSE
                  </span>
                  <h2 className="font-display font-bold text-[#0D4B34] text-3xl sm:text-4xl leading-tight mb-4 tracking-tight">
                    Rooted in Indian Agricultural Tradition
                  </h2>
                  <div className="space-y-4 font-body text-[#4A4A4A] text-base sm:text-lg leading-relaxed">
                    <p>
                      Ambai Industries is family owned and operated with decades of agricultural expertise specializing in cattle nutrition, grain procurement, and milling consistency. Our story starts with the founders of our family, who held a lifelong dedication to livestock farming and honest rural commerce.
                    </p>
                    <p>
                      Beginning as a dedicated milling and blending facility serving dairy farmers in our home district, we recognized early that herd vitality, dependable lactation cycles, and milk fat percentages depend entirely on the purity of the daily grain ration.
                    </p>
                    <p>
                      Rather than using unverified industrial shortcuts or commercial fillers, our operations were built on direct mandi sourcing, strict moisture screening, and coarse milling calibrated for steady rumen digestion.
                    </p>
                  </div>
                </div>
              </EditorialReveal>
            </div>

            {/* Organic Pebble/Blob Image 1: The Mill & Barn (Matches Reference Image 3) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div
                className="relative w-full max-w-sm sm:max-w-md aspect-square shadow-2xl overflow-hidden border-4 border-white/80 transition-transform duration-700 hover:scale-[1.03] group bg-[#E8DFD0]"
                style={{
                  borderRadius: "55% 45% 62% 38% / 48% 54% 46% 52%",
                }}
              >
                <Image
                  src="/images/hero/hero-mill.jpg"
                  alt="Traditional rustic Indian cattle feed mill facility and barn"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------
              STORY ROW 2: Organic Blob Image on Left, Text on Right
              (Reference Image 4: Cows in Pasture Blob on Left + Continued Story)
          ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Organic Pebble/Blob Image 2: Cattle in Meadow (Matches Reference Image 4) */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div
                className="relative w-full max-w-sm sm:max-w-md aspect-square shadow-2xl overflow-hidden border-4 border-white/80 transition-transform duration-700 hover:scale-[1.03] group bg-[#E8DFD0]"
                style={{
                  borderRadius: "42% 58% 38% 62% / 54% 42% 58% 46%",
                }}
              >
                <Image
                  src="/images/cattle/gir-cattle-pasture.jpg"
                  alt="Purebred Indian Gir dairy cattle grazing under trees in open pasture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5 order-2">
              <EditorialReveal stagger={0.1} yOffset={20}>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8B1A1A] font-bold font-body block mb-2">
                    WHOLE GRAIN PURITY
                  </span>
                  <h2 className="font-display font-bold text-[#0D4B34] text-3xl sm:text-4xl leading-tight mb-4 tracking-tight">
                    100% Indian Grain · Screened for Clean Nutrition
                  </h2>
                  <div className="space-y-4 font-body text-[#4A4A4A] text-base sm:text-lg leading-relaxed">
                    <p>
                      With the progressive expansion of our milling capacity, we have grown to supply family-run dairy farms, cattle cooperatives, and regional distributors across India. Our product offerings remain anchored around two fundamental staples: golden yellow maize feed and nutrient-dense wheat bran.
                    </p>
                    <p>
                      We procure our grain directly from verified agricultural producers and grain mandis. Yellow maize delivers concentrated carbohydrate energy for milk volume, while air-cleaned wheat bran supplies the vital digestive fiber and bulk required for herd digestive equilibrium.
                    </p>
                    <p>
                      Each batch is milled in our own facility under strict particle-size controls, eliminating fine dust and foreign contaminants to protect herd health and maximize feed conversion efficiency.
                    </p>
                  </div>
                </div>
              </EditorialReveal>
            </div>
          </div>

          {/* ------------------------------------------------------------
              STORY ROW 3: Text on Left, Organic Blob Image on Right
              (Quality, Farmer Trust & Future Vision)
          ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <EditorialReveal stagger={0.1} yOffset={20}>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8B1A1A] font-bold font-body block mb-2">
                    COMMUNITY & INTEGRITY
                  </span>
                  <h2 className="font-display font-bold text-[#0D4B34] text-3xl sm:text-4xl leading-tight mb-4 tracking-tight">
                    Partners in Dairy Herd Prosperity
                  </h2>
                  <div className="space-y-4 font-body text-[#4A4A4A] text-base sm:text-lg leading-relaxed">
                    <p>
                      In Indian rural communities, cattle are more than livestock — they are family assets, daily livelihoods, and the lifeblood of rural economy. We manufacture our cattle feed with the responsibility of knowing that someone&apos;s household income relies directly on the milk yield of the cows consuming our feed.
                    </p>
                    <p>
                      Every 50 kg bag leaving our loading bay represents an unwritten handshake with that farmer. We remain steadfastly committed to transparent pricing, punctual batch dispatch, and cattle feed that never cuts corners on quality.
                    </p>
                  </div>
                </div>
              </EditorialReveal>
            </div>

            {/* Organic Pebble/Blob Image 3: Farmer Inspecting Feed */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div
                className="relative w-full max-w-sm sm:max-w-md aspect-square shadow-2xl overflow-hidden border-4 border-white/80 transition-transform duration-700 hover:scale-[1.03] group bg-[#E8DFD0]"
                style={{
                  borderRadius: "50% 50% 36% 64% / 58% 62% 38% 42%",
                }}
              >
                <Image
                  src="/images/farmers/farmer-inspecting-feed.jpg"
                  alt="Indian dairy farmer examining quality coarse cattle feed"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Torn Paper Edge Transitioning into Core Values */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 w-full overflow-hidden leading-none translate-y-[2px]">
          <TornEdgeLightBottom
            fillColor="#FFFFFF"
            heightClass="h-20 sm:h-28 md:h-36"
            className="w-full"
          />
        </div>
      </section>

      {/* ============================================================
          3. CORE PILLARS: 3 Warm Parchment Cards
      ============================================================ */}
      <section className="relative w-full bg-[#EDE7DA] text-[#1A1A1A] paper-grain py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#8B1A1A] font-bold font-body block mb-2">
              OUR CORE PRINCIPLES
            </span>
            <h2 className="font-display font-bold text-[#0D4B34] text-3xl sm:text-4xl tracking-tight mb-3">
              What Guides Every Milling Batch
            </h2>
            <p className="font-display font-semibold text-[#8B1A1A] text-lg sm:text-xl">
              हमारे कार्य सिद्धांत
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F0E8] p-8 rounded-3xl border border-[#D8CEBA] shadow-md hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#0D4B34]/10 flex items-center justify-center text-[#0D4B34] mb-5">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0D4B34] mb-3">
                Pure Agricultural Origin
              </h3>
              <p className="font-body text-sm text-[#4A4A4A] leading-relaxed">
                We select clean, wholesome grains directly from verified regional mandis, respecting seasonal harvest cycles and rigorous impurity screening.
              </p>
            </div>

            <div className="bg-[#F5F0E8] p-8 rounded-3xl border border-[#D8CEBA] shadow-md hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#0D4B34]/10 flex items-center justify-center text-[#0D4B34] mb-5">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0D4B34] mb-3">
                Controlled Mechanical Milling
              </h3>
              <p className="font-body text-sm text-[#4A4A4A] leading-relaxed">
                Automated particle crushing and homogeneous ribbon blending ensure that active cows and buffaloes receive balanced nutritional fractions in every feed.
              </p>
            </div>

            <div className="bg-[#F5F0E8] p-8 rounded-3xl border border-[#D8CEBA] shadow-md hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#0D4B34]/10 flex items-center justify-center text-[#0D4B34] mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0D4B34] mb-3">
                Direct Farmer Partnership
              </h3>
              <p className="font-body text-sm text-[#4A4A4A] leading-relaxed">
                We treat distributors, dairy cooperatives, and smallholder farmers as long-term partners, maintaining transparent pricing and punctual dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. CTA SECTION
      ============================================================ */}
      <CtaSection isolated />
    </div>
  );
}
