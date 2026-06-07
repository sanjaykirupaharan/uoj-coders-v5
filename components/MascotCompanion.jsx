// components/MascotCompanion.js (Updated with Image Asset)
"use client";
import React, { useEffect, useState, useRef } from "react";
// 1. Import Next.js Image component
import Image from "next/image"; 
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";

export default function MascotCompanion() {
  const [speechVisible, setSpeechVisible] = useState(false);
  const [speechText, setSpeechText] = useState("Hoo... Let's fly!");
  
  const [randomX, setRandomX] = useState(0);
  const [randomY, setRandomY] = useState(0);

  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();
  
  const scrollVelocity = useVelocity(scrollY);
  const rawRotation = useTransform(scrollVelocity, [-2000, 2000], [-30, 30]);
  const flightTilt = useSpring(rawRotation, { stiffness: 100, damping: 20 });

const owlQuotes=[ "Chasing midnight bugs until sunrise comes",
"Just one more fix before morning",
"The stars shine, the code flows",
"Glowing screens while the world sleeps",
"The view is better on the move!",
"Sun goes down, servers stay up",
"World is asleep, syntax is deep"
];

  useEffect(() => {
    const introTimer = setTimeout(() => setSpeechVisible(true), 3000);

    const unsubscribe = scrollY.on("change", (latest) => {
      const delta = Math.abs(latest - lastScrollY.current);

      if (delta > 120) {
        lastScrollY.current = latest;

        const maxFlightWidth = -80; 
        const maxFlightHeight = -550; 

        setRandomX(Math.floor(Math.random() * maxFlightWidth));
        setRandomY(Math.floor(Math.random() * maxFlightHeight));

        if (Math.random() < 0.25) {
          setSpeechVisible(false);
          setTimeout(() => {
            const randomQuote = owlQuotes[Math.floor(Math.random() * owlQuotes.length)];
            setSpeechText(randomQuote);
            setSpeechVisible(true);
          }, 300);
        }
      }
    });

    return () => {
      clearTimeout(introTimer);
      unsubscribe();
    };
  }, [scrollY]);

  return (
    <div className="fixed bottom-10 right-10 z-50 pointer-events-none flex flex-col items-end gap-2 select-none hidden md:inline">
      
      <motion.div
        animate={{ 
          x: randomX, 
          y: randomY, 
          opacity: speechVisible ? 1 : 0, 
          scale: speechVisible ? 1 : 0.8 
        }}
        transition={{ type: "spring", stiffness: 70, damping: 14 }}
        className="bg-slate-950/90 border border-slate-800 text-slate-300 text-[11px] font-mono px-3 py-2 rounded-xl shadow-xl max-w-[180px] text-center backdrop-blur-md"
      >
        {speechText}
      </motion.div>

      <motion.div
        style={{ rotate: flightTilt }}
        animate={{ x: randomX, y: randomY }}
        transition={{ type: "spring", stiffness: 60, damping: 16 }}
        onClick={() => {
          setSpeechText("Hoo! Steady wings, architect!");
          setSpeechVisible(true);
        }}
        // Re-styled slightly to accommodate an Image component
        className="pointer-events-auto cursor-pointer h-14 w-14 group relative"
      >
        
        {/* Magic Flight Trail Sparks */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 to-indigo-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity" />

        <Image 
          src="/owl-mascot.png" // 👈 Matches filename in /public
          alt="Night Owl" 
          width={56} // H-14 equivalent (14*4=56)
          height={56}
          className="transform group-hover:scale-105 transition-transform "
        />

      </motion.div>
    </div>
  );
}