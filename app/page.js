"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import GuidelinesSection from "@/components/GuidelinesSection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactSection from "@/components/ContactSection";

// 1. Import your brand new companion component
import MascotCompanion from "@/components/MascotCompanion";

export default function CompetitionSite() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-blue-500/20 selection:text-blue-300 font-sans antialiased overflow-x-hidden relative">

      {/* Universal Celestial Starlight Matrix Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* 2. Drop the mascot here. Being fixed layout, it sits perfectly on top of the DOM stack */}
      <MascotCompanion />

      {/* Main Single Page Layout Pipeline */}
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <GuidelinesSection />
        <SponsorsSection />
        <ContactSection />
      </main>

    </div>
  );
}