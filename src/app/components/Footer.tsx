import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>

            <div className="flex items-center gap-3">

              <Image
                src="/logo.png"
                alt="MedBridge Logo"
                width={60}
                height={60}
              />

              <h3 className="text-2xl font-bold">
                MedBridge
              </h3>

            </div>

            <p className="text-gray-300 mt-4 leading-relaxed">
              Helping students achieve their dream medical admissions through
              expert counselling, NEET guidance, choice filling support,
              and admission assistance across India.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <a href="#home" className="hover:text-cyan-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-cyan-400">
                  Services
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-cyan-400">
                  Selections
                </a>
              </li>

              <li>
                <a href="#colleges" className="hover:text-cyan-400">
                  Colleges
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact Information
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                📞 8708542919
              </li>

              <li>
                📧 medbridgeindiaofficial@gmail.com
              </li>

              <li>
                📍 Geeta Nagar Bypass Road,
                Akola, Maharashtra
              </li>

              <li>
                📸
                <a
                  href="https://instagram.com/medbridge_india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-cyan-400 hover:text-cyan-300"
                >
                  @medbridge_india
                </a>
              </li>

            </ul>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-400 text-sm">

          © 2026 MedBridge Consultancy. All Rights Reserved.

          <div className="mt-2">
            Your Bridge To Medical Admissions
          </div>

        </div>

      </div>
    </footer>
  );
}