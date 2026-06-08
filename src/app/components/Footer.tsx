import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo & About */}
          <div>
            <Image
              src="/logo.png"
              alt="MedBridge Logo"
              width={80}
              height={80}
            />

            <h3 className="text-2xl font-bold mt-4">
              MedBridge
            </h3>

            <p className="text-gray-300 mt-3">
              Helping students achieve their dream medical admissions through
              expert counselling, guidance, and support.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Information
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>📞 8708542919</li>
              <li>📧 medbridgeindiaofficial@gmail.com</li>
              <li>📍 Geeta Nagar, Bypass Road, Akola, Maharashtra</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <a
              href="https://www.instagram.com/medbrdige_india"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 hover:bg-pink-700 px-5 py-3 rounded-xl transition"
            >
              📸 Follow on Instagram
            </a>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 MedBridge. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}