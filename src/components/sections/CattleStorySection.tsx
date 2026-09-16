"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import EditorialReveal from "@/components/ui/EditorialReveal";
import ScrollDrivenContent from "@/components/ui/ScrollDrivenContent";
import OrganicSectionDivider from "@/components/ui/OrganicSectionDivider";

export default function CattleStorySection() {
  return (
    <div className="relative min-h-screen w-full" style={{ zIndex: 30 }}>
      {/* Leading Organic Paper Edge rising over White Information Section */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none -translate-y-[96%] w-full overflow-hidden leading-none">
        <OrganicSectionDivider
          variant="torn-deckle"
          position="bottom"
          fillColor="#0D3B2B"
          secondaryFillColor="#0A3828"
          parallax={true}
          heightClass="h-16 sm:h-24 md:h-28"
        />
      </div>

      {/* Sticky Full-Viewport Pasture / Cattle Panel */}
      <section className="sticky top-0 min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#0A3828] text-white py-20 sm:py-24 shadow-2xl">
        {/* Full-bleed Pasture photograph pinned in background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/cattle/gir-cattle-pasture.jpg"
            alt="Purebred Indian Gir cattle grazing in green pasture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#0A3828]/75 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A3828] via-transparent to-[#0A3828]/60" />
        </div>

        {/* Content Container with Scroll-Driven Movement */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <ScrollDrivenContent travelDistance={35}>
            <EditorialReveal>
              <SectionHeading
                eyebrow="AGRICULTURAL CONNECTION"
                title="Made for the People Behind Every Farm"
                hindiTitle="प्रत्येक शेतकरी आणि पशुपालकांच्या विश्वासाचे प्रतीक"
                description="In rural India, dairy farming is more than a commercial livelihood — it is a daily discipline rooted in herd well-being, family care, and mutual trust."
                theme="dark"
              />
            </EditorialReveal>

            {/* 2-Column Editorial Showcase */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Farmer Photograph */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <Image
                    src="/images/farmers/farmer-inspecting-feed.jpg"
                    alt="Indian dairy farmer inspecting cattle feed mash"
                    width={600}
                    height={450}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div className="mt-3 font-body text-xs text-white/70 italic text-center">
                  Inspecting feed texture and grain purity in a rural dairy setting.
                </div>
              </div>

              {/* Right Column: Story Content */}
              <div className="lg:col-span-7 space-y-6 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 shadow-xl">
                <EditorialReveal delay={0.1} stagger={0.12}>
                  <div className="space-y-4">
                    <span className="font-body text-xs uppercase tracking-widest text-[#F5F0E8]/80 font-semibold block">
                      Indigenous Dairy Nutrition
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                      Understanding Daily Farm Realities
                    </h3>
                    <p className="font-body text-sm sm:text-base text-white/85 leading-relaxed">
                      When a dairy farmer purchases a bag of cattle feed, they invest their hard-earned capital and place their faith in its nutritional output. A sudden shift in grain quality can disturb the cattle&apos;s digestion and affect daily lactation.
                    </p>
                    <p className="font-body text-sm sm:text-base text-white/85 leading-relaxed">
                      That is why our manufacturing approach is conservative and disciplined. We focus on consistent sourcing of maize, wheat, and bran so that every batch performs dependably day after day.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/about"
                        className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#F5F0E8] hover:text-white underline underline-offset-4 transition-colors group"
                      >
                        <span>Read our full manufacturing story</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </EditorialReveal>
              </div>
            </div>
          </ScrollDrivenContent>
        </div>
      </section>
    </div>
  );
}
