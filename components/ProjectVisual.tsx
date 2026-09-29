"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Terminal, Layers, ArrowUpRight, Cpu } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectVisualProps {
  project: ProjectItem;
  variant?: "hero" | "card" | "full";
}

export default function ProjectVisual({ project, variant = "card" }: ProjectVisualProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Height and padding based on variant
  const containerHeight =
    variant === "hero"
      ? "h-[360px] sm:h-[420px] md:h-[460px]"
      : variant === "full"
      ? "h-[420px] sm:h-[500px] md:h-[560px]"
      : "h-[320px] sm:h-[380px] md:h-[420px]";

  if (project.slug === "enterprise-content-distribution") {
    return (
      <div
        className={`w-full ${containerHeight} bg-[#F0F0EB] border border-[#DADAD5] rounded-none p-5 sm:p-7 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none`}
      >
        {/* Subtle grid lines background */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#111111 1px, transparent 1px)",
            backgroundSize: "16px 16px"
          }}
        />

        {/* Top Control Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#DADAD5] pb-3 text-[#6B6B67]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-[#FD5006]" />
            <span className="text-[#111111] font-semibold tracking-wider">
              STREAM_NODE://CLUSTER-04.PROD
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span className="hidden sm:inline">FIX 4.4 / JSON-LD</span>
            <span className="bg-[#E5E5DF] text-[#111111] px-2 py-0.5 font-semibold">
              SUB-40MS DISPATCH
            </span>
          </div>
        </div>

        {/* Center High-Density Data Matrix */}
        <div className="relative z-10 my-auto grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 py-4">
          {/* Left Column: Live Queue */}
          <div className="sm:col-span-7 bg-[#F7F7F4] border border-[#DADAD5] p-4 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between text-[#6B6B67] text-[10px] pb-2 border-b border-[#DADAD5]">
              <span>OUTBOUND DISPATCH MATRIX</span>
              <span className="text-[#111111] font-semibold">P99: 38ms</span>
            </div>

            <div className="space-y-2 py-3">
              {[
                { channel: "BLOOMBERG_SAPI_FEED", status: "ACKNOWLEDGED", latency: "22ms", bytes: "142 KB" },
                { channel: "REUTERS_DROP_SECURE", status: "ACKNOWLEDGED", latency: "29ms", bytes: "88 KB" },
                { channel: "TIER1_PRIME_BROKER_REST", status: "DISPATCHING", latency: "38ms", bytes: "310 KB" },
                { channel: "REGULATORY_DISCLOSURE_SEC", status: "QUEUED (IDEMPOTENT)", latency: "41ms", bytes: "64 KB" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-[10px] py-1 border-b border-[#EFEFEA] last:border-none"
                >
                  <span className="text-[#111111] font-medium truncate max-w-[160px] sm:max-w-none">
                    {item.channel}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#6B6B67]">{item.latency}</span>
                    <span
                      className={`px-1.5 py-0.5 text-[9px] font-semibold ${
                        item.status === "ACKNOWLEDGED"
                          ? "bg-[#EFEFEA] text-[#111111]"
                          : "bg-[#FD5006]/10 text-[#FD5006]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#6B6B67] pt-2 border-t border-[#DADAD5]">
              <span>BUFFER HEALTH: 100% (ZERO DROPS)</span>
              <span className="text-[#FD5006] font-semibold">AES-256 SIGNED</span>
            </div>
          </div>

          {/* Right Column: Architectural Telemetry Stats */}
          <div className="sm:col-span-5 flex flex-col justify-between gap-3">
            <div className="bg-[#F7F7F4] border border-[#DADAD5] p-3 flex-1 flex flex-col justify-center">
              <span className="text-[10px] uppercase text-[#6B6B67] tracking-wider">
                PEAK VOLUME CAPACITY
              </span>
              <span className="text-xl sm:text-2xl font-sans font-light tracking-tight text-[#111111] mt-1">
                45,000 <span className="text-xs text-[#6B6B67] font-mono">MSGS / SEC</span>
              </span>
              <div className="w-full bg-[#E5E5DF] h-1.5 mt-2">
                <div className="bg-[#111111] h-1.5 w-[68%]" />
              </div>
            </div>

            <div className="bg-[#111111] text-[#F4F4F0] p-3.5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] text-[#92928C]">
                <span>CONSISTENCY GUARANTEE</span>
                <ShieldCheck size={12} className="text-[#FD5006]" />
              </div>
              <div className="text-xs font-medium tracking-wide mt-2">
                STRICT IDEMPOTENCE WITH IN-MEMORY REDIS STREAM PARTITIONS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Technologies & Verification */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-t border-[#DADAD5] pt-3 text-[10px] text-[#6B6B67]">
          <div className="flex items-center gap-3">
            <span>RUNTIME: .NET 8 / C#</span>
            <span>·</span>
            <span>ENGINE: KESTREL HTTP/3</span>
          </div>
          <div className="text-[#111111] font-semibold">
            STATUS: CERTIFIED AUDIT-COMPLIANT
          </div>
        </div>
      </div>
    );
  }

  if (project.slug === "ai-powered-ecommerce-platform") {
    return (
      <div
        className={`w-full ${containerHeight} bg-[#F0F0EB] border border-[#DADAD5] rounded-none p-5 sm:p-7 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none`}
      >
        <div className="relative z-10 flex items-center justify-between border-b border-[#DADAD5] pb-3 text-[#6B6B67]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-[#FD5006]" />
            <span className="text-[#111111] font-semibold tracking-wider">
              SEMANTIC_RETRIEVAL_CORE // VEC-1536
            </span>
          </div>
          <span className="bg-[#E5E5DF] text-[#111111] px-2 py-0.5 text-[10px] font-semibold">
            COSINE SIMILARITY: 0.942
          </span>
        </div>

        {/* Center UI: Conversational Vector Search Mock */}
        <div className="relative z-10 my-auto py-3 space-y-3">
          {/* Query Bar */}
          <div className="bg-[#F7F7F4] border border-[#DADAD5] p-3 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs">
              <span className="text-[#FD5006] font-bold font-mono">Q&gt;</span>
              <span className="text-[#111111] font-medium font-sans">
                “Lightweight packable shell for 12°C humid morning running”
              </span>
            </div>
            <span className="hidden sm:inline text-[10px] text-[#6B6B67] bg-[#EFEFEA] px-2 py-0.5">
              182ms EMBEDDING
            </span>
          </div>

          {/* Dynamic Catalog Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#F7F7F4] border border-[#DADAD5] p-3.5 space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-[10px] text-[#FD5006] font-semibold uppercase">
                  TOP MATCH (0.942)
                </span>
                <span className="text-[10px] text-[#6B6B67]">IN STOCK (18 UNITS)</span>
              </div>
              <div className="font-sans font-medium text-xs text-[#111111]">
                AeroShield Featherweight Running Shell
              </div>
              <p className="text-[10px] font-sans text-[#6B6B67] leading-relaxed">
                68g ripstop DWR fabric engineered specifically for humid temperate conditions. Micro-vented underarm slits.
              </p>
              <div className="pt-2 flex items-center justify-between text-[10px] border-t border-[#EFEFEA]">
                <span className="font-semibold text-[#111111]">$185.00</span>
                <span className="text-[#6B6B67]">DETERMINISTIC CATALOG BOUNDARY</span>
              </div>
            </div>

            <div className="bg-[#F7F7F4] border border-[#DADAD5] p-3.5 space-y-2 hidden sm:block">
              <div className="flex justify-between items-start">
                <span className="text-[10px] text-[#111111] font-semibold uppercase">
                  SIMILARITY (0.887)
                </span>
                <span className="text-[10px] text-[#6B6B67]">IN STOCK (34 UNITS)</span>
              </div>
              <div className="font-sans font-medium text-xs text-[#111111]">
                Strata Vapor Vent Active Windbreaker
              </div>
              <p className="text-[10px] font-sans text-[#6B6B67] leading-relaxed">
                Dual-weave breathability barrier with moisture-transport mesh across thermal stress zones.
              </p>
              <div className="pt-2 flex items-center justify-between text-[10px] border-t border-[#EFEFEA]">
                <span className="font-semibold text-[#111111]">$160.00</span>
                <span className="text-[#6B6B67]">AI REASONING VERIFIED</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-t border-[#DADAD5] pt-3 text-[10px] text-[#6B6B67]">
          <span>CATALOG: 48,200 SKUs SYNCED</span>
          <span className="text-[#111111] font-semibold">STREAMING SSE / NEXT.JS ISR</span>
        </div>
      </div>
    );
  }

  if (project.slug === "business-automation-platform") {
    return (
      <div
        className={`w-full ${containerHeight} bg-[#F0F0EB] border border-[#DADAD5] rounded-none p-5 sm:p-7 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none`}
      >
        <div className="relative z-10 flex items-center justify-between border-b border-[#DADAD5] pb-3 text-[#6B6B67]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-[#FD5006]" />
            <span className="text-[#111111] font-semibold tracking-wider">
              DAG_ORCHESTRATOR // WORKFLOW_RUN_8921
            </span>
          </div>
          <span className="bg-[#111111] text-[#F4F4F0] px-2 py-0.5 text-[10px] font-semibold">
            STATUS: COMPLETED (3m 48s)
          </span>
        </div>

        {/* Center UI: Directed Acyclic Graph Task Sequence */}
        <div className="relative z-10 my-auto py-3">
          <div className="bg-[#F7F7F4] border border-[#DADAD5] p-4 space-y-3">
            <div className="text-[10px] text-[#6B6B67] flex items-center justify-between border-b border-[#DADAD5] pb-2">
              <span>PIPELINE EXECUTION GRAPH</span>
              <span className="text-[#111111] font-semibold">FASTAPI + PYDANTIC 2.0</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-[10px]">
              {[
                { stage: "01. INGEST", title: "SFTP Multi-Drop", status: "100%", duration: "18s" },
                { stage: "02. CONTRACT", title: "Schema Validation", status: "VALID", duration: "6s" },
                { stage: "03. MATCH", title: "Reconciliation", status: "104,210 Rows", duration: "152s" },
                { stage: "04. LEDGER", title: "Immutable Sync", status: "POSTGRES", duration: "42s" }
              ].map((item, idx) => (
                <div key={idx} className="border border-[#DADAD5] bg-white p-2.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B6B67] text-[9px]">{item.stage}</span>
                    <CheckCircle2 size={11} className="text-[#111111]" />
                  </div>
                  <div className="font-semibold text-[#111111] my-1">{item.title}</div>
                  <div className="flex items-center justify-between text-[9px] text-[#6B6B67] border-t border-[#EFEFEA] pt-1">
                    <span>{item.status}</span>
                    <span className="text-[#FD5006]">{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#EFEFEA] p-2 text-[10px] flex items-center justify-between text-[#111111]">
              <span>DISCREPANCY DELTA: $0.00 (EXACT SETTLEMENT)</span>
              <span className="font-semibold text-[#6B6B67]">AUTO-TRIGGERED AT 02:00 UTC</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-t border-[#DADAD5] pt-3 text-[10px] text-[#6B6B67]">
          <span>ROLLBACK STATE: PRESERVED IN POSTGRES SNAPSHOT</span>
          <span className="text-[#111111] font-semibold">RECOVERABILITY: DETERMINISTIC</span>
        </div>
      </div>
    );
  }

  // Project 04: Analytics / Operations Dashboard
  return (
    <div
      className={`w-full ${containerHeight} bg-[#F0F0EB] border border-[#DADAD5] rounded-none p-5 sm:p-7 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none`}
    >
      <div className="relative z-10 flex items-center justify-between border-b border-[#DADAD5] pb-3 text-[#6B6B67]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-[#FD5006]" />
          <span className="text-[#111111] font-semibold tracking-wider">
            OPS_SURFACE // TIME_SERIES_CANVAS
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-[#111111] font-semibold text-[10px]">60 FPS HARDWARE ACCELERATED</span>
        </div>
      </div>

      {/* Center Simulated High-Density Metric Chart */}
      <div className="relative z-10 my-auto py-3">
        <div className="bg-[#F7F7F4] border border-[#DADAD5] p-4 space-y-3">
          <div className="flex items-center justify-between text-[10px] text-[#6B6B67] border-b border-[#DADAD5] pb-2">
            <span>CROSS-SERVICE LATENCY & REVENUE STREAM CORRELATION</span>
            <span className="text-[#111111] font-semibold">50,000 DATA POINTS SCRUBBED</span>
          </div>

          {/* SVG Visual Waveform Graph */}
          <div className="h-28 w-full relative flex items-end">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 600 100"
              preserveAspectRatio="none"
            >
              {/* Grid Lines */}
              <line x1="0" y1="25" x2="600" y2="25" stroke="#E5E5DF" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="50" x2="600" y2="50" stroke="#E5E5DF" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="75" x2="600" y2="75" stroke="#E5E5DF" strokeWidth="1" strokeDasharray="4 4" />

              {/* Baseline Trend Curve */}
              <path
                d="M0,80 Q50,75 100,78 T200,70 T300,74 T360,25 T400,68 T500,72 T600,70"
                fill="none"
                stroke="#111111"
                strokeWidth="1.8"
              />

              {/* Anomaly Indicator Spike at x=360 */}
              <circle cx="360" cy="25" r="4" fill="#FD5006" />
              <line x1="360" y1="0" x2="360" y2="100" stroke="#FD5006" strokeWidth="1" strokeDasharray="2 2" />

              {/* Shaded Area */}
              <path
                d="M0,80 Q50,75 100,78 T200,70 T300,74 T360,25 T400,68 T500,72 T600,70 L600,100 L0,100 Z"
                fill="rgba(17, 17, 17, 0.04)"
              />
            </svg>

            {/* Scrub Tooltip */}
            <div className="absolute top-2 left-[56%] bg-[#111111] text-[#F4F4F0] px-2 py-1 text-[9px] shadow-sm pointer-events-none">
              P99 SPIKE: 42ms | CORRELATED REVENUE: 100% NOMINAL
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#DADAD5] text-[10px]">
            <div>
              <span className="text-[#6B6B67] block text-[9px]">P50 LATENCY</span>
              <span className="font-semibold text-[#111111]">11.4 ms</span>
            </div>
            <div>
              <span className="text-[#6B6B67] block text-[9px]">P99 LATENCY</span>
              <span className="font-semibold text-[#111111]">38.2 ms</span>
            </div>
            <div>
              <span className="text-[#6B6B67] block text-[9px]">SAMPLING ENGINE</span>
              <span className="font-semibold text-[#FD5006]">LTTB DECIMATION</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-t border-[#DADAD5] pt-3 text-[10px] text-[#6B6B67]">
        <span>RENDER ENGINE: OFF-THREAD WEB WORKER CANVAS</span>
        <span className="text-[#111111] font-semibold">AVG MTTR: -65% REDUCTION</span>
      </div>
    </div>
  );
}
