"use client";

import React from "react";
import { motion } from "framer-motion";
import { PreTitleBadge, PrimaryGlassButton } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";

const arcIntegrations = [
  { label: "Epic", tone: "bg-[#3b82f6]", pos: "left-[5%] bottom-[32%]" },
  { label: "Cerner", tone: "bg-[#10b981]", pos: "left-[14%] bottom-[52%]" },
  { label: "Athena", tone: "bg-[#6366f1]", pos: "left-[24%] bottom-[70%]" },
  { label: "DICOM", tone: "bg-[#0ea5e9]", pos: "left-[36%] bottom-[83%]" },
  { label: "HealthKit", tone: "bg-[#ef4444]", pos: "right-[36%] bottom-[83%]" },
  { label: "LabCorp", tone: "bg-[#f59e0b]", pos: "right-[24%] bottom-[70%]" },
  { label: "Availity", tone: "bg-[#10b981]", pos: "right-[14%] bottom-[52%]" },
  { label: "Stripe", tone: "bg-[#635bff]", pos: "right-[5%] bottom-[32%]" },
];

export function IntegrationsAndStats() {
  return (
    <>
      {/* Integrations Arc Section */}
      <section id="integrations" className="py-12 md:py-20 bg-white">
        <div className="max-w-[1160px] mx-auto px-5">
          <div className="relative rounded-[32px] bg-[#edf1f4] overflow-hidden pt-16 md:pt-20">
            <SpringReveal className="relative z-20 max-w-[620px] mx-auto px-6 text-center">
              <PreTitleBadge text="Connected clinic integrations" variant="white" />
              <h2 className="mt-5 font-heading font-semibold text-[34px] md:text-[48px] leading-[1.18em] tracking-[-1px] text-[#1d1d1d]">
                Connect with your EHR, PACS &amp; health devices
              </h2>
              <p className="mt-4 font-display font-medium text-[17px] md:text-[18px] leading-[1.4em] text-[#4d585f]">
                Bi-directional writebacks across Epic, Cerner, Athenahealth,
                DICOM imaging, Apple HealthKit, and insurance clearinghouses.
              </p>
              <div className="mt-7">
                <PrimaryGlassButton
                  href="/integrations"
                  label="Explore all integrations"
                  variant="blue"
                />
              </div>
            </SpringReveal>

            {/* Radial Arc Stage + Rolling Green Hills */}
            <div className="relative mt-8 md:mt-10 h-[340px] md:h-[430px] flex flex-col items-center justify-center">
              {/* Desktop Arc Badges */}
              <div className="hidden md:block absolute inset-0 z-20 pointer-events-none">
                {arcIntegrations.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    animate={{ y: [0, idx % 2 === 0 ? -7 : 7, 0] }}
                    transition={{
                      duration: 4 + (idx % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${item.pos} px-4 h-[52px] rounded-full bg-white border border-[#dde5ed] shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center justify-center gap-2 font-heading font-semibold text-[14px] text-[#1d1d1d]`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${item.tone}`} />
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Grid Fallback */}
              <div className="md:hidden grid grid-cols-4 gap-2 px-6 mb-6 z-10">
                {arcIntegrations.map((item) => (
                  <div
                    key={item.label}
                    className="px-2 py-2 rounded-full bg-white shadow-sm flex items-center justify-center font-display font-semibold text-[11px] text-[#1d1d1d]"
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Central Hypocrates Emblem */}
              <div className="relative z-20 flex flex-col items-center -mt-4 md:mt-4">
                <div className="relative flex items-center justify-center">
                  <motion.span
                    aria-hidden="true"
                    animate={{ scale: [1, 1.16, 1], opacity: [0.45, 0.12, 0.45] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full border-2 border-[#3b82f6]/50"
                  />
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -3 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[132px] h-[132px] md:w-[152px] md:h-[152px] rounded-full bg-white shadow-[0_24px_50px_rgba(0,0,0,0.22)] border-4 border-[#1d1d1d] flex items-center justify-center p-4"
                  >
                    <img
                      src="/images/hypocrates-logo.png"
                      alt="Hypocrates Core"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>
                <h3 className="mt-5 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-[#dde5ed] shadow-[0_10px_28px_rgba(0,0,0,0.12)] font-heading font-semibold text-[18px] md:text-[22px] leading-[1.2em] text-[#1d1d1d] text-center mx-4">
                  HL7 / FHIR, DICOM PACS &amp; wearable APIs
                </h3>
              </div>

              {/* Rolling Green Hills at Bottom */}
              <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none select-none">
                <img
                  src="/images/integrations-hills.png"
                  alt=""
                  className="w-full h-[150px] md:h-[210px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats Scattered Bento Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1160px] mx-auto px-5">
          {/* Top Flanking Cards + Center Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Top-Left Card */}
            <SpringReveal delay={0.05} className="lg:col-span-3">
              <div className="rounded-[26px] bg-[#edf1f4] p-7 min-h-[240px] flex flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display font-medium text-[17px] text-[#1d1d1d]">
                    Hours saved
                    <br />
                    weekly
                  </span>
                  <span className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center shrink-0">
                    <img src="/images/stat-1.svg" alt="" className="w-5 h-5" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-[38px] leading-[1.1em] tracking-[-1px] text-[#1d1d1d]">
                    12+ hrs
                  </h3>
                  <p className="mt-2 font-display font-medium text-[15px] leading-[1.4em] text-[#4d585f]">
                    Reclaimed every single week per practitioner.
                  </p>
                </div>
              </div>
            </SpringReveal>

            {/* Center Header */}
            <SpringReveal className="lg:col-span-6 text-center px-2 py-4">
              <PreTitleBadge text="Clinical impact" variant="slate" />
              <h2 className="mt-5 font-heading font-semibold text-[34px] md:text-[48px] leading-[1.15em] tracking-[-1px] text-[#1d1d1d]">
                Returning clinical hours back to patient care
              </h2>
              <p className="mt-4 font-display font-medium text-[17px] md:text-[18px] leading-[1.4em] text-[#4d585f] max-w-[480px] mx-auto">
                Ambient AI scribes, intelligent scheduling, and isolated clinic
                architecture working together in real time.
              </p>
            </SpringReveal>

            {/* Top-Right Card */}
            <SpringReveal delay={0.1} className="lg:col-span-3">
              <div className="rounded-[26px] bg-gradient-to-br from-[#323232] to-[#000000] p-7 min-h-[240px] flex flex-col justify-between text-white">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display font-medium text-[17px] text-white/90">
                    Charting
                    <br />
                    turnaround
                  </span>
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                    <img src="/images/stat-2.svg" alt="" className="w-5 h-5" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-[38px] leading-[1.1em] tracking-[-1px] text-white">
                    68%
                  </h3>
                  <p className="mt-2 font-display font-medium text-[15px] leading-[1.4em] text-white/75">
                    Reduction in clinical chart turnaround time.
                  </p>
                </div>
              </div>
            </SpringReveal>
          </div>

          {/* Bottom 3 Staggered Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Bottom-Left Dark Card */}
            <SpringReveal delay={0.12}>
              <div className="rounded-[26px] bg-gradient-to-br from-[#323232] to-[#000000] p-7 min-h-[250px] flex flex-col justify-between text-white">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display font-medium text-[17px] text-white/90">
                    Admin burden
                    <br />
                    addressed
                  </span>
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                    <img src="/images/stat-5.svg" alt="" className="w-4 h-5" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-[40px] leading-[1.1em] tracking-[-1px] text-white">
                    40%
                  </h3>
                  <p className="mt-2 font-display font-medium text-[15px] leading-[1.4em] text-white/75">
                    Of the physician workday currently lost to screens &amp; typing.
                  </p>
                </div>
              </div>
            </SpringReveal>

            {/* Bottom-Center Blue Card */}
            <SpringReveal delay={0.18} className="md:mt-14">
              <div className="rounded-[26px] bg-gradient-to-r from-[#406ae4] to-[#3b82f6] p-7 min-h-[250px] flex flex-col justify-between text-white shadow-[0_20px_50px_rgba(59,130,246,0.28)]">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display font-medium text-[17px] text-white/95">
                    Specialty
                    <br />
                    tenants
                  </span>
                  <span className="w-10 h-10 rounded-full bg-[#1d1d1d] flex items-center justify-center shrink-0">
                    <img src="/images/stat-4.svg" alt="" className="w-5 h-5" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-[40px] leading-[1.1em] tracking-[-1px] text-white">
                    7 Clinics
                  </h3>
                  <p className="mt-2 font-display font-medium text-[15px] leading-[1.4em] text-white/85">
                    Dental, Derm, Plastic Surgery, ENT, Nutrition, Physio &amp; Eye.
                  </p>
                </div>
              </div>
            </SpringReveal>

            {/* Bottom-Right Slate Card */}
            <SpringReveal delay={0.22}>
              <div className="rounded-[26px] bg-[#edf1f4] p-7 min-h-[250px] flex flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display font-medium text-[17px] text-[#1d1d1d]">
                    Platform
                    <br />
                    uptime SLA
                  </span>
                  <span className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center shrink-0">
                    <img src="/images/stat-3.svg" alt="" className="w-4 h-5" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-[40px] leading-[1.1em] tracking-[-1px] text-[#1d1d1d]">
                    99.9%
                  </h3>
                  <p className="mt-2 font-display font-medium text-[15px] leading-[1.4em] text-[#4d585f]">
                    Operational uptime with RPO ≤ 24h &amp; RTO ≤ 4h continuity.
                  </p>
                </div>
              </div>
            </SpringReveal>
          </div>
        </div>
      </section>
    </>
  );
}
