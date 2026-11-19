"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_PHASES = [
  { at: 0, text: "Awakening Kos Clinical Lineage..." },
  { at: 32, text: "Syncing Specialty Tenant Workspaces..." },
  { at: 68, text: "Verifying Zero-Retention HIPAA Vault..." },
  { at: 92, text: "Clinical Command Center Ready" },
];

export function HypocratesSplashLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1850;
    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const raw = Math.min(elapsed / duration, 1);
      // Ease-out cubic curve so progress accelerates smoothly and finishes crisply
      const eased = 1 - Math.pow(1 - raw, 3);
      const pct = Math.round(eased * 100);
      setProgress(pct);

      if (raw < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = requestAnimationFrame(() => {
          setTimeout(() => {
            window.dispatchEvent(new Event("hypocrates:ready"));
            setVisible(false);
          }, 180);
        });
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleSkip = () => {
    window.dispatchEvent(new Event("hypocrates:ready"));
    setVisible(false);
  };

  const currentPhase =
    [...BOOT_PHASES].reverse().find((p) => progress >= p.at)?.text ??
    BOOT_PHASES[0].text;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="hypocrates-splash"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-[#f8fafc] via-[#edf1f4] to-[#e4ecf4] text-[#1d1d1d] overflow-hidden select-none"
          aria-live="polite"
          aria-label="Loading Hypocrates Clinical Platform"
        >
          {/* Ambient Blue & Emerald Clinical Glows */}
          <motion.div
            aria-hidden="true"
            animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#3b82f6]/15 blur-[90px]"
          />
          <motion.div
            aria-hidden="true"
            animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#10b981]/15 blur-[90px]"
          />

          {/* Skip Intro Pill */}
          <button
            type="button"
            onClick={handleSkip}
            className="absolute top-6 right-6 z-20 px-4 py-1.5 rounded-full bg-white/85 hover:bg-[#1d1d1d] hover:text-white border border-[#dde5ed] font-display font-semibold text-[12.5px] text-[#4d585f] shadow-sm transition-colors cursor-pointer"
          >
            Skip Intro ✕
          </button>

          {/* Center Orbital Emblem */}
          <div className="relative flex flex-col items-center justify-center px-6">
            <div className="relative w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] flex items-center justify-center">
              {/* Outer Orbiting Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-[#3b82f6]/30"
              >
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#3b82f6] shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
              </motion.div>

              {/* Counter-Rotating Mid Clinical Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-[#dde5ed]"
              >
                <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#1d1d1d]" />
              </motion.div>

              {/* Concentric Breathing Halo */}
              <motion.div
                animate={{ scale: [0.94, 1.08, 0.94], opacity: [0.6, 0.2, 0.6] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30"
              />

              {/* Central White Glass Medallion + Big Hypocrates Bust Logo */}
              <motion.div
                initial={{ scale: 0.72, opacity: 0, rotate: -6 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="relative z-10 w-[134px] h-[134px] sm:w-[148px] sm:h-[148px] rounded-full bg-white border-4 border-[#1d1d1d] shadow-[0_24px_60px_rgba(16,28,48,0.18)] flex items-center justify-center p-4 overflow-hidden"
              >
                <motion.img
                  src="/images/hypocrates-logo.png"
                  alt="Hypocrates Logo"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full object-contain relative z-10"
                />

                {/* Subtle shimmer scan across emblem */}
                <motion.div
                  aria-hidden="true"
                  animate={{ x: ["-130%", "140%"] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatDelay: 0.6,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-[#3b82f6]/15 to-transparent skew-x-[-18deg]"
                />
              </motion.div>
            </div>

            {/* Animated Brand Title */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.14em", y: 10 }}
              animate={{ opacity: 1, letterSpacing: "-0.03em", y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="mt-5 font-heading font-bold text-[36px] sm:text-[44px] leading-none text-[#1d1d1d]"
            >
              Hypocrates
            </motion.div>

            {/* Live ECG Pulse SVG Trace */}
            <div className="mt-4 w-[240px] sm:w-[280px] h-[34px] flex items-center justify-center">
              <svg viewBox="0 0 280 36" className="w-full h-full" fill="none">
                <path
                  d="M4 18 H88 L98 18 L106 7 L116 30 L126 3 L135 26 L142 18 H276"
                  stroke="#dde5ed"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <motion.path
                  d="M4 18 H88 L98 18 L106 7 L116 30 L126 3 L135 26 L142 18 H276"
                  stroke="url(#ecgGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0.4 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <defs>
                  <linearGradient id="ecgGrad" x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="60%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Progress Track + Telemetry Status */}
            <div className="mt-3 w-[280px] sm:w-[340px] space-y-2.5">
              <div className="h-2 rounded-full bg-white border border-[#dde5ed] overflow-hidden p-[1px] shadow-inner">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#10b981] transition-[width] duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between gap-2 font-display text-[12.5px]">
                <span className="inline-flex items-center gap-1.5 font-medium text-[#4d585f] truncate">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shrink-0" />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentPhase}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {currentPhase}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="font-heading font-bold text-[#1d1d1d] tabular-nums shrink-0">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Subtle Antiquity -> AI Footer Tag */}
            <div className="mt-6 px-4 py-1.5 rounded-full bg-white/80 border border-[#dde5ed] font-display font-medium text-[11.5px] text-[#4d585f] shadow-sm">
              Kos ~400 BC Clinical Wisdom × 2026 Ambient AI
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

