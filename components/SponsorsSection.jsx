"use client";
import React from "react";

const SPONSORS = [
  { name: "Nebula Compute", tier: "Celestial", logo: "🌌" },
  { name: "Starlight Storage", tier: "Celestial", logo: "⭐" },
  { name: "Nocturnal Systems", tier: "Lunar", logo: "🌙" },
  { name: "Aurora Network", tier: "Lunar", logo: "🔮" },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 bg-slate-950/20 border-t border-slate-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-varino text-blue-400 uppercase tracking-widest">// 04 . FOUNDRY PARTNERS</div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Patrons of the Night</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
          {SPONSORS.map((sp, idx) => (
            <div key={idx} className="px-6 py-4 rounded-xl bg-slate-900/20 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/50 transition-all flex items-center gap-3 group cursor-pointer min-w-[200px]">
              <span className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-300">{sp.logo}</span>
              <div>
                <div className="font-semibold text-sm text-slate-300 group-hover:text-white transition-colors">{sp.name}</div>
                <div className="text-[10px] font-varino text-slate-500 uppercase">{sp.tier} Partner</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}