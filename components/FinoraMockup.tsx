"use client";

import React, { useState } from "react";
import { ForgeSysMark } from "@/components/ForgeSysLogo";
import {
  LayoutDashboard,
  ArrowUpDown,
  Users,
  FileBarChart2,
  Settings,
  Search,
  Bell,
  TrendingUp,
  UserPlus,
  CreditCard,
  FileCheck2,
  RefreshCw
} from "lucide-react";

export default function FinoraMockup() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="w-full bg-[#FFFFFF] border border-[#DADAD5] shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden font-sans text-[#111111] transition-transform duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] select-none">
      {/* Top Window Bar */}
      <div className="bg-[#FAFAF8] border-b border-[#EAEAE5] px-4 py-2.5 flex items-center justify-between text-xs text-[#6B6B67]">
        <div className="flex items-center gap-2">
          <ForgeSysMark size={14} />
          <span className="text-[11px] font-mono text-[#111111] font-semibold">FORGESYS // FINORA PLATFORM</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#111111] font-medium">
            Live v2.4
          </span>
        </div>
      </div>

      <div className="flex min-h-[380px] sm:min-h-[440px]">
        {/* Left Sidebar */}
        <aside className="w-40 sm:w-48 bg-[#FAFAF8] border-r border-[#EAEAE5] p-3 sm:p-4 flex flex-col justify-between hidden xs:flex">
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-2 py-1">
              <div className="w-6 h-6 rounded bg-[#111111] text-white flex items-center justify-center font-bold text-xs">
                F
              </div>
              <span className="font-semibold text-sm tracking-tight text-[#111111]">Finora</span>
            </div>

            <nav className="space-y-0.5">
              {[
                { name: "Dashboard", icon: LayoutDashboard },
                { name: "Transactions", icon: ArrowUpDown },
                { name: "Customers", icon: Users },
                { name: "Reports", icon: FileBarChart2 },
                { name: "Settings", icon: Settings }
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveTab(item.name)}
                    className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors text-left ${
                      isActive
                        ? "bg-[#EFEFEA] text-[#111111]"
                        : "text-[#6B6B67] hover:text-[#111111] hover:bg-[#F4F4F0]"
                    }`}
                  >
                    <Icon size={14} className={isActive ? "text-[#FD5006]" : "text-[#92928C]"} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="px-2 py-2 border-t border-[#EAEAE5] text-[10px] text-[#92928C] font-mono">
            BUILD 2026.09
          </div>
        </aside>

        {/* Main Dashboard Area */}
        <main className="flex-1 p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#EAEAE5]">
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-[#111111]">
                Good morning, Alex
              </h4>
              <p className="text-[11px] sm:text-xs text-[#6B6B67]">
                Here&apos;s what&apos;s happening with your business today.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1.5 bg-[#F4F4F0] border border-[#DADAD5] px-2.5 py-1 rounded text-xs text-[#6B6B67]">
                <Search size={12} />
                <span className="text-[11px]">Search...</span>
              </div>
              <button
                type="button"
                className="p-1.5 text-[#6B6B67] hover:text-[#111111] relative"
                aria-label="Notifications"
              >
                <Bell size={15} />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#FD5006]" />
              </button>
              <div className="w-7 h-7 rounded-full bg-[#111111] text-[#F7F7F4] flex items-center justify-center text-xs font-semibold">
                A
              </div>
            </div>
          </div>

          {/* Three Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            <div className="bg-[#FAFAF8] border border-[#EAEAE5] p-3 rounded-none">
              <span className="text-[10px] font-mono uppercase text-[#6B6B67] block">
                Total Revenue
              </span>
              <div className="text-lg sm:text-xl font-bold text-[#111111] mt-0.5">
                $248,620
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-medium mt-1">
                <TrendingUp size={10} />
                <span>+12.5% vs last month</span>
              </span>
            </div>

            <div className="bg-[#FAFAF8] border border-[#EAEAE5] p-3 rounded-none">
              <span className="text-[10px] font-mono uppercase text-[#6B6B67] block">
                Active Customers
              </span>
              <div className="text-lg sm:text-xl font-bold text-[#111111] mt-0.5">
                1,284
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-medium mt-1">
                <TrendingUp size={10} />
                <span>+8.2% vs last month</span>
              </span>
            </div>

            <div className="bg-[#FAFAF8] border border-[#EAEAE5] p-3 rounded-none">
              <span className="text-[10px] font-mono uppercase text-[#6B6B67] block">
                Transactions
              </span>
              <div className="text-lg sm:text-xl font-bold text-[#111111] mt-0.5">
                12,842
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-medium mt-1">
                <TrendingUp size={10} />
                <span>+14.2% vs last month</span>
              </span>
            </div>
          </div>

          {/* Chart & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 mt-auto">
            {/* Revenue Chart */}
            <div className="lg:col-span-7 bg-[#FAFAF8] border border-[#EAEAE5] p-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-[#EAEAE5]">
                <span className="font-semibold text-[#111111] text-[11px]">Revenue Overview</span>
                <span className="text-[10px] font-mono text-[#6B6B67]">Last 8 months</span>
              </div>

              <div className="h-28 sm:h-32 w-full pt-2 relative">
                <svg className="w-full h-full" viewBox="0 0 320 80" preserveAspectRatio="none">
                  <line x1="0" y1="20" x2="320" y2="20" stroke="#EAEAE5" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="320" y2="50" stroke="#EAEAE5" strokeDasharray="3 3" />
                  {/* Revenue Line */}
                  <path
                    d="M 10 65 Q 45 60 70 52 T 130 46 T 190 32 T 250 25 T 310 14"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M 10 65 Q 45 60 70 52 T 130 46 T 190 32 T 250 25 T 310 14 L 310 80 L 10 80 Z"
                    fill="rgba(37, 99, 235, 0.06)"
                  />
                </svg>

                <div className="flex justify-between text-[9px] font-mono text-[#92928C] pt-1">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                </div>
              </div>
            </div>

            {/* Recent Activity Feed */}
            <div className="lg:col-span-5 bg-[#FAFAF8] border border-[#EAEAE5] p-3 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-[#EAEAE5]">
                <span className="font-semibold text-[#111111] text-[11px]">Recent Activity</span>
                <span className="text-[9px] font-mono text-[#6B6B67]">LIVE</span>
              </div>

              <div className="space-y-2 py-1 text-[10px]">
                <div className="flex items-start gap-2">
                  <UserPlus size={12} className="text-[#111111] mt-0.5 shrink-0" />
                  <div className="truncate">
                    <span className="font-semibold text-[#111111] block">New customer onboarded</span>
                    <span className="text-[#6B6B67] text-[9px]">Acme Corp · 2m ago</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CreditCard size={12} className="text-emerald-600 mt-0.5 shrink-0" />
                  <div className="truncate">
                    <span className="font-semibold text-[#111111] block">Payment received ($4,250)</span>
                    <span className="text-[#6B6B67] text-[9px]">Invoice #8921 · 15m ago</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FileCheck2 size={12} className="text-blue-600 mt-0.5 shrink-0" />
                  <div className="truncate">
                    <span className="font-semibold text-[#111111] block">Report generated</span>
                    <span className="text-[#6B6B67] text-[9px]">Monthly summary · 1h ago</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <RefreshCw size={12} className="text-[#92928C] mt-0.5 shrink-0" />
                  <div className="truncate">
                    <span className="font-semibold text-[#111111] block">System update v2.4.0</span>
                    <span className="text-[#6B6B67] text-[9px]">Cluster healthy · 3h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
