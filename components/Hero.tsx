"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { companyData } from "@/data/company";
import Hero3DVisual from "./Hero3DVisual";
import { ForgeSysMark } from "./ForgeSysLogo";

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 border-b border-[#DADAD5] bg-[#F7F7F4] overflow-hidden">
      {/* Subtle brand orange ambient glow effect */}
      <div 
        className="absolute top-1/4 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none -z-10 blur-3xl opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(253, 80, 6, 0.12) 0%, rgba(253, 80, 6, 0.02) 50%, transparent 70%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Direct Studio Headline & Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Tagline Indicator with Official ForgeSys Mark */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#EFEFEA] border border-[#DADAD5] shadow-xs">
              <ForgeSysMark size={14} />
              <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold">
                FORGESYS
              </span>
              <span className="text-[#DADAD5]">/</span>
              <span className="font-mono text-[11px] text-[#6B6B67]">
                AYUSH &amp; SAAD
              </span>
            </div>

            {/* Giant Clean Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] font-sans font-extrabold tracking-[-0.035em] text-[#111111] leading-[0.98] uppercase">
              WE BUILD<br />
              THINGS THAT<br />
              SHOULD EXIST.
            </h1>

            {/* Subhead Description */}
            <p className="text-base sm:text-lg text-[#6B6B67] leading-relaxed max-w-lg font-normal">
              {companyData.heroSubheadline}
            </p>

            {/* Call To Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#selected-work"
                className="inline-flex items-center gap-2 bg-[#111111] text-[#F7F7F4] hover:bg-[#222222] px-6 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/people"
                className="inline-flex items-center gap-2 bg-transparent text-[#111111] hover:bg-[#EFEFEA] border border-[#DADAD5] px-6 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>MEET THE TEAM (02)</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive 3D WebGL Mesh Visual */}
          <div className="lg:col-span-7 lg:pl-4">
            <Hero3DVisual />
          </div>
        </div>

        {/* Bottom Selected Work Breadcrumb Marker */}
        <div className="mt-16 sm:mt-20 pt-6 border-t border-[#DADAD5] flex items-center justify-between font-mono text-xs text-[#6B6B67]">
          <div className="flex items-center gap-2">
            <span className="text-[#FD5006] font-bold">/</span>
            <span className="text-[#111111] font-semibold tracking-wider">SELECTED WORK</span>
            <span>/</span>
            <span>01 — ENTERPRISE CONTENT DISTRIBUTION</span>
          </div>
          <div className="hidden sm:inline font-mono text-[11px] text-[#92928C]">
            CLICK ANY PROJECT FOR FULL TECHNICAL CASE STUDY
          </div>
        </div>
      </div>
    </section>
  );
}
