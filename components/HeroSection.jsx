"use client";
import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import { ChevronRight, Moon, Compass } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 px-4 overflow-hidden">
    <BackgroundBeamsWithCollision>
      {/* Decorative Night Sky Blur Clusters */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8000ms]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center lg:justify-start"
        >

          <div className="relative w-full max-w-[500px] aspect-square rounded-3xl border border-transparent bg-slate-900/5 backdrop-blur-md p-1 flex items-center justify-center group overflow-hidden shadow-[0_0_50px_rgba(251,191,36,0.02)]">
            <img src="/moon-v5.png" alt="UOJ Coders" className="w-fit h-fits object-contain" />
            
            {/* Corner Tech Accents matching your old design language but adjusted for theme */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-slate-900 group-hover:border-fuchsia-500/50 transition-colors" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-slate-900 group-hover:border-fuchsia-500/50 transition-colors" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-slate-900 group-hover:border-fuchsia-500/50 transition-colors" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-slate-900 group-hover:border-fuchsia-500/50 transition-colors" />
          </div>
        </motion.div>

        <div className="flex flex-col items-start text-left w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-varino text-slate-300 mb-6"
          >
            <Moon size={12} className="text-blue-400 animate-pulse" />
            THE ULTIMATE LATE-NIGHT CRUCIBLE
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15] text-white"
          >
            Wisdom is Built<br />
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              In the Dead of Night.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 max-w-xl mb-10 font-normal leading-relaxed"
          >
            When the rest of the world sleeps, the owls build. 
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfxCO5w4OF_ZGoBmcX1dgnbgYRBxrf-IpopGY6qbtUni5OTfQ/viewform?usp=header" target="_blank">
            <button 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-400 to-blue-500 text-slate-950 font-bold shadow-lg shadow-blue-500/10 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 z-40"
              >
              Register Now <ChevronRight size={16} />
            </button>
              </Link>
            
            <button 
              onClick={() => scrollToSection("timeline")} 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:bg-slate-900 transition-all font-semibold flex items-center justify-center gap-2 text-slate-300 z-40"
            >
              <Compass size={16} className="text-indigo-400" /> View Timeline
            </button>
          </motion.div>
          
        </div>
        <img src="/jaffna-silhouette.png" alt="Jaffna" className="absolute left-0 bottom-0 translate-y-[40%] w-screen h-auto filter grayscale  md:scale-100 scale-125 -z-10" />

      </div>
    </BackgroundBeamsWithCollision>
    </section>
  );
}