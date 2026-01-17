"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-28" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        {/* title */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-slate-500">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pertanyaan yang sering diajukan oleh tamu Tjana Homestay
          </p>
        </div>

        {/* list */}
        <div className="divide-y divide-slate-200">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="py-6">
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.question}
                  </h3>

                  <span
                    className={`
                      text-2xl font-light text-slate-400
                      transition-transform duration-300
                      ${isOpen ? "rotate-45" : ""}
                    `}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-40 mt-4" : "max-h-0"}
                  `}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
