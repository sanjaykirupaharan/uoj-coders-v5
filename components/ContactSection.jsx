"use client";
import React from "react";
import { Send, MessageSquare, ExternalLink } from "lucide-react";
import { FaGithub, FaXTwitter, FaDiscord } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left column info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs font-varino text-indigo-400 uppercase tracking-widest">// 05 . CHANNELS</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Signal the Nest</h2>
          <p className="text-slate-300 font-normal">Have inquiries regarding team alignment limits, computational runtimes, or hosting infrastructure? Send a broadcast payload down our relay channels.</p>
          
          <div className="space-y-4 font-varino text-sm">
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors"><MessageSquare size={16} className="text-blue-400" /> community_discord <ExternalLink size={12} /></a>
            <div className="flex items-center gap-3 text-slate-300"><Send size={16} className="text-indigo-400" /> signals@nightowl.hack</div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 text-slate-500 pt-2">
            <a href="#" className="hover:text-white transition-colors"><FaGithub size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><FaXTwitter size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><FaDiscord size={20} /></a>
          </div>
        </div>

        {/* Right column Form */}
        <div className="lg:col-span-7 bg-slate-900/10 border border-slate-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Callsign" className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-400 transition-colors" />
              <input type="email" placeholder="Email Reference" suppressHydrationWarning={true} className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-400 transition-colors" />
            </div>
            <textarea rows={4} placeholder="Your transmission details..." className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-400 transition-colors resize-none" />
            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-400 to-blue-500 font-bold text-sm text-slate-950 transition-all hover:opacity-95 active:scale-[0.99]">
              Dispatch Transmission
            </button>
          </form>
        </div>

      </div>

      {/* Mini Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-8 border-t border-slate-900/40 text-center font-varino text-xs text-slate-600">
        © 2026 UOJ CODERS PRODUCTION. COMPILED COLD UNDER THE SKY.
      </div>
    </section>
  );
}