export default function ContactSection() {
  return (
    <section className="bg-slate-50 py-28" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - CONTACT INFO */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-slate-500">
              CONTACT & LOCATION
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Hubungi Kami <br /> & Temukan Lokasi
            </h2>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Tjana Homestay berlokasi strategis di Sanur, Bali. 
              Hubungi kami untuk reservasi kamar atau informasi lebih lanjut.
            </p>

            {/* contact list */}
            <div className="mt-8 space-y-4 text-slate-700">
              <p>
                <span className="font-semibold">Alamat:</span><br />
                Gg. V No.7, Sanur, Denpasar Selatan, Kota Denpasar, Bali 80227
              </p>

              <p>
                <span className="font-semibold">WhatsApp:</span><br />
                +62811398859
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/62811398859"
              target="_blank"
              className="
                inline-flex items-center justify-center
                mt-10 rounded-2xl bg-slate-900
                px-8 py-4 text-sm font-semibold text-white
                transition hover:bg-slate-800
              "
            >
              Hubungi via WhatsApp
            </a>
          </div>

          {/* RIGHT - MAP */}
          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1972.0542202737245!2d115.2587693!3d-8.681237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24049eabf0023%3A0xc92a37947710fc21!2sTjana%20Homestay%20Denpasar!5e0!3m2!1sen!2sid!4v1768636532408!5m2!1sen!2sid"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                allowFullScreen
              />
            <a
                href="https://maps.app.goo.gl/D8tV4h5Zpr29ECYc8"
                target="_blank"
                className="
                  absolute bottom-4 right-4
                  rounded-xl bg-white px-4 py-2
                  text-sm font-semibold text-slate-900
                  shadow hover:bg-slate-100
                "
              >
                Buka di Google Maps
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
