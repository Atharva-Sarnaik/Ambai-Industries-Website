"use client";

import React, { useRef, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string;
  imageClassName?: string;
  speed?: number; // 1 to 10 (default 4)
  scale?: number; // 1.08 to 1.2 (default 1.12)
}

export default function ParallaxImage({
  containerClassName = "",
  imageClassName = "",
  speed = 4,
  scale = 1.12,
  ...imageProps
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageWrapperRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const yMove = speed * 4; // subtle percentage movement

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrapperRef.current,
        { yPercent: -yMove },
        {
          yPercent: yMove,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <Image
          {...imageProps}
          alt={imageProps.alt || "Cattle feed imagery"}
          fill
          className={`object-cover ${imageClassName}`}
        />
      </div>
    </div>
  );
}
