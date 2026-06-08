export default function Achievements() {
  const stats = [
    { number: "500+", label: "Students Guided" },
    { number: "150+", label: "MBBS Admissions" },
    { number: "100+", label: "BAMS Admissions" },
    { number: "50+", label: "BDS Admissions" },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-700 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}