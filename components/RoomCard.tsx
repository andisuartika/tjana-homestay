"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  room: {
    slug: string;
    name: string;
    type: string;
    priceNormal: number;
    pricePromo: number;
    desc: string;
    images: string[];
    facilities: string[];
  };
};



export default function RoomCard({ room }: Props) {
  const [active, setActive] = useState(0);

  const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);


  const next = () =>
    setActive((prev) => (prev + 1) % room.images.length);
  const prev = () =>
    setActive((prev) =>
      prev === 0 ? room.images.length - 1 : prev - 1
    );

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
      {/* IMAGE SLIDER */}
      <div className="relative h-64 overflow-hidden rounded-t-3xl">
        <Image
          src={room.images[active]}
          alt={room.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

        {/* controls */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm shadow hover:bg-white"
        >
          ←
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm shadow hover:bg-white"
        >
          →
        </button>

        {/* dots */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {room.images.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === active ? "bg-green-500" : "bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">
            {room.name}
          </h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
            {room.type}
          </span>
        </div>

        <p className="mt-3 text-sm text-slate-600">
          {room.desc}
        </p>

      <div className="mt-4">
        <div className="flex items-center gap-3">
          <span className="text-xl font-extrabold text-green-600">
            {formatRupiah(room.pricePromo)}
          </span>

          <span className="text-sm text-slate-400 line-through">
            {formatRupiah(room.priceNormal)}
          </span>

          <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-600 border border-red-100">
            Promo
          </span>
        </div>

        <p className="mt-1 text-xs text-slate-500">
          / malam
        </p>
      </div>


        {/* facilities */}
        <div className="mt-4 flex flex-wrap gap-2">
          {room.facilities.map((f) => (
            <span
              key={f}
              className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200"
            >
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link href={`/rooms/${room.slug}`} className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700">
          Lihat Detail Kamar
        </Link>
      </div>
    </div>
  );
}
