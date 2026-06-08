"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-extrabold">
            MED
            <span className="text-cyan-500">
              BRIDGE
            </span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 font-medium text-slate-700">

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

        {/* Student Login Button */}
        <a
          href="/student-login"
          className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Student Login
        </a>

      </div>
    </nav>
  );
}