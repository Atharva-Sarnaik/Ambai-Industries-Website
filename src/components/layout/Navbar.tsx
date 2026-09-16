"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { companyData } from "@/data/company";
import KisanDharaBrandmark from "@/components/ui/KisanDharaBrandmark";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // All pages have hero images — always start transparent, become solid on scroll
  const isHeroPage = true;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // On hero pages (Home & About) when not scrolled: transparent background, large white logo & text
  // On scroll or other pages: solid warm glass backdrop, compact burgundy-red logo & text
  const isTransparent = isHeroPage && !isScrolled && !mobileMenuOpen;

  return (
    <>
      <header
        className={`z-[100] w-full transition-all duration-300 ${
        isHeroPage
          ? (isScrolled || mobileMenuOpen)
            ? "fixed top-0 left-0 right-0 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#E6DEC9] shadow-sm py-2.5 sm:py-3"
            : "absolute top-0 left-0 right-0 bg-transparent border-none py-5 sm:py-6"
          : (isScrolled || mobileMenuOpen)
          ? "sticky top-0 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#E6DEC9] shadow-sm py-2.5 sm:py-3"
          : "sticky top-0 bg-[#FAF6EE]/90 backdrop-blur-md border-b border-[#E6DEC9]/40 py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Nav: Left Links | Center Large Redesigned Logo | Right Location & Phone */}
        <div className="flex items-center justify-between">

          {/* LEFT: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 flex-1">
            <Link
              href="/products"
              className={`text-base font-bold tracking-wide transition-colors duration-200 font-display ${
                isTransparent
                  ? "text-white hover:text-white/80 drop-shadow-md"
                  : "text-[#8B1A1A] hover:text-[#6B1212]"
              }`}
            >
              Products
            </Link>

            <Link
              href="/about"
              className={`text-base font-bold tracking-wide transition-colors duration-200 font-display ${
                isTransparent
                  ? "text-white hover:text-white/80 drop-shadow-md"
                  : "text-[#8B1A1A] hover:text-[#6B1212]"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`text-base font-bold tracking-wide transition-colors duration-200 font-display ${
                isTransparent
                  ? "text-white hover:text-white/80 drop-shadow-md"
                  : "text-[#8B1A1A] hover:text-[#6B1212]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* MOBILE LEFT SPACER (balances the right-side icons so the logo stays centered on mobile) */}
          <div className="flex md:hidden flex-1" />

          {/* CENTER: Redesigned Brand Logo (Large White at Landing -> Compact Burgundy-Red when Scrolled) */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Ambai Industries Home"
            className="flex items-center justify-center group flex-shrink-0 mx-auto md:mx-0 relative z-10 cursor-pointer"
          >
            <KisanDharaBrandmark
              isCompact={isScrolled}
              className={`transition-all duration-300 ease-out ${
                isTransparent
                  ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:brightness-110"
                  : "text-[#8B1A1A] group-hover:text-[#6B1212]"
              }`}
            />
          </Link>

          {/* RIGHT: Location & Phone (White at Landing -> Burgundy-Red when Scrolled, NO WhatsApp) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-end">
            {/* Location Link */}
            <Link
              href="/contact#location"
              className={`flex items-center gap-1.5 text-base font-bold tracking-wide transition-colors duration-200 font-display ${
                isTransparent
                  ? "text-white hover:text-white/80 drop-shadow-md"
                  : "text-[#8B1A1A] hover:text-[#6B1212]"
              }`}
            >
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Location</span>
            </Link>

            {/* Direct Telephone Contact */}
            <a
              href={`tel:${companyData.phone}`}
              className={`flex items-center gap-1.5 text-base font-bold tracking-wide transition-colors duration-200 font-display ${
                isTransparent
                  ? "text-white hover:text-white/80 drop-shadow-md"
                  : "text-[#8B1A1A] hover:text-[#6B1212]"
              }`}
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>{companyData.displayPhone}</span>
            </a>
          </div>

          {/* MOBILE: Quick Action & Hamburger */}
          <div className="flex md:hidden items-center justify-end gap-3 flex-1">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isTransparent ? "text-white" : "text-[#8B1A1A]"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      </header>

      {/* Mobile Drawer (Full Screen Takeover) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-[95] bg-[#FAF6EE] pt-[140px] px-6 pb-8 overflow-y-auto flex flex-col"
          >
            <div className="flex flex-col space-y-2 flex-1">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About" },
                { href: "/quality", label: "Quality Standards" },
                { href: "/contact", label: "Contact" },
                { href: "/contact#location", label: "Location" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-3.5 rounded-xl text-base font-bold font-display transition-all flex items-center justify-between group ${
                    pathname === link.href
                      ? "bg-[#8B1A1A] text-white shadow-md"
                      : "text-[#1A1A1A] hover:bg-[#EDE7D9] bg-white shadow-sm border border-[#E6DEC9]/60"
                  }`}
                >
                  {link.label}
                  <span className={`text-sm opacity-40 group-hover:translate-x-1 transition-transform ${pathname === link.href ? "text-white opacity-80" : ""}`}>
                    →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-center text-[#8B1A1A] font-bold text-xs tracking-widest uppercase">
                Direct Contact
              </p>
              <a
                href={`tel:${companyData.phone}`}
                className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-[#8B1A1A] text-white font-bold text-base font-display shadow-lg hover:bg-[#6B1212] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call {companyData.displayPhone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
