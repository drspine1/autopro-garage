"use client";
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";
import {REVIEWS} from   "../datas/data";


export default function Reviews(){
  return (
    <section id="reviews" className="py-16 px-6 bg-[--color-charcoal]/5">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8 text-[#e5a55d]">What Customers Say</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="card">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-[#e5a55d]">{r.name}</h4>
                  <p className="text-sm text-gray-200">{r.car}</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#e5a55d]" />
                  <span className="font-medium text-[#f28910]">{r.rating.toFixed(1)}</span>
                </div>
              </div>
              <p className="text-gray-300">{r.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
