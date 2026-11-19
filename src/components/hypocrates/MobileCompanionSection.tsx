"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PreTitleBadge, PrimaryGlassButton } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";
import {
  ShieldCheckIcon,
  ClockIcon,
  HeartPulseIcon,
  SparklesIcon,
} from "@/components/ui/ClinicalIcons";

type MobileTabId = "scribe" | "checkin" | "alerts" | "financa";

const MOBILE_TABS: { id: MobileTabId; label: string }[] = [
  { id: "scribe", label: "Pocket SOAP Scribe" },
  { id: "checkin", label: "Check-In & Orari" },
  { id: "alerts", label: "AI Copilot Alerts" },
  { id: "financa", label: "Multi-Currency (€/L)" },
];

const CHECKIN_MODES = [
  { id: "Fizikisht", detail: "Checked in on-site • Clinic Room 2" },
  { id: "Nga Shtëpia", detail: "Remote telemedicine shift active" },
  { id: "Më Vonë", detail: "Afternoon surgical rotation queued" },
] as const;

const MOBILE_HIGHLIGHTS = [
  {
    icon: ShieldCheckIcon,
    title: "Biometric HIPAA Lock",
    desc: "FaceID & zero-retention encryption on every mobile session.",
    tone: "text-[#3b82f6] bg-[#3b82f6]/10",
  },
  {
    icon: ClockIcon,
    title: "42s Pocket Dictation",
    desc: "Speak between rounds and sign formatted SOAP notes instantly.",
    tone: "text-[#10b981] bg-[#10b981]/10",
  },
  {
    icon: HeartPulseIcon,
    title: "Live Orari i Sotëm",
    desc: "Check E. Ahmeti, S. Berisha & room queues right from your hand.",
    tone: "text-[#0ea5e9] bg-[#0ea5e9]/10",
  },
  {
    icon: SparklesIcon,
    title: "Web + Mobile Synced",
    desc: "Real-time bidirectional sync with all 5 live clinic dashboards.",
    tone: "text-[#f59e0b] bg-[#f59e0b]/10",
  },
];

