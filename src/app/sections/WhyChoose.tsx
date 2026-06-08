export default function WhyChoose() {
  const features = [
    "Expert NEET Counselling",
    "Personalized Guidance",
    "Document Verification",
    "College Selection Support",
    "Choice Filling Assistance",
    "End-to-End Admission Help",
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose MedBridge?
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Supporting students throughout their medical admission journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-center">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}