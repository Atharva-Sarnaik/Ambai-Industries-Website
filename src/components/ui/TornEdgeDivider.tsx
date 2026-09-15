"use client";

import React from "react";

export type TornEdgeVariant =
  | "torn-paper-light"
  | "torn-paper-dark"
  | "paint-brush-edge"
  | "deckle-rag";

interface TornEdgeDividerProps {
  variant?: TornEdgeVariant;
  fillColor?: string;
  secondaryFillColor?: string;
  flipHorizontal?: boolean;
  overlapHeight?: string; // e.g., "h-24 sm:h-32 md:h-36"
  className?: string;
}

export default function TornEdgeDivider({
  variant = "torn-paper-light",
  fillColor = "#F5F0E8",
  secondaryFillColor,
  flipHorizontal = false,
  overlapHeight = "h-24 sm:h-32 md:h-36",
  className = "",
}: TornEdgeDividerProps) {
  // Default secondary fill creates a subtle natural torn paper shadow/lip
  const secondaryColor =
    secondaryFillColor ||
    (fillColor === "#F5F0E8" ? "#E8DFD0" : fillColor === "#08241A" ? "#0D3828" : undefined);

  return (
    <div
      className={`absolute top-0 left-0 right-0 pointer-events-none -translate-y-[95%] w-full overflow-hidden leading-none z-20 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className={`w-full ${overlapHeight} block transition-transform ${
          flipHorizontal ? "-scale-x-100" : ""
        }`}
      >
        {variant === "torn-paper-light" && (
          <>
            {/* Secondary Layer: Backing torn fiber lip for physical paper depth */}
            {secondaryColor && (
              <path
                d="M0,160 L0,58 Q35,74 72,50 Q115,32 154,62 Q200,82 245,46 Q280,30 325,58 Q370,82 418,48 Q465,34 510,64 Q560,86 612,42 Q660,26 708,56 Q755,78 805,44 Q852,30 898,62 Q945,84 996,46 Q1045,28 1092,58 Q1140,82 1190,44 Q1240,28 1288,58 Q1335,80 1386,46 Q1415,36 1440,52 L1440,160 Z"
                fill={secondaryColor}
                opacity="0.8"
              />
            )}
            {/* Primary Layer: Authentic Jagged Irregular Torn Paper Edge */}
            <path
              d="M0,160 L0,72 
                 Q18,84 38,68 Q58,54 78,74 Q96,92 116,66 Q138,48 160,70 Q182,88 204,62 Q226,44 248,66 Q272,86 295,58 Q318,38 340,64 Q364,88 388,58 Q412,36 435,62 Q458,84 482,54 Q506,32 530,60 Q554,82 578,52 Q602,30 626,58 Q650,80 674,48 Q698,28 722,56 Q746,78 770,46 Q794,26 818,54 Q842,76 866,44 Q890,24 914,52 Q938,74 962,42 Q986,22 1010,50 Q1034,72 1058,40 Q1082,20 1106,48 Q1130,70 1154,38 Q1178,18 1202,46 Q1226,68 1250,36 Q1274,16 1298,44 Q1322,66 1346,34 Q1370,16 1394,42 Q1418,62 1440,40 L1440,160 Z"
              fill={fillColor}
            />
          </>
        )}

        {variant === "torn-paper-dark" && (
          <>
            {/* Secondary Layer: Deep forest paper ridge */}
            {secondaryColor && (
              <path
                d="M0,160 L0,48 Q40,68 85,42 Q130,22 178,54 Q230,78 280,38 Q330,20 378,52 Q430,74 482,34 Q534,18 584,50 Q638,72 690,32 Q742,16 792,48 Q846,70 898,30 Q950,14 1000,46 Q1054,68 1106,28 Q1158,12 1208,44 Q1262,66 1314,26 Q1368,10 1440,42 L1440,160 Z"
                fill={secondaryColor}
                opacity="0.75"
              />
            )}
            {/* Primary Layer: Jagged silhouette for dark section boundary */}
            <path
              d="M0,160 L0,64 
                 Q24,80 50,58 Q76,40 102,68 Q130,90 158,56 Q186,34 214,64 Q244,86 272,52 Q300,30 328,60 Q358,82 388,48 Q418,26 446,56 Q476,78 506,44 Q536,22 564,52 Q594,74 624,40 Q654,18 682,48 Q712,70 742,36 Q772,16 800,46 Q830,68 860,34 Q890,14 918,44 Q948,66 978,32 Q1008,12 1036,42 Q1066,64 1096,30 Q1126,10 1154,40 Q1184,62 1214,28 Q1244,10 1272,38 Q1302,60 1332,26 Q1362,8 1392,36 Q1418,52 1440,30 L1440,160 Z"
              fill={fillColor}
            />
          </>
        )}

        {variant === "paint-brush-edge" && (
          <path
            d="M0,160 L0,70 
               C60,95 120,40 180,65 C240,90 300,45 360,68 C420,92 480,42 540,65 C600,88 660,38 720,62 C780,85 840,35 900,58 C960,82 1020,32 1080,55 C1140,78 1200,28 1260,52 C1320,75 1380,30 1440,55 L1440,160 Z"
            fill={fillColor}
          />
        )}

        {variant === "deckle-rag" && (
          <path
            d="M0,160 L0,78 
               Q30,92 65,72 Q100,56 135,76 Q175,94 210,68 Q250,50 285,72 Q325,90 365,64 Q405,44 445,68 Q490,88 530,60 Q570,40 610,64 Q655,84 695,56 Q735,36 775,60 Q820,80 860,52 Q900,32 940,56 Q985,76 1025,48 Q1065,28 1105,52 Q1150,72 1190,44 Q1230,24 1270,48 Q1315,68 1355,40 Q1395,20 1440,46 L1440,160 Z"
            fill={fillColor}
          />
        )}
      </svg>
    </div>
  );
}
