import type { Metadata } from "next";
import { Nunito, Raleway } from "next/font/google";
import "./globals.css";
import { companyData } from "@/data/company";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Nunito — rounded, chunky farm-brand display font matching the BBF reference headline style
const nunito = Nunito({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

// Raleway — clean readable body font
const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${companyData.name}`,
    default: `${companyData.name} — Quality Cattle Feed Manufacturing`,
  },
  description:
    "Leading Indian cattle-feed manufacturer producing quality Maize Cattle Feed and Wheat Bran Cattle Feed with carefully selected raw grains and controlled milling consistency.",
  keywords: [
    "cattle feed manufacturer",
    "cattle feed manufacturer in India",
    "maize cattle feed",
    "makka cattle feed",
    "wheat bran cattle feed",
    "dairy cattle nutrition",
    "feed distributor India",
  ],
  authors: [{ name: companyData.name }],
  metadataBase: new URL("https://ambaiindustries.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ambaiindustries.com",
    title: `${companyData.name} — Quality Cattle Feed Manufacturing`,
    description: companyData.shortDescription,
    siteName: companyData.name,
    images: [
      {
        url: "/images/hero/hero-mill.jpg",
        width: 1200,
        height: 675,
        alt: `${companyData.name} Manufacturing Facility`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${raleway.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#8B1A1A]/20 selection:text-[#0D4B34] bg-[#F5F0E8] text-[#1A1A1A]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
