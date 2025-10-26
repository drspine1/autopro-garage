"use client";
import { motion } from "framer-motion";

import {features} from "../datas/data";

export default function WhyChooseUs() {


  return (
    <section id="Choose" className="bg-neutral-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-amber-400"
        >
          Why Choose AutoPro Garage?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-neutral-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <div className="text-amber-400 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
