"use client";
import React from "react";
import { Moon, Eye, Trophy, Timer } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className=" text-center  py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-t border-slate-900/60">
      <div className="gap-12 items-center">
        <div className="text-center space-y-3 mb-16">
          <div className="text-xs font-varino text-blue-400 uppercase tracking-widest">// 01 . NOCTURNAL VISION</div>
          <h2 className="text-3xl sm:text-5xl font-varino font-bold tracking-tight text-white mb-16">UOJ CODERS</h2>
          <p className="text-slate-300 md:text-xl leading-relaxed font-normal">
           UoJCoders v4.0 is a 12-hour coding inter-university competition. It's organized by the Computer Society and the Department of Computer Science at the University of Jaffna. The goal is to help students improve their coding and problem-solving skills, especially those studying computing. The event, inspired by IEEEXtreme, is open to all undergraduate students in Sri Lanka.
          </p>
          <p className="text-slate-300 md:text-xl leading-relaxed font-normal">
           The UoJCoders v4.0 competition is planned to be held on on August 23th and 24th, 2025, at the Department of Computer Science, University of Jaffna. It’s a 12-hour online coding challenge run through the Moodle , which uses a special tool called Virtual Programming Lab (VPL) plug-in plug-in along with a a separate Jail system. This setup makes sure each participant works in a safe and private coding space. Even though the contest is online, participants must be physically present at the venue. The problems will focus on real-life situations, and students are encouraged to use the right data structures and algorithms to solve them.
          </p>
          <p className="text-slate-300 md:text-xl leading-relaxed font-normal">
            UoJCoders v1.0 was held on March 16th and 17th, 2019. Over 200 teams joined the elimination round, and 25 teams made it to the finals.
          </p>
          <p className="text-slate-300 md:text-xl leading-relaxed font-normal">
            UoJCoders v2.0 was planned for April 4th and 5th, 2020, but it was canceled because of the COVID-19 pandemic.
          </p>
          <p className="text-slate-300 md:text-xl leading-relaxed font-normal">
            UoJCoders v3.0 took place on October 12th and 13th, 2024. More than 100 teams joined the elimination round, and 22 teams were selected for the finals.
          </p>
          <p className="text-slate-300 md:text-xl leading-relaxed font-normal">
            UoJCoders v4.0 took place on October 12th and 13th, 2024. More than 100 teams joined the elimination round, and 22 teams were selected for the finals.
          </p>
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-slate-900/20 border border-slate-800/80 backdrop-blur-sm">
            <Trophy className="text-blue-400 mb-4 m-auto" size={24} />
            <div className="text-2xl font-bold font-varino text-white">Rs. 50,000</div>
            <div className="text-xs text-slate-500 mt-1">Winner Prize Pool</div>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/20 border border-slate-800/80 backdrop-blur-sm">
            <Timer className="text-indigo-400 mb-4 m-auto" size={24} />
            <div className="text-2xl font-bold font-varino text-white">12 Hours</div>
            <div className="text-xs text-slate-500 mt-1">Sustained Midnight Production</div>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/20 border border-slate-800/80 backdrop-blur-sm">
            <Eye className="text-teal-400 mb-4 m-auto" size={24} />
            <div className="text-2xl font-bold font-varino text-white">40</div>
            <div className="text-xs text-slate-500 mt-1">Registered Night Builders</div>
          </div>
        </div>
      </div>
    </section>
  );
}