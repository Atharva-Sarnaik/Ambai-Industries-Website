"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CinematicSlide {
  id: string | number;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  tag?: string;
  details?: { label: string; value: string }[];
}

interface CinematicSliderProps {
  slides: CinematicSlide[];
  autoPlayInterval?: number;
}

export default function CinematicSlider({ slides, autoPlayInterval = 5000 }: CinematicSliderProps) {
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

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <div 
      className="relative w-full h-[550px] sm:h-[600px] lg:h-[700px] bg-black overflow-hidden rounded-[2rem] shadow-2xl group border border-[#D4C9B8]/20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
            {/* Soft gradient overlay for text readability - Bottom heavy */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Text Content */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-16 flex flex-col justify-end">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-3xl"
            >
              {slides[currentIndex].tag && (
                <span className="inline-block px-3 py-1.5 mb-4 rounded-full text-xs font-bold font-display bg-[#8B1A1A] text-white tracking-widest uppercase shadow-md">
                  {slides[currentIndex].tag}
                </span>
              )}
              {slides[currentIndex].subtitle && (
                <p className="text-[#DEAC4F] font-bold font-display tracking-widest text-xs sm:text-sm mb-2 uppercase">
                  {slides[currentIndex].subtitle}
                </p>
              )}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mb-4 leading-tight">
                {slides[currentIndex].title}
              </h3>
              <p className="text-white/85 font-body text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-3 sm:line-clamp-none">
                {slides[currentIndex].description}
              </p>
              {slides[currentIndex].details && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                  {slides[currentIndex].details.map((detail, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                      <span className="font-display font-bold text-[10px] text-[#DEAC4F] uppercase tracking-wider block mb-1">
                        {detail.label}
                      </span>
                      <p className="font-body text-xs text-white/90 leading-relaxed">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls (Hidden on mobile, visible on hover for desktop) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 justify-between pointer-events-none z-10 hidden sm:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={handlePrev}
          className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-105"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={handleNext}
          className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-105"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute top-6 right-6 lg:top-8 lg:right-8 flex gap-2 z-10 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10">
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
                : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
