"use client";

import { useState } from "react";
import Image from "next/image";
import { motors } from "@/data/motors";

export default function MotorSection() {
  const [active, setActive] = useState(0);

  const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);


  const motor = motors[0]; 
  const next = () =>
    setActive((prev) => (prev + 1) % motor.images.length);
  const prev = () =>
    setActive((prev) =>
      prev === 0 ? motor.images.length - 1 : prev - 1
    );

  return (
    <section className="relative overflow-hidden bg-slate-50 py-28" id="motor">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-slate-500">
            MOTOR RENTAL
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Sewa Motor <br /> Mudah & Praktis
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Jelajahi Sanur dan sekitarnya dengan motor yang nyaman,
            hemat, dan siap pakai langsung dari homestay.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-green-600">
                  {formatRupiah(motor.pricePromo)}
                </span>

                <span className="text-lg text-slate-400 line-through">
                  {formatRupiah(motor.priceNormal)}
                </span>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 border border-red-100">
                  Promo
                </span>
              </div>

              <p className="mt-1 text-sm text-slate-500">
                / hari
              </p>
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
              Termasuk Helm
            </span>
          </div>

          <a
            href="https://wa.me/62811398859"
            target="_blank"
            className="mt-10 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Sewa via WhatsApp
          </a>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative">
          <div className="relative h-[340px] md:h-[420px] flex items-center justify-center">
            <Image
              src={motor.images[active]}
              alt={motor.name}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow px-3 py-2 text-sm hover:bg-slate-100"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow px-3 py-2 text-sm hover:bg-slate-100"
          >
            →
          </button>

          {/* dots */}
          <div className="mt-6 flex justify-center gap-2">
            {motor.images.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === active ? "bg-slate-900" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
