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
  details?: {
    label: string;
    value: string;
  }[];
}

interface DoubleCollageSliderProps {
  slides: CollageSlide[];
  autoPlayInterval?: number;
}

export default function DoubleCollageSlider({ slides, autoPlayInterval = 7000 }: DoubleCollageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0); // This is the chunk index
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Group slides into chunks of 2
  const chunkedSlides = React.useMemo(() => {
    const chunks = [];
    for (let i = 0; i < slides.length; i += 2) {
      chunks.push(slides.slice(i, i + 2));
    }
    return chunks;
  }, [slides]);

  const totalPages = chunkedSlides.length;

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalPages, autoPlayInterval, isPaused, currentIndex]);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    }),
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div 
      className="relative w-full overflow-hidden bg-transparent py-4 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto min-h-[650px] py-16 flex items-center justify-center relative">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex flex-col gap-32"
          >
            {chunkedSlides[currentIndex].map((slide, idx) => {
              const isImageLeft = idx % 2 === 1; // Row 0: Image Right (Text Left). Row 1: Image Left (Text Right).

              return (
                <div key={slide.id} className="w-full flex items-center gap-16 lg:gap-32">
                  
                  {/* TEXT COLUMN */}
                  <div className={`w-1/2 flex flex-col items-start text-left z-20 px-8 ${isImageLeft ? 'order-2' : 'order-1'}`}>
                    <span className="inline-block bg-[#8B1A1A] px-3 py-1 rounded-full text-[10px] font-display font-bold text-white uppercase tracking-[0.2em] mb-4 shadow-lg">
                      {slide.tag}
                    </span>
                    <h3 className="font-display font-black text-white leading-[1.1] mb-4 tracking-tight drop-shadow-md text-4xl xl:text-5xl">
                      {slide.title}
                    </h3>
                    <p className="font-body text-white/85 text-base lg:text-lg leading-relaxed max-w-lg mb-8 drop-shadow-sm">
                      {slide.description}
                    </p>

                    {slide.details && (
                      <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                        {slide.details.map((detail, dIdx) => (
                          <div key={dIdx} className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
                            <span className="font-display font-bold text-[10px] text-[#DEAC4F] uppercase tracking-wider block mb-1">
                              {detail.label}
                            </span>
                            <p className="font-body text-sm text-white/90 font-medium leading-relaxed">
                              {detail.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* COLLAGE COLUMN */}
                  <div className={`relative w-1/2 flex justify-center px-8 ${isImageLeft ? 'order-1' : 'order-2'}`}>
                    {/* Main rounded rectangle image */}
                    <div className="relative w-[85%] max-w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden border-[4px] border-white/20 shadow-xl">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        sizes="40vw"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Overlapping circular image */}
                    <div className={`absolute -bottom-8 ${isImageLeft ? '-right-2' : '-left-2'} w-[180px] lg:w-[200px] aspect-square rounded-full overflow-hidden border-[6px] border-white/30 shadow-2xl z-10`}>
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        sizes="20vw"
                        className="object-cover object-center scale-125 translate-x-4" 
                      />
                    </div>
                  </div>

                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 lg:left-12 flex items-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => {
            setDirection(-1);
            setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
          }}
          className="p-3 lg:p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-[#8B1A1A] hover:border-[#8B1A1A] transition-all shadow-xl"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 lg:right-12 flex items-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % totalPages);
          }}
          className="p-3 lg:p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-[#8B1A1A] hover:border-[#8B1A1A] transition-all shadow-xl"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {chunkedSlides.map((_, idx) => (
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
