"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import GuidelinesSection from "@/components/GuidelinesSection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactSection from "@/components/ContactSection";
import FinalistsSection from "@/components/FinalistsSection";

// 1. Import your brand new companion component
import MascotCompanion from "@/components/MascotCompanion";

export default function CompetitionSite() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 via-indigo-00/40 to-gray-950 text-neutral-100 selection:bg-blue-500/20 selection:text-blue-300 font-sans antialiased overflow-x-hidden relative">

      {/* Sticky Top Header Navigation */}
      <Navbar />

      <MascotCompanion />

      {/* Main Single Page Layout Pipeline */}
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <GuidelinesSection />
        <FinalistsSection />
        <SponsorsSection />
        <ContactSection />
      </main>

    </div>
  );
}