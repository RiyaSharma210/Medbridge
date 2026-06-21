"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-slate-100
      ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
          : "bg-white/60 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">

          <Image
            src="/photos/logo.png"
            alt="MedBridge Logo"
            width={scrolled ? 55 : 65}
            height={scrolled ? 55 : 65}
            className="object-contain transition-all duration-300"
          />

          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            <span className="text-slate-900">MED</span>
            <span className="text-cyan-500">BRIDGE</span>
          </h1>

        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-8 font-medium text-slate-700">

          <a href="#home" className="hover:text-cyan-500 transition">Home</a>
          <a href="#services" className="hover:text-cyan-500 transition">Services</a>
          <a href="#gallery" className="hover:text-cyan-500 transition">Selections</a>
          <a href="#colleges" className="hover:text-cyan-500 transition">Colleges</a>
          <a href="#testimonials" className="hover:text-cyan-500 transition">Testimonials</a>
          <a href="#contact" className="hover:text-cyan-500 transition">Contact</a>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          
          
          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-white border-t border-slate-200 overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"}`}
      >
        <div className="flex flex-col px-4 gap-4 text-slate-700 font-medium">

          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Selections</a>
          <a href="#colleges" onClick={() => setMenuOpen(false)}>Colleges</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        </div>
      </div>
    </nav>
  );
}