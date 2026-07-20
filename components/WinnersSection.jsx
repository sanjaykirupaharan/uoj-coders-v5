"use client";

import React from "react";

// Structured data for top contenders representing Sri Lankan universities
const WINNERS_DATA = {
  first: {
    teamName: "OptiCol",
    university: "University of Moratuwa",
    prize: "Rs. 50,000",
    badge: "CHAMPIONS",
    // Pure Gold Tones
    metalName: "Gold",
    bgGradient: "from-amber-400 via-yellow-200 to-amber-600",
    glow: "shadow-amber-500/20 border-amber-400/40",
    textGradient: "from-amber-300 via-yellow-100 to-amber-500",
    textColor: "text-amber-400",
  },
  second: {
    teamName: "Fih",
    university: "University of Predeniya",
    prize: "Rs. 30,000",
    badge: "1ST RUNNER-UP",
    // Pure Silver Tones
    metalName: "Silver",
    bgGradient: "from-slate-200 via-zinc-100 to-slate-400",
    glow: "shadow-slate-400/15 border-slate-300/30",
    textGradient: "from-slate-200 via-zinc-50 to-slate-400",
    textColor: "text-slate-300",
  },
  third: {
    teamName: "RePeaTers",
    university: "University of Kelaniya",
    prize: "Rs. 20,000",
    badge: "2ND RUNNER-UP",
    // Pure Bronze Tones
    metalName: "Bronze",
    bgGradient: "from-orange-700 via-amber-800 to-amber-950",
    glow: "shadow-orange-950/20 border-orange-800/30",
    textGradient: "from-orange-400 via-amber-600 to-amber-800",
    textColor: "text-orange-600",
  },
};

// 1st Place Gold Crown SVG
const GoldCrownIcon = () => (
  <svg
    className="w-12 h-12 text-amber-400 animate-pulse"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3L16 9L22 6L19 15H5L2 6L8 9L12 3Z"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 18H19V20H5V18Z"
      fill="currentColor"
    />
    <circle cx="12" cy="3" r="1" fill="currentColor" />
    <circle cx="2" cy="6" r="1" fill="currentColor" />
    <circle cx="22" cy="6" r="1" fill="currentColor" />
  </svg>
);

// 2nd Place Silver Trophy SVG
const SilverTrophyIcon = () => (
  <svg
    className="w-10 h-10 text-slate-300"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22C12 22 17 22 17 17V10H7V17C7 22 12 22 12 22Z"
      fill="currentColor"
      fillOpacity="0.05"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 12H20C21.5 12 22 11 22 9.5C22 8 21.5 7 20 7H17"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 12H4C2.5 12 2 11 2 9.5C2 8 2.5 7 4 7H7"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2V6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 22H15" />
  </svg>
);

// 3rd Place Bronze Medal SVG
const BronzeMedalIcon = () => (
  <svg
    className="w-10 h-10 text-orange-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="13"
      r="6"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.05"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7V2"
      strokeWidth="2.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 2h6"
      strokeWidth="2"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 2L12 5L14 2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10V16M10 13H14" />
  </svg>
);

