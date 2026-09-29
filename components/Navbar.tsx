"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { companyData } from "@/data/company";

import ForgeSysLogo from "@/components/ForgeSysLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "People", href: "/people" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "py-3 bg-[#F7F7F4]/95 backdrop-blur-md border-b border-[#DADAD5] shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            : "py-5 sm:py-6 bg-[#F7F7F4]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Official ForgeSys Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-[#111111] hover:opacity-90 transition-opacity group"
            aria-label="ForgeSys Home"
          >
            <ForgeSysLogo height={28} />
            <span className="hidden sm:inline-flex items-center gap-1.5 ml-1 px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider text-[#6B6B67] bg-[#EFEFEA] border border-[#DADAD5] group-hover:border-[#FD5006]/30 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD5006] animate-pulse" />
              <span>STUDIO</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm tracking-normal transition-colors relative py-1 ${
                    isActive
                      ? "text-[#111111] font-semibold"
                      : "text-[#6B6B67] hover:text-[#111111] font-normal"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#FD5006]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#111111] text-[#F7F7F4] hover:bg-[#222222] px-4 py-2 rounded-md text-xs font-medium tracking-wide transition-all shadow-sm"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-[#111111] hover:text-[#FD5006] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F7F7F4] md:hidden transition-all duration-300 ease-in-out flex flex-col justify-between p-8 pt-24 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 pt-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[#6B6B67] border-b border-[#DADAD5] pb-2">
            NAVIGATION
          </span>
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-2xl tracking-tight transition-colors ${
                  isActive ? "text-[#FD5006] font-medium" : "text-[#111111]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-[#111111] text-[#F7F7F4] py-3.5 px-6 rounded-md font-medium text-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="border-t border-[#DADAD5] pt-6 flex flex-col gap-2 font-mono text-xs text-[#6B6B67]">
          <div>{companyData.location} · {companyData.timezone}</div>
          <div className="text-[#111111] font-medium">{companyData.email}</div>
        </div>
      </div>
    </>
  );
}
