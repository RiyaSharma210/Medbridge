export default function Services() {
  const services = [
    {
      title: "NEET Counselling",
      desc: "Complete guidance for NEET UG counselling and admission process.",
    },
    {
      title: "Choice Filling",
      desc: "Strategic choice filling to maximize admission opportunities.",
    },
    {
      title: "College Selection",
      desc: "Personalized college recommendations based on your rank and budget.",
    },
    {
      title: "Document Verification",
      desc: "Support for preparing and verifying all admission documents.",
    },
    {
      title: "Admission Support",
      desc: "Dedicated assistance until your admission is confirmed.",
    },
    {
      title: "Expert Guidance",
      desc: "One-to-one counselling from experienced admission experts.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our Services
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Complete Medical Admission Support Under One Roof
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-cyan-600">
                {service.title}
              </h3>

              <p className="text-slate-700 mt-4 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}