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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Why Choose MedBridge?
          </h2>

          <p className="text-slate-500 text-lg mt-4 max-w-3xl mx-auto">
            Supporting students throughout their medical admission journey with
            expert guidance and personalized counselling.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[var(--card)] p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200 hover:shadow-xl transition"
            >
              <h3 className="text-lg md:text-xl font-semibold text-center text-cyan-600">
                {feature}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}