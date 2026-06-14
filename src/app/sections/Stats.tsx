"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "200+",
    label: "Successful Admissions",
  },
  {
    number: "10+",
    label: "States Covered",
  },
  {
    number: "50+",
    label: "Medical Colleges",
  },
  {
    number: "100%",
    label: "Student Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted By Future Doctors
          </h2>

          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Helping students secure admissions in top medical colleges across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="bg-white shadow-lg rounded-3xl p-8 text-center border border-slate-200"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-cyan-500">
                {item.number}
              </h3>

              <p className="text-slate-700 text-base md:text-lg mt-4 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}