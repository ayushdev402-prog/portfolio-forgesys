"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { teamData } from "@/data/team";

export default function TeamPreview() {
  return (
    <section className="py-20 sm:py-28 border-b border-[#DADAD5] bg-[#F7F7F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 sm:pb-16 border-b border-[#DADAD5]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#6B6B67] uppercase tracking-widest pb-2">
              <span className="w-1.5 h-1.5 bg-[#FD5006]" />
              <span>THE BUILDERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#111111] uppercase">
              MEET THE TEAM.
            </h2>
          </div>
          <div>
            <Link
              href="/people"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#111111] hover:text-[#FD5006] transition-colors"
            >
              <span>VIEW FULL PROFILES</span>
              <ArrowRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* 2-Person Engineering Team Grid: Ayush & Saad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {teamData.map((member, idx) => (
            <div
              key={member.id}
              className="border border-[#DADAD5] bg-white p-8 flex flex-col justify-between space-y-6 hover:border-[#111111] transition-colors duration-200"
            >
              {/* Badge Area */}
              <div className="h-44 bg-[#F7F7F4] border border-[#DADAD5] p-5 flex flex-col justify-between relative overflow-hidden group">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-[#6B6B67]">
                    CO-FOUNDER // 0{idx + 1}
                  </span>
                  <Terminal size={14} className="text-[#6B6B67] group-hover:text-[#FD5006] transition-colors" />
                </div>

                <div className="text-center">
                  <div className="font-sans font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight">
                    {member.name}
                  </div>
                  <div className="font-mono text-xs text-[#FD5006] uppercase tracking-wider mt-1.5">
                    {member.role}
                  </div>
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] text-[#6B6B67] border-t border-[#E5E5DF] pt-1.5">
                  <span>STATUS: AVAILABLE FOR CLIENT WORK</span>
                  <span>{member.location}</span>
                </div>
              </div>

              {/* Info & Specialization */}
              <div className="space-y-3">
                <h3 className="text-2xl font-sans font-semibold tracking-tight text-[#111111]">
                  {member.name}
                </h3>
                <p className="text-sm text-[#6B6B67] leading-relaxed">
                  {member.bio}
                </p>
                <div className="font-mono text-xs text-[#111111] font-medium pt-1">
                  {member.specialization}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-4 border-t border-[#EAEAE5]">
                {member.technologies.map((t) => (
                  <span key={t} className="bg-[#F0F0EB] px-2.5 py-1 text-[#111111] border border-[#DADAD5]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
