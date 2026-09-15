"use client";

import React from "react";
import OrganicSectionDivider, { OrganicDividerVariant } from "@/components/ui/OrganicSectionDivider";

interface StackedPanelProps {
  id?: string;
  zIndex: number;
  minHeight?: string;
  topEdgeVariant?: OrganicDividerVariant;
  topEdgeFill?: string;
  topEdgeSecondaryFill?: string;
  topEdgeFlipX?: boolean;
  bgLayer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function StackedPanel({
  id,
  zIndex,
  minHeight = "min-h-screen",
  topEdgeVariant,
  topEdgeFill,
  topEdgeSecondaryFill,
  topEdgeFlipX = false,
  bgLayer,
  children,
  className = "",
  contentClassName = "",
}: StackedPanelProps) {
  return (
    <div
      id={id}
      className={`relative ${minHeight} w-full`}
      style={{ zIndex }}
    >
      <div
        className={`sticky top-0 ${minHeight} w-full overflow-hidden flex flex-col justify-between ${className}`}
      >
        {/* Leading Organic Paper Edge (rises over the previous pinned panel) */}
        {topEdgeVariant && topEdgeFill && (
          <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none -translate-y-[98%] w-full overflow-hidden leading-none">
            <OrganicSectionDivider
              variant={topEdgeVariant}
              position="bottom"
              fillColor={topEdgeFill}
              secondaryFillColor={topEdgeSecondaryFill}
              flipX={topEdgeFlipX}
              heightClass="h-16 sm:h-24 md:h-28"
            />
          </div>
        )}

        {/* Pinned Background Scene / Photo Layer */}
        {bgLayer && (
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
            {bgLayer}
          </div>
        )}

        {/* Independent Content Layer */}
        <div className={`relative z-10 my-auto w-full ${contentClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
