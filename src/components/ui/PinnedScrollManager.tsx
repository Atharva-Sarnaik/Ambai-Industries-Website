"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PinnedScrollManager() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Accessibility check & mobile viewport check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile) {
      // Fall back to normal stacked scrolling without pinning
      return;
    }

    const ctx = gsap.context(() => {
      const pinPanels = document.querySelectorAll<HTMLElement>(".pin-panel");

      pinPanels.forEach((panel) => {
        const content = panel.nextElementSibling as HTMLElement | null;
        if (!content) return;

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: () => "+=" + content.offsetHeight,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });
    });

    // Recalculate correctly on resize / orientation change
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return null;
}
