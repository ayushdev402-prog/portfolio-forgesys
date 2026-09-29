"use client";

import React from "react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 md:py-32 border-b border-[#DADAD5] bg-[#F7F7F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 sm:pb-16 border-b border-[#DADAD5]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#6B6B67] uppercase tracking-widest pb-2">
              <span className="w-1.5 h-1.5 bg-[#FD5006]" />
              <span>TESTIMONIALS &amp; TRUST</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#111111] uppercase">
              CLIENT PERSPECTIVES.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#6B6B67]">
            CONFIDENTIAL PARTNERSHIP FEEDBACK
          </div>
        </div>

        {/* Testimonials Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#DADAD5] pt-4">
          {testimonialsData.map((item, idx) => (
            <div
              key={item.id}
              className={`py-8 sm:py-10 ${
                idx === 0 ? "lg:pl-0 lg:pr-8" : idx === 2 ? "lg:pl-8 lg:pr-0" : "lg:px-8"
              } flex flex-col justify-between space-y-8`}
            >
              <div className="space-y-4">
                <span className="font-mono text-xs text-[#FD5006] font-semibold">
                  0{idx + 1} // FEEDBACK
                </span>
                <p className="text-base sm:text-lg font-sans font-light text-[#111111] leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#DADAD5] space-y-1">
                <div className="font-sans font-semibold text-sm text-[#111111]">
                  {item.author}
                </div>
                <div className="font-mono text-xs text-[#6B6B67]">
                  {item.company}
                </div>
                <div className="font-mono text-[10px] text-[#92928C]">
                  RE: {item.projectReference}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
