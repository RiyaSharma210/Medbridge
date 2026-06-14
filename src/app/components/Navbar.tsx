"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="MedBridge Logo"
    className="h-10 w-10 md:h-12 md:w-12 object-contain"
  />

  <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
    <span className="text-slate-900">MED</span>
    <span className="text-cyan-500">BRIDGE</span>
  </h1>
</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 font-medium text-slate-700">

          <a href="#home" className="hover:text-cyan-500 transition">
            Home
          </a>

          <a href="#services" className="hover:text-cyan-500 transition">
            Services
          </a>

          <a href="#gallery" className="hover:text-cyan-500 transition">
            Selections
          </a>

          <a href="#colleges" className="hover:text-cyan-500 transition">
            Colleges
          </a>

          <a href="#testimonials" className="hover:text-cyan-500 transition">
            Testimonials
          </a>

          <a href="#contact" className="hover:text-cyan-500 transition">
            Contact
          </a>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <a
            href="/student-login"
            className="bg-cyan-500 text-white text-sm md:text-base px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold hover:bg-cyan-600 transition whitespace-nowrap"
          >
            Student Login
          </a>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-md">

          <div className="flex flex-col p-4 gap-4 text-slate-700 font-medium">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-500"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-500"
            >
              Services
            </a>

            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-500"
            >
              Selections
            </a>

            <a
              href="#colleges"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-500"
            >
              Colleges
            </a>

            <a
              href="#testimonials"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-500"
            >
              Testimonials
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-500"
            >
              Contact
            </a>

          </div>

        </div>
      )}
    </nav>
  );
}