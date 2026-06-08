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
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900">
            Trusted By Future Doctors
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Helping students secure admissions in top medical colleges across India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
              }}
              viewport={{ once: true }}
              className="bg-white shadow-2xl rounded-3xl p-10 text-center border border-gray-100"
            >
              <h3 className="text-6xl font-extrabold text-cyan-500">
                {item.number}
              </h3>

              <p className="text-gray-700 text-lg mt-6 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}