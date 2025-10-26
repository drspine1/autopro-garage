"use client";

import { useState, useEffect } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import {Link as ScrollLink} from "react-scroll";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Detect scroll to update navbar background and active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
   { id: "Choose", label: "why us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/70 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🔹 Logo */}
        <div className="text-2xl font-extrabold text-amber-400 tracking-wider">
          AutoPro Garage
        </div>

        {/* 🔹 Desktop Navbar */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map(({ id, label }) => (
            <ScrollLink
              key={id}
              to={id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className={`cursor-pointer text-lg font-semibold transition-all duration-300 ${
                activeSection === id
                  ? "text-amber-400 scale-105"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              {label}
            </ScrollLink>
          ))}
        </nav>

        {/* 🔹 Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-amber-400 text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-center py-6 space-y-4 transition-all duration-500">
          {navItems.map(({ id, label }) => (
            <ScrollLink
              key={id}
              to={id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              onClick={() => setMenuOpen(false)} // Close menu on click
              className={`block text-lg font-semibold transition-all duration-300 ${
                activeSection === id
                  ? "text-amber-400 scale-105"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              {label}
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
}
