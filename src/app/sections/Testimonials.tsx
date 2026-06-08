export default function Testimonials() {
  const testimonials = [
    {
      name: "Zoiba",
      text: "MedBridge helped me throughout the admission process and guided me towards MBBS admission.",
    },
    {
      name: "Anika Gupta",
      text: "The counselling and support were excellent. Every step was clearly explained.",
    },
    {
      name: "Sangharsh",
      text: "Choice filling guidance from MedBridge played a major role in my admission journey.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Student Testimonials
        </h2>

        <p className="text-center text-gray-600 mb-12">
          What our students say about us.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-2xl shadow-md"
            >
              <p className="text-gray-700 italic">
                "{testimonial.text}"
              </p>

              <h3 className="font-bold mt-4">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}