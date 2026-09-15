"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CollageSlide {
  id: string | number;
  image: string;
  tag: string;
  title: string;
  description: string;
  details?: { label: string; value: string }[];
}

interface CollageSliderProps {
  slides: CollageSlide[];
  autoPlayInterval?: number;
  variant?: "collage" | "circle";
}

export default function CollageSlider({ slides, autoPlayInterval = 5000, variant = "collage" }: CollageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 30 : -30,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeIn" },
    }),
  };

  return (
    <div 
      className="relative w-full overflow-hidden bg-transparent rounded-3xl py-12 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto min-h-[450px] flex items-center">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-32"
          >
            {/* LEFT: Collage */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 px-4">
              {variant === "collage" ? (
                <>
                  {/* Main rounded rectangle image */}
                  <div className="relative w-[75vw] max-w-[320px] lg:max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden border-[4px] border-white/20 shadow-xl">
                    <Image
                      src={slides[currentIndex].image}
                      alt={slides[currentIndex].title}
                      fill
                      sizes="(max-width: 1024px) 80vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Overlapping circular image */}
                  <div className="absolute -bottom-6 right-2 lg:-bottom-10 lg:-right-8 w-[40vw] max-w-[180px] lg:max-w-[240px] aspect-square rounded-full overflow-hidden border-[4px] lg:border-[6px] border-white/30 shadow-2xl z-10">
                    <Image
                      src={slides[currentIndex].image}
                      alt={slides[currentIndex].title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover object-center scale-125 translate-x-4" 
                    />
                  </div>
                </>
              ) : (
                /* Single circular image */
                <div className="relative w-[65vw] max-w-[280px] lg:max-w-[400px] aspect-square rounded-full overflow-hidden border-[6px] border-white/20 shadow-2xl">
                  <Image
                    src={slides[currentIndex].image}
                    alt={slides[currentIndex].title}
                    fill
                    sizes="(max-width: 1024px) 70vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
              )}
            </div>

            {/* RIGHT: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-12 lg:mt-0 z-20 px-4">
              <span className="inline-block bg-[#8B1A1A] px-3 py-1 rounded-full text-[10px] font-display font-bold text-white uppercase tracking-[0.2em] mb-4 shadow-lg">
                {slides[currentIndex].tag}
              </span>
              <h3 
                className="font-display font-black text-white leading-[1.1] mb-4 tracking-tight drop-shadow-md text-3xl sm:text-4xl"
              >
                {slides[currentIndex].title}
              </h3>
              <p className="font-body text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-sm lg:max-w-lg mb-6 drop-shadow-sm">
                {slides[currentIndex].description}
              </p>

              {slides[currentIndex].details && (
                <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                  {slides[currentIndex].details.map((detail, idx) => (
                    <div key={idx} className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-lg">
                      <span className="font-display font-bold text-[9px] lg:text-[10px] text-[#DEAC4F] uppercase tracking-wider block mb-1">
                        {detail.label}
                      </span>
                      <p className="font-body text-xs lg:text-sm text-white/90 font-medium leading-relaxed">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls (Desktop hover) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 justify-between pointer-events-none z-30 hidden lg:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={handlePrev}
          className="pointer-events-auto w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#1A1A1A] shadow-xl hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button 
          onClick={handleNext}
          className="pointer-events-auto w-14 h-14 flex items-center justify-center rounded-full bg-[#8B1A1A] text-white shadow-xl hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex 
                ? "w-6 h-1.5 bg-[#DEAC4F]" 
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
