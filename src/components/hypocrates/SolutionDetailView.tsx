"use client";

import React, { useState } from "react";
import {
  ClinicSolution,
  CLINIC_ORDER,
  clinicSolutions,
  LIVE_CLINIC_DASHBOARDS,
} from "@/lib/hypocrates-data";
import { PreTitleBadge } from "@/components/ui/ActionButtons";
import { InteractiveClinicSimulator } from "@/components/hypocrates/InteractiveClinicSimulator";

export function SolutionDetailView({ solution }: { solution: ClinicSolution }) {
  const [activeCategory, setActiveCategory] = useState(solution.defaultCategory);
  const [activeRole, setActiveRole] = useState(solution.defaultRole);
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  const currentCat =
    solution.categories.find((c) => c.id === activeCategory) ??
    solution.categories[0];
  const currentRole =
    solution.rolesData[activeRole] ??
    solution.rolesData[currentCat.roles[0]];
  const livePortal = LIVE_CLINIC_DASHBOARDS.find((d) => d.id === solution.slug);

  return (
    <div className="max-w-[1160px] mx-auto px-5 space-y-20">
      {livePortal && (
        <section className="rounded-[28px] bg-[#edf1f4] border border-[#dde5ed] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
          <div className="lg:col-span-7 rounded-[20px] overflow-hidden border border-[#dde5ed] bg-[#0e1116] shadow-[0_18px_40px_rgba(16,28,48,0.12)] group">
            <a
              href={livePortal.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={livePortal.screenshot}
                alt={`${livePortal.title} screenshot`}
                className="w-full h-auto block group-hover:scale-[1.015] transition-transform duration-500"
              />
            </a>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#dde5ed] font-display font-semibold text-[12.5px] text-[#1d1d1d]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>{livePortal.portalMode}</span>
            </div>
            <h2 className="font-heading font-semibold text-[28px] leading-[1.18em] text-[#1d1d1d]">
              Launch Live {livePortal.shortTitle} Portal
            </h2>
            <p className="font-display font-medium text-[15px] text-[#4d585f] leading-[1.55em]">
              Try the deployed {livePortal.title} directly in your browser.{" "}
              {livePortal.entryHint}.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {livePortal.treatments.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-white border border-[#dde5ed] font-display font-medium text-[12.5px] text-[#1d1d1d]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <a
                href={livePortal.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#5290f4] via-[#3b82f6] to-[#406ae4] text-white font-display font-semibold text-[15px] px-6 py-3.5 shadow-[0_10px_24px_rgba(59,130,246,0.28)] hover:brightness-105 transition-all"
              >
                <span>Open {livePortal.displayUrl}</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 1. Parent SaaS Integration */}
      <section className="space-y-8">
        <div className="text-center max-w-[700px] mx-auto">
          <PreTitleBadge text="Parent SaaS integration" variant="slate" />
          <h2 className="mt-4 font-heading font-semibold text-[32px] md:text-[42px] leading-[1.15em] tracking-[-0.8px] text-[#1d1d1d]">
            Isolated clinic tenant under one unified framework
          </h2>
          <p className="mt-3 font-display font-medium text-[17px] text-[#4d585f]">
            {solution.parentSaaSDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-[24px] bg-[#edf1f4] border border-[#dde5ed] p-8">
            <h3 className="font-heading font-semibold text-[24px] text-[#1d1d1d]">
              Parent SaaS Platform
            </h3>
            <p className="mt-2 font-display font-medium text-[15.5px] text-[#4d585f]">
              Provides global infrastructure including authentication, HIPAA/GDPR
              compliance, billing, and unified cross-specialty patient profiles.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {CLINIC_ORDER.map((slug) => {
                const active = slug === solution.slug;
                return (
                  <span
                    key={slug}
                    className={`px-3.5 py-1.5 rounded-full font-display font-semibold text-[13px] ${
                      active
                        ? "bg-[#3b82f6] text-white"
                        : "bg-white text-[#4d585f] border border-[#dde5ed]"
                    }`}
                  >
                    {clinicSolutions[slug].shortTitle}
                    {active ? " (Active Tenant)" : ""}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="rounded-[24px] bg-[#edf1f4] border border-[#dde5ed] p-8">
            <h3 className="font-heading font-semibold text-[24px] text-[#1d1d1d]">
              {solution.shortTitle} Sub-Tenant
            </h3>
            <ul className="mt-4 space-y-3 font-display text-[15px] text-[#4d585f]">
              {solution.subTenantHighlights.map((item) => (
                <li key={item.label}>
                  <strong className="text-[#1d1d1d]">{item.label}:</strong>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Multi-Level Architecture */}
      <section className="rounded-[30px] bg-[#edf1f4] border border-[#dde5ed] p-7 md:p-11 space-y-8">
        <div className="text-center max-w-[660px] mx-auto">
          <PreTitleBadge text="Multi-level architecture" variant="white" />
          <h2 className="mt-4 font-heading font-semibold text-[30px] md:text-[40px] leading-[1.15em] tracking-[-0.8px] text-[#1d1d1d]">
            Franchise, Branch &amp; Local AI Layers
          </h2>
        </div>

        {/* Tier 1 */}
        <div className="space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d1d1d] text-white font-display font-semibold text-[13px]">
            Tier 1: Unified Franchise Management
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {solution.tier1Cards.map((card) => (
              <div
                key={card.title}
                className="rounded-[20px] bg-white border border-[#dde5ed] p-6"
              >
                <h3 className="font-heading font-semibold text-[19px] text-[#1d1d1d]">
                  {card.title}
                </h3>
                <p className="mt-2 font-display text-[14.5px] leading-[1.45em] text-[#4d585f]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2 */}
        <div className="space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3b82f6] text-white font-display font-semibold text-[13px]">
            Tier 2: Isolated Branch Locations
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {solution.branches.map((branch) => (
              <div
                key={branch.name}
                className="rounded-[22px] bg-white border border-[#dde5ed] p-6 space-y-4"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-[#edf1f4] font-display font-semibold text-[12.5px] text-[#1d1d1d]">
                  {branch.name}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-[14px] bg-[#edf1f4] p-4">
                    <div className="font-heading font-semibold text-[15px]">
                      Isolated SQL Database
                    </div>
                    <p className="mt-1 font-display text-[13px] text-[#4d585f]">
                      {branch.dbDesc}
                    </p>
                  </div>
                  <div className="rounded-[14px] bg-[#edf1f4] p-4">
                    <div className="font-heading font-semibold text-[15px]">
                      Automated Branch Website
                    </div>
                    <p className="mt-1 font-display text-[13px] text-[#4d585f]">
                      {branch.webDesc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {branch.terminals.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-[#f8fafc] border border-[#dde5ed] font-display font-medium text-[12px] text-[#4d585f]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 3 */}
        <div className="rounded-[22px] bg-[#1d1d1d] text-white p-6 md:p-8 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#3b82f6] text-white font-display font-semibold text-[12.5px]">
            Tier 3: Branch-Specific AI Orchestrator
          </span>
          <div className="flex flex-wrap gap-2">
            {solution.agentBadges.map((agent) => (
              <span
                key={agent}
                className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 font-display font-semibold text-[13px]"
              >
                {agent}
              </span>
            ))}
          </div>
          <p className="font-display text-[15px] leading-[1.55em] text-white/80">
            {solution.orchestratorNote}
          </p>
        </div>
      </section>

      {/* 3. Staff Dashboards & AI Integration */}
      <section className="space-y-8">
        <div className="text-center max-w-[660px] mx-auto">
          <PreTitleBadge text="Role-specific workspaces" variant="slate" />
          <h2 className="mt-4 font-heading font-semibold text-[30px] md:text-[40px] leading-[1.15em] tracking-[-0.8px] text-[#1d1d1d]">
            Staff Dashboards &amp; AI Integration
          </h2>
          <p className="mt-3 font-display font-medium text-[16px] text-[#4d585f]">
            Select a department and role to inspect their workspace duties and
            paired AI assistant.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {solution.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveRole(cat.roles[0]);
              }}
              className={`px-5 py-2.5 rounded-full font-display font-semibold text-[14px] cursor-pointer transition-colors ${
                activeCategory === cat.id
                  ? "bg-[#1d1d1d] text-white"
                  : "bg-[#edf1f4] text-[#4d585f] hover:text-[#1d1d1d]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {currentCat.roles.map((roleKey) => {
            const r = solution.rolesData[roleKey];
            if (!r) return null;
            return (
              <button
                key={roleKey}
                type="button"
                onClick={() => setActiveRole(roleKey)}
                className={`px-4 py-2 rounded-full font-display font-semibold text-[13.5px] cursor-pointer border transition-colors ${
                  activeRole === roleKey
                    ? "bg-[#3b82f6] text-white border-[#3b82f6]"
                    : "bg-white text-[#4d585f] border-[#dde5ed] hover:text-[#1d1d1d]"
                }`}
              >
                {r.title}
              </button>
            );
          })}
        </div>

        {currentRole && (
          <div className="rounded-[26px] bg-[#edf1f4] border border-[#dde5ed] p-7 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[20px] bg-white border border-[#dde5ed] p-6">
              <span className="px-3 py-1 rounded-full bg-[#edf1f4] font-display font-semibold text-[12px] text-[#4d585f]">
                {currentRole.category}
              </span>
              <h3 className="mt-3 font-heading font-semibold text-[24px] text-[#1d1d1d]">
                {currentRole.title} Workspace
              </h3>
              <p className="mt-3 font-display font-medium text-[15.5px] leading-[1.5em] text-[#4d585f]">
                {currentRole.dashboard}
              </p>
            </div>
            <div className="rounded-[20px] bg-[#1d1d1d] text-white p-6">
              <span className="px-3 py-1 rounded-full bg-[#3b82f6] text-white font-display font-semibold text-[12px]">
                Paired Agent: {currentRole.agentName}
              </span>
              <h3 className="mt-3 font-heading font-semibold text-[24px]">
                AI Assistant Capabilities
              </h3>
              <p className="mt-3 font-display font-medium text-[15.5px] leading-[1.5em] text-white/80">
                {currentRole.agentFuncs}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 4. Patient Journey */}
      <section className="space-y-8">
        <div className="text-center max-w-[660px] mx-auto">
          <PreTitleBadge text="End-to-end patient journey" variant="slate" />
          <h2 className="mt-4 font-heading font-semibold text-[30px] md:text-[40px] leading-[1.15em] tracking-[-0.8px] text-[#1d1d1d]">
            Patient Journey Inside {solution.shortTitle} Tenant
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solution.patientJourney.map((step, idx) => {
            const active = activeJourneyStep === idx;
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveJourneyStep(idx)}
                className={`text-left rounded-[22px] border p-6 transition-all cursor-pointer ${
                  active
                    ? "bg-[#1d1d1d] text-white border-[#1d1d1d]"
                    : "bg-[#edf1f4] text-[#1d1d1d] border-[#dde5ed] hover:bg-white"
                }`}
              >
                <span
                  className={`inline-block px-3 py-1 rounded-full font-display font-semibold text-[12px] ${
                    active ? "bg-[#3b82f6] text-white" : "bg-white text-[#4d585f]"
                  }`}
                >
                  Step {idx + 1}
                </span>
                <h3 className="mt-3 font-heading font-semibold text-[20px]">
                  {step.title}
                </h3>
                <p
                  className={`mt-2 font-display text-[14.5px] leading-[1.5em] ${
                    active ? "text-white/80" : "text-[#4d585f]"
                  }`}
                >
                  {step.detail}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* 5. AI Orchestrator & Interactions */}
      <section className="space-y-8">
        <div className="text-center max-w-[660px] mx-auto">
          <PreTitleBadge text="AI orchestrator & interactions" variant="slate" />
          <h2 className="mt-4 font-heading font-semibold text-[30px] md:text-[40px] leading-[1.15em] tracking-[-0.8px] text-[#1d1d1d]">
            Coordinated Real-Time AI Agents
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solution.aiAgentsList.map((agent) => (
            <div
              key={agent.name}
              className="rounded-[22px] bg-[#edf1f4] border border-[#dde5ed] p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
                  {agent.name}
                </h3>
                <p className="mt-2.5 font-display text-[14.5px] leading-[1.5em] text-[#4d585f]">
                  {agent.func}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[#dde5ed]">
                <div className="font-display font-semibold text-[11.5px] uppercase tracking-wider text-[#4d585f] mb-2">
                  Interacts With
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {agent.interacts.split(", ").map((target) => (
                    <span
                      key={target}
                      className="px-2.5 py-1 rounded-full bg-white text-[#3b82f6] font-display font-semibold text-[12px]"
                    >
                      {target}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Feature Highlights & Differentiators */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solution.featureBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-[24px] bg-[#edf1f4] border border-[#dde5ed] p-7"
            >
              <h3 className="font-heading font-semibold text-[21px] text-[#1d1d1d]">
                {block.title}
              </h3>
              <ul className="mt-4 space-y-2.5 font-display text-[14.5px] text-[#4d585f]">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#10b981] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solution.differentiators.map((diff) => (
            <div
              key={diff.title}
              className="rounded-[22px] bg-white border border-[#dde5ed] p-6 flex items-start gap-4"
            >
              <span className="w-8 h-8 rounded-full bg-[#10b981]/15 text-[#10b981] font-bold flex items-center justify-center shrink-0">
                ✓
              </span>
              <div>
                <h4 className="font-heading font-semibold text-[19px] text-[#1d1d1d]">
                  {diff.title}
                </h4>
                <p className="mt-1.5 font-display text-[14.5px] leading-[1.5em] text-[#4d585f]">
                  {diff.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Live Interactive Simulator for this Specialty */}
      <InteractiveClinicSimulator initialClinic={solution.slug} />
    </div>
  );
}

