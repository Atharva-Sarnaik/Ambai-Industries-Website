"use client";

import React from "react";

interface TornEdgeLightBottomProps {
  fillColor?: string;
  secondaryFillColor?: string;
  heightClass?: string;
  className?: string;
}

export default function TornEdgeLightBottom({
  fillColor = "#FFFFFF",
  heightClass = "h-16 sm:h-20 md:h-24",
  className = "",
}: TornEdgeLightBottomProps) {
  const isWhite =
    !fillColor ||
    fillColor.toLowerCase() === "#ffffff" ||
    fillColor.toLowerCase() === "#fff";

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {isWhite ? (
        <img
          src="/images/ui/paint-strokes-top.png"
          alt=""
          className={`w-full ${heightClass} object-fill block`}
        />
      ) : (
        <div
          className={`w-full ${heightClass} block`}
          style={{
            backgroundColor: fillColor,
            WebkitMaskImage: "url('/images/ui/paint-strokes-top.png')",
            maskImage: "url('/images/ui/paint-strokes-top.png')",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      )}
    </div>
  );
}
