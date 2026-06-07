"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const TIMELINE_DATA = [
  { 
    id: 1, 
    title: "Registration Opens",
    date: "June 08, 2026", 
    shortDesc: "Lock your team configuration early.", 
    longDesc: "Form alignments of up to 3 architects. Early entrants receive priority slots.", 
    status: "current",
    time: "18.00 pm"
  },
  { 
    id: 2, 
    title: "Registration Closes", 
    date: "June 14, 2026", 
    shortDesc: "Sync your sleep cycles.", 
    longDesc: "The entry script terminates automatically once forty coding teams register successfully. Fuel up on caffeine because forty selected teams will enter the dark.", 
    status: "upcoming",
    time: "23.59 pm" 
  },
  { 
    id: 3, 
    title: "Final Night", 
    date: "July 18, 2026", 
    shortDesc: "12 continuous hours of compilation.", 
    longDesc: "The prime event. Build and test robust solutions responding to problems thrown.", 
    status: "upcoming",
    time: "18.00 pm" 
  },
  { 
    id: 4, 
    title: "Awarding Ceremony", 
    date: "July 19, 2026", 
    shortDesc: "Victory at the Dawn.", 
    longDesc: "From midnight coding to morning glory, we honor the ultimate developers.",
    status: "upcoming",
    time: "06.00 am" 
  }
];

export default function TimelineSection() {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <section id="timeline" className="py-24 bg-slate-950/40 border-t border-slate-900/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <div className="text-xs font-varino text-blue-400 uppercase tracking-widest">// 02 . THE TRAJECTORY</div>
          <h2 className="text-3xl sm:text-4xl font-cust font-bold  bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent w-fit mx-auto">TIMELINE PROGRESSION</h2>
        </div>

        <div className="relative border-l border-slate-800/80 ml-4 sm:ml-32 space-y-8 py-2">
          {TIMELINE_DATA.map((item, idx) => {
            const isOpen = activeItem === item.id;
            return (
              <div key={item.id} className="relative group">
                <div className="absolute hidden sm:block -left-32 top-1.5 text-right w-24 font-varino text-xs text-slate-500">
                  {item.date}
                </div>

                <div className={`absolute -left-[6px] top-3.5 h-3 w-3 rounded-full border transition-all duration-300 ${
                  item.status === 'past' ? 'bg-slate-800 border-slate-700' :
                  item.status === 'current' ? 'bg-blue-500 border-blue-400 shadow-[0_0_10px_rgba(251,191,36,0.4)] scale-125' :
                  'bg-slate-950 border-slate-700 group-hover:border-blue-400'
                }`} />

                <motion.div 
                  layout
                  onClick={() => setActiveItem(isOpen ? null : item.id)}
                  className={`ml-6 p-5 sm:p-6 rounded-xl border cursor-pointer transition-all ${
                    isOpen ? 'bg-slate-900/60 border-slate-700 shadow-xl' : 'bg-slate-900/20 border-slate-800/60 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="sm:hidden font-varino text-xs text-blue-400 mb-1">{item.date}</span>
                    <h3 className="font-bold text-lg text-slate-100 flex items-center gap-2">
                      {item.title}
                      {item.status === 'current' && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-sky-100/0 text-blue-400 border border-violet-500/20 font-varino animate-pulse">
                          IN FLIGHT
                        </span>
                      )}
                    </h3>
                    <span className="font-varino text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800/40 self-start sm:self-auto">
                      STAGE_0{idx + 1}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm mt-2 font-normal leading-relaxed">{item.shortDesc}</p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <div className="mt-4 pt-4 border-t border-slate-800 text-sm text-slate-300 space-y-3 font-normal leading-relaxed">
                          <p>{item.longDesc}</p>
                          <div className="flex gap-4 pt-1 text-xs font-varino text-blue-400">
                            <span className="flex items-center gap-1"><Calendar size={12}/> {item.date}</span>
                            <span className="flex items-center gap-1"><Clock size={12}/> {item.time}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}