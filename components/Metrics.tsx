"use client";

import React from "react";
import { companyData } from "@/data/company";

export default function Metrics() {
  return (
    <section className="py-20 sm:py-28 md:py-32 border-b border-[#DADAD5] bg-[#F7F7F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 sm:pb-16 border-b border-[#DADAD5]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#6B6B67] uppercase tracking-widest pb-2">
              <span className="w-1.5 h-1.5 bg-[#FD5006]" />
              <span>PROOF &amp; TRACK RECORD</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-sans font-light tracking-tight text-[#111111] uppercase">
              A FEW THINGS WE&apos;VE DONE.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#6B6B67]">
            VERIFIED PRODUCTION DEPLOYMENTS
          </div>
        </div>

        {/* Editorial Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DADAD5] pt-4">
          {companyData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`py-8 sm:py-10 ${
                idx === 0 ? "sm:pl-0 sm:pr-8" : "sm:px-8"
              } flex flex-col justify-between`}
            >
              <div>
                <span className="font-mono text-xs text-[#6B6B67] uppercase tracking-wider block mb-4">
                  METRIC 0{idx + 1}
                </span>
                <div className="text-6xl sm:text-7xl lg:text-8xl font-sans font-light tracking-tight text-[#111111] leading-none mb-3">
                  {metric.value}
                </div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider font-semibold text-[#111111]">
                  {metric.label}
                </div>
                {metric.subtext && (
                  <p className="text-xs text-[#6B6B67] mt-1.5 leading-relaxed">
                    {metric.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
