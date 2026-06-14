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
    <section
      id="testimonials"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Student Testimonials
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            What our students say about their experience with MedBridge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-200 hover:shadow-xl transition"
            >
              <p className="text-slate-700 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <h3 className="font-bold text-cyan-600 mt-6 text-lg">
                {testimonial.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}