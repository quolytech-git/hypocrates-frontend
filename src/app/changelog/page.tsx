import React from "react";
import { SubpageShell } from "@/components/SubpageShell";

const releases = [
  {
    version: "v2.4",
    date: "November 2026",
    title: "Real-Time Opportunity Scanner & Smart Alerts",
    items: [
      "Added AI pattern recognition for trend reversals across 120+ markets.",
      "Introduced automated portfolio allocation threshold alerts.",
      "Improved risk score recalculation latency under 200ms.",
    ],
  },
  {
    version: "v2.3",
    date: "October 2026",
    title: "Multi-Account Sync & SOC2 Type 2 Compliance",
    items: [
      "Expanded brokerage and banking connectors to 100+ integrations.",
      "Completed SOC2 Type 2 and ISO 27001 security audits.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <SubpageShell
      badge="Changelog"
      title="What’s new in FintechX"
      subtitle="Track the latest features, security milestones, and AI model improvements."
    >
      <div className="max-w-[780px] mx-auto px-5 space-y-6">
        {releases.map((rel) => (
          <div
            key={rel.version}
            className="rounded-[24px] bg-[#edf1f4] border border-[#dde5ed] p-8"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#1d1d1d] text-white font-display font-semibold text-[13px]">
                {rel.version}
              </span>
              <span className="font-display font-medium text-[14px] text-[#4d585f]">
                {rel.date}
              </span>
            </div>
            <h2 className="mt-4 font-heading font-semibold text-[24px] text-[#1d1d1d]">
              {rel.title}
            </h2>
            <ul className="mt-4 space-y-2 font-display font-medium text-[15px] text-[#4d585f]">
              {rel.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SubpageShell>
  );
}

