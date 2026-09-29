"use client";

import React, { useState } from "react";
import { ForgeSysMark } from "@/components/ForgeSysLogo";
import {
  Layers,
  FileText,
  FolderKanban,
  Radio,
  BarChart3,
  SlidersHorizontal,
  Search,
  Plus,
  Globe,
  Smartphone,
  Mail,
  Share2,
  Cpu,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function ContentHubMockup() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allArticles = [
    {
      title: "Global Markets Weekly Update",
      tag: "Finance",
      category: "Articles",
      status: "Published · 2h ago",
      reads: "14.2k",
      verified: true
    },
    {
      title: "The Future of Digital Banking & Distributed Ledgers",
      tag: "Banking",
      category: "Reports",
      status: "Published · 5h ago",
      reads: "8.6k",
      verified: true
    },
    {
      title: "Sustainable Finance & ESG Disclosure Architecture",
      tag: "ESG",
      category: "Reports",
      status: "Draft · 1d ago",
      reads: "—",
      verified: false
    },
    {
      title: "Q3 Market Volatility Outlook 2026",
      tag: "Research",
      category: "Articles",
      status: "Published · 2d ago",
      reads: "22.4k",
      verified: true
    },
    {
      title: "Next Gen Real-Time Settlement Protocols",
      tag: "Technology",
      category: "Infographics",
      status: "Published · 3d ago",
      reads: "19.1k",
      verified: true
    }
  ];

  const filteredArticles = allArticles.filter((item) => {
    const matchesTab = activeTab === "All" || item.category === activeTab;
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesQuery;
  });

  return (
    <div className="w-full bg-[#111111] text-[#F4F4F0] border border-[#2A2A2A] shadow-[0_24px_70px_rgba(0,0,0,0.18)] overflow-hidden font-sans select-none">
      {/* Top Professional Platform Bar - NO Apple dots */}
      <div className="bg-[#181818] border-b border-[#282828] px-5 py-3 flex items-center justify-between text-xs text-[#8E8E88]">
        <div className="flex items-center gap-3">
          <ForgeSysMark size={14} />
          <span className="font-mono text-xs text-[#F4F4F0] font-semibold tracking-wider">
            FORGESYS // CONTENTHUB DISTRIBUTION MESH
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-[#6B6B67]">
            PROD CLUSTER 04 · FIX 4.4 / REST
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE MULTI-TENANT
          </span>
        </div>
      </div>

      <div className="flex min-h-[460px] sm:min-h-[500px]">
        {/* Left Platform Navigation */}
        <aside className="w-44 bg-[#141414] border-r border-[#262626] p-4 flex flex-col justify-between hidden sm:flex">
          <div className="space-y-5">
            <div className="flex items-center gap-2.5 px-2 py-1">
              <ForgeSysMark size={18} />
              <span className="font-semibold text-sm tracking-tight text-[#F4F4F0]">
                ContentHub
              </span>
            </div>

            <nav className="space-y-1">
              {[
                { name: "Home", icon: Layers, active: false },
                { name: "Content", icon: FileText, active: true },
                { name: "Collections", icon: FolderKanban, active: false },
                { name: "Distribution", icon: Radio, active: false },
                { name: "Analytics", icon: BarChart3, active: false },
                { name: "Settings", icon: SlidersHorizontal, active: false }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className={`flex items-center gap-2.5 px-2.5 py-1.5 text-xs font-medium rounded transition-colors ${
                      item.active
                        ? "bg-[#222222] text-[#F4F4F0] border border-[#333333]"
                        : "text-[#8E8E88] hover:text-[#F4F4F0]"
                    }`}
                  >
                    <Icon size={14} className={item.active ? "text-[#FD5006]" : "text-[#777772]"} />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-[#262626] pt-3 text-[10px] font-mono text-[#777772]">
            API GATEWAY: ONLINE
          </div>
        </aside>

        {/* Center Content Section */}
        <main className="flex-1 p-5 sm:p-6 bg-[#171717] flex flex-col justify-between border-r border-[#262626]">
          {/* Top Actions & Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#262626]">
            <div>
              <h4 className="text-xl font-medium tracking-tight text-[#F4F4F0]">Content</h4>
              <p className="text-xs text-[#8E8E88] mt-0.5">
                Centralized financial publications and multi-channel dispatches
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-[#202020] border border-[#333333] px-3 py-1.5 text-xs text-[#8E8E88] w-52">
                <Search size={13} />
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs text-[#F4F4F0] placeholder-[#777772] focus:outline-none w-full"
                />
              </div>

              <button
                type="button"
                className="bg-[#F4F4F0] text-[#111111] hover:bg-[#FD5006] hover:text-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
              >
                <Plus size={13} />
                <span>New Content</span>
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-6 py-3 border-b border-[#262626] text-xs font-mono">
            {["All", "Articles", "Reports", "Videos", "Infographics"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative pb-1 transition-colors ${
                  activeTab === tab ? "text-[#F4F4F0] font-semibold" : "text-[#8E8E88] hover:text-[#F4F4F0]"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FD5006]" />
                )}
              </button>
            ))}
          </div>

          {/* Dynamic Filtered Articles List */}
          <div className="space-y-2 py-4 flex-1">
            {filteredArticles.length === 0 ? (
              <div className="py-12 text-center text-xs text-[#777772] font-mono">
                NO MATCHING PUBLICATIONS FOUND
              </div>
            ) : (
              filteredArticles.map((item, idx) => (
                <div
                  key={idx}
                  className="group p-3 bg-[#1D1D1D] border border-[#2A2A2A] hover:border-[#444444] transition-colors flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#242424] border border-[#333333] flex items-center justify-center text-xs font-mono text-[#8E8E88] group-hover:text-[#FD5006]">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-[#F4F4F0] group-hover:text-white transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-[#8E8E88] font-mono mt-0.5">
                        {item.status} · READS: {item.reads}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] bg-[#292929] text-[#A3A39E] px-2 py-0.5">
                      {item.tag}
                    </span>
                    <ChevronRight size={14} className="text-[#666660] group-hover:text-[#F4F4F0]" />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Feed Status */}
          <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-[#8E8E88]">
            <span>LAST SYNC: 14 SECONDS AGO</span>
            <span className="text-[#F4F4F0]">AES-256 SIGNED &amp; IMMUTABLE</span>
          </div>
        </main>

        {/* Right Distribution Sidebar */}
        <aside className="w-56 sm:w-64 bg-[#141414] p-5 flex flex-col justify-between hidden md:flex">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#262626] pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F4F4F0]">
                Distribution
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>

            <p className="text-[11px] text-[#8E8E88] leading-relaxed">
              Content is being distributed across 8 secure external channels
            </p>

            <div className="space-y-2 pt-2">
              {[
                { name: "Website", icon: Globe, status: "Live" },
                { name: "Mobile App", icon: Smartphone, status: "Live" },
                { name: "Email Campaign", icon: Mail, status: "Live" },
                { name: "Partner Portal", icon: Share2, status: "Live" },
                { name: "API Feeds", icon: Cpu, status: "Live" }
              ].map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 bg-[#1B1B1B] border border-[#262626] text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={13} className="text-[#8E8E88]" />
                      <span className="text-[#E5E5DF] text-[11px]">{channel.name}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono font-medium">
                      {channel.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-[#262626]">
            <div className="text-xs font-mono text-[#FD5006] hover:underline inline-flex items-center gap-1.5 cursor-pointer">
              <span>View all 8 channels</span>
              <span>→</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
