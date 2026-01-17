"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function RoomImageSlider({ images, alt }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      {/* MAIN IMAGE */}
      <div className="relative w-full h-[420px] overflow-hidden rounded-3xl bg-slate-100 shadow-sm">
        <Image
          src={images[active]}
          alt={alt}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />
      </div>

      {/* THUMBNAILS */}
      <div className="mt-5 grid grid-cols-4 gap-4">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setActive(i)}
            className={`
              relative h-[90px] overflow-hidden rounded-xl
              border transition
              ${
                active === i
                  ? "border-green-600 ring-2 ring-green-500/30"
                  : "border-slate-200 hover:border-slate-400"
              }
            `}
          >
            <Image
              src={img}
              alt={`${alt} ${i + 1}`}
              fill
              className="object-cover"
            />

            {/* overlay for inactive */}
            {active !== i && (
              <div className="absolute inset-0 bg-black/10" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
