"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BRANDS } from "../datas/data";

export default function Brands() {
  return (
    <section id="brands" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        

        <div className="overflow-hidden">
          <div className="logo-scroll">
            {BRANDS.map((b, i) => (
              <div key={i} className="w-36 h-20 flex items-center justify-center">
                <Image 
                height={50}
                width={150}
                src={b.logo} alt={b.name} className="brand-logo cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
