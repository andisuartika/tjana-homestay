"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  label?: string;
};

export default function HeroSlider() {
  const slides: Slide[] = useMemo(
    () => [
     {
    src: "/images/hero/hero-1.png",
    alt: "Tjana Homestay exterior in Sanur Bali",
    label: "Welcome to Tjana Homestay",
    subLabel: "Comfortable homestay in the heart of Sanur",
  },
  {
    src: "/images/hero/hero-2.png",
    alt: "Traditional Balinese atmosphere at Tjana Homestay",
    label: "Authentic Balinese Atmosphere",
    subLabel: "Feel the warmth of local culture",
  },
  {
    src: "/images/hero/hero-3.png",
    alt: "Clean and comfortable room at Tjana Homestay",
    label: "Comfortable & Clean Rooms",
    subLabel: "Designed for rest and relaxation",
  },
  {
    src: "/images/hero/hero-4.png",
    alt: "Private terrace area at Tjana Homestay",
    label: "Private Terrace Area",
    subLabel: "Your own space to relax",
  },
  {
    src: "/images/hero/hero-5.png",
    alt: "Peaceful garden space at Tjana Homestay",
    label: "Peaceful Garden Space",
    subLabel: "Surrounded by greenery and calm",
  },
  {
    src: "/images/hero/hero-6.png",
    alt: "Relaxing outdoor area at Tjana Homestay",
    label: "Relax & Unwind",
    subLabel: "Slow down and enjoy your stay",
  },
    ],
    []
  );

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (idx: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const clamped = (idx + slides.length) % slides.length;
    const child = el.children.item(clamped) as HTMLElement | null;
    if (!child) return;
    child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActive(clamped);
  };

  // update active on manual scroll
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;

      children.forEach((c, i) => {
        const cCenter = c.offsetLeft + c.clientWidth / 2;
        const dist = Math.abs(cCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });

      setActive(bestIdx);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      {/* Frame */}
      <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-xl">
        {/* Slider */}
        <div
          ref={wrapRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {slides.map((s, i) => (
            <div
              key={s.src}
              className="min-w-full snap-center relative"
              aria-hidden={active !== i}
            >
              <img
                src={s.src}
                alt={s.alt}
                className="h-[420px] w-full object-cover transition duration-500 hover:scale-[1.02]"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />

              {/* label */}
              {s.label && (
                <div className="absolute left-5 bottom-5">
                  <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-3 py-1 text-sm font-semibold text-slate-900 border border-white/60">
                    {s.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={() => scrollToIndex(active - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-2xl bg-white/80 backdrop-blur border border-white/60 px-3 py-3 shadow-sm hover:bg-white transition"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={() => scrollToIndex(active + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-2xl bg-white/80 backdrop-blur border border-white/60 px-3 py-3 shadow-sm hover:bg-white transition"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 right-5 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={[
                "h-2.5 rounded-full transition-all",
                i === active ? "w-8 bg-green-600" : "w-2.5 bg-white/70 hover:bg-white",
              ].join(" ")}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Helper text */}
      <p className="mt-3 text-sm text-slate-500">
        Geser untuk melihat foto lainnya
      </p>
    </div>
  );
}

/* 
  NOTE:
  - "no-scrollbar" class perlu di globals.css (lihat snippet bawah)
*/
