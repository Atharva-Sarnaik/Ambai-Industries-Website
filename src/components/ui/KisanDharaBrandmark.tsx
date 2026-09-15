import React from "react";

interface KisanDharaBrandmarkProps {
  className?: string;
  isCompact?: boolean;
}

export default function KisanDharaBrandmark({
  className = "",
  isCompact = false,
}: KisanDharaBrandmarkProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center transition-all duration-300 ease-out select-none ${className} ${
        isCompact
          ? "scale-85 sm:scale-90"
          : "scale-100 sm:scale-105 md:scale-110"
      }`}
    >
      <svg
        viewBox="0 0 320 100"
        className="w-auto h-12 sm:h-14 md:h-16 max-w-[280px] sm:max-w-[320px] transition-all duration-300"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ============================================================
            1. UPPER RURAL FARM & MILL SCENERY (Windmill, Silos, Barn, Cattle, Trees)
        ============================================================ */}
        <g id="farm-elements">
          {/* Windmill (Left) */}
          <g id="windmill" transform="translate(68, 14)">
            {/* Lattice Tower */}
            <path
              d="M10 32 L15 12 L19 12 L24 32 Z"
              fill="currentColor"
              opacity="0.95"
            />
            {/* Tower inner struts */}
            <line x1="12" y1="26" x2="22" y2="26" stroke="#000" strokeWidth="0.8" opacity="0.25" />
            <line x1="13" y1="20" x2="21" y2="20" stroke="#000" strokeWidth="0.8" opacity="0.25" />
            <line x1="14" y1="15" x2="20" y2="15" stroke="#000" strokeWidth="0.8" opacity="0.25" />
            {/* Windmill Hub */}
            <circle cx="17" cy="11" r="2" fill="currentColor" />
            {/* 4 Windmill Vanes */}
            <path d="M17 11 L15 -2 L18 -2 Z" fill="currentColor" />
            <path d="M17 11 L30 10 L30 13 Z" fill="currentColor" />
            <path d="M17 11 L19 24 L16 24 Z" fill="currentColor" />
            <path d="M17 11 L4 12 L4 9 Z" fill="currentColor" />
          </g>

          {/* Cattle silhouette (Desi Gir cow with hump grazing on left slope) */}
          <g id="grazing-cattle" transform="translate(108, 28) scale(0.65)">
            <path
              d="M4 14 C4 10 7 7 12 7 C14 5 17 3 20 4 C23 5 24 7 27 7 C31 7 35 10 37 13 L37 22 L34 22 L34 16 L27 16 L27 22 L24 22 L24 16 L17 16 L17 22 L14 22 L14 15 C10 15 7 17 4 19 Z"
              fill="currentColor"
            />
            {/* Gir Cow Prominent Hump */}
            <ellipse cx="19" cy="5" rx="3.5" ry="2.5" fill="currentColor" />
          </g>

          {/* Central Grain Silo & Processing Barn */}
          <g id="mill-barn" transform="translate(136, 12)">
            {/* Grain Silo (Domed cylinder) */}
            <path
              d="M6 34 L6 12 C6 6 18 6 18 12 L18 34 Z"
              fill="currentColor"
            />
            {/* Silo Dome Roof */}
            <path
              d="M5 12 C5 4 19 4 19 12 Z"
              fill="currentColor"
            />
            {/* Silo Ribs */}
            <line x1="6" y1="18" x2="18" y2="18" stroke="#000" strokeWidth="0.6" opacity="0.2" />
            <line x1="6" y1="24" x2="18" y2="24" stroke="#000" strokeWidth="0.6" opacity="0.2" />

            {/* Main Processing Barn (Gabled building) */}
            <path
              d="M20 34 L20 18 L34 10 L48 18 L48 34 Z"
              fill="currentColor"
            />
            {/* Barn Gable Trim */}
            <polygon points="34,7 18,17 19,19 34,10 49,19 50,17" fill="currentColor" />
            {/* Barn Doors */}
            <rect x="30" y="24" width="8" height="10" fill="#000" opacity="0.25" rx="0.5" />
            {/* Cupola on roof */}
            <rect x="32" y="4" width="4" height="4" fill="currentColor" />
            <polygon points="34,1 31,4 37,4" fill="currentColor" />
          </g>

          {/* Rural Canopy Trees (Right) */}
          <g id="trees" transform="translate(198, 22)">
            {/* Tree 1 (Taller) */}
            <circle cx="12" cy="12" r="7.5" fill="currentColor" />
            <rect x="11" y="18" width="2" height="8" fill="currentColor" />
            {/* Tree 2 (Smaller) */}
            <circle cx="23" cy="15" r="5.5" fill="currentColor" />
            <rect x="22" y="19" width="1.8" height="7" fill="currentColor" />
          </g>
        </g>

        {/* ============================================================
            2. CONVEX HILL MOUND & RADIATING FURROWED FIELD RAYS
        ============================================================ */}
        <g id="plowed-fields">
          {/* Base rolling mound holding the farm buildings */}
          <path
            d="M50 48 Q160 33 270 48 L270 52 Q160 37 50 52 Z"
            fill="currentColor"
          />

          {/* Radiating furrow arches with clean negative space channels */}
          {/* Layer 1: Inner Furrow Arc */}
          <path
            d="M60 55 Q160 41 260 55 L258 58 Q160 44 62 58 Z"
            fill="currentColor"
          />

          {/* Layer 2: Main Furrow Ribs (Sunburst agricultural fields) */}
          {/* Symmetrical radiating field segments */}
          <path d="M72 58 L66 68 Q80 66 94 65 L96 56 Q84 57 72 58 Z" fill="currentColor" />
          <path d="M104 55 L104 65 Q120 64 136 64 L134 54 Q119 54 104 55 Z" fill="currentColor" />
          <path d="M144 54 L146 64 Q160 63.5 174 64 L176 54 Q160 53.5 144 54 Z" fill="currentColor" />
          <path d="M184 54 L186 64 Q202 65 218 66 L216 56 Q200 55 184 54 Z" fill="currentColor" />
          <path d="M226 57 L228 66 Q242 68 256 70 L250 60 Q238 58 226 57 Z" fill="currentColor" />
        </g>

        {/* ============================================================
            3. BRAND TYPOGRAPHY (Prominent uppercase name & subtitle)
        ============================================================ */}
        <g id="brand-text">
          {/* Main Brand Name */}
          <text
            x="160"
            y="82"
            textAnchor="middle"
            fontFamily="'Cinzel', 'Outfit', 'Montserrat', sans-serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="0.16em"
            fill="currentColor"
          >
            AMBAI INDUSTRIES
          </text>

          {/* Subtitle / Category Descriptor */}
          <text
            x="160"
            y="94"
            textAnchor="middle"
            fontFamily="'Outfit', 'Inter', sans-serif"
            fontWeight="700"
            fontSize="7.5"
            letterSpacing="0.26em"
            fill="currentColor"
            opacity="0.9"
          >
            CATTLE FEED MANUFACTURING
          </text>
        </g>
      </svg>
    </div>
  );
}
