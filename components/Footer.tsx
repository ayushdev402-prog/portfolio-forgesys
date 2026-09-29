"use client";

import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";

import ForgeSysLogo from "@/components/ForgeSysLogo";

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F4] border-t border-[#DADAD5] py-16 sm:py-20 text-[#6B6B67] font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#DADAD5]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block hover:opacity-85 transition-opacity">
              <ForgeSysLogo height={26} />
            </Link>
            <p className="text-sm text-[#6B6B67] max-w-sm leading-relaxed">
              Product engineering, AI and automation for modern businesses that want to move faster and build right.
            </p>
            <div className="pt-2 font-mono text-xs text-[#111111]">
              <span className="text-[#6B6B67]">DIRECT INQUIRIES: </span>
              <a
                href={`mailto:${companyData.email}`}
                className="hover:text-[#FD5006] underline underline-offset-4"
              >
                {companyData.email}
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="uppercase text-[#111111] font-semibold tracking-wider block mb-2">
              NAVIGATION
            </span>
            <div className="flex flex-col space-y-2">
              <Link href="/work" className="hover:text-[#111111] transition-colors">
                Work Archive
              </Link>
              <Link href="/people" className="hover:text-[#111111] transition-colors">
                The Team
              </Link>
              <Link href="/about" className="hover:text-[#111111] transition-colors">
                About Studio
              </Link>
              <Link href="/contact" className="hover:text-[#111111] transition-colors">
                Contact &amp; Partnerships
              </Link>
            </div>
          </div>

          {/* Studio Coordinates */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="uppercase text-[#111111] font-semibold tracking-wider block mb-2">
              COORDINATES
            </span>
            <div className="space-y-1 text-[#6B6B67]">
              <div>Location: {companyData.location}</div>
              <div>Timezone: {companyData.timezone}</div>
              <div>Availability: Select Q3/Q4 Commissions</div>
            </div>
            <div className="pt-2 flex items-center gap-4 text-[#111111]">
              <a
                href={companyData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FD5006] transition-colors"
              >
                GitHub
              </a>
              <span>·</span>
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FD5006] transition-colors"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a
                href={companyData.socials.x}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FD5006] transition-colors"
              >
                X (Twitter)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#92928C]">
          <div>
            &copy; {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>OPERATIONAL SYSTEMS NOMINAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
