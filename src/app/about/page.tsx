import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { IntegrationsAndStats } from "@/components/sections/IntegrationsAndStats";
import { HippocratesHeritageSection } from "@/components/hypocrates/HippocratesHeritageSection";
import { HypocratesLogo } from "@/components/HypocratesLogo";
import {
  ShieldCheckIcon,
  HeartPulseIcon,
  SparklesIcon,
} from "@/components/ui/ClinicalIcons";

const values = [
  {
    title: "Security First",
    desc: "Patient records demand absolute privacy. Hypocrates is built with end-to-end encryption, regular penetration audits, and full HIPAA compliance.",
  },
  {
    title: "Physician-Centric",
    desc: "We design alongside active medical practitioners. Our features are built to save clinicians time and adapt seamlessly to real consultations.",
  },
  {
    title: "Patient-First Care",
    desc: "By automating administrative overhead, we return hours to clinicians, letting them build closer connections with the patients they treat.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Hypocrates Founded",
    desc: "Frustrated by slow, complex EHR systems, a team of medical practitioners and AI researchers joined forces to build a unified system.",
  },
  {
    year: "2025",
    title: "Clinical AI Rollout",
    desc: "Launched our ambient transcription and SOAP note compiler, saving our beta clinic partners over 15 hours per week per physician.",
  },
  {
    year: "2026",
    title: "Specialty Workflows",
    desc: "Expanded our modular ecosystem to build specialized templates and pipelines for Dental, Dermatology, ENT, Eye Centers, Nutrition, Physiotherapy, and Plastic Surgery.",
  },
];

export default function AboutPage() {
  return (
    <SubpageShell
      badge="About Us"
      title="Bringing Clinic Management Into the AI Era"
      subtitle="We are on a mission to build the most efficient, secure, and intuitive clinic operating platform ever created."
    >
      <div className="max-w-[1160px] mx-auto px-5 space-y-16">
        {/* Why We Build + Core Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 rounded-[26px] bg-[#edf1f4] border border-[#dde5ed] p-8 md:p-10 space-y-4">
            <h2 className="font-heading font-semibold text-[28px] text-[#1d1d1d]">
              Why We Build
            </h2>
            <p className="font-display font-medium text-[16px] leading-[1.6em] text-[#4d585f]">
              Modern healthcare clinics are burdened by admin. Doctors spend up
              to 40% of their workday typing notes, filling compliance sheets,
              and auditing insurance claims instead of treating patients.
            </p>
            <p className="font-display font-medium text-[16px] leading-[1.6em] text-[#4d585f]">
              Hypocrates integrates modern artificial intelligence directly into
              clinic schedulers, intake flows, and charting environments,
              creating a smooth experience for staff and patients alike.
            </p>
            <div className="mt-4 rounded-[20px] bg-white border border-[#dde5ed] p-6 flex items-center gap-5">
              <div className="font-heading font-bold text-[40px] text-[#3b82f6] shrink-0">
                40%
              </div>
              <div className="font-display font-medium text-[15px] text-[#4d585f]">
                of the physician workday is currently lost to administrative
                burden and screen time.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[26px] bg-gradient-to-b from-[#323232] to-[#000000] text-white p-8 md:p-10 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-block self-start px-3.5 py-1 rounded-full bg-white/10 font-display font-semibold text-[12.5px]">
                Our Core Mission
              </span>
              <span className="w-12 h-12 rounded-2xl bg-white p-2 flex items-center justify-center shadow-sm">
                <HypocratesLogo size="sm" showWordmark={false} />
              </span>
            </div>
            <blockquote className="my-8 font-heading font-semibold text-[26px] md:text-[30px] leading-[1.3em]">
              &ldquo;Reclaiming clinical hours from screens and keyboards to
              focus on what matters most:{" "}
              <span className="text-[#5290f4]">human care</span>.&rdquo;
            </blockquote>
            <div className="font-display text-[14px] text-white/70">
              Hypocrates Clinical Engineering &amp; AI Team
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-6">
          <h2 className="font-heading font-semibold text-[32px] text-center text-[#1d1d1d]">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon =
                idx === 0
                  ? ShieldCheckIcon
                  : idx === 1
                  ? HeartPulseIcon
                  : SparklesIcon;
              const tone =
                idx === 0
                  ? "text-[#3b82f6] bg-[#3b82f6]/10"
                  : idx === 1
                  ? "text-[#10b981] bg-[#10b981]/10"
                  : "text-[#f59e0b] bg-[#f59e0b]/10";
              return (
                <div
                  key={val.title}
                  className="group rounded-[24px] bg-[#edf1f4] border border-[#dde5ed] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(16,28,48,0.06)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`w-11 h-11 rounded-2xl border border-[#dde5ed] bg-white flex items-center justify-center shadow-sm ${tone}`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="font-display font-semibold text-[12px] text-[#4d585f]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-[22px] text-[#1d1d1d]">
                    {val.title}
                  </h3>
                  <p className="mt-2.5 font-display font-medium text-[15px] leading-[1.5em] text-[#4d585f]">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-6">
          <h2 className="font-heading font-semibold text-[32px] text-center text-[#1d1d1d]">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="group rounded-[24px] bg-white border border-[#dde5ed] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3b82f6]/50"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3b82f6] text-white font-display font-semibold text-[13px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {m.year}
                  </span>
                  <img
                    src="/images/hypocrates-logo.png"
                    alt=""
                    className="h-7 w-7 object-contain opacity-80 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="mt-4 font-heading font-semibold text-[22px] text-[#1d1d1d]">
                  {m.title}
                </h3>
                <p className="mt-2 font-display font-medium text-[15px] leading-[1.5em] text-[#4d585f]">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Historical Tribute: Hippocrates in His Time */}
      <HippocratesHeritageSection compact />

      <IntegrationsAndStats />
    </SubpageShell>
  );
}
