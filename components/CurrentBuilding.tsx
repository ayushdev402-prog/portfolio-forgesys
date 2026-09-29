"use client";

import React from "react";
import { companyData } from "@/data/company";

export default function CurrentBuilding() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "IN PRODUCTION":
        return (
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold text-[#111111] bg-[#EFEFEA] px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            IN PRODUCTION
          </span>
        );
      case "IN DEVELOPMENT":
        return (
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold text-[#FD5006] bg-[#FD5006]/10 px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FD5006]" />
            IN DEVELOPMENT
          </span>
        );
      case "EXPERIMENTAL":
        return (
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold text-[#6B6B67] bg-[#E5E5DF] px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B6B67]" />
            EXPERIMENTAL
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 sm:py-28 border-b border-[#DADAD5] bg-[#F7F7F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 sm:pb-16 border-b border-[#DADAD5]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#6B6B67] uppercase tracking-widest pb-2">
              <span className="w-1.5 h-1.5 bg-[#FD5006]" />
              <span>ACTIVE INITIATIVES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#111111] uppercase">
              CURRENTLY BUILDING.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#6B6B67]">
            LIVE STUDIO STATUS · UPDATED WEEKLY
          </div>
        </div>

        {/* Dynamic Items List */}
        <div className="divide-y divide-[#DADAD5]">
          {companyData.currentlyBuilding.map((item) => (
            <div
              key={item.id}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center"
            >
              {/* Item Index & Category */}
              <div className="md:col-span-3 flex items-center gap-4">
                <span className="font-mono text-sm font-semibold text-[#111111]">
                  {item.number}
                </span>
                <span className="font-mono text-xs text-[#6B6B67] uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Title & Description */}
              <div className="md:col-span-6 space-y-1">
                <h3 className="text-xl sm:text-2xl font-sans font-medium text-[#111111]">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B67] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Status Badge */}
              <div className="md:col-span-3 flex md:justify-end">
                {getStatusBadge(item.status)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
