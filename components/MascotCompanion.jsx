"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";

export default function MascotCompanion() {
  const [speechVisible, setSpeechVisible] = useState(false);
  const [speechText, setSpeechText] = useState("Hoo... Let's fly!");
  
  // Track the owl's dynamic random offsets
  const [randomX, setRandomX] = useState(0);
  const [randomY, setRandomY] = useState(0);

  // Keep tabs on scroll positions to calculate deltas
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();
  
  // Physics tracking for flight tilt (leaning forward/backward on scroll velocity)
  const scrollVelocity = useVelocity(scrollY);
  const rawRotation = useTransform(scrollVelocity, [-2000, 2000], [-30, 30]);
  const flightTilt = useSpring(rawRotation, { stiffness: 100, damping: 20 });

  const owlQuotes = [
    "Hoo! Caught a thermal updraft!",
    "Navigating the stars...",
    "System parameters looking sharp from up here.",
    "Watching you compile from above.",
    "The view is better on the move!"
  ];

  useEffect(() => {
    // Show introduction speech bubble early on
    const introTimer = setTimeout(() => setSpeechVisible(true), 3000);

    // Listen to changes in the scroll height
    const unsubscribe = scrollY.on("change", (latest) => {
      const delta = Math.abs(latest - lastScrollY.current);

      // Trigger a random flight adjustment every 120px scrolled
      if (delta > 120) {
        lastScrollY.current = latest;

        // Bounded "Flight Zone" parameters (limits range so it stays on the right half)
        const maxFlightWidth = -150; // Max distance it can fly left (negative pixels)
        const maxFlightHeight = -250; // Max distance it can fly up (negative pixels)

        // Generate a smooth random point within its flight quadrant
        setRandomX(Math.floor(Math.random() * maxFlightWidth));
        setRandomY(Math.floor(Math.random() * maxFlightHeight));

        // Occasionally have the owl pipe up with a quote during flight shifts
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
    // Fixed base anchor anchor at bottom-right corner
    <div className="fixed bottom-10 right-10 z-50 pointer-events-none flex flex-col items-end gap-2 select-none">
      
      {/* Dynamic Speech Bubble: Glides and stays aligned directly above the owl */}
      <motion.div
        animate={{ 
          x: randomX, 
          y: randomY, 
          opacity: speechVisible ? 1 : 0, 
          scale: speechVisible ? 1 : 0.8 
        }}
        transition={{ type: "spring", stiffness: 70, damping: 14 }}
        className="bg-slate-950/90 border border-slate-800 text-slate-300 text-[11px] font-varino px-3 py-2 rounded-xl shadow-xl max-w-[180px] text-center backdrop-blur-md"
      >
        {speechText}
      </motion.div>

      {/* Main Owl Character Engine */}
      <motion.div
        // Combines scroll velocity rotation tilt with dynamic random flight coordinates
        style={{ rotate: flightTilt }}
        animate={{ x: randomX, y: randomY }}
        // Damping set a bit lower so the flight looks incredibly fluid, springy, and organic
        transition={{ type: "spring", stiffness: 60, damping: 16 }}
        onClick={() => {
          setSpeechText("Hoo! Steady wings, architect!");
          setSpeechVisible(true);
        }}
        className="pointer-events-auto cursor-pointer h-12 w-12 rounded-full bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-400/30 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(251,191,36,0.08)] hover:border-blue-400 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] transition-shadow duration-300 relative group"
      >
        
        {/* Glow trails that shine through when active */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-400 to-indigo-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity" />

        {/* Small Owl SVG Graphics */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="w-6 h-6 transform group-hover:scale-105 transition-transform"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 18a6 6 0 0 0 6-6c0-2-1.5-4-3.5-4S12 9 12 9s-2.5-1-4.5-1S4 10 4 12a6 6 0 0 0 6 6z" />
          <circle cx="9" cy="12" r="1" fill="currentColor" />
          <circle cx="15" cy="12" r="1" fill="currentColor" />
          <path d="M12 12l-1 1.5h2z" fill="currentColor" />
        </svg>

      </motion.div>
    </div>
  );
}