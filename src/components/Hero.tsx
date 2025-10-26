"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/garage.png" alt="garage" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.h1 initial={{ scale: 0.25, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9 }} className="text-3xl md:text-6xl font-extrabold tracking-tight text-[#ff7b02] mb-4 mt-20">
          Precision <span className="text-[--color-gray-light] ">Auto Repair</span> & Service
        </motion.h1>

        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="mt-6 text-[#e5a55d] max-w-2xl mx-auto">
          Fast diagnostics, certified technicians, and premium parts — we keep your vehicle performing at its best.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <a href="#services" className="btn mt-8 inline-flex items-center gap-2">
            Explore Services
          </a>
        </motion.div>

        <div className="mt-10 text-[#bccdd7] text-sm">
          <span>Open: Mon–Sat 8am–6pm • </span>
          <a href="tel:+2348012345678" className="text-[--color-gold] hover:underline">Call: +234 801 234 5678</a>
        </div>

       

      </div>
    </section>
  );
}
