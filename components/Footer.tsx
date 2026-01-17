"use client";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -96; // offset navbar
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-100 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* CARD */}
        <div className="rounded-[32px] bg-white px-10 py-14 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* BRAND */}
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Tjana Homestay
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Penginapan nyaman di Sanur, Bali.
                Lokasi strategis, suasana tenang,
                dan pelayanan ramah.
              </p>
            </div>

            {/* MENU */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Menu
              </h4>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="hover:text-slate-900 transition"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("rooms")}
                    className="hover:text-slate-900 transition"
                  >
                    Kamar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("motor")}
                    className="hover:text-slate-900 transition"
                  >
                    Sewa Motor
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-slate-900 transition"
                  >
                    Kontak
                  </button>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Kontak
              </h4>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li>
                  Gg. V No.7, Sanur, Denpasar Selatan,
                  Kota Denpasar, Bali 80227
                </li>
                <li>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 transition"
                  >
                    +62 812-3456-7890
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Tjana Homestay. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-700 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-700 cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
