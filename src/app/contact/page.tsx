import React from "react";
import { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Commercial Enquiries",
  description:
    "Get in touch with our feed manufacturing mill for bulk supply quotes, dealership terms, and product availability.",
};

export default function ContactPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <ContactSection />
    </div>
  );
}
