"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, CheckCircle2, Moon, ExternalLink } from "lucide-react";

export default function GuidelinesSection() {
  const [activeTab, setActiveTab] = useState("rules");

  return (
    <section id="guidelines" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 h-auto lg:h-screen">
      <div className="text-center space-y-3 mb-12">
        <div className="text-xs font-varino text-pink-400 uppercase tracking-widest">// 03 . THE GROUND RULES</div>
        <h2 className="text-3xl sm:text-4xl font-cust font-bold  bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent w-fit mx-auto">LAWS OF THE NIGHT</h2>
      </div>

      <div className="flex border-b border-slate-800 max-w-md mx-auto mb-10 p-1 bg-slate-900/40 rounded-lg">
        {["rules", "eligibility"].map((tab) => (
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
                <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  A team can have up to 3 members.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  There are no elimination rounds this year.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Only 40 teams will be selected for the competition.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Team members must solve the problems without any assistance from other people, pre-written code, or AI tools. Plagiarized teams will be disqualified.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  All final decisions will be made by the Computer Society (CompSoc), University of Jaffna.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  The final round will take place from July 18th at 6 PM to July 19th at 6 AM, 2026, at the Department of Computer Science, University of Jaffna.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "eligibility" && (
            <motion.div key="eligibility" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-400 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  <strong>Undergraduates:</strong> Only exclusive to undergraduate students currently enrolled in Sri Lankan universities or institutions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-400 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  <strong>Members:</strong> Each team can consist of a minimum of 1 and a maximum of 3 members.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-400 mt-1 shrink-0" size={18} />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  <strong>Team:</strong> All the members in the team must be from the same university.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-varino text-slate-500">
          <span>UoJ Coders v5 - 2026 // SYSTEM_RUN</span>
        </div>
      </div>
    </section>
  );
}