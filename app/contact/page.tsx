"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, UserCheck, Code2, Clock, Shield } from "lucide-react";
import { companyData } from "@/data/company";
import { ForgeSysMark } from "@/components/ForgeSysLogo";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F7F7F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header matching Reference Image 2 */}
        <div className="border-b border-[#DADAD5] pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6B6B67] bg-[#EFEFEA] px-2.5 py-1 rounded-sm border border-[#DADAD5]">
                <ForgeSysMark size={13} />
                <span className="text-[#111111] font-semibold">DIRECT INQUIRIES // FORGESYS</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-[#111111] leading-tight">
                Have a project<br />
                in mind?
              </h1>
              <p className="text-base sm:text-lg text-[#6B6B67] leading-relaxed max-w-xl">
                Whether you&apos;re starting from scratch or need help with an existing product, we&apos;d love to hear from you.
              </p>
            </div>

            {/* Direct Contacts List */}
            <div className="lg:col-span-5 lg:pt-8 space-y-4 font-mono text-xs text-[#111111]">
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-[#FD5006]" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-[#FD5006] transition-colors underline underline-offset-4"
                >
                  {companyData.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={15} className="text-[#6B6B67]" />
                <span>{companyData.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={15} className="text-[#6B6B67]" />
                <span>{companyData.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main 2-Column Section matching Reference Image 2 */}
        <div className="pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Interactive Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#DADAD5] p-6 sm:p-10">
            <h2 className="text-xl font-sans font-medium text-[#111111] mb-6">
              Send us a message
            </h2>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-medium text-[#111111]">Message Received</h3>
                <p className="text-sm text-[#6B6B67] max-w-md mx-auto">
                  Thank you for reaching out. A founding partner will review your requirements and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", company: "", message: "" });
                  }}
                  className="mt-4 font-mono text-xs uppercase tracking-wider text-[#111111] underline underline-offset-4 hover:text-[#FD5006]"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B6B67] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#F7F7F4] border border-[#DADAD5] px-4 py-3 text-sm text-[#111111] placeholder-[#92928C] focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B6B67] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#F7F7F4] border border-[#DADAD5] px-4 py-3 text-sm text-[#111111] placeholder-[#92928C] focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B6B67] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your company"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-[#F7F7F4] border border-[#DADAD5] px-4 py-3 text-sm text-[#111111] placeholder-[#92928C] focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B6B67] mb-2">
                    What are you looking to build? *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project, timeline, and current engineering stack..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#F7F7F4] border border-[#DADAD5] px-4 py-3 text-sm text-[#111111] placeholder-[#92928C] focus:outline-none focus:border-[#111111] transition-colors rounded-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-[#111111] text-[#F7F7F4] hover:bg-[#222222] px-7 py-4 text-xs font-mono uppercase tracking-wider font-semibold transition-colors disabled:opacity-50"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Right: Why work with us panel matching Reference Image 2 */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-[#DADAD5] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
              <h3 className="font-sans font-medium text-base text-[#111111]">
                Why work with us?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <UserCheck size={18} className="text-[#111111] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#111111]">
                      Direct access to the team
                    </h4>
                    <p className="text-xs text-[#6B6B67] mt-0.5">
                      No layers, no delays. You collaborate directly with principal builders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code2 size={18} className="text-[#111111] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#111111]">
                      Clean and maintainable code
                    </h4>
                    <p className="text-xs text-[#6B6B67] mt-0.5">
                      Built for long-term growth and straightforward developer handoff.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#111111] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#111111]">
                      Transparent process
                    </h4>
                    <p className="text-xs text-[#6B6B67] mt-0.5">
                      Regular updates, clear timelines, and zero surprises.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield size={18} className="text-[#111111] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#111111]">
                      Long-term mindset
                    </h4>
                    <p className="text-xs text-[#6B6B67] mt-0.5">
                      We build relationships, not just projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Call Callout matching Reference Image 2 */}
            <div className="p-6 border border-[#DADAD5] bg-[#EFEFEA] space-y-2">
              <span className="font-mono text-xs text-[#6B6B67] uppercase block">
                Prefer a quick chat?
              </span>
              <p className="text-xs text-[#111111]">
                Book a 15-minute introductory call to explore fit and feasibility.
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${companyData.email}?subject=Introductory%20Call%20Request`}
                  className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-semibold text-[#111111] hover:text-[#FD5006] transition-colors"
                >
                  <span>Schedule a call</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
