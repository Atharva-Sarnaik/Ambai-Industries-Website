"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, CheckCircle2, Package, Sparkles, Layers } from "lucide-react";
import { Product } from "@/data/products";
import { getWhatsAppEnquiryUrl } from "@/lib/whatsapp";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const activeVariant = product.variants[selectedVariantIndex];

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#5C6761] hover:text-[#15392A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Product Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#CAD4C8] bg-[#E6DFD0]">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#15392A] text-white border border-[#C69234]/40 shadow">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="flex items-center gap-3">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === img
                      ? "border-[#15392A] shadow-md scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${i}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Overview & Enquiries */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C69234] font-semibold block mb-1">
                {product.hindiName}
              </span>
              <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#15392A] leading-tight">
                {product.name}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#5C6761] leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Primary Raw Materials Tags */}
            <div className="p-4 rounded-xl bg-[#F1ECE0] border border-[#CAD4C8] space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#15392A] block">
                Key Ingredient Profile:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.primaryRawMaterials.map((mat, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#1C221F] border border-[#CAD4C8]"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Variant Selector Tabs */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#1C221F] block mb-3">
                Select Manufacturing Grade Variant:
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {product.variants.map((v, index) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVariantIndex(index)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedVariantIndex === index
                        ? "bg-[#15392A] text-white border-[#15392A] shadow-md"
                        : "bg-[#F1ECE0] text-[#1C221F] border-[#CAD4C8] hover:border-[#15392A]"
                    }`}
                  >
                    <span className="font-bold text-sm block">{v.name}</span>
                    <span className={`text-[11px] block mt-0.5 ${selectedVariantIndex === index ? "text-[#DEAC4F]" : "text-[#5C6761]"}`}>
                      {v.gradeLabel}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Variant Details Card */}
            <div className="bg-[#F1ECE0] p-6 rounded-2xl border border-[#CAD4C8] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-[#15392A]">
                  Grade: {activeVariant.name} ({activeVariant.gradeLabel})
                </span>
                <span className="text-xs text-[#C69234] font-semibold uppercase">Active Selection</span>
              </div>

              <p className="text-xs sm:text-sm text-[#5C6761] leading-relaxed">
                {activeVariant.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                <div>
                  <span className="font-semibold text-[#1C221F] block">Target Herd:</span>
                  <span className="text-[#5C6761]">{activeVariant.idealFor}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#1C221F] block">Texture Specification:</span>
                  <span className="text-[#5C6761]">{activeVariant.textureDescription}</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp & Direct Contact Triggers */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getWhatsAppEnquiryUrl(product.name, activeVariant.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-[#15392A] hover:bg-[#20503B] shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Enquire about {activeVariant.name} on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-semibold text-[#15392A] bg-white hover:bg-[#F8F5EE] border border-[#CAD4C8] transition-colors"
              >
                <span>Bulk Commercial Quote</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Manufacturing & Handling Information */}
        <div className="mt-20 pt-12 border-t border-[#D5DED3] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F1ECE0] p-6 rounded-2xl border border-[#CAD4C8]">
            <Package className="w-8 h-8 text-[#15392A] mb-3" />
            <h4 className="font-editorial text-lg font-bold text-[#15392A] mb-2">
              Packaging & Shelf Integrity
            </h4>
            <p className="text-xs sm:text-sm text-[#5C6761] leading-relaxed">
              Dispatched in heavy-duty 50 kg multi-wall woven polypropylene sacks with moisture resistance to maintain freshness in dairy storehouses.
            </p>
          </div>

          <div className="bg-[#F1ECE0] p-6 rounded-2xl border border-[#CAD4C8]">
            <CheckCircle2 className="w-8 h-8 text-[#15392A] mb-3" />
            <h4 className="font-editorial text-lg font-bold text-[#15392A] mb-2">
              Batch Consistency
            </h4>
            <p className="text-xs sm:text-sm text-[#5C6761] leading-relaxed">
              Every production lot undergoes moisture screening and particle grading before bagging, ensuring cattle receive steady nutrition across repeated cycles.
            </p>
          </div>

          <div className="bg-[#F1ECE0] p-6 rounded-2xl border border-[#CAD4C8]">
            <Layers className="w-8 h-8 text-[#15392A] mb-3" />
            <h4 className="font-editorial text-lg font-bold text-[#15392A] mb-2">
              Future Backend Integration
            </h4>
            <p className="text-xs sm:text-sm text-[#5C6761] leading-relaxed">
              Architected to connect with enterprise production and stock tracking APIs in future development phases without requiring front-end alterations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
