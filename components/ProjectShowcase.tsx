"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import ContentHubMockup from "./ContentHubMockup";

export default function ProjectShowcase() {
  const featured = projectsData[0]; // Enterprise Content Distribution Platform
  const otherProjects = projectsData.slice(1, 4);

  return (
    <section id="selected-work" className="py-20 sm:py-28 border-b border-[#DADAD5] bg-[#F7F7F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Featured Project Header matching Reference Image 1 */}
        <div className="pb-8">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 font-mono text-xs text-[#6B6B67] uppercase tracking-wider">
                <span className="font-semibold text-[#111111]">01</span>
                <span>—</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-[#111111] leading-tight">
                {featured.title}
              </h2>
              <p className="text-base sm:text-lg text-[#6B6B67] leading-relaxed pt-1">
                A scalable platform to manage and distribute financial content across multiple channels, used by global teams.
              </p>
            </div>

            {/* Technologies & Action Link */}
            <div className="flex flex-col lg:items-end justify-between space-y-6">
              <div className="font-mono text-xs text-[#6B6B67] flex flex-wrap items-center gap-4">
                {featured.technologies.map((t) => (
                  <span key={t} className="text-[#111111] font-medium tracking-wider">
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>

              <div>
                <Link
                  href={`/work/${featured.slug}`}
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] hover:text-[#FD5006] transition-colors relative pb-1"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-1.5 group-hover:text-[#FD5006]"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FD5006] transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            </div>
          </div>

          {/* Large ContentHub Software Mockup */}
          <div className="mt-6">
            <ContentHubMockup />
          </div>
        </div>

        {/* Selected Work Grid matching Reference Image 2 */}
        <div className="mt-20 pt-16 border-t border-[#DADAD5]">
          <div className="flex items-center justify-between pb-8">
            <h3 className="text-xl sm:text-2xl font-sans font-medium text-[#111111]">
              Selected Work
            </h3>
            <Link
              href="/work"
              className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#6B6B67] hover:text-[#111111] transition-colors"
            >
              <span>View all work</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map((proj) => (
              <Link
                key={proj.id}
                href={`/work/${proj.slug}`}
                className="group block border border-[#DADAD5] bg-[#FFFFFF] p-6 hover:border-[#FD5006]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Mockup Preview Area */}
                  <div className="h-44 bg-[#F0F0EB] border border-[#E5E5DF] p-4 flex flex-col justify-between font-mono text-[10px] text-[#6B6B67]">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#111111]">{proj.category}</span>
                      <span>{proj.year}</span>
                    </div>

                    <div className="my-auto text-center space-y-1">
                      <div className="font-sans font-semibold text-sm text-[#111111]">
                        {proj.mockupData.badge}
                      </div>
                      <div className="text-[10px] text-[#92928C]">
                        {proj.mockupData.stats[0]?.label}: {proj.mockupData.stats[0]?.value}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[9px] border-t border-[#DADAD5] pt-1">
                      <span>STATUS: ONLINE</span>
                      <span className="text-[#FD5006]">VERIFIED</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-sans font-medium text-[#111111] group-hover:text-[#FD5006] transition-colors">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-[#6B6B67] leading-relaxed mt-1 line-clamp-2">
                      {proj.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAEAE5] flex items-center justify-between">
                  <div className="font-mono text-[10px] text-[#6B6B67] flex gap-2">
                    {proj.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="bg-[#F4F4F0] px-1.5 py-0.5 border border-[#DADAD5]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-[#111111] group-hover:translate-x-1 group-hover:text-[#FD5006] transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
