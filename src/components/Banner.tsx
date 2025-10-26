"use client";
import { motion } from "framer-motion";

export default function TrustBanner() {
  const items = [
    "🚗 Trusted by 10,000+ Drivers",
    "🛠 Certified Mechanics",
    "⭐ Rated 5 Stars on Google",
    "💨 Same-Day Service Available",
  ];

  return (
    <section className="bg-black text-amber-400 py-4 overflow-hidden">
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="flex gap-16 text-xl font-semibold whitespace-nowrap"
      >
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </motion.div>
    </section>
  );
}
