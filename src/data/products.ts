export interface ProductVariant {
  id: string;
  name: "Fine" | "Deluxe" | "Super Deluxe";
  gradeLabel: string;
  description: string;
  idealFor: string;
  textureDescription: string;
  packagingOptions: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  keyHighlights: string[];
  image: string;
  gallery: string[];
  primaryRawMaterials: string[];
  variants: ProductVariant[];
  featured: boolean;
  showOnWebsite: boolean;
  badge?: string;
}

export const productsData: Product[] = [
  {
    id: "prod-01",
    slug: "maize-makka-cattle-feed",
    name: "Maize / Makka Cattle Feed",
    hindiName: "मक्का पशु आहार",
    category: "Grain-Based Energy Feed",
    badge: "High Energy Mash",
    shortDescription:
      "A cattle-feed product manufactured using carefully selected feed ingredients and a controlled formulation process.",
    fullDescription:
      "Manufactured with premium quality yellow maize (makka) as the core carbohydrate and energy component, combined with complementary protein-rich feed ingredients. Grated and coarse-milled to optimal particle sizes to encourage steady digestion and herd vitality. Each batch is blended under controlled processing conditions to maintain texture consistency.",
    keyHighlights: [
      "Manufactured with carefully selected cleaned maize (makka)",
      "Coarse-ground particle distribution designed for dairy cattle digestion",
      "Controlled blending process ensuring batch-to-batch consistency",
      "Available in Fine, Deluxe, and Super Deluxe manufacturing variants",
      "Supplied in breathable, heavy-duty 50 kg multi-wall woven bags"
    ],
    image: "/images/products/maize-feed.jpg",
    gallery: [
      "/images/products/maize-feed.jpg",
      "/images/raw-materials/materials-spread.jpg",
      "/images/manufacturing/bagging-line.jpg"
    ],
    primaryRawMaterials: ["Yellow Maize (Makka)", "Wheat", "DDG", "Bran"],
    variants: [
      {
        id: "var-maize-fine",
        name: "Fine",
        gradeLabel: "Standard Daily Mash",
        description:
          "Finely milled grain blend providing an easily palatable feed component, suitable for routine daily feeding schedules.",
        idealFor: "General cattle maintenance and mixed dry ration feeding",
        textureDescription: "Uniform fine-to-medium mash with minimal powdery residue",
        packagingOptions: ["50 kg Woven Sacks", "Bulk Dispatch on Enquiry"]
      },
      {
        id: "var-maize-deluxe",
        name: "Deluxe",
        gradeLabel: "Enhanced Balanced Formulation",
        description:
          "Formulated with an enhanced proportion of high-grade cracked maize and select complementary grains for active lactating dairy cattle.",
        idealFor: "Lactating cows and buffaloes with moderate to high yield routines",
        textureDescription: "Coarse cracked grain particles combined with balanced meal",
        packagingOptions: ["50 kg Woven Sacks", "Palletized Truckload"]
      },
      {
        id: "var-maize-super-deluxe",
        name: "Super Deluxe",
        gradeLabel: "Premium Grade Heavy Grain Blend",
        description:
          "Our highest manufacturing tier, combining premium selected dense maize grain fractions with superior grade milling control.",
        idealFor: "High-producing dairy herds, indigenous Gir breeds, and commercial dairy units",
        textureDescription: "Evenly textured coarse grain crumble with optimal palatability",
        packagingOptions: ["50 kg Moisture-Resistant Sacks", "Palletized Truckload"]
      }
    ],
    featured: true,
    showOnWebsite: true
  },
  {
    id: "prod-02",
    slug: "wheat-bran-cattle-feed",
    name: "Wheat Bran Cattle Feed",
    hindiName: "गेहूं चोकर पशु आहार",
    category: "Fibre & Digestion Feed",
    badge: "Natural Flake Bran",
    shortDescription:
      "A cattle-feed product based around wheat-bran ingredients and manufactured for consistent quality.",
    fullDescription:
      "Produced from the nutrient-dense outer layers of carefully screened Indian wheat grain. Our wheat bran feed provides essential dietary fiber, natural bulk, and palatability to the daily dairy cattle ration. Carefully processed to remove foreign particles and ensure clean, uniform flakes with dependable moisture levels.",
    keyHighlights: [
      "Natural fiber-rich cattle feed derived from wholesome wheat milling",
      "Soft, palatable flakes that promote healthy rumen functioning",
      "Screened and air-cleaned to eliminate grit and foreign material",
      "Easily blended with green fodder, dry straw, or cereal mashes",
      "Manufactured in Fine, Deluxe, and Super Deluxe particle grades"
    ],
    image: "/images/products/wheat-bran.jpg",
    gallery: [
      "/images/products/wheat-bran.jpg",
      "/images/raw-materials/materials-spread.jpg",
      "/images/manufacturing/facility-interior.jpg"
    ],
    primaryRawMaterials: ["Clean Indian Wheat", "Wheat Bran Flakes", "Atta fractions"],
    variants: [
      {
        id: "var-bran-fine",
        name: "Fine",
        gradeLabel: "Fine Flake Grade",
        description:
          "Light, finely flaked wheat bran that blends smoothly into soaked rations and mixed grain preparations.",
        idealFor: "Mixing into liquid or semi-liquid feed gruel, young cattle rations",
        textureDescription: "Delicate, light flakes with soft consistency",
        packagingOptions: ["50 kg Standard Bags", "Bulk Bags"]
      },
      {
        id: "var-bran-deluxe",
        name: "Deluxe",
        gradeLabel: "Broad Flake Standard",
        description:
          "Medium-to-large broad flake wheat bran offering superior bulk volume, clean aroma, and excellent rumen fill.",
        idealFor: "Daily roughage balancing for milking buffaloes and dairy cows",
        textureDescription: "Golden-brown broad flakes with high fluff and volume",
        packagingOptions: ["50 kg Standard Bags", "Palletized Truckload"]
      },
      {
        id: "var-bran-super-deluxe",
        name: "Super Deluxe",
        gradeLabel: "Selected Coarse Pure Flake",
        description:
          "Specially screened, dense broad-flake wheat bran with maximum purity, free of dust, offering consistent feed volume and superior palatability.",
        idealFor: "Premium commercial dairy farms and dedicated cattle breeding facilities",
        textureDescription: "Extra-clean broad golden flakes with rich natural texture",
        packagingOptions: ["50 kg Premium Woven Bags", "Full Truckload Dispatch"]
      }
    ],
    featured: true,
    showOnWebsite: true
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return productsData.filter((p) => p.showOnWebsite);
}
