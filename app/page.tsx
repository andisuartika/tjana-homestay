import Link from "next/link";

import HeroSlider from "@/components/HeroSlider";
import FacilityCard from "@/components/FacilityCard";
import RoomCard from "@/components/RoomCard";
import MotorSection from "@/components/MotorSection";
import DestinationCard from "@/components/DestinationCard";
import ReviewSlider from "@/components/ReviewSlider";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import { FadeUp } from "@/components/Animate";
import { Stagger, StaggerItem } from "@/components/Stagger";


import { facilities } from "@/data/facilities";
import { rooms } from "@/data/rooms";
import { destinations } from "@/data/destinations";


export default function LandingPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-white" id="home">
        {/* subtle background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.12),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(15,23,42,0.06),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-20 grid md:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
              <FadeUp>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-green-700 border border-green-100">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-600" />
                    Homestay • Sanur, Bali
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-sm font-semibold text-slate-700 border border-slate-200 shadow-sm">
                    ⭐ 4.8 • Google Reviews
                  </span>
                </div>
              </FadeUp>

             <FadeUp delay={0.1}>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Menginap tenang,
              <br />
              <span className="text-green-700">dekat Pantai Sanur</span>.
            </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                Kamar AC & kipas yang bersih dan nyaman. Cocok untuk short stay maupun long stay.
                Booking cepat via WhatsApp—tanpa ribet.
              </p>
             </FadeUp>

             <FadeUp delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    "Halo, saya mau booking Tjana Homestay di Sanur."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition duration-300 hover:bg-green-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  Book via WhatsApp <span className="opacity-90">→</span>
                </a>

                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Lihat Kamar
                </Link>
              </div>
             </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-10 grid grid-cols-2 gap-3 max-w-xl">
                {[
                  { k: "Check-in", v: "13:00" },
                  { k: "Check-out", v: "11:00" },
                  { k: "Tipe kamar", v: "AC & Kipas" },
                  { k: "Sewa Motor", v: "Tersedia" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur px-4 py-3"
                  >
                    <p className="text-xs font-semibold text-slate-500">{x.k}</p>
                    <p className="text-sm font-semibold text-slate-900">{x.v}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>


          {/* Right slider */}
          <FadeUp delay={0.2}>
            <HeroSlider />
          </FadeUp>
        </div>
      </section>

      {/* ================= FACILITIES ================= */}
      <section className="bg-slate-50 py-28" id="facilities">
        <div className="max-w-7xl mx-auto px-4">
          {/* title */}
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-extrabold text-slate-900">
                Fasilitas
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Nikmati fasilitas penting untuk kenyamanan selama menginap.
              </p>
            </div>
          </FadeUp>

          {/* grid */}
          <Stagger>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
              {facilities.map((item) => (
                <StaggerItem key={item.title}>
                  <FacilityCard
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                  />
                </StaggerItem>
              ))}
            </div>
          </Stagger>
         
        </div>
      </section>


      {/* ================= ROOMS ================= */}
      <section className="bg-white py-28" id ="rooms">
        <div className="max-w-7xl mx-auto px-4">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold tracking-widest text-green-700">
                ROOMS
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900">
                Tipe Kamar
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Pilih tipe kamar sesuai kebutuhan dan budget kamu.
              </p>
            </div>
          </FadeUp>

          <Stagger>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {rooms.map((room) => (
                <StaggerItem key={room.slug}>
                  <RoomCard room={room} />
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>


      {/* ================= MOTOR RENTAL ================= */}
      <FadeUp>
        <MotorSection />
      </FadeUp>

      {/* ================= DESTINATIONS ================= */}
      <section className="bg-white py-28" id="destinations">
        <div className="max-w-7xl mx-auto px-4">
          {/* title */}
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold tracking-widest text-slate-500">
                NEARBY DESTINATIONS
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900">
                Destinasi Terdekat
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Lokasi strategis dengan akses mudah ke berbagai destinasi favorit di Bali.
              </p>
            </div>
          </FadeUp>

          {/* cards */}
         <Stagger>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {destinations.map((item) => (
                <StaggerItem key={item.name}>
                  <DestinationCard {...item} />
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <FadeUp>
        <ReviewSlider />
      </FadeUp>

      {/* ================= FAQ ================= */}
      <FadeUp>
        <FAQSection />
      </FadeUp>

      {/* ================= CONTACT ================= */}
      <FadeUp>
        <ContactSection />
      </FadeUp>
    </>
  );
}
