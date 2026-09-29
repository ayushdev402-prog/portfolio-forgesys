import React from "react";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import ProjectShowcase from "@/components/ProjectShowcase";
import TrustProof from "@/components/TrustProof";
import TeamPreview from "@/components/TeamPreview";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F7F4]">
      {/* 01. Hero with Interactive 3D WebGL System Core */}
      <Hero />

      {/* 02. Core Architecture & Technology Logos */}
      <PartnerLogos />

      {/* 03. Main Focus: Selected Projects & Case Studies */}
      <ProjectShowcase />

      {/* 04. Proof & Metrics: Real Work. Real Impact. */}
      <TrustProof />

      {/* 05. The Engineers: Ayush & Saad */}
      <TeamPreview />

      {/* 06. Direct Engagement CTA */}
      <CTA />
    </main>
  );
}