export default function WinnersSection() {
  return (
    <section
      id="winners"
      className="pt-30 bg-[#030712] relative overflow-hidden border-t border-slate-900/80 lg:h-screen"
    >
      {/* Background Matrix-like Subtle Ambient Shadows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-zinc-400/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {}
        {/* Dynamic Header mimicking UOJ terminal system styling */}
        <div className="text-center space-y-1 mb-20">
          <div className="text-xs font-varino text-pink-400 uppercase tracking-widest">
            // 05 . SECTOR VICTORS
          </div>
          <h2 className="text-3xl sm:text-4xl font-cust font-bold bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent w-fit mx-auto">
            ALIGNED CONTENDERS
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-mono pt-6">
            Execution completed. Top teams evaluated and mapped to metallic
            podium rankings.
          </p>
        </div>

        {}
        {/* Responsive Podium: Stacks neatly on mobile, shifts layout logically for Desktop (2nd, 1st, 3rd) */}
        <div className="flex flex-col lg:flex-row items-end justify-center gap-8 max-w-6xl mx-auto w-full px-2">
          {/* ================= SECOND PLACE (SILVER FLANK) ================= */}
          <div className="w-full lg:w-1/3 flex flex-col items-center order-2 lg:order-1 mt-10 lg:mt-0">
            {/* Contender Card above Podium */}
            <div className="text-center mb-6 space-y-2">
              <div className="inline-flex items-center justify-center p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 mb-2 shadow-lg">
                <SilverTrophyIcon />
              </div>
              <br />
              <span className="text-[10px] font-varino tracking-widest bg-slate-300/10 border border-slate-300/30 text-slate-300 px-3 py-1 rounded font-bold uppercase inline-block">
                {WINNERS_DATA.second.badge}
              </span>
              <h3 className="text-xl font-bold text-white font-mono mt-3">
                {WINNERS_DATA.second.teamName}
              </h3>
              <p className="text-sm text-slate-400 font-mono">
                {WINNERS_DATA.second.university}
              </p>
            </div>

            {/* Solid Silver Stage Base */}
            <div
              className={`w-full h-44 bg-gradient-to-b from-zinc-800/80 via-slate-900 to-black border-t border-x border-slate-400/30 rounded-t-xl shadow-2xl flex flex-col items-center justify-between p-6 relative group hover:-translate-y-1 transition-transform duration-300 ${WINNERS_DATA.second.glow}`}
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-80" />

              {/* Placement Metallic Number Badge */}
              <span
                className="text-7xl font-black select-none tracking-tighter bg-gradient-to-b from-slate-100 via-zinc-300 to-slate-500 bg-clip-text text-transparent filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                {" "}
                2
              </span>

              <div className="text-sm font-mono font-bold text-slate-300 bg-slate-900/90 border border-slate-800/80 px-4 py-1.5 rounded-full tracking-wider shadow-inner">
                {WINNERS_DATA.second.prize}
              </div>
            </div>
          </div>

          {/* ================= FIRST PLACE (GOLD MONOLITH) ================= */}
          <div className="w-full lg:w-1/3 flex flex-col items-center order-1 lg:order-2">
            {/* Gold Aura Ring Backdrop */}
            <div className="absolute -top-16 w-80 h-80 bg-amber-400/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Contender Card above Podium */}
            <div className="text-center mb-6 space-y-2 scale-105">
              <div className="inline-flex items-center justify-center p-3.5 bg-slate-950/90 rounded-xl border border-amber-400/30 mb-2 shadow-xl shadow-amber-500/5">
                <GoldCrownIcon />
              </div>
              <br />
              <span className="text-[11px] font-varino tracking-widest bg-amber-400 text-slate-950 px-4 py-1.5 rounded font-black uppercase inline-block shadow-lg shadow-amber-500/20">
                {WINNERS_DATA.first.badge}
              </span>
              <h3 className="text-2xl font-black text-white font-mono tracking-tight mt-3">
                {WINNERS_DATA.first.teamName}
              </h3>
              <p className="text-sm text-slate-400 font-mono">
                {WINNERS_DATA.first.university}
              </p>
            </div>

            {/* Solid Gold Stage Base (Elevated Height) */}
            <div
              className={`w-full h-56 bg-gradient-to-b from-amber-950/40 via-slate-900 to-black border-t-2 border-x border-amber-400/40 rounded-t-xl shadow-2xl flex flex-col items-center justify-between p-6 relative group hover:-translate-y-1 transition-transform duration-300 ${WINNERS_DATA.first.glow}`}
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-90" />

              {/* Placement Metallic Number Badge */}
              <span
                className="text-8xl font-black select-none tracking-tighter bg-gradient-to-b from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent filter drop-shadow-[0_4px_16px_rgba(245,158,11,0.3)] animate-pulse"
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                {" "}
                1
              </span>

              <div className="text-base font-mono font-black text-amber-400 bg-slate-900/95 border border-amber-500/30 px-5 py-2 rounded-full tracking-wider shadow-md">
                {WINNERS_DATA.first.prize}
              </div>
            </div>
          </div>

          {/* ================= THIRD PLACE (BRONZE FLANK) ================= */}
          <div className="w-full lg:w-1/3 flex flex-col items-center order-3 mt-10 lg:mt-0">
            {/* Contender Card above Podium */}
            <div className="text-center mb-6 space-y-2">
              <div className="inline-flex items-center justify-center p-3 bg-slate-950/80 rounded-xl border border-orange-900/30 mb-2 shadow-lg">
                <BronzeMedalIcon />
              </div>
              <br />
              <span className="text-[10px] font-varino tracking-widest bg-orange-900/10 border border-orange-800/30 text-orange-400 px-3 py-1 rounded font-bold uppercase inline-block">
                {WINNERS_DATA.third.badge}
              </span>
              <h3 className="text-xl font-bold text-white font-mono mt-3">
                {WINNERS_DATA.third.teamName}
              </h3>
              <p className="text-sm text-slate-400 font-mono">
                {WINNERS_DATA.third.university}
              </p>
            </div>

            {/* Solid Bronze Stage Base */}
            <div
              className={`w-full h-36 bg-gradient-to-b from-orange-950/20 via-slate-900 to-black border-t border-x border-orange-800/30 rounded-t-xl shadow-2xl flex flex-col items-center justify-between p-6 relative group hover:-translate-y-1 transition-transform duration-300 ${WINNERS_DATA.third.glow}`}
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80" />

              {/* Placement Metallic Number Badge */}
              <span
                className="text-6xl font-black select-none tracking-tighter bg-gradient-to-b from-orange-300 via-amber-600 to-amber-900 bg-clip-text text-transparent filter drop-shadow-[0_4px_10px_rgba(249,115,22,0.15)] -mt-4"
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                {" "}
                3
              </span>

              <div className="text-sm font-mono font-bold text-orange-400 bg-slate-900/90 border border-orange-950 px-4 py-1.5 rounded-full tracking-wider shadow-inner">
                {WINNERS_DATA.third.prize}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
