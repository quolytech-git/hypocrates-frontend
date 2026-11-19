"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PreTitleBadge } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";
import { HypocratesLogo } from "@/components/HypocratesLogo";

interface HeritageChapter {
  id: string;
  step: string;
  eraTag: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  ancientLabel: string;
  ancientTitle: string;
  ancientPoints: string[];
  ancientQuote: string;
  modernLabel: string;
  modernTitle: string;
  modernPoints: string[];
  modernMetric: string;
  modernMetricLabel: string;
}

const CHAPTERS: HeritageChapter[] = [
  {
    id: "observation",
    step: "01",
    eraTag: "Island of Kos • ~400 BC",
    title: "Bedside Observation Under the Plane Tree",
    subtitle:
      "Hippocrates moved medicine out of superstition into direct human observation — reading pulse, breathing, temperature, and patient history face to face.",
    image: "/images/hippocrates-consultation.jpg",
    imageAlt:
      "Hippocrates examining a patient's wrist pulse beneath the Plane Tree on the island of Kos",
    ancientLabel: "In Hippocrates' Time",
    ancientTitle: "Direct sensory examination without distraction",
    ancientPoints: [
      "Palpated wrist pulse rhythm while studying facial color and respiration.",
      "Asked structured questions about sleep, diet, climate, and symptom onset.",
      "Positioned prognosis before intervention so every patient understood their course.",
    ],
    ancientQuote:
      "“The physician must look closely at every sign the body offers before reaching for a remedy.”",
    modernLabel: "In Hypocrates AI Today",
    modernTitle: "Hands-free Ambient Scribe returns eye contact to care",
    modernPoints: [
      "Clinicians talk naturally with patients while Ambient AI listens silently.",
      "Captures vitals, chief complaint, and HPI directly into structured SOAP sections.",
      "Never puts a keyboard between doctor and patient during examination.",
    ],
    modernMetric: "42 sec",
    modernMetricLabel: "Average structured SOAP generation after consultation",
  },
  {
    id: "compounding",
    step: "02",
    eraTag: "Asklepieion Apothecary • ~400 BC",
    title: "Botanical Compounding & Tailored Remedies",
    subtitle:
      "Rather than one-size-fits-all rituals, the Hippocratic school prepared measured extracts — willow bark, chamomile, and olive oil — adapted to each constitution.",
    image: "/images/hippocrates-compounding.jpg",
    imageAlt:
      "Hippocrates preparing herbal remedies with a stone mortar and pestle, bronze instruments, and oil flasks",
    ancientLabel: "In Hippocrates' Time",
    ancientTitle: "Measured therapeutics & specialized instruments",
    ancientPoints: [
      "Ground white willow bark (salicin, ancestor of aspirin) and soothing chamomile.",
      "Paired bronze probes and scalpels with sterile wine, vinegar, and olive oil dressings.",
      "Matched dosage strength precisely to age, season, and recovery stage.",
    ],
    ancientQuote:
      "“First do no harm — let the remedy fit the patient's strength and specific ailment.”",
    modernLabel: "In Hypocrates AI Today",
    modernTitle: "7 isolated specialty workflows & treatment protocols",
    modernPoints: [
      "Dedicated templates for Dental, Dermatology, ENT, Eye Center, Nutrition, Physio, and Plastic Surgery.",
      "Real-time allergy & contraindication guardrails during treatment planning.",
      "Inventory AI tracks clinical consumables and auto-queues restock orders per branch.",
    ],
    modernMetric: "7 Tenants",
    modernMetricLabel: "Specialty-tuned protocols & AI dosing checklists",
  },
  {
    id: "scrolls",
    step: "03",
    eraTag: "Hippocratic Corpus • Case Books",
    title: "Daily Case Scrolls & Patient Confidentiality",
    subtitle:
      "Writing down daily fever curves and outcomes in the 'Epidemics' created clinical continuity — paired with an eternal vow to guard what is seen or heard.",
    image: "/images/hippocrates-scrolls.jpg",
    imageAlt:
      "Hippocrates seated on a sunlit limestone terrace overlooking the Aegean Sea writing clinical case notes on papyrus scrolls",
    ancientLabel: "In Hippocrates' Time",
    ancientTitle: "The birth of longitudinal patient records & ethics",
    ancientPoints: [
      "Recorded day-by-day chronological clinical notes on unfurled papyrus scrolls.",
      "Shared verified case outcomes so future physicians could learn from real trajectories.",
      "Swore the Hippocratic Oath: whatever is seen or heard in practice remains confidential.",
    ],
    ancientQuote:
      "“What I may see or hear in the course of treatment... I will keep to myself, holding such things shameful to speak about.”",
    modernLabel: "In Hypocrates AI Today",
    modernTitle: "Longitudinal FHIR records + Zero-Retention Privacy",
    modernPoints: [
      "Chronological patient timelines synced bi-directionally via HL7 / FHIR.",
      "Zero-retention voice pipeline deletes raw audio immediately once approved.",
      "AES-256 encryption at rest, TLS 1.3 in transit, HIPAA BAA & GDPR guarantees.",
    ],
    modernMetric: "Zero",
    modernMetricLabel: "Voice recordings retained on disk after SOAP sign-off",
  },
];

