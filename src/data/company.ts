export interface CompanyInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  foundedNote: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  displayWhatsApp: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    region: string;
    state: string;
    country: string;
    postalCode: string;
  };
  businessHours: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export const companyData: CompanyInfo = {
  name: "Ambai Industries",
  tagline: "Quality Feed. Built with Care.",
  shortDescription:
    "An Indian cattle-feed manufacturing enterprise dedicated to consistent, high-standard nutrition for dairy herds through carefully selected raw grains and controlled milling processes.",
  foundedNote: "Committed to the Indian Dairy & Agricultural Community",
  phone: "+919822012345",
  displayPhone: "+91 98220 12345",
  whatsappNumber: "919822012345",
  displayWhatsApp: "+91 98220 12345",
  email: "enquiry@ambaiindustries.com",
  address: {
    line1: "Plot No. 42, Agro-Industrial Growth Centre",
    line2: "Industrial Processing Zone, Station Road",
    region: "Western Region",
    state: "Maharashtra",
    country: "India",
    postalCode: "413001",
  },
  businessHours: "Monday to Saturday: 8:00 AM – 7:00 PM IST",
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};
