"use client";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-4 text-[#e5a55d]">
          Who We Are
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-gray-300">
          AutoPro Garage is a team of certified mechanics delivering fast, reliable service for everyday drivers and luxury owners alike. We bring modern diagnostics, honest pricing, and a passion for cars.
        </motion.p>
      </div>
    </section>
  );
}
