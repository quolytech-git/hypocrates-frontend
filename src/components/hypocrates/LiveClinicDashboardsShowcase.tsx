"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LIVE_CLINIC_DASHBOARDS,
  LiveClinicDashboard,
} from "@/lib/hypocrates-data";
import { PreTitleBadge } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";

export function LiveClinicDashboardsShowcase() {
  const [activeId, setActiveId] = useState<LiveClinicDashboard["id"]>(
    LIVE_CLINIC_DASHBOARDS[0].id
  );

  const active =
    LIVE_CLINIC_DASHBOARDS.find((d) => d.id === activeId) ??
    LIVE_CLINIC_DASHBOARDS[0];

  return (
    <section
      id="live-dashboards"
      className="py-16 md:py-24 bg-[#f8fafc] border-y border-[#dde5ed]/80 overflow-hidden"
    >
      <div className="max-w-[1160px] mx-auto px-5">
        <SpringReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[660px]">
            <PreTitleBadge text="Live Deployed Portals" variant="white" />
            <h2 className="mt-5 font-heading font-semibold text-[32px] sm:text-[42px] md:text-[48px] leading-[1.14em] tracking-[-1px] text-[#1d1d1d]">
              Real Clinic Dashboards Running Live Today
            </h2>
            <p className="mt-3.5 font-display font-medium text-[16.5px] md:text-[18px] leading-[1.45em] text-[#4d585f]">
              Test our five live production clinic portals — pre-configured for{" "}
              <strong className="text-[#1d1d1d]">Physiotherapy</strong>,{" "}
              <strong className="text-[#1d1d1d]">Hair Transplant</strong>,{" "}
              <strong className="text-[#1d1d1d]">Gynecology</strong>,{" "}
              <strong className="text-[#1d1d1d]">Dermatology</strong>, and{" "}
              <strong className="text-[#1d1d1d]">Dental</strong> practices with
              instant role switching.
            </p>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#dde5ed] shadow-sm self-start lg:self-end">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
            <span className="font-display font-semibold text-[13px] text-[#1d1d1d]">
              5 Production Demo Environments Online
            </span>
          </div>
        </SpringReveal>

        {/* Specialty Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {LIVE_CLINIC_DASHBOARDS.map((item) => {
            const selected = item.id === active.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`relative px-4 py-2.5 rounded-full font-display font-semibold text-[14px] transition-colors cursor-pointer flex items-center gap-2 ${
                  selected
                    ? "text-white"
                    : "bg-white text-[#4d585f] border border-[#dde5ed] hover:text-[#1d1d1d]"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="liveDashboardTabPill"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#1d1d1d]"
                  />
                )}
                <span className="relative z-10 w-2 h-2 rounded-full bg-[#10b981]" />
                <span className="relative z-10">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Browser Frame Spotlight */}
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Real Screenshot inside Browser Chrome */}
          <div className="lg:col-span-8 rounded-[26px] bg-white border border-[#dde5ed] shadow-[0_24px_60px_rgba(16,28,48,0.08)] overflow-hidden flex flex-col">
            {/* Browser Top Bar */}
            <div className="px-4 py-3 bg-[#edf1f4] border-b border-[#dde5ed] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>

              <a
                href={active.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-[440px] mx-auto px-3.5 py-1.5 rounded-full bg-white border border-[#dde5ed] text-center font-display text-[12.5px] font-medium text-[#4d585f] hover:text-[#3b82f6] hover:border-[#3b82f6]/50 transition-colors truncate"
              >
                {active.displayUrl} ↗
              </a>

              <a
                href={active.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-display font-semibold text-[12px] transition-colors shrink-0"
              >
                <span>Open Live App</span>
                <span>↗</span>
              </a>
            </div>

            {/* Screenshot Image */}
            <div className="relative flex-1 bg-[#0e1116] overflow-hidden group aspect-[16/10] sm:aspect-auto sm:min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.a
                  key={active.id}
                  href={active.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 1.015 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="block w-full h-full"
                  aria-label={`Open ${active.title} live demo`}
                >
                  <img
                    src={active.screenshot}
                    alt={`${active.title} real production screenshot`}
                    className="w-full h-full object-contain sm:object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </motion.a>
              </AnimatePresence>

              {/* Desktop Overlay Badge (hidden on mobile so small screens aren't covered) */}
              <div className="hidden sm:flex pointer-events-none absolute inset-x-4 bottom-4 flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d1d1d]/90 backdrop-blur-md text-white border border-white/15 font-display text-[12px] font-medium shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  {active.entryHint}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/95 text-[#1d1d1d] font-display font-semibold text-[11.5px] shadow-md">
                  {active.themeNote}
                </span>
              </div>
            </div>

            {/* Clean Mobile Status Strip */}
            <div className="sm:hidden px-4 py-3 bg-[#14171c] text-white flex flex-col gap-1 border-t border-white/10">
              <div className="inline-flex items-center gap-2 font-display text-[12px] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shrink-0" />
                <span>{active.entryHint}</span>
              </div>
              <div className="font-display text-[11px] text-white/70">
                {active.themeNote}
              </div>
            </div>
          </div>

          {/* Right: Live Details, Treatments & Launch CTA */}
          <div className="lg:col-span-4 rounded-[26px] bg-white border border-[#dde5ed] p-6 sm:p-7 shadow-[0_12px_36px_rgba(16,28,48,0.04)] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={`info-${active.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf1f4] text-[#3b82f6] font-display font-semibold text-[12px]">
                    <img
                      src="/images/hypocrates-logo.png"
                      alt=""
                      className="h-4 w-4 object-contain"
                    />
                    {active.portalMode}
                  </span>
                  <span className="font-display font-semibold text-[12px] text-[#10b981]">
                    ● Live
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-[24px] text-[#1d1d1d]">
                    {active.title}
                  </h3>
                  <p className="mt-1.5 font-display text-[13.5px] text-[#4d585f] leading-[1.45em]">
                    {active.entryHint}
                  </p>
                </div>

                <div>
                  <div className="font-display font-semibold text-[11.5px] uppercase tracking-wider text-[#4d585f] mb-2">
                    Specialty Treatments Configured
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {active.treatments.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-[#edf1f4] border border-[#dde5ed] font-display font-medium text-[12.5px] text-[#1d1d1d]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-display font-semibold text-[11.5px] uppercase tracking-wider text-[#4d585f] mb-2">
                    Included Dashboard Modules ({active.sidebarModules.length})
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {active.sidebarModules.slice(0, 9).map((mod) => (
                      <span
                        key={mod}
                        className="px-2.5 py-1 rounded-lg bg-[#f8fafc] border border-[#eef2f6] font-display text-[12px] text-[#4d585f]"
                      >
                        {mod}
                      </span>
                    ))}
                    {active.sidebarModules.length > 9 && (
                      <span className="px-2.5 py-1 rounded-lg bg-[#f8fafc] font-display text-[12px] text-[#3b82f6] font-semibold">
                        +{active.sidebarModules.length - 9} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 pt-5 border-t border-[#edf1f4] flex flex-col gap-2.5">
              <a
                href={active.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#5290f4] via-[#3b82f6] to-[#406ae4] text-white font-display font-semibold text-[15px] py-3.5 px-5 shadow-[0_10px_24px_rgba(59,130,246,0.28)] hover:brightness-105 transition-all"
              >
                <span>Launch {active.shortTitle} Demo</span>
                <span>↗</span>
              </a>
              <Link
                href={`/solutions/${active.id}`}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-[#edf1f4] hover:bg-[#1d1d1d] hover:text-white text-[#1d1d1d] font-display font-semibold text-[14px] py-3 px-5 transition-colors"
              >
                <span>Explore {active.shortTitle} Architecture</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* All 5 Live Dashboard Quick-Launch Strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {LIVE_CLINIC_DASHBOARDS.map((item, idx) => {
            const isSelected = item.id === active.id;
            return (
              <div
                key={`card-${item.id}`}
                className={`rounded-[20px] bg-white border transition-all overflow-hidden flex flex-col ${
                  isSelected
                    ? "border-[#3b82f6] shadow-[0_12px_30px_rgba(59,130,246,0.14)]"
                    : "border-[#dde5ed] hover:border-[#3b82f6]/50 hover:-translate-y-0.5"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="text-left cursor-pointer group"
                >
                  <div className="relative aspect-[16/10] bg-[#0e1116] overflow-hidden">
                    <img
                      src={item.screenshot}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3.5 pb-2">
                    <span className="inline-block mb-1.5 px-2 py-0.5 rounded-full bg-[#edf1f4] text-[#3b82f6] font-display font-semibold text-[10.5px]">
                      0{idx + 1} · {item.shortTitle}
                    </span>
                    <div className="font-heading font-semibold text-[15px] text-[#1d1d1d]">
                      {item.title}
                    </div>
                    <div className="mt-0.5 font-display text-[11.5px] text-[#4d585f] truncate">
                      {item.displayUrl}
                    </div>
                  </div>
                </button>
                <div className="mt-auto px-3.5 pb-3.5 pt-1 flex items-center justify-between gap-2">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-display font-semibold text-[12.5px] text-[#3b82f6] hover:underline"
                  >
                    <span>Open Live</span>
                    <span>↗</span>
                  </a>
                  <Link
                    href={`/solutions/${item.id}`}
                    className="font-display font-medium text-[12px] text-[#4d585f] hover:text-[#1d1d1d]"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

