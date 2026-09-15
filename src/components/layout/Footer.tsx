import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { companyData } from "@/data/company";
import { productsData } from "@/data/products";
import { getWhatsAppEnquiryUrl, getDealerWhatsAppUrl } from "@/lib/whatsapp";

import TornEdgeLight from "@/components/ui/TornEdgeLight";

export default function Footer() {
  return (
    <footer className="relative w-full" style={{ zIndex: 90 }}>
      {/* ===== AUTHENTIC TORN PAPER EDGE — into Burgundy Footer ===== */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none -translate-y-[98%] w-full overflow-hidden leading-none">
        <TornEdgeLight
          fillColor="#8B1A1A"
          heightClass="h-16 sm:h-20 md:h-24"
          className="w-full"
        />
      </div>

      {/* ===== BURGUNDY RED FOOTER BODY ===== */}
      <div className="bg-[#8B1A1A] text-white">
        {/* Top Banner: WhatsApp Quick Connect */}
        <div className="border-b border-white/15 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <p className="font-display font-bold text-lg text-white">Direct Feed Enquiries & Bulk Orders</p>
                <p className="font-body text-xs text-white/60">Connect on WhatsApp for instant assistance.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={getDealerWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-[#8B1A1A] bg-white hover:bg-[#F5F0E8] transition-colors shadow-sm"
              >
                Dealer / Bulk Enquiry
              </a>
              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

            {/* Col 1 & 2: Brand Identity */}
            <div className="lg:col-span-2 space-y-5">
              {/* White windmill logo + name (like BBF's white footer logo) */}
              <Link href="/" className="inline-flex flex-col items-start gap-1">
                {/* Farm/Windmill SVG logo — white version for footer */}
                <svg viewBox="0 0 120 60" className="w-32 h-16" fill="white">
                  {/* Rolling hills */}
                  <path d="M0,48 Q30,30 60,40 Q90,50 120,35 L120,60 L0,60 Z" opacity="0.25"/>
                  {/* Barn */}
                  <rect x="52" y="30" width="16" height="14" rx="1"/>
                  <path d="M50,30 L60,22 L70,30 Z"/>
                  {/* Silo */}
                  <rect x="70" y="32" width="7" height="12" rx="3"/>
                  <ellipse cx="73.5" cy="32" rx="3.5" ry="2"/>
                  {/* Windmill */}
                  <rect x="30" y="26" width="2.5" height="18" rx="1"/>
                  <path d="M31 26 L28 20 L31 23 Z"/>
                  <path d="M31 26 L37 24 L34 27 Z"/>
                  <path d="M31 26 L34 31 L31 29 Z"/>
                  <path d="M31 26 L25 28 L28 25 Z"/>
                  <circle cx="31" cy="26" r="2"/>
                  {/* Trees */}
                  <ellipse cx="15" cy="38" rx="8" ry="10"/>
                  <rect x="13.5" y="46" width="3" height="6"/>
                  <ellipse cx="108" cy="36" rx="7" ry="9"/>
                  <rect x="106.5" y="43" width="3" height="8"/>
                  {/* Brand name */}
                  <text x="60" y="57" textAnchor="middle" fontSize="7.5" fontFamily="Fredoka, sans-serif" fontWeight="600" letterSpacing="0.5">
                    AMBAI INDUSTRIES
                  </text>
                </svg>
              </Link>

              <p className="font-body text-sm text-white/65 leading-relaxed max-w-xs">
                {companyData.shortDescription}
              </p>

              <div className="font-body text-xs text-white/45 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>{companyData.foundedNote}</span>
              </div>
            </div>

            {/* Col 3: Useful Links */}
            <div>
              <h3 className="font-display font-bold text-sm text-white uppercase tracking-widest mb-5">
                Useful Links
              </h3>
              <ul className="space-y-2.5 font-body text-sm">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About the Mill" },
                  { href: "/products", label: "Products" },
                  { href: "/quality", label: "Quality & Process" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/65 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Info */}
            <div>
              <h3 className="font-display font-bold text-sm text-white uppercase tracking-widest mb-5">
                Contact Info
              </h3>
              <div className="space-y-3 font-body text-sm text-white/65">
                <div>
                  <a href={`tel:${companyData.phone}`} className="hover:text-white transition-colors font-semibold text-white text-base block">
                    {companyData.displayPhone}
                  </a>
                </div>
                <div>
                  <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors break-all">
                    {companyData.email}
                  </a>
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-white text-xs uppercase tracking-wider mb-1">Location</p>
                  <p className="leading-relaxed">
                    {companyData.address.line1}, {companyData.address.line2},<br/>
                    {companyData.address.state} - {companyData.address.postalCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Col 5: Products */}
            <div>
              <h3 className="font-display font-bold text-sm text-white uppercase tracking-widest mb-5">
                Our Products
              </h3>
              <ul className="space-y-3 font-body text-sm">
                {productsData.map((prod) => (
                  <li key={prod.id}>
                    <Link
                      href={`/products/${prod.slug}`}
                      className="text-white/65 hover:text-white transition-colors font-semibold block"
                    >
                      {prod.name}
                    </Link>
                    <span className="font-body text-[11px] text-white/40 block mt-0.5">
                      Fine · Deluxe · Super Deluxe
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between font-body text-xs text-white/40 gap-3">
            <p>© {new Date().getFullYear()} {companyData.name}. All rights reserved.</p>
            <p>Made with care for Indian Dairy Farmers & Distributors</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
