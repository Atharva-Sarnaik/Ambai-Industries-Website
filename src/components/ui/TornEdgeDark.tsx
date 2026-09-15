"use client";

import React from "react";

interface TornEdgeDarkProps {
  fillColor?: string;
  secondaryFillColor?: string;
  heightClass?: string;
  className?: string;
}

export default function TornEdgeDark({
  fillColor = "#08241A",
  secondaryFillColor = "#0D3B2B",
  heightClass = "h-16 sm:h-20 md:h-24",
  className = "",
}: TornEdgeDarkProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className={`w-full ${heightClass} block`}
        style={{
          backgroundColor: fillColor,
          WebkitMaskImage: "url('/images/ui/paint-strokes-bottom.png')",
          maskImage: "url('/images/ui/paint-strokes-bottom.png')",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
