"use client";
import { useState } from "react";

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

export function MobileHistoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-slate-900/60 pb-2">
      {/* Accordion Trigger Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex justify-center items-center w-full py-3 text-md font-mono font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="px-2">// Past Editions</span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan-400" : "text-slate-500"}`}
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

      {/* Accordion Content Panel (Expands Inline) */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-1"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden space-y-1 bg-slate-950/40 rounded-xl px-2">
          {PAST_EDITIONS.map((site) => (
            <a
              key={site.year}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full py-3 px-2 text-sm font-mono text-slate-400 active:bg-slate-900/50 hover:text-white rounded-lg transition-colors"
            >
              <span>{site.title}</span>
              <span className="text-[10px] text-cyan-400/80 bg-slate-900 border border-slate-800/80 px-2 py-0.5 rounded">
                {site.year} ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
