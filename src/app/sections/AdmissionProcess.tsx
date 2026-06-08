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
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Admission Process
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We guide you through every step of your admission journey.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <h3 className="font-semibold text-lg">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}