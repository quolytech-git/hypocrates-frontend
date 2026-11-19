"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HypocratesLogo } from "@/components/HypocratesLogo";
import { LIVE_CLINIC_DASHBOARDS } from "@/lib/hypocrates-data";

interface DashboardSnapshot {
  label: string;
  activeBranch: string;
  hoursSaved: string;
  soapTurnaround: string;
  claimAccuracy: string;
  patientQueue: {
    time: string;
    patient: string;
    procedure: string;
    agentStatus: string;
    statusTone: "emerald" | "blue" | "amber";
  }[];
  aiFeed: string[];
}

const SNAPSHOTS: Record<string, DashboardSnapshot> = {
  dental: {
    label: "Dental Clinics",
    activeBranch: "Tirana Flagship • Branch A",
    hoursSaved: "14.2 hrs/wk",
    soapTurnaround: "42 sec",
    claimAccuracy: "99.1%",
    patientQueue: [
      {
        time: "09:00 AM",
        patient: "Emily Doe",
        procedure: "Tooth #2 Cavity Restoration",
        agentStatus: "Clinical AI SOAP Ready",
        statusTone: "emerald",
      },
      {
        time: "10:15 AM",
        patient: "John Doe",
        procedure: "Prophylaxis & Fluoride",
        agentStatus: "DeltaDental 75% Pre-Checked",
        statusTone: "blue",
      },
      {
        time: "11:30 AM",
        patient: "Marcus Vance",
        procedure: "Tooth #13 Crown Prep",
        agentStatus: "Lab AI Prosthetic Queued",
        statusTone: "amber",
      },
    ],
    aiFeed: [
      "Reception AI filled 1:30 PM cancellation from smart waitlist",
      "Finance AI validated ICD-10 / CDT codes before claim dispatch",
      "Inventory AI scheduled composite resin reorder for Branch A",
    ],
  },
  dermatology: {
    label: "Dermatology",
    activeBranch: "Cosmetic & Clinical • Branch B",
    hoursSaved: "12.8 hrs/wk",
    soapTurnaround: "48 sec",
    claimAccuracy: "98.7%",
    patientQueue: [
      {
        time: "09:30 AM",
        patient: "Elena Rostova",
        procedure: "Laser Therapy Follow-Up",
        agentStatus: "Hydration +43% • AI Scanned",
        statusTone: "emerald",
      },
      {
        time: "10:45 AM",
        patient: "David Kim",
        procedure: "Annual Mole Mapping",
        agentStatus: "Clinical AI Photo Comparison",
        statusTone: "blue",
      },
      {
        time: "12:00 PM",
        patient: "Sophia Laurent",
        procedure: "Chemical Peel Session #3",
        agentStatus: "Aesthetic AI Params Set",
        statusTone: "amber",
      },
    ],
    aiFeed: [
      "Clinical AI flagged erythema drop from 74% to 15% post-laser",
      "Aesthetic AI calibrated laser fluence for Fitzpatrick Type III",
      "Lab AI prioritized skin biopsy turnaround for Dr. Carter",
    ],
  },
  ent: {
    label: "ENT Clinics",
    activeBranch: "Otolaryngology & Audiology",
    hoursSaved: "13.5 hrs/wk",
    soapTurnaround: "39 sec",
    claimAccuracy: "98.9%",
    patientQueue: [
      {
        time: "09:15 AM",
        patient: "Arthur Pendelton",
        procedure: "Pure-Tone Audiogram (250–8k Hz)",
        agentStatus: "4000Hz Notch Flagged",
        statusTone: "amber",
      },
      {
        time: "10:30 AM",
        patient: "Clara Moreau",
        procedure: "Endoscopic Sinus Review",
        agentStatus: "Ambient Voice SOAP Drafted",
        statusTone: "emerald",
      },
      {
        time: "11:45 AM",
        patient: "Liam O'Connor",
        procedure: "Sleep Apnea Surgical Consult",
        agentStatus: "Surgery AI OR Slot Ready",
        statusTone: "blue",
      },
    ],
    aiFeed: [
      "Diagnostic AI synced left/right ear thresholds to EHR chart",
      "Surgery AI estimated 45-min septoplasty duration in OR 2",
      "Finance AI pre-authorized tympanometry coverage",
    ],
  },
  "eye-center": {
    label: "Eye Centers",
    activeBranch: "Ophthalmology & Optical",
    hoursSaved: "15.1 hrs/wk",
    soapTurnaround: "44 sec",
    claimAccuracy: "99.3%",
    patientQueue: [
      {
        time: "09:00 AM",
        patient: "Nadia Al-Mansoor",
        procedure: "OCT Retinal Scan & Glaucoma Check",
        agentStatus: "Clinical AI Cleared",
        statusTone: "emerald",
      },
      {
        time: "10:00 AM",
        patient: "Julian Mercer",
        procedure: "Tumbling E & Autorefraction",
        agentStatus: "+2.00D (20/20) Logged",
        statusTone: "blue",
      },
      {
        time: "11:15 AM",
        patient: "Hannah Park",
        procedure: "Progressive Lens Dispensing",
        agentStatus: "Optician AI Frame Matched",
        statusTone: "amber",
      },
    ],
    aiFeed: [
      "Clinical AI completed automated OCT optic nerve symmetry check",
      "Optician AI matched high-index anti-reflective lens stock",
      "Operations AI scheduled slit lamp calibration post-clinic",
    ],
  },
  physiotherapy: {
    label: "Physiotherapy",
    activeBranch: "Dr. Test 2 • Mjek Portal",
    hoursSaved: "13.5 hrs/wk",
    soapTurnaround: "38 sec",
    claimAccuracy: "98.9%",
    patientQueue: [
      {
        time: "09:00 AM",
        patient: "Test 1 (+383 44 201 001)",
        procedure: "Vlerësim Fillestar • 30 min",
        agentStatus: "Planifikuar",
        statusTone: "blue",
      },
      {
        time: "01:00 PM",
        patient: "Test 5 (+383 44 201 005)",
        procedure: "Terapi Manuale • 45 min",
        agentStatus: "Planifikuar",
        statusTone: "emerald",
      },
      {
        time: "03:30 PM",
        patient: "Test 9 (Tomorrow)",
        procedure: "Elektroterapi Session",
        agentStatus: "Progresi Tracked",
        statusTone: "amber",
      },
    ],
    aiFeed: [
      "ROM & Pain scale trends synced to Progresi i Trajtimit",
      "Kujtesat queued next-day Elektroterapi patient reminder",
      "4 Quick Navigation widgets synced across Kalendari Im & Recetat",
    ],
  },
  "hair-transplant": {
    label: "Hair Transplant",
    activeBranch: "Paneli i Administratorit • €/LEK",
    hoursSaved: "16.0 hrs/wk",
    soapTurnaround: "40 sec",
    claimAccuracy: "99.4%",
    patientQueue: [
      {
        time: "09:00 AM",
        patient: "Test 1 — Test 2",
        procedure: "Konsultë Fillestare (Norwood Zone)",
        agentStatus: "Planifikuar",
        statusTone: "blue",
      },
      {
        time: "10:00 AM",
        patient: "Test 3 — Test 3",
        procedure: "Kontroll Pas-Procedure (FUE)",
        agentStatus: "Në Pritje",
        statusTone: "amber",
      },
      {
        time: "01:00 PM",
        patient: "Test 5 — Test 2",
        procedure: "Terapi PRP / Mezoterapi",
        agentStatus: "15,000 LEK Paid",
        statusTone: "emerald",
      },
    ],
    aiFeed: [
      "Financa converted 15,000 LEK (~€129) at live rate €1 = 116.5L",
      "Hap Asistentin AI (3/50) compiled 12-month post-op instructions",
      "Performanca e Mjekëve tracked 10 active monthly consultations",
    ],
  },
  gynecology: {
    label: "Gynecology",
    activeBranch: "OB/GYN Admin & Doktor",
    hoursSaved: "14.8 hrs/wk",
    soapTurnaround: "41 sec",
    claimAccuracy: "99.2%",
    patientQueue: [
      {
        time: "09:00 AM",
        patient: "Test 1",
        procedure: "Kontroll Gjinekologjik",
        agentStatus: "Planifikuar",
        statusTone: "blue",
      },
      {
        time: "10:00 AM",
        patient: "Test 3",
        procedure: "Kolposkopi & Screening",
        agentStatus: "Në Pritje",
        statusTone: "amber",
      },
      {
        time: "01:00 PM",
        patient: "Test 5",
        procedure: "Ekzaminim Pap Test",
        agentStatus: "Encrypted SOAP Ready",
        statusTone: "emerald",
      },
    ],
    aiFeed: [
      "OB/GYN Triage scheduled trimester Ultratingull Gjinekologjik check",
      "Private Pap & Kolposkopi cytology vaulted under HIPAA/GDPR",
      "Të Ardhurat Mujore & Takimet Javore synced across 4 clinicians",
    ],
  },
};

