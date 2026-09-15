"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { productsData } from "@/data/products";
import { getWhatsAppEnquiryUrl } from "@/lib/whatsapp";
import EditorialReveal from "@/components/ui/EditorialReveal";
import ScrollDrivenContent from "@/components/ui/ScrollDrivenContent";
import OrganicSectionDivider from "@/components/ui/OrganicSectionDivider";

export default function ProductShowcase() {
  return (
    <div id="products" className="relative min-h-screen w-full" style={{ zIndex: 40 }}>
      {/* Leading Organic Paper Edge rising over Cattle Pasture Section */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none -translate-y-[96%] w-full overflow-hidden leading-none">
        <OrganicSectionDivider
          variant="rolling-pasture"
          position="bottom"
          fillColor="#F5F0E8"
          secondaryFillColor="#EDE7D9"
          parallax={true}
          heightClass="h-16 sm:h-24 md:h-28"
        />
      </div>

      {/* Sticky Full-Viewport Product Showcase Panel */}
      <section className="sticky top-0 min-h-screen w-full flex flex-col justify-center bg-[#F5F0E8] overflow-hidden paper-grain shadow-2xl py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <ScrollDrivenContent travelDistance={30}>
            <EditorialReveal>
              <SectionHeading
                eyebrow="OUR PRODUCTS"
                title="Our Cattle Feed Products"
                hindiTitle="हमारे पशु आहार उत्पाद"
                description="Manufactured for high digestibility, clean palatability, and balanced herd nutrition. Available in multiple particle grades to suit specific farming routines."
              />
            </EditorialReveal>

            <div className="mt-12">
              <div className="flex overflow-x-auto lg:grid lg:grid-cols-2 gap-8 lg:gap-10 snap-x snap-mandatory pb-8 -mx-4 px-4 lg:mx-0 lg:px-0 lg:pb-0 hide-scrollbar">
                {productsData.map((product, idx) => (
                  <EditorialReveal key={product.id} delay={0.1 * idx} yOffset={32}>
                    <div
                      className="w-[85vw] lg:w-auto flex-shrink-0 snap-center bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#D4C9B8] flex flex-col group hover:-translate-y-1"
                    >
                      {/* Product Visual */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F0E8]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Badge */}
                        {product.badge && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 rounded-full text-xs font-bold font-display bg-[#8B1A1A] text-white shadow-sm">
                              {product.badge}
                            </span>
                          </div>
                        )}

                        {/* Bottom title overlay */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="text-xs uppercase tracking-widest text-white/70 font-body font-semibold block">
                            {product.category}
                          </span>
                          <h3 className="font-display font-bold text-2xl sm:text-3xl">
                            {product.name}
                          </h3>
                          <span className="text-sm opacity-80 font-body font-normal">
                            {product.hindiName}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-5">
                        <div className="space-y-4">
                          <p className="font-body text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                            {product.shortDescription}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-2 pt-1">
                            {product.keyHighlights.slice(0, 3).map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A1A1A]">
                                <Check className="w-4 h-4 text-[#0D4B34] flex-shrink-0 mt-0.5" />
                                <span className="font-body">{item}</span>
                              </div>
                            ))}
                          </div>

                          {/* Available Variants */}
                          <div className="pt-3 border-t border-[#D4C9B8]">
                            <span className="font-body text-xs uppercase tracking-wider font-semibold text-[#4A4A4A] block mb-2.5">
                              Available Variants:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {product.variants.map((variant) => (
                                <div
                                  key={variant.id}
                                  className="px-3 py-1.5 rounded-lg text-xs font-display font-semibold bg-[#F5F0E8] border border-[#D4C9B8] text-[#0D4B34]"
                                >
                                  {variant.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Actions */}
                        <div className="pt-5 border-t border-[#D4C9B8] flex flex-wrap items-center justify-between gap-3">
                          <Link
                            href={`/products/${product.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-display font-bold text-[#8B1A1A] hover:text-[#0D4B34] transition-colors group/link"
                          >
                            <span>View Specifications</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                          </Link>

                          <a
                            href={getWhatsAppEnquiryUrl(product.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display font-bold text-white bg-[#0D4B34] hover:bg-[#1A6B4A] shadow-sm transition-colors hover:-translate-y-0.5"
                          >
                            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                            <span>Enquire on WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </EditorialReveal>
                ))}
              </div>
            </div>
          </ScrollDrivenContent>
        </div>
      </section>
    </div>
  );
}
