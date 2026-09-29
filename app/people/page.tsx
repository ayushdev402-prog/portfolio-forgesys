"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Shield, CheckCircle2 } from "lucide-react";
import { teamData, studioTenets } from "@/data/team";
import { companyData } from "@/data/company";
import { ForgeSysMark } from "@/components/ForgeSysLogo";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function PeoplePage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F7F7F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="border-b border-[#DADAD5] pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6B6B67] bg-[#EFEFEA] px-2.5 py-1 rounded-sm border border-[#DADAD5]">
                <ForgeSysMark size={13} />
                <span className="text-[#111111] font-semibold">THE TEAM // FORGESYS</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-[#111111] leading-none uppercase">
                Ayush &amp; Saad.<br />
                Direct Builders.
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pt-8 space-y-4">
              <p className="text-base sm:text-lg text-[#6B6B67] leading-relaxed">
                We are a two-engineer software team building high-performance web platforms, scalable distributed backends, and AI automation for ambitious businesses.
              </p>
              <div className="font-mono text-xs text-[#111111] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FD5006]" />
                <span>NO SUBCONTRACTORS. YOU WORK DIRECTLY WITH AYUSH &amp; SAAD.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Person Detailed Profiles: Ayush and Saad */}
        <div className="pt-12 pb-20">
          <div className="flex items-center justify-between pb-8 border-b border-[#DADAD5]">
            <h2 className="text-2xl font-sans font-medium text-[#111111]">
              The Engineers
            </h2>
            <span className="font-mono text-xs text-[#6B6B67]">
              02 CORE PARTNERS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {teamData.map((member, idx) => (
              <div
                key={member.id}
                className="border border-[#DADAD5] bg-white p-8 sm:p-10 flex flex-col justify-between space-y-8 hover:border-[#111111] transition-all duration-200"
              >
                {/* Engineering Card Top */}
                <div className="h-48 bg-[#F7F7F4] border border-[#DADAD5] p-6 flex flex-col justify-between relative overflow-hidden group">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xs text-[#6B6B67]">
                      FOUNDING ENGINEER // 0{idx + 1}
                    </span>
                    <Terminal size={16} className="text-[#6B6B67] group-hover:text-[#FD5006] transition-colors" />
                  </div>

                  <div className="text-center my-auto">
                    <div className="font-sans font-bold text-5xl sm:text-6xl text-[#111111] tracking-tight">
                      {member.name}
                    </div>
                    <div className="font-mono text-xs text-[#FD5006] uppercase tracking-wider mt-2 font-medium">
                      {member.role}
                    </div>
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px] text-[#6B6B67] border-t border-[#E5E5DF] pt-2">
                    <span>LOCATION: {member.location}</span>
                    <span className="text-[#111111] font-semibold">AVAILABLE FOR NEW PROJECTS</span>
                  </div>
                </div>

                {/* Bio & Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-sans font-semibold text-[#111111]">
                      {member.name}
                    </h3>
                    <div className="font-mono text-xs text-[#6B6B67] mt-1">
                      {member.role}
                    </div>
                  </div>

                  <p className="text-sm text-[#6B6B67] leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#6B6B67] block mb-2">
                      CORE SPECIALIZATIONS:
                    </span>
                    <div className="font-mono text-xs text-[#111111] font-medium leading-relaxed">
                      {member.specialization}
                    </div>
                  </div>

                  {/* Tech stack pill badges */}
                  <div className="pt-3 flex flex-wrap gap-2 font-mono text-xs">
                    {member.technologies.map((t) => (
                      <span
                        key={t}
                        className="bg-[#F0F0EB] text-[#111111] border border-[#DADAD5] px-2.5 py-1 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Connects */}
                <div className="pt-6 border-t border-[#EAEAE5] flex items-center justify-between">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#6B6B67] hover:text-[#111111] transition-colors"
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#6B6B67] hover:text-[#111111] transition-colors"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Tenets */}
        <div className="pt-16 pb-20 border-t border-[#DADAD5]">
          <div className="flex items-center justify-between pb-8">
            <h2 className="text-2xl font-sans font-medium text-[#111111]">
              How we work with clients
            </h2>
            <span className="font-mono text-xs text-[#6B6B67]">
              OPERATING PRINCIPLES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioTenets.map((tenet) => (
              <div
                key={tenet.num}
                className="border border-[#DADAD5] bg-white p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="font-mono text-xs font-bold text-[#FD5006]">
                  {tenet.num}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-[#111111]">
                    {tenet.title}
                  </h3>
                  <p className="text-xs text-[#6B6B67] leading-relaxed">
                    {tenet.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#EAEAE5] text-[10px] font-mono text-[#92928C]">
                  GUARANTEED
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-8 border border-[#DADAD5] bg-[#FFFFFF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-base sm:text-lg text-[#111111] font-normal">
            Ready to build a reliable web platform, backend, or automation system?
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-[#111111] hover:text-[#FD5006] transition-colors"
          >
            <span>Let&apos;s talk about your project</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
