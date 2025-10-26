"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { tips } from "../datas/data";

export default function CarAdvice() {
const [currentTip, setCurrentTip] = useState(0);
  const [paused, setPaused] = useState(false);

  // Rotate "Tip of the Day" every 4s, pause when hovered
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused, tips.length]);

  return (
    <motion.section
      id="advice"
      className="bg-[#1a1a1a] text-white py-20 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-amber-400 mb-12"
        >
          Smart Car Care Tips
        </motion.h2>

        {/* Interactive Tip of the Day */}
        <motion.div
          key={currentTip}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto bg-amber-500 text-black max-w-xl p-6 rounded-xl mb-16 shadow-lg cursor-pointer"
        >
          <div className="flex justify-center mb-3">{tips[currentTip].icon}</div>
          <h3 className="text-2xl font-bold mb-1">{tips[currentTip].title}</h3>
          <p className="text-base">{tips[currentTip].text}</p>
        </motion.div>

        {/* All Tips Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-neutral-800 hover:bg-neutral-700 p-8 rounded-2xl shadow-xl transition transform hover:-translate-y-2 hover:rotate-1"
            >
              <div className="text-amber-400 flex justify-center mb-4">{tip.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-300">{tip.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
