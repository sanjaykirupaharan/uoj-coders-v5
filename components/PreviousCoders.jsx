"use client";
import { useState, useEffect, useRef } from "react";

const PAST_EDITIONS = [
  {
    year: "2025",
    title: "UOJ Coders v4.0",
    url: "https://uoj-coders-v4.netlify.app/",
  },
  {
    year: "2024",
    title: "UOJ Coders v3.0",
    url: "https://society.jfn.ac.lk/compsoc/uojcoders/v3/",
  },
  {
    year: "2020",
    title: "UOJ Coders v2.0",
    url: "https://society.jfn.ac.lk/compsoc/uojcoders/v2/",
  },
  {
    year: "2019",
    title: "UOJ Coders v1.0",
    url: "https://society.jfn.ac.lk/compsoc/uojcoders/v1/",
  },
];

export function PreviousCoders() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if user clicks anywhere outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-md font-mono text-slate-400 hover:text-cyan-400 bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-200"
        aria-haspopup="true"
      >
        <span>// Past Editions</span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? "rotate-180 text-cyan-400" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 origin-top-right rounded-xl bg-slate-950/95 border border-slate-800/80 p-1.5 shadow-2xl backdrop-blur-md z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-1.5 text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest border-b border-slate-900 mb-1">
            Archive Vault
          </div>
          <div className="space-y-0.5">
            {PAST_EDITIONS.map((site) => (
              <a
                key={site.year}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-900 group transition-colors"
              >
                <span>{site.title}</span>
                <span className="text-[10px] text-slate-500 group-hover:text-cyan-400 bg-slate-900 group-hover:bg-slate-800 px-1.5 py-0.5 rounded transition-colors">
                  {site.year} ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
