"use client";
import React from "react";
import { SquigglyText } from "@/components/ui/squiggly-text";
import dynamic from "next/dynamic";
import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";

const EncryptedText = dynamic(() => import("./ui/encrypted-text"), {
  ssr: false,
});

const PLATINUM_SPONSORS = [
  { name: "Unicom SD", tier: "Platinum", logo: "/sponsors/unicom-sd.jpg" },
];

const SILVER_SPONSORS = [
  { name: "WSO2", tier: "Silver", logo: "/sponsors/wso2-sq.png" },
  { name: "Nanthi Ventures", tier: "Silver", logo: "/sponsors/nanthi.png" },
];

export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="py-24 sm:h-screen  bg-slate-950/20 border-t border-slate-900/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-varino text-pink-400 uppercase tracking-widest">
            // 04 . POWERED BY
          </div>
          <h2 className="text-3xl sm:text-4xl font-cust font-bold bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent w-fit mx-auto">
            PATRONS OF THE NIGHT
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
          {PLATINUM_SPONSORS.map((sp, idx) => (
            <CometCard>
              <button
                type="button"
                className="my-5 flex cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121]"
                aria-label="View invite F7RA"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div
                  key={idx}
                  className="px-10 py-5 rounded-xl bg-slate-900/20 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/50 transition-all flex items-center gap-3 group cursor-pointer md:w-sm"
                >
                  <span className="text-2xl transition-all duration-300">
                    <Image
                      src={sp.logo}
                      alt={sp.name}
                      width={10}
                      height={5}
                      priority
                      className="transform group-hover:scale-101 w-40 h-40 rounded-xl object-contain animate-fade-in"
                    />
                  </span>
                  <div>
                    <div className="font-semibold text-m text-slate-300 group-hover:text-white transition-colors">
                      {sp.name}
                    </div>
                    <div className="text-[11px] font-varino text-slate-500 uppercase">
                      {sp.tier} Sponsor
                    </div>
                  </div>
                </div>
              </button>
            </CometCard>
          ))}

          {/* <SquigglyText
          stepDuration={70}
          scale={[2, 4]}
          className="text-center text-pink-500"
        >
          <EncryptedText 
          text="Announcing our sponsors soon..." 
          className="text-4xl text-center" 
          vencryptedClassName="text-red-900"
          revealedClassName="text-slate-300" 
          revealDelayMs={50}
          />
        </SquigglyText>{" "} */}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
          {SILVER_SPONSORS.map((sp, idx) => (
            <CometCard>
              <button
                type="button"
                className="my-5 flex cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121]"
                aria-label="View invite F7RA"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div
                  key={idx}
                  className="px-10 py-5 rounded-xl bg-slate-900/20 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/50 transition-all flex items-center gap-3 group cursor-pointer md:w-sm"
                >
                  <span className="text-2xl transition-all duration-300">
                    <Image
                      src={sp.logo}
                      alt={sp.name}
                      width={10}
                      height={5}
                      priority
                      className="transform group-hover:scale-101 w-40 h-40 rounded-xl object-contain animate-fade-in"
                    />
                  </span>
                  <div>
                    <div className="font-semibold text-m text-slate-300 group-hover:text-white transition-colors">
                      {sp.name}
                    </div>
                    <div className="text-[11px] font-varino text-slate-500 uppercase">
                      {sp.tier} Sponsor
                    </div>
                  </div>
                </div>
              </button>
            </CometCard>
          ))}

          {/* <SquigglyText
          stepDuration={70}
          scale={[2, 4]}
          className="text-center text-pink-500"
        >
          <EncryptedText 
          text="Announcing our sponsors soon..." 
          className="text-4xl text-center" 
          vencryptedClassName="text-red-900"
          revealedClassName="text-slate-300" 
          revealDelayMs={50}
          />
        </SquigglyText>{" "} */}
        </div>
      </div>
    </section>
  );
}
