export default function Achievements() {
  const stats = [
    { number: "500+", label: "Students Guided" },
    { number: "150+", label: "MBBS Admissions" },
    { number: "100+", label: "BAMS Admissions" },
    { number: "50+", label: "BDS Admissions" },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our Achievements
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Proudly helping students achieve their dream medical careers.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center border border-slate-200 hover:shadow-xl transition"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-cyan-500">
                {item.number}
              </h3>

              <p className="mt-4 text-slate-700 font-medium">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}