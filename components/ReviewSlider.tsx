"use client";

import { reviews } from "@/data/reviews";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ReviewSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let raf: number;

    const loop = () => {
      x += 0.3;
      if (x >= track.scrollWidth / 2) x = 0;
      track.style.transform = `translateX(-${x}px)`;
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="bg-slate-50 py-28 overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 mb-14 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Apa Kata Tamu Kami
        </h2>
        <p className="mt-3 text-slate-600">
          Review asli dari Google Maps
        </p>
      </div>

      <div className="relative">
        <div ref={trackRef} className="flex gap-6 w-max">
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  name,
  rating,
  text,
  image,
}: {
  name: string;
  rating: number;
  text: string;
  image: string;
}) {
  return (
    <div className="w-[320px] shrink-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={44}
          height={44}
          className=" object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <div className="flex gap-1 text-yellow-400 text-sm">
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600">
        “{text}”
      </p>
    </div>
  );
}
