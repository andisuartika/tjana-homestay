export default function Footer() {
  return (
    <footer className="bg-slate-100 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* CARD */}
        <div
          className="
            rounded-[32px] bg-white
            px-10 py-14
            shadow-sm
          "
        >
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
                <li className="hover:text-slate-900 cursor-pointer">
                  Home
                </li>
                <li className="hover:text-slate-900 cursor-pointer">
                  Kamar
                </li>
                <li className="hover:text-slate-900 cursor-pointer">
                  Sewa Motor
                </li>
                <li className="hover:text-slate-900 cursor-pointer">
                  Kontak
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Kontak
              </h4>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li>Gg. V No.7, Sanur, Denpasar Selatan, Kota Denpasar, Bali 80227</li>
                <li>WhatsApp: +62812-3456-7890</li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            mt-10 flex flex-col md:flex-row
            items-center justify-between
            gap-4 text-sm text-slate-500
          "
        >
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
