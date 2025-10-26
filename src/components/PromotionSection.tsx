"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PromotionSection() {
  return (
    <section className="bg-amber-500 text-white py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Animated Car */}
        <motion.div
          initial={{ rotate: -15, opacity: 0, x: -100 }}
          whileInView={{ rotate: 0, opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/car.png"
            alt="Promo Car"
            width={500}
            height={300}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ rotate: 15, opacity: 0, x: 100 }}
          whileInView={{ rotate: 0, opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Drive with Confidence &  Keep Your Ride in Top Condition 🚘🚗✨
          </h2>
           <p className="text-lg font-medium leading-relaxed">
          From routine maintenance to full engine diagnostics, AutoPro Garage
          ensures your car performs at its best. Drive safe, drive smooth, drive
          confident.
        </p>
          <a
            href="#services"
            className="inline-block bg-white text-amber-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition mt-6  "
          >
            Book a Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
