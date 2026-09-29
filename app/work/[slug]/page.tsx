import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Database, Server, Cpu, Globe } from "lucide-react";
import { projectsData } from "@/data/projects";
import ProjectVisual from "@/components/ProjectVisual";
import { ForgeSysMark } from "@/components/ForgeSysLogo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F7F7F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb Back Link */}
        <div className="pb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#6B6B67] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft size={13} />
            <span>BACK TO ALL WORK</span>
          </Link>
        </div>

        {/* Case Study Header matching Reference Image 2 */}
        <div className="border-b border-[#DADAD5] pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Title & Subhead */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FD5006] font-semibold bg-[#FD5006]/8 px-2.5 py-1 rounded-sm border border-[#FD5006]/20">
                <ForgeSysMark size={13} />
                <span>FORGESYS CASE STUDY // {project.number}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-light tracking-tight text-[#111111] leading-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-xl text-[#6B6B67] leading-relaxed pt-1">
                {project.shortDescription}
              </p>

              {/* Technologies Badges */}
              <div className="pt-4 flex flex-wrap gap-2 font-mono text-xs">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#FFFFFF] border border-[#DADAD5] px-3 py-1 text-[#111111] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Confidential Client Metadata */}
            <div className="lg:col-span-4 lg:border-l lg:border-[#DADAD5] lg:pl-8 space-y-4 font-mono text-xs">
              <div>
                <span className="text-[#6B6B67] uppercase block text-[10px]">CLIENT</span>
                <span className="text-[#111111] font-semibold text-sm">
                  {project.client}
                </span>
                <span className="text-[#92928C] block text-[11px]">
                  {project.clientConfidentiality}
                </span>
              </div>

              <div>
                <span className="text-[#6B6B67] uppercase block text-[10px]">INDUSTRY</span>
                <span className="text-[#111111] font-semibold text-sm">
                  {project.industry}
                </span>
              </div>

              <div>
                <span className="text-[#6B6B67] uppercase block text-[10px]">TIMELINE &amp; STATUS</span>
                <span className="text-[#111111] font-semibold text-sm">
                  6 Months · Production Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="py-12 border-b border-[#DADAD5]">
          <ProjectVisual project={project} variant="full" />
        </div>

        {/* The Challenge & Our Solution Grid matching Reference Image 2 */}
        <div className="py-16 sm:py-20 border-b border-[#DADAD5]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* The Challenge */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FD5006]" />
                <h2 className="text-xl sm:text-2xl font-sans font-medium text-[#111111]">
                  The Challenge
                </h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#6B6B67] leading-relaxed">
                {project.challenge.map((c, i) => (
                  <p key={i}>{c}</p>
                ))}
              </div>
            </div>

            {/* Our Solution */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#111111]" />
                <h2 className="text-xl sm:text-2xl font-sans font-medium text-[#111111]">
                  Our Solution
                </h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#6B6B67] leading-relaxed">
                {project.approach.map((a, i) => (
                  <p key={i}>{a}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Outcomes matching Reference Image 2 */}
        <div className="py-16 sm:py-20 border-b border-[#DADAD5]">
          <div className="flex items-center justify-between pb-8">
            <h2 className="text-2xl font-sans font-medium text-[#111111]">
              Key Outcomes
            </h2>
            <span className="font-mono text-xs text-[#6B6B67]">
              EDITABLE PRODUCTION METRICS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.outcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="border border-[#DADAD5] bg-white p-6 sm:p-8 space-y-3"
              >
                <div className="text-5xl sm:text-6xl font-sans font-light text-[#111111] tracking-tight">
                  {outcome.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider font-semibold text-[#111111]">
                  {outcome.label}
                </div>
                <p className="text-xs text-[#6B6B67] leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Architecture Visualization (Rule 11) */}
        <div className="py-16 sm:py-20 border-b border-[#DADAD5]">
          <div className="pb-8 space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#6B6B67]">
              SYSTEM ARCHITECTURE
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-medium text-[#111111]">
              {project.architecture.headline}
            </h2>
            <p className="text-sm text-[#6B6B67] max-w-2xl">
              {project.architecture.subheadline}
            </p>
          </div>

          {/* Elegant Horizontal Flow Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-4">
            {project.architecture.nodes.map((node, idx) => (
              <div
                key={idx}
                className="border border-[#DADAD5] bg-white p-4 flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-[#6B6B67]">
                  <span className="font-bold text-[#FD5006]">{node.step}</span>
                  <span>NODE</span>
                </div>

                <div>
                  <h3 className="font-mono text-xs font-bold text-[#111111]">
                    {node.title}
                  </h3>
                  <div className="font-mono text-[10px] text-[#6B6B67] mt-0.5">
                    {node.tech}
                  </div>
                </div>

                <p className="text-[10px] text-[#6B6B67] leading-snug pt-2 border-t border-[#EFEFEA]">
                  {node.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Behind The Build Section (Rule 12) */}
        <div className="py-16 sm:py-20 border-b border-[#DADAD5]">
          <div className="pb-8 space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#FD5006] font-semibold">
              ENGINEERING RIGOR
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-light tracking-tight text-[#111111]">
              BEHIND THE BUILD
            </h2>
            <p className="text-sm text-[#6B6B67]">
              Demonstrating technical decision-making and deep systems thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-[#DADAD5] bg-white p-6 space-y-3">
              <span className="font-mono text-xs text-[#FD5006] font-bold">01 — PROBLEM</span>
              <h3 className="font-sans font-medium text-base text-[#111111]">
                {project.behindTheBuild.problem.title}
              </h3>
              <p className="text-xs text-[#6B6B67] leading-relaxed">
                {project.behindTheBuild.problem.description}
              </p>
            </div>

            <div className="border border-[#DADAD5] bg-white p-6 space-y-3">
              <span className="font-mono text-xs text-[#111111] font-bold">02 — DECISION</span>
              <h3 className="font-sans font-medium text-base text-[#111111]">
                {project.behindTheBuild.decision.title}
              </h3>
              <p className="text-xs text-[#6B6B67] leading-relaxed">
                {project.behindTheBuild.decision.description}
              </p>
            </div>

            <div className="border border-[#DADAD5] bg-white p-6 space-y-3">
              <span className="font-mono text-xs text-[#111111] font-bold">03 — ENGINEERING</span>
              <h3 className="font-sans font-medium text-base text-[#111111]">
                {project.behindTheBuild.engineering.title}
              </h3>
              <p className="text-xs text-[#6B6B67] leading-relaxed">
                {project.behindTheBuild.engineering.description}
              </p>
            </div>

            <div className="border border-[#DADAD5] bg-white p-6 space-y-3">
              <span className="font-mono text-xs text-emerald-600 font-bold">04 — RESULT</span>
              <h3 className="font-sans font-medium text-base text-[#111111]">
                {project.behindTheBuild.result.title}
              </h3>
              <p className="text-xs text-[#6B6B67] leading-relaxed">
                {project.behindTheBuild.result.description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner matching Reference Image 2 */}
        <div className="mt-12 p-8 sm:p-10 border border-[#DADAD5] bg-[#111111] text-[#F7F7F4] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-sans font-light tracking-tight text-white">
              Interested in building something similar?
            </h3>
            <p className="text-xs sm:text-sm text-[#8E8E88]">
              We work directly with founders and technical leaders to design and deliver resilient systems.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F4F4F0] text-[#111111] hover:bg-[#FD5006] hover:text-white px-6 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Let&apos;s discuss your project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
