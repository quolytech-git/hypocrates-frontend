import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import {
  ActivityIcon as Activity,
  ShieldCheckIcon as BellRing,
  CheckCircleIcon as CheckCircle2,
} from "@/components/ui/ClinicalIcons";

export const metadata: Metadata = {
  title: "Business Continuity | Hypocrates Trust Center",
  description:
    "99.9% uptime SLA, clinical incident containment protocols, and multi-region continuity planning.",
};

const pillars = [
  {
    icon: Activity,
    title: "99.9% Service Availability SLA",
    body: "Stateless application tiers run across redundant regional nodes with automated health checks, instant traffic draining, and zero-downtime schema deployments.",
  },
  {
    icon: BellRing,
    title: "Incident Containment & Escalation",
    body: "24/7 on-call engineering and security responders triage severity-1 incidents within 15 minutes, isolating impacted services while preserving active clinical charting sessions.",
  },
  {
    icon: CheckCircle2,
    title: "Graceful Local-Queue Continuity",
    body: "Ambient dictation drafts, intake forms, and active consultation notes are buffered resiliently in-session so momentary clinic Wi-Fi drops do not discard clinician work.",
  },
];

export default function BusinessContinuityPage() {
  return (
    <SubpageShell
      badge="Trust Center · Continuity"
      title="Business Continuity & Uptime SLA"
      subtitle="Operational safeguards keeping outpatient clinics, surgical suites, and multi-branch practices running uninterrupted."
      backHref="/compliance"
      backLabel="Back to Trust Center"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {pillars.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-[24px] bg-white p-7 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 text-[#10b981] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="text-[18px] font-semibold text-[#1d1d1d] mb-2">
                {item.title}
              </h2>
              <p className="text-[14.5px] leading-[1.6] text-[#5c6670]">
                {item.body}
              </p>
            </div>
          );
        })}
      </div>

      <div className="rounded-[24px] bg-white p-7 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-[17px] font-semibold text-[#1d1d1d]">
            Enterprise SLA & Continuity Documentation
          </h3>
          <p className="text-[14px] text-[#5c6670] mt-1">
            Healthcare organizations requiring annual penetration summaries or
            custom continuity addenda can reach our security team directly.
          </p>
        </div>
        <a
          href="mailto:security@hypocrates.ai"
          className="text-[14px] font-semibold text-[#3b82f6] hover:underline shrink-0"
        >
          security@hypocrates.ai
        </a>
      </div>
    </SubpageShell>
  );
}
