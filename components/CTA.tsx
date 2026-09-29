"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { companyData } from "@/data/company";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-[#111111] text-[#F4F4F0] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Statement & Direct Action */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-2 font-mono text-xs text-[#8E8E88] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-[#FD5006]" />
              <span>COMMENCE AN ENGAGEMENT</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-light tracking-[-0.03em] uppercase leading-[0.95] text-[#F4F4F0]">
              HAVE SOMETHING<br />
              WORTH BUILDING?
            </h2>

            <p className="text-lg sm:text-xl text-[#8E8E88] max-w-2xl font-light">
              We partner with founders, enterprise technical leads, and engineering teams ready to build durable, high-leverage software.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#F4F4F0] text-[#111111] hover:bg-[#FD5006] hover:text-white px-7 py-4 font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-200"
              >
                <span>LET&apos;S TALK</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <a
                href={`mailto:${companyData.email}`}
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#8E8E88] hover:text-[#F4F4F0] transition-colors py-2"
              >
                <Mail size={14} />
                <span>{companyData.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Why Work With Us Summary */}
          <div className="lg:col-span-4 border border-[#262626] bg-[#171717] p-6 sm:p-8 space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-[#FD5006] font-semibold border-b border-[#262626] pb-3">
              {companyData.whyWorkWithUs.title}
            </div>

            <div className="space-y-6">
              {companyData.whyWorkWithUs.points.map((pt, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-sans font-medium text-sm text-[#F4F4F0]">
                    {pt.title}
                  </div>
                  <p className="text-xs text-[#8E8E88] leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#262626] pt-4 font-mono text-[11px] text-[#8E8E88] flex items-center justify-between">
              <span>LOCATION: {companyData.country}</span>
              <span>{companyData.timezone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
