"use client";

import { motion, Variants } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactComponent() {
  // ✨ Fade up variants for content
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  // 💫 Smooth infinite bounce animation
  const bounceAnimation: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 text-black bg-amber-50"
    >
      {/* 🔆 Animated background gradient */}
      <motion.div
      className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 opacity-70" animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], }} transition={{ duration: 10, repeat: Infinity, ease: "linear", }} style={{ backgroundSize: "200% 200%", }} />

      {/* 🔳 Contact content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-6 text-gray-900"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg mb-10 font-medium text-gray-800"
        >
          Need help with your car? Reach out to us anytime — we’re always ready
          to serve you.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaMapMarkerAlt className="w-10 h-10 mb-3 text-black" />,
              title: "Address",
              text: "123 AutoPro Street, Lagos, Nigeria",
            },
            {
              icon: <FaPhoneAlt className="w-10 h-10 mb-3 text-black" />,
              title: "Phone",
              text: "+234 801 234 5678",
            },
            {
              icon: <FaEnvelope className="w-10 h-10 mb-3 text-black" />,
              title: "Email",
              text: "support@autoprogarage.com",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-white/40 backdrop-blur-md rounded-xl py-8 shadow-md hover:scale-105 transition-transform"
            >
              {/* 💫 Animated icon */}
              <motion.div
                variants={bounceAnimation}
                initial="initial"
                animate="animate"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-900">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
