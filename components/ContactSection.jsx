"use client";
import React from "react";
import { Send, MessageSquare, ExternalLink } from "lucide-react";
import {  FaLinkedin, FaFacebook , FaYoutube } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function ContactSection() {
  return (
    <section id="contact" className="text-center py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-t border-slate-900/60  h-screen">
      <div className="gap-12 items-center">

        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs font-varino text-indigo-400 uppercase tracking-widest">// 05 . CHANNELS</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Signal the Nest</h2>
          <p className="text-slate-300 font-normal">Have inquiries regarding team alignment limits, computational runtimes, or hosting infrastructure? Send a broadcast payload down our relay channels.</p>
          
          <div className="w-11/12 lg:w-1/4 mx-auto mt-10 flex flex-col items-center justify-center gap-y-10">
        <div className="flex flex-col items-center justify-center gap-y-1 text-white">
          <p className="font-semibold tracking-wide text-lg 2xl:text-xl">
            Wanith Nirman
          </p>
          <p className="text-sm 2xl:text-base text-zinc-400 font-medium">
            President (CompSoc)
          </p>
          <p>+94 71 641 6709 </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-1 text-white">
          <p className="font-semibold tracking-wide text-lg 2xl:text-xl">
            S. Saravanan
          </p>
          <p className="text-sm 2xl:text-base text-zinc-400 font-medium">
            Secretary (CompSoc)
          </p>
          <p>+94 77 566 1784 </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-4 pt-5 2xl:text-lg">
        <p className="text-white">Email: </p>
        <p className="text-white underline">compsoc@univ.jfn.ac.lk</p>
      </div>

      <div className="flex items-center gap-8 text-slate-300 m-auto px-10 w-fit">
            <a href="#" className="hover:text-white transition-colors"><FaLinkedin size={40} /></a>
            <a href="#" className="hover:text-white transition-colors"><FaFacebook size={40} /></a>
            <a href="#" className="hover:text-white transition-colors"><FaYoutube size={40} /></a>
      </div>

      
      <div className="mt-10 flex flex-col items-center justify-center gap-y-2 text-white 2xl:text-lg">
        <p>Computer Society (CompSoc),</p>
        <p>Department of Computer Science,</p>
        <p>University of Jaffna.</p>
      </div>
        </div>
      </div>

      {/* Mini Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-15 border-t border-slate-900/40 text-center font-varino text-xs text-slate-600">
        © 2026 UOJ CODERS PRODUCTION. COMPILED COLD UNDER THE SKY.
      </div>
    </section>
  );
}