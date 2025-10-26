"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function GarageGallery() {
  const images: string[] = [
    "/images/garage1.jpg",
    "/images/garage2.jpg",
    "/images/garage3.jpg",
    "/images/garage4.jpg",
    "/images/garage5.jpg",
    "/images/garage6.jpg",
    "/images/garage7.jpg",
    "/images/garage8.jpg",
  ];

  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide with pause on hover
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [index, paused]);

  // Framer motion variants
  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-neutral-100 to-amber-100 relative overflow-hidden mt-40"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 text-gray-800">
          🧰 Our Workshop Gallery
        </h2>

        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative w-full h-80 sm:h-[400px] md:h-[450px] overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <Image
                  src={images[index]}
                  alt={`Garage photo ${index + 1}`}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-3 rounded-full transition"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-3 rounded-full transition"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-amber-600 scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
