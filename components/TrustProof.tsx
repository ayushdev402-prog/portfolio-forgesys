"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companyData } from "@/data/company";

export default function TrustProof() {
  return (
    <section className="py-20 sm:py-28 border-b border-[#DADAD5] bg-[#F7F7F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Tag */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#6B6B67] pb-8 sm:pb-12">
          TRUSTED BY BUSINESSES THAT BUILD
        </div>

        {/* Narrative Grid matching Reference Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-[#DADAD5] items-start">
          {/* Large Editorial Headline */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-light tracking-tight text-[#111111] leading-none">
              Real work.<br />
              Real impact.
            </h2>
          </div>

          {/* Middle Supporting Copy & About Link */}
          <div className="lg:col-span-4 space-y-6">
            <p className="text-base text-[#6B6B67] leading-relaxed">
              We&apos;re a small team of engineers, designers and problem solvers, helping businesses turn complex ideas into reliable, scalable products.
            </p>

            <div>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] hover:text-[#FD5006] transition-colors relative pb-1"
              >
                <span>ABOUT US</span>
                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FD5006] transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>

          {/* Right Orange Commitment Callout */}
          <div className="lg:col-span-4 space-y-3">
            <div className="w-8 h-[2px] bg-[#FD5006]" />
            <div className="font-mono text-xs uppercase tracking-wider font-semibold text-[#111111]">
              QUALITY IS A LONG TERM COMMITMENT.
            </div>
            <p className="text-sm text-[#6B6B67] leading-relaxed">
              We build for the long run — with clean code, thoughtful design and a focus on real business outcomes.
            </p>
          </div>
        </div>

        {/* 4 Proof Metrics Columns matching Reference Image 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
          {companyData.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-5xl sm:text-6xl font-sans font-light text-[#111111] tracking-tight">
                {metric.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#6B6B67] font-medium leading-tight">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
