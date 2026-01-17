import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { rooms } from "@/data/rooms";
import RoomImageSlider from "@/components/RoomImageSlider";


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params; // ✅ WAJIB await

  const room = rooms.find((r) => r.slug === slug);

  if (!room) return notFound();

  const WA_NUMBER = "62811398859";
  const WA_MSG = `Halo, saya mau booking ${room.name} di Tjana Homestay.`;

  return (
    <main className="bg-white">
      <section className="bg-slate-50 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* IMAGES */}
        <RoomImageSlider
          images={room.images}
          alt={room.name}
        />


          {/* INFO */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
            >
              ← Kembali ke Beranda
            </Link>

            <h1 className="mt-4 text-4xl font-extrabold text-slate-900">
              {room.name}
            </h1>

            <p className="mt-2 text-sm font-semibold text-green-700">
              Tipe {room.type}
            </p>

            {/* PRICE */}
            <div className="mt-6 flex items-end gap-4">
              <p className="text-3xl font-extrabold text-slate-900">
                Rp {room.pricePromo.toLocaleString("id-ID")}
              </p>
              <p className="text-lg text-slate-400 line-through">
                Rp {room.priceNormal.toLocaleString("id-ID")}
              </p>
              <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
                Promo
              </span>
            </div>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {room.desc}
            </p>

            {/* FACILITIES */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Fasilitas Kamar
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-slate-700">
                {room.facilities.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                mt-10 rounded-2xl bg-green-600
                px-8 py-4 text-base font-semibold text-white
                shadow-sm transition
                hover:bg-green-700 hover:shadow-md hover:-translate-y-0.5
              "
            >
              Book via WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
