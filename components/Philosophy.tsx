"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { companyData } from "@/data/company";

export default function Philosophy() {
  return (
    <section className="bg-[#0E0E0E] text-[#F4F4F0] py-20 sm:py-28 border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center justify-between pb-8 border-b border-[#262626] font-mono text-xs text-[#8E8E88]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FD5006]" />
            <span className="text-[#F4F4F0] font-medium tracking-widest uppercase">
              FORGESYS // ENGINEERING STANDARDS
            </span>
          </div>
          <span className="hidden sm:inline">ZERO-FLUFF CLIENT COMMITMENTS</span>
        </div>

        {/* Primary Statement */}
        <div className="py-12 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-light tracking-[-0.03em] leading-tight uppercase text-[#F4F4F0]">
            PRODUCTION SYSTEMS BUILT FOR DETERMINISTIC PERFORMANCE.
          </h2>
          <p className="text-base sm:text-lg text-[#8E8E88] mt-4 max-w-2xl">
            We operate with a simple focus: direct engineering, clean typed architectures, and zero management layers.
          </p>
        </div>

        {/* 4 Clean Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[#262626]">
          {companyData.whyWorkWithUs.points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 border border-[#262626] bg-[#141414] flex flex-col justify-between space-y-4"
            >
              <div className="font-mono text-xs text-[#FD5006] font-semibold">
                0{idx + 1}
              </div>
              <div>
                <h3 className="text-base font-medium text-[#F4F4F0] mb-2">{pt.title}</h3>
                <p className="text-xs text-[#8E8E88] leading-relaxed">{pt.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