const APHORISMS = [
  "400 BC Kos -> 2026 AI: First, do no harm — remove keyboard burnout from the exam room.",
  "Hippocratic Corpus: Observe all symptoms chronologically; modern Clinical AI compiles the timeline in seconds.",
  "The Hippocratic Oath meets Zero-Retention AES-256 architecture for absolute patient trust.",
];

export function HippocratesHeritageSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [eraMode, setEraMode] = useState<"both" | "ancient" | "modern">("both");
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [aphorismIndex, setAphorismIndex] = useState(0);

  useEffect(() => {
    const aphorismTimer = setInterval(() => {
      setAphorismIndex((prev) => (prev + 1) % APHORISMS.length);
    }, 4500);
    return () => clearInterval(aphorismTimer);
  }, []);

  useEffect(() => {
    if (!autoAdvance) return;
    const slideTimer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CHAPTERS.length);
    }, 7500);
    return () => clearInterval(slideTimer);
  }, [autoAdvance]);

  const current = CHAPTERS[activeIndex];

  return (
    <section
      id="heritage"
      className={`${compact ? "py-10 md:py-14" : "py-20 md:py-28"} bg-white overflow-hidden`}
    >
      <div className="max-w-[1160px] mx-auto px-5">
        <div className="rounded-[32px] bg-gradient-to-b from-[#edf1f4] via-[#f4f7f9] to-[#edf1f4] border border-[#dde5ed] p-6 sm:p-9 md:p-12 shadow-[0_24px_60px_rgba(16,28,48,0.05)]">
          {/* Header Row with Larger Bust Seal + Living Aphorism Ticker */}
          <SpringReveal className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#dde5ed]">
            <div className="max-w-[650px]">
              <PreTitleBadge text="The Hippocratic Lineage" variant="white" />
              <h2 className="mt-4 font-heading font-semibold text-[32px] sm:text-[40px] md:text-[46px] leading-[1.12em] tracking-[-1px] text-[#1d1d1d]">
                From Hippocrates on Kos to Intelligent Clinical Care
              </h2>
              <p className="mt-3 font-display font-medium text-[16px] md:text-[17.5px] leading-[1.5em] text-[#4d585f]">
                Around 400 BC, Hippocrates pioneered bedside observation, tailored
                therapeutics, structured case books, and strict patient confidentiality.
                Hypocrates brings those timeless principles to modern clinics with AI.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4 shrink-0">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="flex items-center gap-4 rounded-[22px] bg-white border border-[#dde5ed] px-5 py-3.5 shadow-[0_10px_28px_rgba(0,0,0,0.05)]"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="shrink-0"
                >
                  <HypocratesLogo size="lg" showWordmark={false} />
                </motion.div>
                <div>
                  <div className="font-display font-semibold text-[12px] uppercase tracking-[0.06em] text-[#3b82f6]">
                    Clinical Seal
                  </div>
                  <div className="font-heading font-semibold text-[18px] text-[#1d1d1d]">
                    Kos ~400 BC → 2026
                  </div>
                  <div className="font-display text-[12.5px] text-[#4d585f]">
                    2,400 years of clinical rigor
                  </div>
                </div>
              </motion.div>
            </div>
          </SpringReveal>

          {/* Animated Aphorism Ticker + Chapter Selector */}
          <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Chapter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CHAPTERS.map((ch, idx) => {
                const active = idx === activeIndex;
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => {
                      setAutoAdvance(false);
                      setActiveIndex(idx);
                    }}
                    className={`relative px-4 py-2.5 rounded-full font-display font-semibold text-[13.5px] transition-colors cursor-pointer flex items-center gap-2 ${
                      active
                        ? "text-white"
                        : "bg-white text-[#4d585f] border border-[#dde5ed] hover:text-[#1d1d1d]"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="heritageChapterPill"
                        transition={{ type: "spring", stiffness: 360, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-[#1d1d1d]"
                      />
                    )}
                    <span className="relative z-10 text-[12px] opacity-75">
                      {ch.step}
                    </span>
                    <span className="relative z-10">
                      {ch.id === "observation"
                        ? "Bedside Exam"
                        : ch.id === "compounding"
                        ? "Compounding"
                        : "Case Scrolls & Oath"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Era Comparison Mode Toggle */}
            <div className="inline-flex self-start items-center rounded-full bg-white p-1 border border-[#dde5ed] shadow-sm">
              {(
                [
                  { id: "both", label: "Side-by-Side" },
                  { id: "ancient", label: "400 BC Only" },
                  { id: "modern", label: "2026 AI Only" },
                ] as const
              ).map((tab) => {
                const selected = eraMode === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setEraMode(tab.id)}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-full font-display font-semibold text-[11.5px] sm:text-[12.5px] whitespace-nowrap transition-all cursor-pointer ${
                      selected
                        ? "bg-[#3b82f6] text-white shadow-sm"
                        : "text-[#4d585f] hover:text-[#1d1d1d]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Animated Maxims Strip */}
          <div className="mt-4 rounded-2xl bg-white/85 border border-[#dde5ed] px-4 py-3 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]" />
            </span>
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.p
                  key={aphorismIndex}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="font-display font-medium text-[12.5px] sm:text-[13.5px] leading-snug text-[#3a424b]"
                >
                  {APHORISMS[aphorismIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <button
              type="button"
              onClick={() => setAutoAdvance((prev) => !prev)}
              className="text-[11.5px] font-display font-semibold text-[#3b82f6] hover:underline shrink-0 cursor-pointer whitespace-nowrap"
            >
              {autoAdvance ? "Pause tour" : "Resume tour"}
            </button>
          </div>

          {/* Interactive Main Stage */}
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
            {/* Left: Animated Historical Illustration Card */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative flex-1 min-h-[340px] sm:min-h-[400px] rounded-[24px] overflow-hidden bg-white border border-[#dde5ed] shadow-[0_14px_34px_rgba(0,0,0,0.06)] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={current.image}
                      alt={current.imageAlt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-52 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(12,18,28,0.92) 0%, rgba(12,18,28,0.62) 55%, rgba(12,18,28,0) 100%)",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Top Floating Badge with Bust Icon */}
                <div className="relative z-10 p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#dde5ed] text-[#1d1d1d] font-display font-semibold text-[11px] sm:text-[12.5px] whitespace-nowrap shadow-sm">
                    <img
                      src="/images/hypocrates-logo.png"
                      alt=""
                      className="h-4 w-4 sm:h-5 sm:w-5 object-contain shrink-0"
                    />
                    <span>{current.eraTag}</span>
                  </span>

                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#1d1d1d]/90 backdrop-blur-md text-white font-display font-semibold text-[11px] sm:text-[12px] whitespace-nowrap shrink-0">
                    <span className="hidden sm:inline">Chapter </span>
                    {current.step} / 03
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="relative z-10 mt-auto h-[calc(100%-64px)] flex flex-col justify-end p-5 text-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`caption-${current.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3 className="font-heading font-semibold text-[22px] sm:text-[24px] leading-[1.2em]">
                        {current.title}
                      </h3>
                      <p className="mt-1.5 font-display text-[13.5px] text-white/85 leading-[1.45em]">
                        {current.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Thumbnail Strip with Micro Hover */}
              <div className="mt-3 grid grid-cols-3 gap-3">
                {CHAPTERS.map((ch, idx) => {
                  const selected = idx === activeIndex;
                  return (
                    <button
                      key={`thumb-${ch.id}`}
                      type="button"
                      onClick={() => {
                        setAutoAdvance(false);
                        setActiveIndex(idx);
                      }}
                      className={`relative rounded-[14px] overflow-hidden border-2 transition-all cursor-pointer h-[68px] ${
                        selected
                          ? "border-[#3b82f6] shadow-[0_6px_16px_rgba(59,130,246,0.2)] scale-[1.01]"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={ch.image}
                        alt={ch.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Interactive Ancient <-> Modern Clinical Cards */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${current.id}-${eraMode}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-4 h-full"
                >
                  {(eraMode === "both" || eraMode === "ancient") && (
                    <div className="rounded-[22px] bg-[#fffdf8] border border-[#e6decb] p-6 shadow-[0_8px_22px_rgba(0,0,0,0.03)]">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4ebd8] text-[#6d5222] font-display font-semibold text-[12px]">
                          <img
                            src="/images/hypocrates-logo.png"
                            alt=""
                            className="h-4 w-4 object-contain"
                          />
                          {current.ancientLabel}
                        </span>
                        <span className="font-display text-[12px] font-medium text-[#7b6b4a]">
                          400 BC Foundation
                        </span>
                      </div>
                      <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
                        {current.ancientTitle}
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {current.ancientPoints.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2.5 font-display text-[14px] text-[#4d585f] leading-[1.5em]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#b78c3a] mt-2 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                      <blockquote className="mt-4 pt-3 border-t border-[#efe7d6] font-display italic text-[13.5px] text-[#5e523a]">
                        {current.ancientQuote}
                      </blockquote>
                    </div>
                  )}

                  {(eraMode === "both" || eraMode === "modern") && (
                    <div className="rounded-[22px] bg-[#1d1d1d] text-white p-6 shadow-[0_14px_34px_rgba(16,28,48,0.16)] flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/20 text-[#8ec0ff] font-display font-semibold text-[12px]">
                            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                            {current.modernLabel}
                          </span>
                          <span className="font-heading font-bold text-[15px] text-[#10b981]">
                            {current.modernMetric}
                          </span>
                        </div>
                        <h4 className="font-heading font-semibold text-[20px] text-white">
                          {current.modernTitle}
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {current.modernPoints.map((pt) => (
                            <li
                              key={pt}
                              className="flex items-start gap-2.5 font-display text-[14px] text-white/80 leading-[1.5em]"
                            >
                              <span className="w-4 h-4 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center text-[11px] font-bold mt-0.5 shrink-0">
                                ✓
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                        <span className="font-display text-[12.5px] text-white/65">
                          {current.modernMetricLabel}
                        </span>
                        <Link
                          href="/demo"
                          className="inline-flex items-center gap-1.5 font-display font-semibold text-[13.5px] text-[#8ec0ff] hover:text-white transition-colors"
                        >
                          See live specialty workflows →
                        </Link>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

