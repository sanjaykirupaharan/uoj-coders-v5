"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, CheckCircle2, Moon, ExternalLink } from "lucide-react";

export default function GuidelinesSection() {
  const [activeTab, setActiveTab] = useState("rules");

  return (
    <section id="guidelines" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900/60">
      <div className="text-center space-y-3 mb-12">
        <div className="text-xs font-varino text-blue-400 uppercase tracking-widest">// 03 . THE CODEX</div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Laws of the Forest</h2>
      </div>

      <div className="flex border-b border-slate-800 max-w-md mx-auto mb-10 p-1 bg-slate-900/40 rounded-lg">
        {["rules", "eligibility", "architecture"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-xs font-varino uppercase tracking-wider rounded-md transition-all ${
              activeTab === tab 
                ? "bg-slate-800 text-blue-300 shadow-sm border border-slate-700/40" 
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-slate-900/10 border border-slate-800/80 rounded-2xl p-6 sm:p-8 min-h-[240px] flex flex-col justify-between backdrop-blur-sm">
        <AnimatePresence mode="wait">
          {activeTab === "rules" && (
            <motion.div key="rules" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="space-y-4">
              <div className="flex items-start gap-3">
                <ShieldAlert className="text-blue-500 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  <strong>Academic Honor:</strong> All submitted software assets run through custom syntax evaluation algorithms. Code copy tracking blocks plagiarism parameters instantly.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-indigo-400 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  <strong>Live Environments:</strong> Production code drops must happen within the assigned group remote repository provided by the admin orchestrators.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "eligibility" && (
            <motion.div key="eligibility" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-400 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  <strong>Open Entry:</strong> Welcome to university scholars, logic developers, and production engineers globally. Group structures caps at 4 heads.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "architecture" && (
            <motion.div key="architecture" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="space-y-4">
              <div className="flex items-start gap-3">
                <Moon className="text-purple-400 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  <strong>Allowed Syntaxes:</strong> Compilers process Rust, Go, Python, C++, and TypeScript. Infrastructure layers must use modern system endpoints.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-varino text-slate-500">
          <span>CODEX_V2026 // SYSTEM_RUN</span>
          <a href="#" className="text-blue-400 hover:underline inline-flex items-center gap-1">Download Flight Parameters <ExternalLink size={12}/></a>
        </div>
      </div>
    </section>
  );
}