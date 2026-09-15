import { companyData } from "@/data/company";

export function getWhatsAppEnquiryUrl(productName?: string, variantName?: string): string {
  let message = `Hello ${companyData.name}, I am interested in your cattle feed manufacturing products.`;
  
  if (productName && variantName) {
    message = `Hello ${companyData.name}, I would like to enquire about "${productName}" (${variantName} variant) for my dairy/business. Please share supply details and availability.`;
  } else if (productName) {
    message = `Hello ${companyData.name}, I would like to enquire about "${productName}". Please provide more information on bulk supply and specifications.`;
  } else {
    message = `Hello ${companyData.name}, I came across your website and would like to connect regarding feed supply and dealership opportunities.`;
  }

  return `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getDealerWhatsAppUrl(): string {
  const message = `Hello ${companyData.name}, I am a cattle-feed distributor/retailer interested in dealership and wholesale supply terms. Please share details.`;
  return `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
