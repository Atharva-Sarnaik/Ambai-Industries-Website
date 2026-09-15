"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Wheat, ShieldCheck, Package } from "lucide-react";
import EditorialReveal from "@/components/ui/EditorialReveal";
import ScrollDrivenContent from "@/components/ui/ScrollDrivenContent";
import OrganicSectionDivider from "@/components/ui/OrganicSectionDivider";
import { getWhatsAppEnquiryUrl } from "@/lib/whatsapp";

export default function DarkFeaturedProduct() {
  return (
    <div className="relative min-h-screen w-full" style={{ zIndex: 40 }}>
      {/* Leading Organic Torn Paper Edge rising over Whitewash Icons */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none -translate-y-[96%] w-full overflow-hidden leading-none">
        <OrganicSectionDivider
          variant="torn-deckle"
          position="bottom"
          fillColor="#08241A"
          secondaryFillColor="#0D3B2B"
          parallax={true}
          heightClass="h-16 sm:h-24 md:h-28"
        />
      </div>

      {/* Sticky Full-Viewport Dark Featured Product Section (Reference: Screenshots 190400-190428) */}
      <section className="sticky top-0 min-h-screen w-full flex flex-col justify-center bg-[#08241A] text-white overflow-hidden shadow-2xl py-20 sm:py-24">
        {/* Dark Slate & Grain Background Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.6) 0%, transparent 70%)`,
          }}
        />

        {/* Content Container with Scroll-Driven Movement */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <ScrollDrivenContent travelDistance={35}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Product Visual (matching the cutting board in ref screenshot 190420) */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
                  <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full bg-[#0D3B2B]/60">
                    <Image
                      src="/images/products/maize-feed.jpg"
                      alt="Ambai Industries Premium Maize Makka Cattle Feed"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-bold font-display bg-[#8B1A1A] text-white shadow-lg">
                        Featured Product
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-xs uppercase tracking-widest text-white/75 font-body font-semibold block mb-0.5">
                        Clean Energy Cereal Feed
                      </span>
                      <h4 className="font-display font-bold text-2xl">
                        Maize Makka Cattle Feed
                      </h4>
                      <span className="text-xs text-white/80 font-body">
                        उपलब्ध: Fine · Deluxe · Super Deluxe
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Content, 3 White Feature Icons & CTA (matching ref screenshot 190420 & 190428) */}
              <div className="lg:col-span-7 space-y-7">
                <EditorialReveal stagger={0.12} yOffset={28}>
                  <div>
                    <span className="font-body text-xs uppercase tracking-widest text-[#F5F0E8]/75 font-semibold block mb-2">
                      Dairy Herd Nutrition
                    </span>
                    <h3
                      className="font-display font-bold text-white leading-tight mb-4 drop-shadow-md"
                      style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
                    >
                      Our Cattle Feed Products
                    </h3>
                    <p className="font-body text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
                      Manufactured for high digestibility, clean palatability, and balanced daily nutrition. Available in multiple particle grades to suit specific farming routines across Indian dairy operations.
                    </p>
                  </div>

                  {/* 3 White Feature Badges (exact match to ref screenshot 190420 / 190428) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                    <div className="flex flex-col items-start gap-2 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
                      <Wheat className="w-7 h-7 text-white" />
                      <span className="font-display font-bold text-sm text-white leading-tight">
                        100% Natural Whole Grain
                      </span>
                      <span className="font-body text-xs text-white/70">
                        Zero synthetic fillers or bypass urea.
                      </span>
                    </div>

                    <div className="flex flex-col items-start gap-2 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
                      <ShieldCheck className="w-7 h-7 text-white" />
                      <span className="font-display font-bold text-sm text-white leading-tight">
                        Calibrated Granulation
                      </span>
                      <span className="font-body text-xs text-white/70">
                        Preserves natural rumen pH and salivation.
                      </span>
                    </div>

                    <div className="flex flex-col items-start gap-2 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
                      <Package className="w-7 h-7 text-white" />
                      <span className="font-display font-bold text-sm text-white leading-tight">
                        50 KG Multi-Wall Sacks
                      </span>
                      <span className="font-body text-xs text-white/70">
                        Moisture-secure, breathable woven bags.
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons (matching the "Shop" button in ref screenshot 190428) */}
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-display font-bold text-[#08241A] bg-white hover:bg-[#F5F0E8] hover:shadow-xl transition-all duration-300 text-base shadow-lg hover:-translate-y-0.5"
                    >
                      <span>View All Products</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={getWhatsAppEnquiryUrl("Maize Cattle Feed")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-bold text-white bg-transparent hover:bg-white/15 border-2 border-white/75 transition-all duration-300 text-base hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>WhatsApp Enquiry</span>
                    </a>
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
