export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Contact Us
        </h2>

        <p className="text-center text-gray-300 mt-4 mb-12">
          Get in touch with MedBridge for expert medical admission guidance.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Phone */}
          <div className="bg-slate-800 p-8 rounded-2xl text-center shadow-lg">
            <div className="text-4xl mb-4">📞</div>

            <h3 className="text-xl font-semibold mb-2">
              Call Us
            </h3>

            <p className="text-gray-300">
              8708542919
            </p>
          </div>

          {/* Email */}
          <div className="bg-slate-800 p-8 rounded-2xl text-center shadow-lg">
            <div className="text-4xl mb-4">📧</div>

            <h3 className="text-xl font-semibold mb-2">
              Email Us
            </h3>

            <p className="text-gray-300 break-words">
              medbridgeindiaofficial@gmail.com
            </p>
          </div>

          {/* WhatsApp */}
          <div className="bg-slate-800 p-8 rounded-2xl text-center shadow-lg">
            <div className="text-4xl mb-4">💬</div>

            <h3 className="text-xl font-semibold mb-2">
              WhatsApp
            </h3>

            <p className="text-gray-300">
              8708542919
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}