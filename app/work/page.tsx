"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData, ProjectCategory } from "@/data/projects";
import ProjectVisual from "@/components/ProjectVisual";
import { ForgeSysMark } from "@/components/ForgeSysLogo";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("ALL");

  const categories: ProjectCategory[] = ["ALL", "WEB", "AI / ML", "AUTOMATION", "ENTERPRISE"];

  const filteredProjects =
    activeCategory === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F7F7F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section matching Reference Image 2 */}
        <div className="border-b border-[#DADAD5] pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6B6B67] bg-[#EFEFEA] px-2.5 py-1 rounded-sm border border-[#DADAD5]">
                <ForgeSysMark size={13} />
                <span className="text-[#111111] font-semibold">FORGESYS // SELECTED WORK</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-[#111111] leading-tight">
                Projects we&apos;re<br />
                proud of.
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pt-8 space-y-4">
              <p className="text-base sm:text-lg text-[#6B6B67] leading-relaxed">
                We build digital products, platforms and automation systems for businesses that want to move faster and do more.
              </p>
              <div className="font-mono text-xs text-[#111111]">
                A CURATED ARCHIVE OF CLIENT COMMISSIONS &amp; ARCHITECTURAL PLATFORMS
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation matching Reference Image 2 */}
        <div className="py-8 border-b border-[#DADAD5] flex items-center gap-6 sm:gap-10 overflow-x-auto text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`relative py-1 tracking-wider uppercase transition-colors shrink-0 ${
                activeCategory === cat
                  ? "text-[#111111] font-bold"
                  : "text-[#6B6B67] hover:text-[#111111]"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FD5006]" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Editorial List matching Reference Image 2 */}
        <div className="divide-y divide-[#DADAD5]">
          {filteredProjects.map((project) => (
            <article key={project.id} className="py-14 sm:py-20 group">
              <Link href={`/work/${project.slug}`} className="block focus:outline-none">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Number, Title, Description, Tech Stack */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="font-mono text-xs font-semibold text-[#111111]">
                      {project.number}
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-light tracking-tight text-[#111111] group-hover:text-[#FD5006] transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-sm text-[#6B6B67] leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 font-mono text-xs">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#FFFFFF] border border-[#DADAD5] px-2.5 py-1 text-[#111111]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Arrow Button */}
                    <div className="pt-2">
                      <div className="w-10 h-10 rounded-full border border-[#DADAD5] bg-white group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white flex items-center justify-center transition-all duration-200">
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Realistic App Visual Frame */}
                  <div className="lg:col-span-5">
                    <ProjectVisual project={project} variant="card" />
                  </div>

                  {/* Right Column: Category & Year */}
                  <div className="lg:col-span-2 flex lg:flex-col justify-between items-end font-mono text-xs text-[#6B6B67] space-y-2">
                    <div className="text-right">
                      <span className="block font-semibold text-[#111111] uppercase">
                        {project.category}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <div className="hidden lg:block text-right text-[10px] text-[#92928C]">
                      PROD VERIFIED
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom Contact Inquiries Banner */}
        <div className="mt-16 p-8 border border-[#DADAD5] bg-[#FFFFFF] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-sans font-medium text-[#111111]">
              Have a custom system or platform in mind?
            </h3>
            <p className="text-xs text-[#6B6B67] mt-1">
              We architect and deliver from ground zero or overhaul existing mission-critical systems.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#111111] text-[#F7F7F4] hover:bg-[#222222] px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Let&apos;s talk</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
