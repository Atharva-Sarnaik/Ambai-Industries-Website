"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Truck, ShieldCheck } from "lucide-react";
import EditorialReveal from "@/components/ui/EditorialReveal";
import TornEdgeLight from "@/components/ui/TornEdgeLight";
import { companyData } from "@/data/company";
import { getWhatsAppEnquiryUrl } from "@/lib/whatsapp";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    productInterest: "General Commercial Supply",
    monthlyRequirement: "10-25 Tonnes",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative w-full" style={{ zIndex: 60 }}>
      {/* ============================================================
          1. HERO SECTION: Full-Bleed Pasture Cows Hero
          (Matches Burgundy Brook Farm reference screenshot)
      ============================================================ */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] min-h-[520px] overflow-hidden flex items-center justify-center pt-20 sm:pt-24">
        {/* Full-bleed Pasture Cows Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cattle/contact-cows-hero.jpg"
            alt="Healthy Indian dairy cattle standing in lush green pasture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          {/* Atmospheric Contrast Scrim */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75" />
        </div>

        {/* Centered Hero Content (Matching reference screenshot) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <EditorialReveal stagger={0.12} yOffset={24}>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#F5F0E8]/80 font-semibold font-body block mb-3 drop-shadow-sm">
                COMMERCIAL DESK & LOCATION
              </span>
              <h1
                className="font-display font-bold text-white leading-tight mb-3 drop-shadow-lg tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)" }}
              >
                Contact Us
              </h1>
              <p className="font-display font-semibold text-[#DEAC4F] text-xl sm:text-2xl mb-3 drop-shadow-md">
                संपर्क एवं व्यापारिक पूछताछ
              </p>
              <p className="font-display font-medium text-base sm:text-xl text-[#F5F0E8] leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                Owned & Operated by our family to nourish Indian dairy herds!
              </p>
            </div>
          </EditorialReveal>
        </div>

        {/* Bottom Jagged Torn Paper Edge Transitioning into White Content Section */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 w-full overflow-hidden leading-none translate-y-[2px]">
          <TornEdgeLight
            fillColor="#FFFFFF"
            heightClass="h-20 sm:h-28 md:h-36"
            className="w-full"
          />
        </div>
      </section>

      {/* ============================================================
          2. WHITE CONTENT SECTION: Plant Info & Commercial Enquiry Form
          Crisp white background with subtle wood texture
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
            CONTACT
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <EditorialReveal yOffset={30}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Direct Plant Contact Information */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#E5DFD5] shadow-xl space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#8B1A1A] font-bold font-display block mb-1">
                      DIRECT MILL CONTACT
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0D4B34]">
                      {companyData.name} Manufacturing Plant
                    </h2>
                  </div>

                  <div className="space-y-5 pt-2 text-sm text-[#4A4A4A]">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-[#0D4B34]/10 flex items-center justify-center flex-shrink-0 text-[#0D4B34]">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[#0D4B34] font-bold block mb-0.5">Mill & Office Address:</span>
                        <span className="text-[#4A4A4A] leading-relaxed text-xs sm:text-sm">
                          {companyData.address.line1}, {companyData.address.line2},<br />
                          {companyData.address.state} - {companyData.address.postalCode}, {companyData.address.country}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-[#0D4B34]/10 flex items-center justify-center flex-shrink-0 text-[#0D4B34]">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[#0D4B34] font-bold block mb-0.5">Direct Dispatch Line:</span>
                        <a href={`tel:${companyData.phone}`} className="text-[#0D4B34] hover:text-[#8B1A1A] transition-colors font-bold text-sm sm:text-base">
                          {companyData.displayPhone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-[#0D4B34]/10 flex items-center justify-center flex-shrink-0 text-[#0D4B34]">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[#0D4B34] font-bold block mb-0.5">Commercial Email Desk:</span>
                        <a href={`mailto:${companyData.email}`} className="text-[#0D4B34] hover:text-[#8B1A1A] transition-colors text-sm sm:text-base font-semibold">
                          {companyData.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-[#0D4B34]/10 flex items-center justify-center flex-shrink-0 text-[#0D4B34]">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[#0D4B34] font-bold block mb-0.5">Business & Weighbridge Hours:</span>
                        <span className="text-[#4A4A4A] text-xs sm:text-sm">{companyData.businessHours}</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct WhatsApp Button */}
                  <div className="pt-4 border-t border-[#E5DFD5]">
                    <a
                      href={getWhatsAppEnquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#0D4B34] hover:bg-[#082E20] text-white font-display font-bold text-sm transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      <span>Instant WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>

                {/* Logistics Advantage Card */}
                <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E5DFD5] shadow-sm text-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#0D4B34] font-bold font-display text-sm">
                    <Truck className="w-4 h-4 text-[#8B1A1A]" />
                    <span>Regional Freight & Weighbridge Access</span>
                  </div>
                  <p className="leading-relaxed text-[#555555]">
                    Our mill facility is situated along primary state freight corridors with electronic weighbridge facilities, enabling expedited loading and punctual truck dispatch across regional dairy pockets.
                  </p>
                </div>
              </div>

              {/* Right Column: Commercial Enquiry Form */}
              <div className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#E5DFD5] shadow-xl">
                {submitted ? (
                  <div className="text-center py-16 space-y-5">
                    <div className="w-16 h-16 rounded-full bg-[#0D4B34] text-white flex items-center justify-center mx-auto shadow-xl">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0D4B34]">
                      Commercial Enquiry Received
                    </h3>
                    <p className="text-sm sm:text-base text-[#4A4A4A] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Our dispatch desk will review your specifications and contact you shortly with batch availability and freight estimates.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        type="button"
                        className="px-6 py-2.5 rounded-full bg-[#0D4B34]/10 hover:bg-[#0D4B34]/20 text-[#0D4B34] font-display font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#8B1A1A] font-bold font-display block mb-1">
                        COMMERCIAL MESSAGE
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0D4B34]">
                        Request Pricing & Availability
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-[#666666] mt-1">
                        Fill out the details below to receive direct mill pricing and batch availability.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rajesh Patil"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8CEBA] focus:border-[#0D4B34] focus:outline-none text-sm text-[#1A1A1A] placeholder-neutral-400 shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                          Dairy / Agency Name
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Patil Dairy Farm / Traders"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8CEBA] focus:border-[#0D4B34] focus:outline-none text-sm text-[#1A1A1A] placeholder-neutral-400 shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                          Phone / Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98220 00000"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8CEBA] focus:border-[#0D4B34] focus:outline-none text-sm text-[#1A1A1A] placeholder-neutral-400 shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. contact@dairy.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8CEBA] focus:border-[#0D4B34] focus:outline-none text-sm text-[#1A1A1A] placeholder-neutral-400 shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                          Product Interest
                        </label>
                        <select
                          value={formData.productInterest}
                          onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8CEBA] focus:border-[#0D4B34] focus:outline-none text-sm text-[#1A1A1A] shadow-sm"
                        >
                          <option value="General Commercial Supply">General Commercial Supply</option>
                          <option value="Maize Cattle Feed (Fine / Deluxe / Super)">Maize Cattle Feed</option>
                          <option value="Wheat Bran Cattle Feed (Fine / Deluxe / Super)">Wheat Bran Cattle Feed</option>
                          <option value="Combined Feed Consignment">Combined Feed Consignment</option>
                          <option value="Dealership & Distribution Terms">Dealership & Distribution Terms</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                          Estimated Order Size
                        </label>
                        <select
                          value={formData.monthlyRequirement}
                          onChange={(e) => setFormData({ ...formData, monthlyRequirement: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8CEBA] focus:border-[#0D4B34] focus:outline-none text-sm text-[#1A1A1A] shadow-sm"
                        >
                          <option value="5-10 Tonnes (Mini Truck)">5-10 Tonnes (Mini Truck)</option>
                          <option value="10-25 Tonnes (Standard Truck)">10-25 Tonnes (Standard Truck)</option>
                          <option value="25-50 Tonnes (Multi-Axle Truck)">25-50 Tonnes (Multi-Axle Truck)</option>
                          <option value="50+ Tonnes / Regular Weekly Contract">50+ Tonnes / Weekly Contract</option>
                          <option value="Sample / Trial Batch Enquiry">Sample / Trial Batch</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                        Dispatch Destination / Enquiry Details
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention your delivery district, target herd size, or specific nutritional requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8CEBA] focus:border-[#0D4B34] focus:outline-none text-sm text-[#1A1A1A] placeholder-neutral-400 leading-relaxed shadow-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-full bg-[#0D4B34] hover:bg-[#082E20] text-white font-display font-bold text-base transition-all duration-300 shadow-xl hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Submit Commercial Enquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </EditorialReveal>
        </div>
      </section>
    </div>
  );
}
