"use client";
import { motion } from "framer-motion";

import { SERVICES } from "../datas/data";



export default function Services(){
  return (
    <section id="services" className="py-16 px-6 bg-[--color-charcoal]/10">
      <div className="max-w-6xl mx-auto">
        <motion.h3 whileInView={{ y:0, opacity:1 }} initial={{ y:20, opacity:0 }} transition={{ duration:0.5 }} className="text-3xl font-bold text-center mb-8 text-[#e5a55d]">Our Services</motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ delay: i * 0.05 }} className="card">
              <div className="mb-4 flex justify-center text-[#f7890a]">{s.icon}</div>
              <h4 className="font-semibold text-lg mb-2 text-center text-[#e5a55d]">{s.title}</h4>
              <p className="text-gray-300 text-sm text-center">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-gray-400">
          We service most makes and models. If you don’t see your repair listed, give us a call — we’ll handle it.
        </p>
      </div>
    </section>
  );
}
