"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppEnquiryUrl } from "@/lib/whatsapp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProductsStickyShowcase() {
  const product1SectionRef = useRef<HTMLElement>(null);
  const product1Ref = useRef<HTMLDivElement>(null);
  const product1ImageRef = useRef<HTMLDivElement>(null);
  const product1TextRef = useRef<HTMLDivElement>(null);

  const product2SectionRef = useRef<HTMLElement>(null);
  const product2Ref = useRef<HTMLDivElement>(null);
  const product2ImageRef = useRef<HTMLDivElement>(null);
  const product2TextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Pinning: Product 1 pins so Product 2 scrolls over it, Product 2 pins so RawMaterials scrolls over it
      if (!prefersReducedMotion && !isMobile) {
        if (product1SectionRef.current && product2SectionRef.current) {
          ScrollTrigger.create({
            trigger: product1SectionRef.current,
            start: "top top",
            endTrigger: product2SectionRef.current,
            end: "top top",
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });

          ScrollTrigger.create({
            trigger: product2SectionRef.current,
            start: "top top",
            end: () => "+=" + Math.round(window.innerHeight * 1.8),
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });
        }
      }

      // PRODUCT 1: Maize Cattle Feed Reveal Animation
      // When the user moves the white torn paper to the top of the viewport,
      // it automatically activates the reveal animation for Product 1 (bowl swipes from left, text cascades down)
      if (
        product1Ref.current &&
        product1ImageRef.current &&
        product1TextRef.current
      ) {
        // Keep Product 1 hidden while the white section is scrolling over it
        gsap.set(product1Ref.current, { opacity: 0 });

        const text1Elements = product1TextRef.current.children;

        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: "#agricultural-icons-section",
            // Activates as soon as the white torn paper reaches the top of the viewport
            start: () => (isMobile ? "bottom 60%" : "bottom 80px"),
            toggleActions: "play none none reverse",
          },
        });

        // Make Product 1 container visible and trigger entrance animations
        tl1.set(product1Ref.current, { opacity: 1 });

        // Step 1: Product bowl swipes in from the left
        tl1.fromTo(
          product1ImageRef.current,
          {
            x: -120,
            opacity: 0,
            filter: "blur(6px)",
          },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
          }
        );

        // Step 2: Description reveals from top to bottom
        tl1.fromTo(
          text1Elements,
          {
            y: -30,
            opacity: 0,
            filter: "blur(4px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.55"
        );
      }

      // PRODUCT 2: Wheat Bran Cattle Feed Reveal Animation
      if (
        product2Ref.current &&
        product2ImageRef.current &&
        product2TextRef.current
      ) {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: product2Ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Step 1: Product image swipes in from the left to original intended position
        tl2.fromTo(
          product2ImageRef.current,
          {
            x: -130,
            opacity: 0,
            filter: "blur(6px)",
          },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power3.out",
          }
        );

        // Step 2: Description reveals from top to bottom with a staggered delay
        const text2Elements = product2TextRef.current.children;
        tl2.fromTo(
          text2Elements,
          {
            y: -35,
            opacity: 0,
            filter: "blur(4px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.55"
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full z-20 md:-mt-[100vh]">
      {/* ============================================================
          PRODUCT 1: MAIZE / MAKKA CATTLE FEED
          Static Background starts under AgriculturalIconsSection ->
          revealed as AgriculturalIconsSection peels away ->
          followed by swiping product image from left & top-to-bottom description
      ============================================================ */}
      <section
        ref={product1SectionRef}
        className="relative w-full min-h-screen z-20 overflow-hidden flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        {/* Static Background Image: Pins under section */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/products/maize-feed-bg.jpg"
            alt="Ambai Industries Maize Cattle Feed Mill Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          {/* Atmospheric dark contrast scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/65" />
        </div>

        {/* Upper Layer: Swipes in from left, text cascades top-to-bottom */}
        <div
          ref={product1Ref}
          className="relative z-10 max-w-7xl mx-auto w-full my-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Product Bowl Layer (swipes in from left) */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                ref={product1ImageRef}
                className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group will-change-transform"
              >
                <Image
                  src="/images/products/maize-bowl-layer.jpg"
                  alt="Terracotta bowl of golden cracked maize cattle feed"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold font-display bg-[#8B1A1A] text-white shadow-lg">
                    Energy Feed
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Description reveals from top to bottom */}
            <div
              ref={product1TextRef}
              className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left text-white will-change-transform"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#F5F0E8]/70 font-semibold font-body block mb-1.5">
                  Grain-Based Energy Nutrition
                </span>
                <h2
                  className="font-display font-bold text-white leading-tight mb-1 drop-shadow-md tracking-tight"
                  style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)" }}
                >
                  Maize Mash
                </h2>
                <p className="font-display font-semibold text-[#DEAC4F] text-lg sm:text-xl mb-3">
                  मका चुन्नी
                </p>
                <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Manufactured with premium quality yellow maize (makka) as the core carbohydrate and energy component, combined with complementary protein-rich grains. Grated and coarse-milled to optimal particle sizes to encourage steady rumen digestion, healthy body condition, and dependable daily milk yield.
                </p>
              </div>

              {/* 3 White Silhouette Feature Icons */}
              <div className="grid grid-cols-3 gap-4 pt-1 max-w-lg mx-auto lg:mx-0">
                {/* Icon 1: Clean Maize */}
                <div className="flex flex-col items-center text-center gap-2">
                  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="currentColor">
                    <ellipse cx="24" cy="28" rx="14" ry="9" />
                    <ellipse cx="38" cy="22" rx="6" ry="4.5" />
                    <circle cx="40" cy="20" r="1" fill="#08241A" />
                    <path d="M35 18 C33 14 31 13 30 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <rect x="14" y="35" width="3" height="9" rx="1.5" />
                    <rect x="20" y="35" width="3" height="9" rx="1.5" />
                    <rect x="27" y="35" width="3" height="9" rx="1.5" />
                    <rect x="33" y="35" width="3" height="9" rx="1.5" />
                  </svg>
                  <span className="font-display font-bold text-xs sm:text-sm text-white leading-tight">
                    100% Clean Maize
                  </span>
                </div>

                {/* Icon 2: Coarse Milled */}
                <div className="flex flex-col items-center text-center gap-2">
                  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="currentColor">
                    <polygon points="24,6 42,18 6,18" />
                    <rect x="9" y="18" width="30" height="24" rx="1.5" />
                    <rect x="20" y="28" width="8" height="14" rx="1" fill="#08241A" />
                    <rect x="13" y="22" width="6" height="6" rx="0.5" fill="#08241A" />
                    <rect x="29" y="22" width="6" height="6" rx="0.5" fill="#08241A" />
                  </svg>
                  <span className="font-display font-bold text-xs sm:text-sm text-white leading-tight">
                    Coarse Milled
                  </span>
                </div>

                {/* Icon 3: Triple Grades */}
                <div className="flex flex-col items-center text-center gap-2">
                  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="currentColor">
                    <rect x="12" y="16" width="24" height="26" rx="3" />
                    <path d="M16 16 C16 10 20 8 24 8 C28 8 32 10 32 16" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    <circle cx="24" cy="28" r="3" fill="#08241A" />
                  </svg>
                  <span className="font-display font-bold text-xs sm:text-sm text-white leading-tight">
                    Fine · Deluxe · Super
                  </span>
                </div>
              </div>

              {/* Actions: Pill Outline Button + WhatsApp */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href="/products/maize-makka-cattle-feed"
                  className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm text-white bg-transparent hover:bg-white hover:text-[#08241A] border-2 border-white transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  <span>View Product Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppEnquiryUrl("Maize Makka Cattle Feed")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SCROLL DELAY BUFFER:
          Creates breathing room between Product 1 and Product 2,
          allowing Product 1 to remain comfortably pinned and readable before
          Product 2's background starts scrolling up.
      ============================================================ */}
      <div
        className="hidden md:block h-[180vh] pointer-events-none"
        aria-hidden="true"
      />

      {/* ============================================================
          PRODUCT 2: WHEAT BRAN CATTLE FEED
          Scrolls ABOVE Product 1 when Product 1 description ends
      ============================================================ */}
      <section
        ref={product2SectionRef}
        className="relative w-full min-h-screen z-30 overflow-hidden flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 shadow-[0_-30px_70px_rgba(0,0,0,0.85)]"
      >
        {/* Background Image: Wheat Bran Milling */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/products/wheat-bran-bg.jpg"
            alt="Ambai Industries Wheat Bran Milling Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          {/* Atmospheric dark contrast scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/65" />
        </div>

        {/* Upper Layer: Swipes in from left, text cascades top-to-bottom */}
        <div
          ref={product2Ref}
          className="relative z-10 max-w-7xl mx-auto w-full my-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Product Bowl Layer (swipes in from left) */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                ref={product2ImageRef}
                className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group will-change-transform"
              >
                <Image
                  src="/images/products/wheat-bran-bowl-layer.jpg"
                  alt="Terracotta bowl of golden wheat bran flakes with dry wheat ears"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold font-display bg-[#8B1A1A] text-white shadow-lg">
                    Roughage Feed
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Description reveals from top to bottom */}
            <div
              ref={product2TextRef}
              className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left text-white will-change-transform"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#F5F0E8]/70 font-semibold font-body block mb-1.5">
                  Digestive Fibre Nutrition
                </span>
                <h2
                  className="font-display font-bold text-white leading-tight mb-1 drop-shadow-md tracking-tight"
                  style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)" }}
                >
                  Wheat Bran / Mash
                </h2>
                <p className="font-display font-semibold text-[#DEAC4F] text-lg sm:text-xl mb-3">
                  गहू भुसा
                </p>
                <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Produced from the nutrient-dense outer layers of carefully screened Indian wheat grain. Our wheat bran feed provides essential dietary fiber, natural bulk, and palatability to the daily dairy cattle ration. Air-cleaned to eliminate grit and foreign particles, ensuring clean, uniform flakes with dependable moisture levels.
                </p>
              </div>

              {/* 3 White Silhouette Feature Icons */}
              <div className="grid grid-cols-3 gap-4 pt-1 max-w-lg mx-auto lg:mx-0">
                {/* Icon 1: Wheat Flakes */}
                <div className="flex flex-col items-center text-center gap-2">
                  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="currentColor">
                    <ellipse cx="24" cy="24" rx="8" ry="18" opacity="0.9" />
                    <ellipse cx="14" cy="20" rx="5" ry="10" transform="rotate(-25 14 20)" opacity="0.75" />
                    <ellipse cx="34" cy="20" rx="5" ry="10" transform="rotate(25 34 20)" opacity="0.75" />
                    <line x1="24" y1="6" x2="24" y2="44" stroke="#08241A" strokeWidth="2" />
                  </svg>
                  <span className="font-display font-bold text-xs sm:text-sm text-white leading-tight">
                    Natural Wheat Flakes
                  </span>
                </div>

                {/* Icon 2: Cleaned Purity */}
                <div className="flex flex-col items-center text-center gap-2">
                  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="currentColor">
                    <path d="M24 6 L38 12 L38 24 C38 33 24 40 24 40 C24 40 10 33 10 24 L10 12 Z" />
                    <polyline points="18,24 22,28 30,19" stroke="#08241A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-display font-bold text-xs sm:text-sm text-white leading-tight">
                    Air-Cleaned Purity
                  </span>
                </div>

                {/* Icon 3: Triple Grades */}
                <div className="flex flex-col items-center text-center gap-2">
                  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="currentColor">
                    <rect x="12" y="16" width="24" height="26" rx="3" />
                    <path d="M16 16 C16 10 20 8 24 8 C28 8 32 10 32 16" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    <circle cx="24" cy="28" r="3" fill="#08241A" />
                  </svg>
                  <span className="font-display font-bold text-xs sm:text-sm text-white leading-tight">
                    Fine · Deluxe · Super
                  </span>
                </div>
              </div>

              {/* Actions: Pill Outline Button + WhatsApp */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href="/products/wheat-bran-cattle-feed"
                  className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm text-white bg-transparent hover:bg-white hover:text-[#08241A] border-2 border-white transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  <span>View Product Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppEnquiryUrl("Wheat Bran Cattle Feed")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SCROLL DELAY BUFFER:
          Allows Product 2 (Wheat Bran) to remain comfortably pinned
          and readable before RawMaterialsSection white header sweeps upward over it.
      ============================================================ */}
      <div
        className="hidden md:block h-[180vh] pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