export function MobileCompanionSection() {
  const [activeTab, setActiveTab] = useState<MobileTabId>("scribe");
  const [dictating, setDictating] = useState(true);
  const [workMode, setWorkMode] = useState<string>("Fizikisht");
  const [currency, setCurrency] = useState<"EUR" | "LEK">("EUR");

  return (
    <section
      id="mobile-companion"
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-[1160px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left 5 Columns: Photorealistic iPhone in Hand + Subtle Animated Orbiting Badges */}
          <SpringReveal className="lg:col-span-5">
            <div className="relative rounded-[32px] bg-gradient-to-b from-[#edf1f4] via-[#f4f7f9] to-[#e6edf3] border border-[#dde5ed] pt-8 px-5 pb-0 overflow-hidden shadow-[0_24px_60px_rgba(16,28,48,0.06)]">
              {/* Floating Top-Left Work-Mode Badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#dde5ed] shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                <span className="font-display font-semibold text-[12.5px] text-[#1d1d1d]">
                  {workMode} · Live Sync
                </span>
              </motion.div>

              {/* Floating Top-Right Ambient Waveform Badge */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:inline-flex absolute top-8 right-5 z-20 items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#1d1d1d] text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
              >
                <span className="flex items-end gap-0.5 h-3.5" aria-hidden="true">
                  {[0.55, 1, 0.7, 0.9, 0.45].map((h, i) => (
                    <motion.span
                      key={i}
                      animate={
                        dictating
                          ? { scaleY: [h, 0.35, 1, h] }
                          : { scaleY: 0.35 }
                      }
                      transition={{
                        duration: 1.1 + i * 0.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-0.5 h-3.5 rounded-full bg-[#10b981] origin-bottom"
                    />
                  ))}
                </span>
                <span className="font-display font-semibold text-[12px]">
                  SOAP 42s
                </span>
              </motion.div>

              {/* Main Uploaded/Edited iPhone in Hand Photo */}
              <div className="relative z-10 -mt-3 mx-auto max-w-[380px] group">
                <img
                  src="/images/hypocrates-phone-mockup.jpg"
                  alt="Hypocrates Mobile Clinical Companion App on iPhone"
                  className="w-full h-auto block object-contain rounded-t-[24px] mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Bottom Glass Seal Pill */}
              <div className="relative z-20 -mt-8 mb-5 mx-auto max-w-[330px] rounded-[18px] bg-white/95 backdrop-blur-md border border-[#dde5ed] px-4 py-3 shadow-[0_12px_30px_rgba(16,28,48,0.10)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/images/hypocrates-logo.png"
                    alt="Hypocrates"
                    className="h-8 w-8 object-contain shrink-0"
                  />
                  <div>
                    <div className="font-heading font-semibold text-[14px] text-[#1d1d1d] leading-tight">
                      Hypocrates Mobile
                    </div>
                    <div className="font-display text-[11.5px] text-[#4d585f]">
                      iOS &amp; Android • HIPAA BAA
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#047857] font-display font-semibold text-[11px]">
                  99.1% SOAP
                </span>
              </div>
            </div>
          </SpringReveal>

          {/* Right 7 Columns: Nearby Interactive Controls & Feature Bento Grid */}
          <SpringReveal delay={0.1} className="lg:col-span-7 space-y-6">
            <div>
              <PreTitleBadge text="Pocket Clinical Companion" variant="slate" />
              <h2 className="mt-4 font-heading font-semibold text-[32px] sm:text-[42px] leading-[1.14em] tracking-[-1px] text-[#1d1d1d]">
                Carry Your Entire Clinic Floor in Your Hand
              </h2>
              <p className="mt-3 font-display font-medium text-[16.5px] leading-[1.5em] text-[#4d585f]">
                Built for rounds between exam rooms. Review <strong className="text-[#1d1d1d]">Takime Sot</strong>, record zero-retention ambient voice notes, approve prescriptions, and respond to <strong className="text-[#1d1d1d]">E. Ahmeti</strong> or <strong className="text-[#1d1d1d]">S. Berisha</strong> right from your phone.
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="rounded-[24px] bg-[#edf1f4] border border-[#dde5ed] p-5 sm:p-6 space-y-5">
              <div className="flex flex-wrap gap-2">
                {MOBILE_TABS.map((tab) => {
                  const selected = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-3.5 py-2 rounded-full font-display font-semibold text-[13px] transition-colors cursor-pointer ${
                        selected
                          ? "text-white"
                          : "bg-white text-[#4d585f] border border-[#dde5ed] hover:text-[#1d1d1d]"
                      }`}
                    >
                      {selected && (
                        <motion.span
                          layoutId="mobileCompanionTab"
                          transition={{ type: "spring", stiffness: 360, damping: 30 }}
                          className="absolute inset-0 rounded-full bg-[#1d1d1d]"
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "scribe" && (
                  <motion.div
                    key="tab-scribe"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-3.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="font-display font-semibold text-[12px] uppercase tracking-wider text-[#3b82f6]">
                          Ambient Pocket Dictation
                        </span>
                        <h3 className="font-heading font-semibold text-[18px] text-[#1d1d1d]">
                          Patient: E. Ahmeti • Follow-Up SOAP Draft
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setDictating((prev) => !prev)}
                        className={`px-3.5 py-1.5 rounded-full font-display font-semibold text-[12.5px] cursor-pointer transition-colors ${
                          dictating
                            ? "bg-[#10b981]/15 text-[#047857]"
                            : "bg-[#edf1f4] text-[#4d585f]"
                        }`}
                      >
                        {dictating ? "● Listening (Zero-Retention)" : "Paused — Resume"}
                      </button>
                    </div>
                    <p className="rounded-[12px] bg-[#f8fafc] border border-[#eef2f6] p-3.5 font-display text-[13.5px] text-[#4d585f] leading-[1.5em]">
                      <strong className="text-[#1d1d1d]">Compiled SOAP:</strong>{" "}
                      Post-procedure recovery progressing smoothly; zero localized swelling. Approved ICD-10 code logged &amp; Kujtesat follow-up scheduled in 14 days.
                    </p>
                  </motion.div>
                )}

                {activeTab === "checkin" && (
                  <motion.div
                    key="tab-checkin"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-3.5"
                  >
                    <div className="font-display font-semibold text-[13px] text-[#1d1d1d]">
                      Si po punoni sot? (Live Staff Mode)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {CHECKIN_MODES.map((m) => {
                        const active = workMode === m.id;
                        return (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setWorkMode(m.id)}
                            className={`rounded-[14px] p-3 text-left border transition-all cursor-pointer ${
                              active
                                ? "bg-[#1d1d1d] text-white border-[#1d1d1d]"
                                : "bg-[#f8fafc] text-[#1d1d1d] border-[#dde5ed] hover:bg-[#edf1f4]"
                            }`}
                          >
                            <div className="font-display font-semibold text-[13.5px]">
                              {m.id}
                            </div>
                            <div
                              className={`text-[11.5px] mt-0.5 ${
                                active ? "text-white/75" : "text-[#4d585f]"
                              }`}
                            >
                              {m.detail}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {activeTab === "alerts" && (
                  <motion.div
                    key="tab-alerts"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-2.5"
                  >
                    {[
                      {
                        tag: "SOAP Ready",
                        msg: "Dr. Test 2 • E. Ahmeti consultation summary compiled (42s)",
                        tone: "bg-[#10b981]/15 text-[#047857]",
                      },
                      {
                        tag: "Orari i Sotëm",
                        msg: "S. Berisha checked in at reception — Room 2 ready",
                        tone: "bg-[#3b82f6]/12 text-[#3b82f6]",
                      },
                    ].map((row) => (
                      <div
                        key={row.tag}
                        className="flex items-center justify-between gap-3 rounded-[12px] bg-[#f8fafc] px-3.5 py-2.5 border border-[#eef2f6]"
                      >
                        <span className="font-display font-medium text-[13.5px] text-[#1d1d1d]">
                          {row.msg}
                        </span>
                        <span
                          className={`px-2.5 py-1 rounded-full font-display font-semibold text-[11px] shrink-0 ${row.tone}`}
                        >
                          {row.tag}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "financa" && (
                  <motion.div
                    key="tab-financa"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-[18px] bg-white border border-[#dde5ed] p-5 flex flex-wrap items-center justify-between gap-4"
                  >
                    <div>
                      <div className="font-display text-[12px] text-[#4d585f]">
                        Të Ardhurat Totale (Live Rate €1 = 116.5L)
                      </div>
                      <div className="mt-1 font-heading font-semibold text-[26px] text-[#1d1d1d]">
                        {currency === "EUR" ? "€129.00" : "15,000 LEK"}
                      </div>
                    </div>
                    <div className="inline-flex rounded-full bg-[#edf1f4] p-1 border border-[#dde5ed]">
                      {(["EUR", "LEK"] as const).map((unit) => (
                        <button
                          key={unit}
                          type="button"
                          onClick={() => setCurrency(unit)}
                          className={`px-3.5 py-1.5 rounded-full font-display font-semibold text-[12.5px] cursor-pointer transition-colors ${
                            currency === unit
                              ? "bg-[#1d1d1d] text-white"
                              : "text-[#4d585f]"
                          }`}
                        >
                          {unit}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2x2 Nearby Micro Feature Bento Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MOBILE_HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group rounded-[20px] bg-white border border-[#dde5ed] p-5 flex items-start gap-3.5 shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 hover:border-[#3b82f6]/40 transition-all"
                  >
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.tone}`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-[16px] text-[#1d1d1d]">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-display text-[13px] leading-[1.45em] text-[#4d585f]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <PrimaryGlassButton
                href="/demo"
                label="Explore Live Web & Mobile Demos"
                variant="blue"
              />
            </div>
          </SpringReveal>
        </div>
      </div>
    </section>
  );
}

