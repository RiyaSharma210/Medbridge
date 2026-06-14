export default function Colleges() {
  const colleges = [
    {
      title: "Government Medical Colleges",
      desc: "Guidance for top Government MBBS colleges across India.",
    },
    {
      title: "Private Medical Colleges",
      desc: "Admission support for reputed private medical institutions.",
    },
    {
      title: "Deemed Universities",
      desc: "Expert counselling for leading deemed medical universities.",
    },
    {
      title: "BDS Colleges",
      desc: "Admission assistance for dental colleges and counselling.",
    },
    {
      title: "BAMS Colleges",
      desc: "Support for Ayurvedic medical college admissions.",
    },
    {
      title: "BHMS Colleges",
      desc: "Guidance for Homeopathic medical college admissions.",
    },
  ];

  return (
    <section
      id="colleges"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Medical Colleges We Guide For
          </h2>

          <p className="text-slate-500 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
            Expert guidance for admissions across leading medical institutions in India.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {colleges.map((college, index) => (
            <div
              key={index}
              className="bg-[var(--card)] rounded-3xl p-6 md:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-cyan-600">
                {college.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {college.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}