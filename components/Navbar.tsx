"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Kamar", id: "rooms" },
  { label: "Sewa Motor", id: "motor" },
  { label: "Destinasi", id: "destinations" },
  { label: "Kontak", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // detect scroll for blur navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // smooth scroll with offset (navbar height)
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -96; // navbar height + spacing
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const WA_NUMBER = "62811398859";
  const WA_MSG = "Halo, saya mau booking Tjana Homestay.";

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-slate-200/70 shadow-sm hover:bg-white/80"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* BRAND */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-11 w-11 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Tjana Homestay Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="leading-tight">
              <p className="font-semibold text-slate-900 text-lg group-hover:text-green-700 transition">
                Tjana Homestay
              </p>
              <p className="text-sm text-slate-600 -mt-0.5">
                Sanur, Bali
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2 rounded-xl bg-white/60 backdrop-blur border border-slate-200/70 px-2 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  relative px-5 py-2.5 rounded-xl
                  text-base font-semibold
                  text-slate-700 transition
                  hover:text-green-700 hover:bg-white/80 hover:shadow-sm
                  active:scale-[0.97]
                "
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-2xl bg-green-600
                px-6 py-3 text-base font-semibold text-white
                shadow-sm transition duration-300
                hover:bg-green-700 hover:shadow-md hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              Book via WhatsApp
              <span className="opacity-90">→</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="
              md:hidden inline-flex items-center justify-center
              rounded-xl border border-slate-200/70
              bg-white/70 backdrop-blur
              px-5 py-3 text-slate-900
              hover:bg-white transition
            "
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="text-base font-semibold">
              {open ? "Close" : "Menu"}
            </span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="pb-4 pt-2">
            <div className="grid gap-1 rounded-2xl border border-slate-200/70 bg-white/85 backdrop-blur p-2 shadow-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setOpen(false);
                  }}
                  className="
                    px-5 py-3 rounded-xl
                    text-base font-semibold
                    text-slate-700 transition
                    hover:bg-slate-50
                    active:scale-[0.97]
                  "
                >
                  {item.label}
                </button>
              ))}

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-1 inline-flex items-center justify-center gap-2
                  rounded-xl bg-green-600
                  px-5 py-3 text-base font-semibold text-white
                  hover:bg-green-700 transition
                "
              >
                Book via WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
