export default function Colleges() {
  const colleges = [
    "Government Medical Colleges",
    "Private Medical Colleges",
    "Deemed Universities",
    "BDS Colleges",
    "BAMS Colleges",
    "BHMS Colleges",
  ];

  return (
    <section
      id="colleges"
      className="py-20 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900">
            Medical Colleges We Guide For
          </h2>

          <p className="text-gray-600 text-xl mt-4">
            Expert guidance for admissions across leading institutions in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {colleges.map((college, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-slate-800">
                {college}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}