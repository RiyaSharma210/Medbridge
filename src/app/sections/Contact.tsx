export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact Us
          </h2>

          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Get in touch with MedBridge for expert medical admission guidance and counselling support.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {/* Phone */}
          <div className="bg-slate-800 p-6 rounded-3xl text-center shadow-lg">
            <div className="text-4xl mb-4">📞</div>

            <h3 className="text-lg font-semibold mb-2">
              Call Us
            </h3>

            <p className="text-gray-300">
              8708542919
            </p>
          </div>

          {/* Email */}
          <div className="bg-slate-800 p-6 rounded-3xl text-center shadow-lg">
            <div className="text-4xl mb-4">📧</div>

            <h3 className="text-lg font-semibold mb-2">
              Email
            </h3>

            <p className="text-gray-300 text-sm break-words">
              medbridgeindiaofficial@gmail.com
            </p>
          </div>

          {/* WhatsApp */}
          <div className="bg-slate-800 p-6 rounded-3xl text-center shadow-lg">
            <div className="text-4xl mb-4">💬</div>

            <h3 className="text-lg font-semibold mb-2">
              WhatsApp
            </h3>

            <p className="text-gray-300">
              8708542919
            </p>
          </div>

          {/* Address */}
          <div className="bg-slate-800 p-6 rounded-3xl text-center shadow-lg">
            <div className="text-4xl mb-4">📍</div>

            <h3 className="text-lg font-semibold mb-2">
              Office
            </h3>

            <p className="text-gray-300 text-sm">
              Geeta Nagar Bypass Road,
              <br />
              Akola, Maharashtra
            </p>
          </div>

          {/* Instagram */}
          <div className="bg-slate-800 p-6 rounded-3xl text-center shadow-lg">
            <div className="text-4xl mb-4">📸</div>

            <h3 className="text-lg font-semibold mb-2">
              Instagram
            </h3>

            <a
              href="https://instagram.com/medbridge_india"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300"
            >
              @medbridge_india
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}