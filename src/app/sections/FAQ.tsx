export default function FAQ() {
  const faqs = [
    {
      question: "Do you provide MBBS admission counselling?",
      answer:
        "Yes, we guide students through the complete MBBS admission process including counselling, college selection and admission support.",
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
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-500 mt-4 text-lg">
            Common questions asked by students and parents.
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--card)] p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200"
            >
              <h3 className="font-bold text-lg md:text-xl text-cyan-600 mb-3">
                {faq.question}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}