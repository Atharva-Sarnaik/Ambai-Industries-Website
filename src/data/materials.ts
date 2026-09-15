export interface RawMaterial {
  id: string;
  name: string;
  localName: string;
  category: "Energy Cereal" | "Fibre Source" | "Protein & By-Product" | "Binding & Grain Fraction";
  description: string;
  selectionCriteria: string;
  roleInFeed: string;
  image: string;
}

export const rawMaterialsData: RawMaterial[] = [
  {
    id: "mat-maize",
    name: "Yellow Maize",
    localName: "Makka (मक्का)",
    category: "Energy Cereal",
    description:
      "Carefully screened whole yellow maize kernels sourced from reputed agricultural grain mandis, thoroughly pre-cleaned to remove dirt, cob chaff, and field dust.",
    selectionCriteria: "Dry, clean, mould-free kernels with strict moisture monitoring below standard storage thresholds.",
    roleInFeed: "Primary energy contributor providing easily digestible carbohydrates for herd vitality and daily activity.",
    image: "/images/raw-materials/yellow-maize.jpg"
  },
  {
    id: "mat-wheat",
    name: "Wholesome Wheat",
    localName: "Gehun (गेहूं)",
    category: "Energy Cereal",
    description:
      "Locally harvested sound wheat grains selected for consistent grain density, high natural gluten, and clean milling characteristics.",
    selectionCriteria: "Plump grains free from weevil infestation, foreign seeds, and field contaminants.",
    roleInFeed: "Supplies balanced starch and natural grain proteins essential for balanced dairy nutrition.",
    image: "/images/raw-materials/wholesome-wheat.jpg"
  },
  {
    id: "mat-jowar",
    name: "Sorghum",
    localName: "Jowar (ज्वार)",
    category: "Energy Cereal",
    description:
      "Traditional drought-hardy millet grain known for its clean digestion profile, low glycemic index, and adaptability in Indian dairy diets.",
    selectionCriteria: "Uniform, pale-cream mature grain kernels with low moisture and clean aroma.",
    roleInFeed: "Complementary energy grain that supports sustained rumen digestion and balanced gut health.",
    image: "/images/raw-materials/sorghum-jowar.jpg"
  },
  {
    id: "mat-ddg",
    name: "DDG (Distillers Dried Grains)",
    localName: "डी.डी.जी. प्रोटीन घटक",
    category: "Protein & By-Product",
    description:
      "A nutrient-concentrated co-product obtained from controlled grain processing, rich in residual proteins, yeast metabolites, and phosphorus.",
    selectionCriteria: "Consistent golden-amber colour, sweet fresh aroma, and absence of burnt or caked particles.",
    roleInFeed: "Contributes valuable bypass protein and essential organic nutrients for lactating dairy animals.",
    image: "/images/raw-materials/ddg-protein.jpg"
  },
  {
    id: "mat-bran",
    name: "Wheat Bran",
    localName: "Chokar / Bran (चोकर)",
    category: "Fibre Source",
    description:
      "The nutrient-packed outer pericarp of wheat grain, separated during pneumatic roller milling to produce clean, broad, fluffy flakes.",
    selectionCriteria: "Clean, fresh, dry flakes with high bulk volume, zero dampness, and neutral natural cereal fragrance.",
    roleInFeed: "Vital source of digestible dietary fiber that aids rumen motility, prevents compaction, and improves feed palatability.",
    image: "/images/raw-materials/wheat-bran.jpg"
  },
  {
    id: "mat-kopad",
    name: "Kopad (Cottonseed Cake)",
    localName: "Kopad / Khol (कोपड / खली)",
    category: "Protein & By-Product",
    description:
      "Mechanically pressed oil cake derived from cleaned whole cottonseeds, traditionally valued by Indian dairy farmers for herd sustenance.",
    selectionCriteria: "Well-cured, firm cakes with characteristic nutty aroma, free from damp smell, mold, or adulterants.",
    roleInFeed: "Provides valuable vegetable protein, natural residual oil fractions, and energy density for lactating cattle.",
    image: "/images/raw-materials/cottonseed-cake.jpg"
  },
  {
    id: "mat-atta",
    name: "Wheat Atta Fractions",
    localName: "Atta (आटा घटक)",
    category: "Binding & Grain Fraction",
    description:
      "Fine cereal flour fractions used to achieve balanced particle adhesion and smooth mash consistency during controlled batch mixing.",
    selectionCriteria: "Clean, sifted flour fractions free from lumps, off-odors, or dampness.",
    roleInFeed: "Acts as a natural nutritional binder, enhancing texture uniformity and intake appeal.",
    image: "/images/raw-materials/wheat-atta.jpg"
  }
];
