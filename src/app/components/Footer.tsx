import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND SECTION */}
          <div>

            <div className="flex items-center gap-3 group">

              <div className="transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/photos/logo.png"
                  alt="MedBridge Logo"
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold tracking-wide">
                <span className="text-white">Med</span>
                <span className="text-cyan-400">Bridge</span>
              </h3>

            </div>

            <p className="text-gray-300 mt-5 leading-relaxed text-sm">
              Helping students achieve their dream medical admissions through
              expert counselling, NEET guidance, choice filling support,
              and admission assistance across India.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">

              <a href="#" className="hover:scale-110 transition text-cyan-400">📘</a>
              <a href="#" className="hover:scale-110 transition text-cyan-400">📸</a>
              <a href="#" className="hover:scale-110 transition text-cyan-400">💬</a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["Selections", "#gallery"],
                ["Colleges", "#colleges"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (
                <li key={name}>
                  <a
                    href={link}
                    className="hover:text-cyan-400 transition hover:translate-x-1 inline-block"
                  >
                    {name}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-white">
              Contact Info
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">

              <li className="hover:text-cyan-400 transition">
                📞 8708542919
              </li>

              <li className="hover:text-cyan-400 transition">
                📧 medbridgeindiaofficial@gmail.com
              </li>

              <li className="hover:text-cyan-400 transition">
                📍 Geeta Nagar Bypass Road, Akola, Maharashtra
              </li>

              <li>
                <a
                  href="https://instagram.com/medbridge_india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  📸 @medbridge_india
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-gray-400 text-sm">

          <p>© 2026 MedBridge Consultancy. All Rights Reserved.</p>

          <p className="mt-2 text-cyan-400 font-medium">
            Your Bridge To Medical Admissions
          </p>

        </div>

      </div>
    </footer>
  );
}