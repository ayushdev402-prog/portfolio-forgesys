"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Code2, Users2 } from "lucide-react";
import { companyData } from "@/data/company";
import Philosophy from "@/components/Philosophy";
import ForgeSysLogo, { ForgeSysMark } from "@/components/ForgeSysLogo";

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20">
        {/* Page Header */}
        <div className="border-b border-[#DADAD5] pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="mb-2">
                <ForgeSysLogo height={32} />
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#6B6B67]">
                STUDIO OVERVIEW // AYUSH &amp; SAAD
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-[#111111] leading-tight">
                Software engineered<br />
                with rigor &amp; discipline.
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pt-8 space-y-3 font-mono text-xs text-[#6B6B67]">
              <div>ESTABLISHED: {companyData.foundedYear}</div>
              <div>STUDIO HEADQUARTERS: {companyData.location}</div>
              <div>FOUNDING BUILDERS: AYUSH &amp; SAAD</div>
            </div>
          </div>
        </div>

        {/* Story & Context */}
        <div className="py-16 sm:py-20 border-b border-[#DADAD5] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-[#FD5006] font-semibold uppercase tracking-wider block">
              ORIGIN &amp; FOCUS
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-medium text-[#111111] mt-2">
              Why we founded forgesys
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[#6B6B67] leading-relaxed">
            <p>
              We founded forgesys to provide businesses with an agile, high-caliber engineering partnership. We eliminate agency bureaucracy, account managers, and subcontracting layers in favor of direct collaboration with the two engineers who architect and write your code.
            </p>
            <p>
              Ayush leads distributed backend architectures, high-volume streaming data pipelines, and AI systems. Saad leads frontend architecture, reactive UI systems, and cloud infrastructure. Together, we take full operational responsibility for the systems we deliver.
            </p>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="py-16 sm:py-20 border-b border-[#DADAD5]">
          <div className="pb-8">
            <h2 className="text-2xl font-sans font-medium text-[#111111]">
              Our Engineering Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#DADAD5] bg-white p-8 space-y-4">
              <div className="w-10 h-10 bg-[#F7F7F4] border border-[#DADAD5] flex items-center justify-center text-[#111111]">
                <Cpu size={18} />
              </div>
              <h3 className="text-lg font-medium text-[#111111]">
                Deterministic Systems
              </h3>
              <p className="text-xs text-[#6B6B67] leading-relaxed">
                We design backend flows with explicit type boundaries, transactional idempotency, and automated fallback routing so systems stay stable during unpredictable peaks.
              </p>
            </div>

            <div className="border border-[#DADAD5] bg-white p-8 space-y-4">
              <div className="w-10 h-10 bg-[#F7F7F4] border border-[#DADAD5] flex items-center justify-center text-[#111111]">
                <Code2 size={18} />
              </div>
              <h3 className="text-lg font-medium text-[#111111]">
                Clean &amp; Maintainable
              </h3>
              <p className="text-xs text-[#6B6B67] leading-relaxed">
                Code should read like clear prose. We adhere to rigorous static typing, self-documenting code bases, and standard modern tools your team can easily support.
              </p>
            </div>

            <div className="border border-[#DADAD5] bg-white p-8 space-y-4">
              <div className="w-10 h-10 bg-[#F7F7F4] border border-[#DADAD5] flex items-center justify-center text-[#111111]">
                <Users2 size={18} />
              </div>
              <h3 className="text-lg font-medium text-[#111111]">
                Direct Partner Access
              </h3>
              <p className="text-xs text-[#6B6B67] leading-relaxed">
                Direct communication with Ayush and Saad. Fast decisions, honest feasibility assessments, and zero translation loss.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <Philosophy />

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="p-8 sm:p-12 border border-[#DADAD5] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-sans font-light tracking-tight text-[#111111]">
              Ready to work with a dedicated engineering team?
            </h3>
            <p className="text-sm text-[#6B6B67] mt-1">
              Tell us about what you&apos;re building and we&apos;ll schedule an exploratory technical session.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#111111] text-[#F7F7F4] hover:bg-[#222222] px-6 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Let&apos;s talk</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