const SIDEBAR_ITEMS = [
  { key: "dental", label: "Dental Tenant" },
  { key: "dermatology", label: "Dermatology" },
  { key: "physiotherapy", label: "Physiotherapy" },
  { key: "hair-transplant", label: "Hair Transplant" },
  { key: "gynecology", label: "Gynecology" },
  { key: "ent", label: "ENT & Audiology" },
];

export function HypocratesDashboardPreview({
  variant = "command",
}: {
  variant?: "command" | "intelligence";
}) {
  const [activeKey, setActiveKey] = useState<string>("dental");
  const snap = SNAPSHOTS[activeKey] ?? SNAPSHOTS.dental;
  const livePortal = LIVE_CLINIC_DASHBOARDS.find((d) => d.id === activeKey);
  const isDarkSidebar = variant === "command";

  return (
    <div className="w-full bg-white text-[#1d1d1d] grid grid-cols-1 md:grid-cols-12 md:min-h-[340px] text-left">
      {/* Left Sidebar (compact horizontal pill bar on mobile, full sidebar on md+) */}
      <aside
        className={`md:col-span-3 p-4 md:p-5 flex flex-col justify-between border-b md:border-b-0 md:border-r ${
          isDarkSidebar
            ? "bg-[#111315] text-white border-white/10"
            : "bg-[#f8fafc] text-[#1d1d1d] border-[#dde5ed]"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-3 md:pb-5 gap-2">
            {isDarkSidebar ? (
              <div className="inline-flex items-center gap-2.5">
                <span className="h-9 w-9 md:h-11 md:w-11 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-sm shrink-0">
                  <img
                    src="/images/hypocrates-logo.png"
                    alt="Hypocrates Logo"
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="font-heading font-bold tracking-[-0.03em] text-[18px] md:text-[20px] text-white leading-none">
                  Hypocrates
                </span>
              </div>
            ) : (
              <HypocratesLogo size="sm" wordmarkClassName="!text-[#1d1d1d]" />
            )}
            <span
              className="relative flex h-2.5 w-2.5 shrink-0"
              title="Clinical AI Live"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]" />
            </span>
          </div>

          <p
            className={`hidden md:block text-[11px] font-display font-semibold uppercase tracking-wider mb-2.5 ${
              isDarkSidebar ? "text-white/45" : "text-[#4d585f]"
            }`}
          >
            Clinic Tenants
          </p>

          <div className="flex md:block overflow-x-auto no-scrollbar gap-1.5 md:space-y-1.5 pb-1 md:pb-0">
            {SIDEBAR_ITEMS.map((item) => {
              const active = activeKey === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveKey(item.key)}
                  className={`shrink-0 md:w-full text-left px-3 py-1.5 md:px-3.5 md:py-2.5 rounded-full md:rounded-[12px] font-display font-semibold text-[12.5px] md:text-[13.5px] transition-colors cursor-pointer flex items-center justify-between gap-2 whitespace-nowrap ${
                    active
                      ? isDarkSidebar
                        ? "bg-white text-[#1d1d1d]"
                        : "bg-[#3b82f6]/12 text-[#3b82f6]"
                      : isDarkSidebar
                      ? "bg-white/5 md:bg-transparent text-white/75 hover:bg-white/10 hover:text-white"
                      : "bg-white md:bg-transparent text-[#4d585f] hover:bg-[#edf1f4] hover:text-[#1d1d1d]"
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={`hidden md:block mt-6 rounded-[16px] p-4 ${
            isDarkSidebar
              ? "bg-white/8 border border-white/10"
              : "bg-white border border-[#dde5ed]"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span className="font-display font-semibold text-[12px]">
              Zero-Retention Scribe
            </span>
          </div>
          <p
            className={`mt-1.5 font-display text-[11.5px] leading-[1.4em] ${
              isDarkSidebar ? "text-white/65" : "text-[#4d585f]"
            }`}
          >
            HIPAA &amp; GDPR isolated database active. Audio purged on SOAP sign-off.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="md:col-span-9 p-4 sm:p-6 bg-white flex flex-col justify-between gap-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between gap-4 flex-1"
          >
            {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#edf1f4]">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#edf1f4] font-display font-semibold text-[11px] text-[#3b82f6]">
                {snap.label}
              </span>
              <span className="font-display font-medium text-[12px] text-[#4d585f]">
                {snap.activeBranch}
              </span>
            </div>
            <h3 className="mt-1 font-heading font-semibold text-[19px] sm:text-[23px] tracking-[-0.5px] text-[#1d1d1d]">
              {variant === "command"
                ? "Clinical Command Center"
                : "AI Orchestrator Intelligence"}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {livePortal && (
              <a
                href={livePortal.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-[#3b82f6]/10 hover:bg-[#3b82f6] hover:text-white text-[#3b82f6] font-display font-semibold text-[11.5px] transition-colors"
              >
                Open Live Demo ↗
              </a>
            )}
            <span className="px-2.5 py-1 rounded-full bg-[#10b981]/12 text-[#10b981] font-display font-semibold text-[11.5px]">
              ● Orchestrator Online
            </span>
          </div>
        </div>

        {/* 4 KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="rounded-[14px] bg-[#edf1f4] p-3">
            <div className="font-display font-medium text-[11.5px] text-[#4d585f]">
              Time Saved / MD
            </div>
            <div className="mt-1 font-heading font-semibold text-[18px] sm:text-[20px] text-[#1d1d1d]">
              {snap.hoursSaved}
            </div>
          </div>
          <div className="rounded-[14px] bg-[#edf1f4] p-3">
            <div className="font-display font-medium text-[11.5px] text-[#4d585f]">
              SOAP Draft Time
            </div>
            <div className="mt-1 font-heading font-semibold text-[18px] sm:text-[20px] text-[#3b82f6]">
              {snap.soapTurnaround}
            </div>
          </div>
          <div className="rounded-[14px] bg-[#edf1f4] p-3">
            <div className="font-display font-medium text-[11.5px] text-[#4d585f]">
              Claim Pre-Check
            </div>
            <div className="mt-1 font-heading font-semibold text-[18px] sm:text-[20px] text-[#10b981]">
              {snap.claimAccuracy}
            </div>
          </div>
          <div className="rounded-[14px] bg-[#1d1d1d] text-white p-3">
            <div className="font-display font-medium text-[11.5px] text-white/70">
              Platform SLA
            </div>
            <div className="mt-1 font-heading font-semibold text-[18px] sm:text-[20px]">
              99.9%
            </div>
          </div>
        </div>

        {/* Lower Split: Patient Queue + Live AI Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
          <div className="lg:col-span-7 rounded-[16px] border border-[#dde5ed] p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading font-semibold text-[14px] text-[#1d1d1d]">
                Live Clinical Schedule
              </span>
              <span className="font-display text-[11.5px] text-[#4d585f]">
                Branch Sync Active
              </span>
            </div>
            <div className="space-y-2">
              {snap.patientQueue.slice(0, 2).map((row) => (
                <div
                  key={row.patient}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-[10px] bg-[#f8fafc] px-3 py-2 border border-[#edf1f4]"
                >
                  <div>
                    <div className="font-display font-semibold text-[13px] text-[#1d1d1d]">
                      {row.time} • {row.patient}
                    </div>
                    <div className="font-display text-[11.5px] text-[#4d585f]">
                      {row.procedure}
                    </div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full font-display font-semibold text-[10.5px] ${
                      row.statusTone === "emerald"
                        ? "bg-[#10b981]/15 text-[#10b981]"
                        : row.statusTone === "blue"
                        ? "bg-[#3b82f6]/12 text-[#3b82f6]"
                        : "bg-[#ff8b06]/15 text-[#c26700]"
                    }`}
                  >
                    {row.agentStatus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden sm:flex lg:col-span-5 rounded-[16px] bg-[#edf1f4] p-3.5 flex-col justify-between">
            <div>
              <span className="font-heading font-semibold text-[14px] text-[#1d1d1d]">
                AI Agent Orchestrator
              </span>
              <ul className="mt-2 space-y-2">
                {snap.aiFeed.slice(0, 2).map((msg) => (
                  <li
                    key={msg}
                    className="rounded-[10px] bg-white px-3 py-2 font-display font-medium text-[12px] leading-[1.35em] text-[#4d585f] border border-[#dde5ed]/70"
                  >
                    {msg}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-2.5 pt-2 border-t border-[#dde5ed] flex items-center justify-between text-[11px] font-display font-semibold text-[#4d585f]">
              <span>Clinical • Reception • Finance AI</span>
              <span className="text-[#3b82f6]">Synced</span>
            </div>
          </div>
        </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

