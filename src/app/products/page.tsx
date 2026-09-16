import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, MessageCircle, Sparkles, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import { getWhatsAppEnquiryUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Cattle Feed Products & Grades",
  description:
    "Explore our complete range of cattle feed products including Maize / Makka Cattle Feed and Wheat Bran Cattle Feed across Fine, Deluxe, and Super Deluxe variants.",
};

import TornEdgeLight from "@/components/ui/TornEdgeLight";

export default function ProductsPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F8F5EE]">
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
              Product Catalogue
           </h1>
           <p className="font-display font-semibold text-[#DEAC4F] text-xl sm:text-2xl drop-shadow-md">
              पशुखाद्य उत्पादने आणि ग्रेड्स
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
      <div className="pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeading
          eyebrow="OUR RANGE"
          title="Manufactured for Dairy Herd Nutrition"
          hindiTitle=""
          description="Every product in our range is developed from screened raw materials to supply dependable daily energy and fiber for Indian dairy cattle."
        />
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {productsData.map((product, index) => (
          <div
            key={product.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#F1ECE0] p-6 sm:p-10 lg:p-12 rounded-3xl border border-[#CAD4C8] shadow-sm`}
          >
            {/* Visual Column */}
            <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#CAD4C8] img-zoom-container">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#15392A] text-white border border-[#C69234]/40 shadow">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C69234] font-semibold block mb-1">
                  {product.hindiName}
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#15392A]">
                  {product.name}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#5C6761] leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 pt-2">
                {product.keyHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1C221F]">
                    <Check className="w-4 h-4 text-[#15392A] flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Variants Selector Preview */}
              <div className="pt-4 border-t border-[#D5DED3]">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#5C6761] block mb-2.5">
                  Available Manufacturing Variants:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {product.variants.map((v) => (
                    <div key={v.id} className="bg-[#F8F5EE] p-3 rounded-xl border border-[#D5DED3] text-center">
                      <span className="font-bold text-xs text-[#15392A] block">{v.name}</span>
                      <span className="text-[10px] text-[#5C6761] line-clamp-1">{v.gradeLabel}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#15392A] hover:bg-[#20503B] shadow transition-colors"
                >
                  <span>Detailed Specifications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppEnquiryUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#15392A] bg-white hover:bg-[#F8F5EE] border border-[#CAD4C8] shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
