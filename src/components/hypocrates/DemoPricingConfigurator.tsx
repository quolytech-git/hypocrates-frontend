"use client";

import React, { useState, useRef } from "react";
import {
  CLINIC_ORDER,
  ClinicSlug,
  clinicSolutions,
} from "@/lib/hypocrates-data";
import { PreTitleBadge } from "@/components/ui/ActionButtons";

const SCALE_OPTIONS = [
  { value: "1-5", label: "Boutique (1-5 practitioners)" },
  { value: "6-20", label: "Group (6-20 practitioners)" },
  { value: "21-50", label: "Enterprise Scale (21-50 practitioners)" },
  { value: "50+", label: "Regional System (50+ practitioners)" },
];

const PLAN_OPTIONS = [
  { value: "solo", label: "Solo Practitioner Tier" },
  { value: "clinic", label: "Group Practice Tier" },
  { value: "enterprise", label: "Enterprise Health Tier" },
];

export function DemoPricingConfigurator() {
  const [specialty, setSpecialty] = useState<ClinicSlug>("dental");
  const [selectedPlan, setSelectedPlan] = useState<
    "solo" | "clinic" | "enterprise"
  >("clinic");
  const [clinicSize, setClinicSize] = useState("6-20");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  const formRef = useRef<HTMLDivElement>(null);

  const currentData = clinicSolutions[specialty];

  const handlePlanSelect = (plan: "solo" | "clinic" | "enterprise") => {
    setSelectedPlan(plan);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScaleChange = (val: string) => {
    setClinicSize(val);
    if (val === "1-5") setSelectedPlan("solo");
    else if (val === "6-20" || val === "21-50") setSelectedPlan("clinic");
    else setSelectedPlan("enterprise");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "demo",
          name,
          email,
          clinicName,
          specialty,
          clinicSize,
          selectedPlan,
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Unable to submit request.");
        return;
      }
      setStatus("success");
      setFeedback(
        `Thank you, ${name}. We have configured your demo request for the ${selectedPlan.toUpperCase()} tier (${currentData.title}). Our onboarding specialist will reach out shortly.`
      );
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again.");
    }
  };

  return (
    <div className="max-w-[1160px] mx-auto px-5 space-y-16">
      {/* Step 1: Configurator */}
      <div>
        <div className="rounded-[28px] bg-[#edf1f4] border border-[#dde5ed] p-6 md:p-8">
          <div className="flex-1">
            <h2 className="font-display font-semibold text-[15px] uppercase tracking-wider text-[#4d585f]">
              1. Select your clinical domain
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {CLINIC_ORDER.map((slug) => {
                const active = specialty === slug;
                return (
                  <button
                    key={slug}
                    type="button"
                    onClick={() => setSpecialty(slug)}
                    className={`px-4 py-2 rounded-full font-display font-semibold text-[13.5px] transition-colors cursor-pointer flex items-center gap-2 ${
                      active
                        ? "bg-[#1d1d1d] text-white"
                        : "bg-white text-[#4d585f] hover:text-[#1d1d1d] border border-[#dde5ed]"
                    }`}
                  >
                    <span>{clinicSolutions[slug].title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 Deployment Configuration Cards (No public pricing) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Solo */}
          <div
            className={`rounded-[26px] border p-8 flex flex-col justify-between transition-all ${
              selectedPlan === "solo"
                ? "bg-[#edf1f4] border-[#3b82f6] ring-2 ring-[#3b82f6]/20"
                : "bg-[#edf1f4] border-[#dde5ed]"
            }`}
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white text-[#3b82f6] font-display font-semibold text-[12px]">
                Single Practitioner
              </span>
              <h3 className="mt-4 font-heading font-semibold text-[24px] text-[#1d1d1d]">
                Solo Practitioner
              </h3>
              <p className="mt-1.5 font-display font-medium text-[14.5px] text-[#4d585f]">
                Reclaim your evenings. Stop typing charts after-hours.
              </p>

              <ul className="mt-6 pt-6 border-t border-[#dde5ed] space-y-2.5 font-display text-[14px] text-[#4d585f]">
                <li>
                  <strong className="text-[#1d1d1d]">1</strong> dedicated practitioner license
                </li>
                <li>Ambient SOAP dictation &amp; clinical note writer</li>
                <li>Real-time automated medical coding (ICD-10/CPT)</li>
                {currentData.pricingFeatures.map((feat) => (
                  <li key={feat} className="text-[#1d1d1d] font-medium">
                    <span className="text-[#10b981] mr-1.5">✓</span>
                    {feat}
                  </li>
                ))}
                <li>Basic EHR demographics sync</li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handlePlanSelect("solo")}
              className={`mt-8 w-full rounded-full py-3.5 px-6 font-display font-semibold text-[15px] cursor-pointer transition-colors ${
                selectedPlan === "solo"
                  ? "bg-[#3b82f6] text-white"
                  : "bg-white border border-[#dde5ed] text-[#1d1d1d] hover:bg-[#1d1d1d] hover:text-white"
              }`}
            >
              Book Solo Demo
            </button>
          </div>

          {/* Group Practice */}
          <div
            className={`rounded-[26px] bg-gradient-to-b from-[#323232] to-[#000000] text-white p-8 flex flex-col justify-between transition-all ${
              selectedPlan === "clinic" ? "ring-2 ring-[#3b82f6]" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-heading font-semibold text-[24px]">
                  Group Practice
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#3b82f6] text-white font-display font-semibold text-[12px]">
                  Most Popular
                </span>
              </div>
              <p className="mt-1.5 font-display font-medium text-[14.5px] text-white/75">
                Standardize charting quality &amp; maximize throughput across staff.
              </p>

              <ul className="mt-6 pt-6 border-t border-white/15 space-y-2.5 font-display text-[14px] text-white/80">
                <li>
                  <strong className="text-white">2 to 20</strong> practitioner licenses
                </li>
                <li>All Solo features included</li>
                <li>
                  <strong className="text-white">Receptionist AI:</strong> booking bot &amp; automated intakes
                </li>
                <li>
                  <strong className="text-white">Billing &amp; Claims AI:</strong> real-time claim validation
                </li>
                {currentData.pricingFeatures.map((feat) => (
                  <li key={feat} className="text-white font-medium">
                    <span className="text-[#10b981] mr-1.5">✓</span>
                    {feat}
                  </li>
                ))}
                <li>Bi-directional EHR integration (Writebacks)</li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handlePlanSelect("clinic")}
              className="mt-8 w-full rounded-full py-3.5 px-6 bg-white text-[#1d1d1d] hover:bg-[#3b82f6] hover:text-white font-display font-semibold text-[15px] cursor-pointer transition-colors"
            >
              Book Group Clinic Demo
            </button>
          </div>

          {/* Enterprise */}
          <div
            className={`rounded-[26px] border p-8 flex flex-col justify-between transition-all ${
              selectedPlan === "enterprise"
                ? "bg-[#edf1f4] border-[#3b82f6] ring-2 ring-[#3b82f6]/20"
                : "bg-[#edf1f4] border-[#dde5ed]"
            }`}
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white text-[#1d1d1d] font-display font-semibold text-[12px]">
                Multi-Branch Networks
              </span>
              <h3 className="mt-4 font-heading font-semibold text-[24px] text-[#1d1d1d]">
                Enterprise Health
              </h3>
              <p className="mt-1.5 font-display font-medium text-[14.5px] text-[#4d585f]">
                Full HIPAA compliance control, custom integrations, and dedicated SLA.
              </p>

              <ul className="mt-6 pt-6 border-t border-[#dde5ed] space-y-2.5 font-display text-[14px] text-[#4d585f]">
                <li>
                  <strong className="text-[#1d1d1d]">Unlimited</strong> practitioner licenses &amp; branches
                </li>
                <li>All Group Practice features included</li>
                <li>
                  <strong className="text-[#1d1d1d]">Operations AI:</strong> smart routing &amp; inventory alerts
                </li>
                <li>Custom HL7 / FHIR EHR database bridges</li>
                <li>Enterprise Business Associate Agreement (BAA)</li>
                <li>Dedicated Account DPO &amp; 24/7 Phone SLA</li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handlePlanSelect("enterprise")}
              className={`mt-8 w-full rounded-full py-3.5 px-6 font-display font-semibold text-[15px] cursor-pointer transition-colors ${
                selectedPlan === "enterprise"
                  ? "bg-[#3b82f6] text-white"
                  : "bg-[#1d1d1d] text-white hover:bg-[#323232]"
              }`}
            >
              Book Enterprise Briefing
            </button>
          </div>
        </div>
      </div>

      {/* Step 2: Demo Booking Form */}
      <div ref={formRef} className="max-w-[780px] mx-auto pt-4">
        <div className="text-center mb-8">
          <PreTitleBadge text="2. Book your Implementation Demo" variant="slate" />
          <h2 className="mt-4 font-heading font-semibold text-[30px] md:text-[40px] leading-[1.15em] tracking-[-0.8px] text-[#1d1d1d]">
            Configure your personalized clinic walkthrough
          </h2>
          <p className="mt-3 font-display font-medium text-[16px] text-[#4d585f]">
            Our clinical workflow specialists will run a live simulation using your{" "}
            <strong className="text-[#1d1d1d]">{currentData.title}</strong> EHR template.
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-[28px] bg-[#edf1f4] border border-[#10b981]/40 p-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#10b981] text-white font-bold text-[20px] flex items-center justify-center mx-auto">
              ✓
            </div>
            <h3 className="font-heading font-semibold text-[26px] text-[#1d1d1d]">
              Demo Requested!
            </h3>
            <p className="font-display font-medium text-[16px] text-[#4d585f] max-w-[520px] mx-auto">
              {feedback}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] bg-[#edf1f4] border border-[#dde5ed] p-7 md:p-10 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dr. Sarah Jenkins"
                  className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px]"
                />
              </div>
              <div>
                <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
                  Clinical Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="s.jenkins@healthclinic.com"
                  className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
                  Clinic Name *
                </label>
                <input
                  type="text"
                  required
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  placeholder="Apex Health Center"
                  className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px]"
                />
              </div>
              <div>
                <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
                  Specialty Focus
                </label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value as ClinicSlug)}
                  className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px]"
                >
                  {CLINIC_ORDER.map((slug) => (
                    <option key={slug} value={slug}>
                      {clinicSolutions[slug].title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
                  Clinic Scale
                </label>
                <select
                  value={clinicSize}
                  onChange={(e) => handleScaleChange(e.target.value)}
                  className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px]"
                >
                  {SCALE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
                  Practice Deployment Tier
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) =>
                    setSelectedPlan(
                      e.target.value as "solo" | "clinic" | "enterprise"
                    )
                  }
                  className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px]"
                >
                  {PLAN_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
                EHR Infrastructure &amp; Goals (Optional)
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="We use Epic / Athenahealth / DrChrono and want to reduce SOAP charting delays..."
                className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px]"
              />
            </div>

            {status === "error" && (
              <div className="rounded-[14px] px-4 py-3 bg-[#f51c23]/10 border border-[#f51c23]/30 text-[#f51c23] font-display text-[14px]">
                {feedback}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-gradient-to-b from-[#5290f4] via-[#3b82f6] to-[#406ae4] text-white font-display font-semibold text-[16px] py-4 px-8 hover:opacity-95 transition-opacity cursor-pointer disabled:opacity-60"
            >
              {status === "loading"
                ? "Requesting Demo Call..."
                : "Book Live Implementation Demo"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

