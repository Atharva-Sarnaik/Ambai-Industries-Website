"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { companyData } from "@/data/company";
import { getWhatsAppEnquiryUrl } from "@/lib/whatsapp";
import EditorialReveal from "@/components/ui/EditorialReveal";
import TornEdgeLight from "@/components/ui/TornEdgeLight";
import TornEdgeLightBottom from "@/components/ui/TornEdgeLightBottom";

interface CtaSectionProps {
  isolated?: boolean;
}

export default function CtaSection({ isolated = false }: CtaSectionProps) {
  return (
    <div id="contact" className={`relative w-full ${isolated ? "" : "md:-mt-[100vh]"}`} style={{ zIndex: 80 }}>
      {/* Continuous Full-Bleed Background Image extending behind white header */}
      <div className={`${isolated ? "absolute inset-0" : "sticky top-0 h-screen"} w-full z-0 pointer-events-none`}>
        {isolated ? (
          <div className="sticky top-0 w-full h-[100vh] overflow-hidden">
            <Image
              src="/images/hero/landscape-sunset.jpg"
              alt="Rural Indian cattle and golden harvest countryside"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-105"
            />
            {/* Atmospheric dark contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          </div>
        ) : (
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src="/images/hero/landscape-sunset.jpg"
              alt="Rural Indian cattle and golden harvest countryside"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-105"
            />
            {/* Atmospheric dark contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          </div>
        )}
      </div>

      {/* ============================================================
          1. HEADER SECTION: COMMERCIAL DISPATCH & DIRECT SUPPLY
          Full-width white section like AgriculturalIconsSection
          with top and bottom torn edges
      ============================================================ */}
      <div className="relative z-10" style={{ marginTop: isolated ? 0 : "-100vh" }}>
        <section
          id="cta-header"
          className="relative w-full min-h-screen bg-[#FFFFFF] text-[#1A1A1A] flex flex-col justify-center py-16 sm:py-28 overflow-visible"
          style={{
            zIndex: 10,
            backgroundImage: "url('/images/ui/white-wood-bg.png')",
            backgroundRepeat: "repeat",
          }}
        >
          {/* Top Torn Paper Edge peeling over Why Choose Us Section */}
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
              CONNECT
            </span>
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center">
            <EditorialReveal yOffset={20}>
              <div className="inline-block bg-[#F5F0E8] px-6 py-2 rounded-full border border-[#D4C9B8] mb-4 shadow-sm">
                <span className="font-display font-bold text-xs text-[#0D4B34] tracking-widest uppercase">
                  COMMERCIAL DISPATCH & DIRECT SUPPLY
                </span>
              </div>
              <h2
                className="font-display font-bold text-[#0D4B34] leading-tight mb-2 tracking-tight"
                style={{ fontSize: "clamp(2rem, 3.6vw, 3.6rem)" }}
              >
                Looking for Dependable Feed for Your Herd?
              </h2>
              <p className="font-display font-semibold text-[#8B1A1A] text-xl sm:text-2xl mb-4">
                तुमच्या डेअरीसाठी भरवशाचे पशुखाद्य
              </p>
              <p className="font-body text-[#4A4A4A] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Whether you are a dairy cooperative, progressive cattle farm owner, or feed distributor seeking uncompromised batch consistency — our commercial team is ready to assist.
              </p>
            </EditorialReveal>
          </div>

          {/* Bottom Torn Paper Edge peeling away to reveal the static countryside background below */}
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
          2. PANORAMIC COUNTRYSIDE CTA SHOWCASE
      ============================================================ */}
      <div className="relative z-10 w-full overflow-hidden pt-20 sm:pt-28 pb-20 sm:pb-28 flex flex-col justify-center">
        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white w-full">
          <EditorialReveal stagger={0.14} yOffset={30}>
              <div className="space-y-6 max-w-3xl mx-auto mb-10">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-[#DEAC4F] block">
                  FAST COMMERCIAL DISPATCH · FLEXIBLE TRUCKLOADS
                </span>
                <h3
                  className="font-display font-bold text-white leading-tight drop-shadow-lg"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  Connect Directly with Our Mill Desk
                </h3>
                <p className="font-body text-base sm:text-lg text-white/90 leading-relaxed">
                  Call our dispatch coordinators or initiate an instant WhatsApp dialogue for current batch availability, dealer pricing slabs, and doorstep freight estimates.
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
                <a
                  href={getWhatsAppEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-display font-bold text-[#0A3828] bg-white hover:bg-[#F5F0E8] hover:shadow-2xl transition-all duration-300 shadow-xl text-base hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>Connect on WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-white border-2 border-white/80 hover:bg-white/15 transition-all duration-300 text-base hover:-translate-y-0.5"
                >
                  <span>Send Commercial Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Direct Quick Info Cards (Transparent glass chips) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto pt-6 border-t border-white/20">
                {/* Card 1: Phone */}
                <div className="flex flex-col items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-5 py-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-colors text-center">
                  <Phone className="w-5 h-5 text-[#DEAC4F]" />
                  <div>
                    <span className="text-[10px] uppercase text-white/60 block font-semibold tracking-wider">Direct Call</span>
                    <a href={`tel:${companyData.phone}`} className="text-white font-bold hover:underline text-sm">
                      {companyData.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Card 2: Email */}
                <div className="flex flex-col items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-5 py-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-colors text-center">
                  <Mail className="w-5 h-5 text-[#DEAC4F]" />
                  <div>
                    <span className="text-[10px] uppercase text-white/60 block font-semibold tracking-wider">Email Desk</span>
                    <span className="text-white font-bold text-sm block">{companyData.email}</span>
                  </div>
                </div>

                {/* Card 3: Location */}
                <div className="flex flex-col items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-5 py-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-colors text-center">
                  <MapPin className="w-5 h-5 text-[#DEAC4F]" />
                  <div>
                    <span className="text-[10px] uppercase text-white/60 block font-semibold tracking-wider">Mill Location</span>
                    <span className="text-white font-bold text-sm block">Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </EditorialReveal>
          </div>
        </div>
      </div>
    );
  }
