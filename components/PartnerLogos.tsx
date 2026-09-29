"use client";

import React from "react";
import { companyData } from "@/data/company";

export default function PartnerLogos() {
  return (
    <div className="py-10 border-b border-[#DADAD5] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-[#6B6B67] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FD5006]" />
            <span>CORE ARCHITECTURE &amp; TECHNOLOGIES</span>
          </div>

          {/* Technology Badges / Logos */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs">
            {companyData.techLogos.map((tech) => (
              <div
                key={tech.name}
                className="px-3 py-1.5 bg-[#F7F7F4] border border-[#DADAD5] hover:border-[#111111] hover:bg-white text-[#111111] font-medium transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/40" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
