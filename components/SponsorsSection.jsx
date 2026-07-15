"use client";

import React from "react";
import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const PLATINUM_SPONSORS = [
  { name: "Unicom SD", tier: "Platinum", logo: "/sponsors/uni.png" },
];

const SILVER_SPONSORS = [
  { name: "WSO2", tier: "Silver", logo: "/sponsors/wso2-white.png" },
  { name: "Nanthi Ventures", tier: "Silver", logo: "/sponsors/nanthi-v.png" },
];

export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="text-center pt-24 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-t border-slate-900/60 lg:h-screen"
    >
      {/* Dynamic ambient backdrop light leaks */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="text-xs font-varino text-pink-400 uppercase tracking-widest">
            // 05 . POWERED BY
          </div>
          <h2 className="text-3xl sm:text-4xl font-cust font-bold bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent w-fit mx-auto">
            PATRONS OF THE NIGHT
          </h2>
        </div>

        {/* Dynamic Sponsor Layout Container */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full">
          <div className="flex justify-center w-full">
            {PLATINUM_SPONSORS.map((sp) => (
              <div
                key={sp.name} // Added unique key on outermost mapped element for React rendering stability
                className="bg-gradient-to-br from-slate-400/0 to-transparent w-full max-w-4xl p-[1px] rounded-[18px] shadow-2xl hover:scale-[1.01] transition-transform duration-300 "
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="px-8 py-4 rounded-[17px] 0 border border-white/10 flex flex-col items-center gap-6 text-center">
                  {/* 1. TIER LABEL ON TOP */}
                  <span className="text-sm font-mono tracking-widest bg-slate-950 text-blue-400 px-4.5 py-1.5 rounded-full font-extrabold uppercase shadow-md">
                    {sp.tier} SPONSOR
                  </span>

                  {/* 2. BIG LOGO CONTAINER */}
                  <div className="w-full h-44 sm:h-52 shrink-0 flex items-center justify-center p-4 rounded-xl  shadow-inner">
                    <Image
                      src={sp.logo}
                      alt={`${sp.name} Logo`}
                      width={320} // High resolution container dimensions
                      height={180}
                      priority
                      className="scale-125 w-60 md:w-3/5 h-auto object-contain transform hover:scale-135 duration-300 transition-transform animate-fade-in z-40"
                    />
                  </div>
                </div>
                <DottedGlowBackground
                  className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
                  opacity={1}
                  gap={10}
                  radius={1.6}
                  colorLightVar="--color-neutral-500"
                  glowColorLightVar="--color-neutral-600"
                  colorDarkVar="--color-neutral-500"
                  glowColorDarkVar="--color-sky-800"
                  backgroundOpacity={10}
                  speedMin={0.3}
                  speedMax={1.6}
                  speedScale={1}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {SILVER_SPONSORS.map((sp) => (
              <div
                key={sp.name} // Unique outer mapped key
                className="p-[1px] rounded-[18px] bg-gradient-to-br from-slate-400/20 to-transparent shadow-xl hover:scale-[1.01] transition-transform duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Cohesive Silver Metallic card matches the Platinum look beautifully */}
                <div className="px-6 py-4 rounded-[17px] border border-white/10 flex flex-col items-center gap-5 text-center">
                  {/* 1. TIER LABEL ON TOP */}
                  <span className="text-sm font-mono tracking-widest bg-slate-950 text-slate-300 px-3.5 py-1.5 rounded-full font-bold uppercase shadow-sm">
                    {sp.tier} SPONSOR
                  </span>

                  {/* 2. BIG LOGO CONTAINER */}
                  <div className="w-full h-36 sm:h-44 shrink-0 flex items-center justify-center p-3 rounded-xl  shadow-sm">
                    <Image
                      src={sp.logo}
                      alt={`${sp.name} Logo`}
                      width={220}
                      height={120}
                      className="w-full md:w-3/5 h-auto object-contain transform hover:scale-105 duration-300 transition-transform animate-fade-in z-40"
                    />
                  </div>
                </div>
                <DottedGlowBackground
                  className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
                  opacity={1}
                  gap={10}
                  radius={1.6}
                  colorLightVar="--color-neutral-500"
                  glowColorLightVar="--color-neutral-600"
                  colorDarkVar="--color-neutral-500"
                  glowColorDarkVar="--color-sky-800"
                  backgroundOpacity={10}
                  speedMin={0.3}
                  speedMax={1.6}
                  speedScale={1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
