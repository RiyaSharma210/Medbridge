export default function FAQ() {
  const faqs = [
    {
      question: "Do you provide MBBS admission counselling?",
      answer:
        "Yes, we guide students through the complete MBBS admission process including counselling and college selection.",
    },
    {
      question: "Do you help with BAMS, BHMS and BDS admissions?",
      answer:
        "Yes, we assist students in securing admissions in BAMS, BHMS, BDS and other healthcare programs.",
    },
    {
      question: "Do you help with choice filling?",
      answer:
        "Yes, our experts provide complete choice filling guidance to maximize admission opportunities.",
    },
    {
      question: "Do you verify documents?",
      answer:
        "Yes, we help students verify and organize all required admission documents.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Common questions asked by students and parents.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-bold text-lg mb-2">
                {faq.question}
              </h3>

              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}