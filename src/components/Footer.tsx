"use client";
import { motion } from "framer-motion";

export default function Footer(){
  return (
    <footer id="contact" className="py-14 px-6 bg-black/90">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h4 initial={{ y: 10, opacity: 0 }} whileInView={{ y:0, opacity:1 }} className="text-2xl font-bold mb-3 text-[#e5a55d]">Need Expert Help?</motion.h4>
        <p className="text-gray-300 mb-6">Book a diagnostic or call for emergency road assistance.</p>
        <a href="tel:+2348012345678" className="inline-block px-8 py-3 rounded-full bg-[hsl(0,0%,90%)] text-black font-semibold shadow-[0_8px_30px_rgba(250,204,21,0.12)] hover:opacity-95 transition">
          📞 Call Now
        </a>

        <div className="mt-8 text-gray-500 text-sm">© {new Date().getFullYear()} AutoPro Garage. All rights reserved.</div>
      </div>
    </footer>
  );
}
