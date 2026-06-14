export default function AdmissionProcess() {
  const steps = [
    "Register for Counselling",
    "Profile Evaluation",
    "College Selection",
    "Choice Filling Guidance",
    "Seat Allotment Support",
    "Admission Confirmation",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Admission Process
          </h2>

          <p className="text-slate-500 text-lg mt-4 max-w-3xl mx-auto">
            We guide students through every stage of the medical admission process.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[var(--card)] rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-center text-lg font-semibold text-foreground">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}