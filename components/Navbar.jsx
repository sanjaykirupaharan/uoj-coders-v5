"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "border-slate-900/80 bg-[#030712]/70 backdrop-blur-md py-5"
          : "border-transparent bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Owl Mascot Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="font-cust font-bold tracking-tight text-2xl bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            UOJ CODERS v5.0
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm lg:text-md font-medium text-slate-300">
          {["About", "Timeline", "Guidelines", "Sponsors", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-blue-300 transition-colors relative py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ),
          )}

          {/* <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfxCO5w4OF_ZGoBmcX1dgnbgYRBxrf-IpopGY6qbtUni5OTfQ/viewform?usp=header" target="_blank">
          <button className="px-4 py-2 text-xs font-varino rounded-lg border border-blue-400/30 bg-blue-400/5 text-blue-300 hover:bg-blue-400/10 transition-all">
            REGISTER_NOW
          </button>
          </Link> */}
        </div>

        {/* Mobile Burger CTA */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-slate-100 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#030712]/95 border-b border-slate-900 backdrop-blur-lg px-4 py-6 flex flex-col gap-4 text-center text-lg font-medium"
          >
            {["About", "Timeline", "Guidelines", "Sponsors", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="py-2 text-slate-300 hover:text-blue-300 transition-colors"
                >
                  {item}
                </button>
              ),
            )}
            {/* <button onClick={() => scrollToSection("contact")} className="mt-2 w-full py-3 rounded-lg bg-gradient-to-r from-violet-400 to-indigo-500 text-sm font-bold text-slate-950">
              Register Now
            </button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
