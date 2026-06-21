"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-white pt-28 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center bg-cyan-50 text-cyan-600 px-4 py-2 rounded-full font-semibold text-sm md:text-base"
            >
              Trusted By 200+ Aspiring Doctors
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold mt-6">
              <span className="text-slate-900">MED</span>
              <span className="text-cyan-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                BRIDGE
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-gray-600 mt-2">
              CONSULTANCY
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-8 leading-tight"
            >
              <span className="text-cyan-500">20+</span>
              <br />
              Successful Selections
              <br />
              In Medical Colleges
            </motion.div>

            <p className="text-cyan-500 text-xl md:text-2xl font-semibold mt-5">
              Your Bridge To Medical Admissions
            </p>

            <p className="text-gray-600 text-lg mt-6 max-w-xl">
              Expert NEET counselling guidance for Government,
              Private and Management Quota admissions across India.
            </p>

            {/* BUTTONS (BOTH SAME STYLE) */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="/register"
                className="bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold
                hover:scale-105 transition inline-block shadow-md"
              >
                Book Your Counselling
              </a>

             

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex flex-col items-center">

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-5 right-5 bg-cyan-500 text-white px-6 py-4 rounded-2xl shadow-xl z-20 will-change-transform"
            >
              <h3 className="text-2xl font-bold">#1</h3>
              <p className="text-sm">Trusted Consultancy</p>
            </motion.div>

            <Image
              src="/office1.png"
              alt="MedBridge Office"
              width={500}
              height={500}
              className="rounded-[30px] shadow-2xl w-full max-w-[500px] object-cover hover:scale-[1.02] transition"
            />

          </div>

        </div>
      </div>
    </section>
  );
}