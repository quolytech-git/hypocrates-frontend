"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { PreTitleBadge } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";

const tickerItems = [
  "Dental Clinics",
  "Dermatology",
  "Plastic Surgery",
  "ENT Clinics",
  "Nutrition Clinics",
  "Physiotherapy",
  "Eye Centers",
  "Epic Systems",
  "Athenahealth",
  "Apple HealthKit",
  "DICOM PACS",
];

const beforeItems = [
  "Doctors spend up to 40% of their workday typing notes and auditing claims",
  "Separate tools for scheduling, EHR charting, and medical billing",
  "Manual claim validation creates high rejection rates and delayed revenue",
  "No unified visibility across multi-location clinic branches",
];

const afterItems = [
  "AI Ambient Scribe drafts formatted SOAP notes in under 1 minute per patient",
  "Multi-location franchise tenant with isolated branch databases & unified KPIs",
  "AI claims scrubber pre-checks ICD-10 & CPT rules before submission",
  "Orchestrated Clinical, Reception & Finance AI agents work together 24/7",
];

export function ClientsAndBeforeAfter() {
  const [manualMode, setManualMode] = useState<"before" | "after" | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const isTriggerInView = useInView(triggerRef, { amount: 0.25, once: true });
  const mode = manualMode ?? (isTriggerInView ? "after" : "before");

  const handleSelect = (next: "before" | "after") => {
    setManualMode(next);
  };

  return (
    <>
      {/* Clinic & EHR Ticker Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#dde5ed]" />
            <PreTitleBadge
              text="Built for specialized clinics & connected EHR ecosystems"
              variant="slate"
              className="relative z-10"
            />
          </div>

          <div className="relative mt-10 overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0) 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%)",
              }}
            />

            <div className="animate-fx-marquee items-center">
              {[...tickerItems, ...tickerItems].map((label, idx) => (
                <div
                  key={idx}
                  className="mx-3 shrink-0 px-5 py-2.5 rounded-full bg-[#edf1f4] border border-[#dde5ed] font-heading font-semibold text-[15px] text-[#4d585f] whitespace-nowrap"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Comparison Section */}
      <section id="before-after" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <SpringReveal className="text-center">
            <h2 className="font-heading font-semibold text-[34px] md:text-[48px] leading-[1.2em] tracking-[-1px] text-[#1d1d1d] max-w-[600px] mx-auto">
              Smarter clinic operations start with unified AI
            </h2>
          </SpringReveal>

          {/* Tab Header + Rotary Dial */}
          <div className="mt-12 relative flex items-center justify-center">
            <div className="grid grid-cols-3 items-center w-full max-w-[620px]">
              <button
                type="button"
                onClick={() => handleSelect("before")}
                className={`py-4 px-3 text-right md:text-center font-display font-semibold text-[16px] md:text-[18px] transition-colors cursor-pointer rounded-tl-[24px] ${
                  mode === "before"
                    ? "text-[#1d1d1d]"
                    : "text-[#4d585f]/60 hover:text-[#1d1d1d]"
                }`}
              >
                Before Hypocrates
              </button>

              <div className="flex items-center justify-center relative z-20 -mb-6">
                <motion.div
                  onClick={() =>
                    handleSelect(mode === "before" ? "after" : "before")
                  }
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  className="w-[108px] md:w-[126px] cursor-pointer select-none"
                  title="Toggle Before / After Hypocrates"
                >
                  <AnimatePresence mode="wait">
                    {mode === "before" ? (
                      <motion.img
                        key="dial-before"
                        src="/images/dial-before.png"
                        alt="Before Hypocrates Dial"
                        initial={{ opacity: 0.5, rotate: -18 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0.5, rotate: 18 }}
                        transition={{ duration: 0.35 }}
                        className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
                      />
                    ) : (
                      <motion.img
                        key="dial-after"
                        src="/images/dial-after.png"
                        alt="After Hypocrates Dial"
                        initial={{ opacity: 0.5, rotate: -18 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0.5, rotate: 18 }}
                        transition={{ duration: 0.35 }}
                        className="w-full h-auto drop-shadow-[0_12px_28px_rgba(16,185,129,0.28)]"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              <button
                type="button"
                onClick={() => handleSelect("after")}
                className={`py-4 px-3 text-left md:text-center font-display font-semibold text-[16px] md:text-[18px] transition-colors cursor-pointer rounded-tr-[24px] ${
                  mode === "after"
                    ? "text-[#1d1d1d]"
                    : "text-[#4d585f]/60 hover:text-[#1d1d1d]"
                }`}
              >
                After Hypocrates
              </button>
            </div>
          </div>

          {/* Outer Frame */}
          <div
            ref={triggerRef}
            className="rounded-[30px] border border-[#dde5ed] p-2 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.04)]"
          >
            <AnimatePresence mode="wait">
              {mode === "before" ? (
                <motion.div
                  key="before-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-[24px] bg-[#edf1f4] p-7 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  <div className="md:col-span-7">
                    <h3 className="font-heading font-semibold text-[26px] md:text-[32px] leading-[1.2em] text-[#1d1d1d] max-w-[400px]">
                      Challenges of legacy clinic software today
                    </h3>
                    <ul className="mt-7 space-y-4">
                      {beforeItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-display font-medium text-[16px] leading-[1.4em] text-[#4d585f]"
                        >
                          <img
                            src="/images/icon-red-x.svg"
                            alt=""
                            className="w-3 h-3 mt-1.5 shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-5 flex flex-col gap-4">
                    <div className="rounded-[20px] bg-[#ff0d0d]/[0.05] border border-[#ff0d0d]/30 p-6">
                      <h4 className="font-heading font-semibold text-[32px] leading-[1.1em] text-[#1d1d1d]">
                        40%
                      </h4>
                      <p className="mt-2 font-display font-medium text-[16px] text-[#4d585f]">
                        Workday lost to admin &amp; screen time
                      </p>
                    </div>
                    <div className="rounded-[20px] bg-[#ff0d0d]/[0.05] border border-[#ff0d0d]/30 p-6">
                      <h4 className="font-heading font-semibold text-[32px] leading-[1.1em] text-[#1d1d1d]">
                        Manual
                      </h4>
                      <p className="mt-2 font-display font-medium text-[16px] text-[#4d585f]">
                        SOAP charting &amp; claim validation
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="after-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="relative rounded-[24px] overflow-hidden bg-[#0a0f0d] p-7 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  <img
                    src="/images/prefooter-bg.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,0,0,0.94) 20%, rgba(10,25,18,0.75) 100%)",
                    }}
                  />

                  <div className="relative z-10 md:col-span-7">
                    <h3 className="font-heading font-semibold text-[26px] md:text-[32px] leading-[1.2em] text-white max-w-[400px]">
                      AI-powered clinical operations in one environment
                    </h3>
                    <ul className="mt-7 space-y-4">
                      {afterItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-display font-medium text-[16px] leading-[1.4em] text-white/85"
                        >
                          <img
                            src="/images/icon-green-check.svg"
                            alt=""
                            className="w-3.5 h-3.5 mt-1.5 shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 md:col-span-5 flex flex-col gap-4">
                    <div className="rounded-[20px] bg-[#10b981]/[0.1] border border-[#10b981]/30 backdrop-blur-md p-6">
                      <h4 className="font-heading font-semibold text-[32px] leading-[1.1em] text-white">
                        12+ hrs
                      </h4>
                      <p className="mt-2 font-display font-medium text-[16px] text-white/75">
                        Reclaimed weekly per practitioner
                      </p>
                    </div>
                    <div className="rounded-[20px] bg-[#10b981]/[0.1] border border-[#10b981]/30 backdrop-blur-md p-6">
                      <h4 className="font-heading font-semibold text-[32px] leading-[1.1em] text-white">
                        68%
                      </h4>
                      <p className="mt-2 font-display font-medium text-[16px] text-white/75">
                        Faster clinical chart turnaround
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
