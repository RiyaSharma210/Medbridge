"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-white pt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block bg-cyan-50 text-cyan-600 px-5 py-2 rounded-full font-semibold"
            >
              Trusted By 200+ Aspiring Doctors
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold mt-6">
              MED
              <span className="text-cyan-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">
                BRIDGE
              </span>
            </h1>

            <p className="text-2xl font-semibold text-gray-600 mt-2">
              CONSULTANCY
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 mt-8 leading-tight"
            >
              <span className="text-cyan-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.9)]">
                200+
              </span>
              <br />
              Successful
              <br />
              Selections
              <br />
              In Medical
              <br />
              Colleges
            </motion.h2>

            <p className="text-cyan-500 text-2xl font-semibold mt-5">
              Your Bridge To Medical Admissions
            </p>

            <p className="text-gray-600 text-xl mt-8 max-w-xl">
              Expert NEET counselling guidance for Government,
              Private and Management Quota admissions across India.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                Book Free Counselling
              </button>

              <button className="border border-cyan-500 px-8 py-4 rounded-full hover:bg-cyan-500 hover:text-white transition">
                Student Login
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex flex-col items-center">

            <div className="absolute w-[500px] h-[500px] bg-cyan-300/30 blur-[120px] rounded-full" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute top-5 right-0 bg-cyan-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-20"
            >
              <h3 className="text-2xl font-bold">
                #1
              </h3>

              <p className="text-sm">
                Trusted Consultancy
              </p>
            </motion.div>

            <motion.img
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800"
              alt="Doctor"
              className="rounded-[40px] shadow-2xl w-[450px] relative z-10"
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden w-72 mt-6 relative z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800"
                alt="Medical College"
                className="h-40 w-full object-cover"
              />

              <div className="p-4">

                <h3 className="font-bold text-cyan-600 text-lg">
                  AIIMS Delhi
                </h3>

                <p className="text-gray-500">
                  Premier Medical Institute
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}