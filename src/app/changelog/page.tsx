import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import {
  CheckCircleIcon as CheckCircle2,
  SparklesIcon as Sparkles,
} from "@/components/ui/ClinicalIcons";

export const metadata: Metadata = {
  title: "Changelog | Hypocrates Platform Releases",
  description:
    "Product updates, ambient scribing releases, and multi-specialty EHR improvements in Hypocrates.",
};

const releases = [
  {
    version: "v2.5",
    date: "April 2026",
    title: "Speech-to-SOAP v2.5 & Multi-Branch Operations AI",
    summary:
      "Upgraded ambient transcription engine with specialty terminology dictionaries, HL7/FHIR bi-directional sync, and consolidated franchise dashboards.",
    items: [
      "Sub-minute structured SOAP notes tuned for all 7 specialty tenants (Dental, Dermatology, Plastic Surgery, ENT, Nutrition, Physiotherapy, Eye Center).",
      "Zero-Data-Retention audio pipeline verifying immediate source deletion after clinician approval.",
      "Franchise Location Switcher with unified Operations AI staffing and room utilization forecasts.",
    ],
  },
  {
    version: "v2.4",
    date: "February 2026",
    title: "Role-Specific Clinical Workspaces & Public Clinic Websites",
    summary:
      "Introduced isolated clinic tenant provisioning with auto-deployed public booking sites and role-scoped workspaces.",
    items: [
      "Per-role widgets isolating Reception, Assistant, Clinician, Billing, Sterilization, and Operations views.",
      "Pre-integrated AI website booking chatbots syncing live chair, OR suite, and diagnostic slots.",
      "Automated Finance AI pre-claim verification across CPT, ICD-10, and dental procedure codes.",
    ],
  },
  {
    version: "v2.3",
    date: "December 2025",
    title: "Trust Center, HIPAA BAA Automation & PACS Connectors",
    summary:
      "Expanded clinical interoperability and automated compliance auditing across European GDPR and US HIPAA tenants.",
    items: [
      "Direct imaging adapters for cone-beam CT, dermoscopy, audiometry, and optical Coherence Tomography (OCT).",
      "Immutable append-only audit logs with automated anomaly alerting.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <SubpageShell
      badge="Changelog"
      title="What’s new in Hypocrates"
      subtitle="Platform milestones across specialty EHR tenants, ambient clinical AI, and security infrastructure."
    >
      <div className="max-w-[880px] mx-auto flex flex-col gap-6">
        {releases.map((rel) => (
          <div
            key={rel.version}
            className="rounded-[24px] bg-white p-7 sm:p-9 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-[#3b82f6]/10 text-[#3b82f6]">
                <Sparkles className="w-3.5 h-3.5" />
                {rel.version}
              </span>
              <span className="text-[13px] font-medium text-[#5c6670]">
                {rel.date}
              </span>
            </div>
            <h2 className="text-[21px] font-semibold text-[#1d1d1d] mb-2">
              {rel.title}
            </h2>
            <p className="text-[14.5px] leading-[1.6] text-[#5c6670] mb-5">
              {rel.summary}
            </p>
            <ul className="flex flex-col gap-2.5 pt-4 border-t border-[#eef2f6]">
              {rel.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[14px] text-[#3a424b]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SubpageShell>
  );
}
