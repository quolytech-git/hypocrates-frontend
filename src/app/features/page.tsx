import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { featuresList, comparisonRows } from "@/lib/hypocrates-data";
import { CoreFeaturesSection } from "@/components/sections/CoreFeaturesSection";
import { MobileCompanionSection } from "@/components/hypocrates/MobileCompanionSection";

export default function FeaturesPage() {
  return (
    <SubpageShell
      badge="Features & Modules"
      title="Built to Simplify Your Daily Clinic Workflows"
      subtitle="Say goodbye to fragmented tools. Hypocrates combines your patient records, staff schedules, and billing cycles in one unified platform."
    >
      <div className="max-w-[1160px] mx-auto px-5 space-y-16">
        {/* 6 Core Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feat) => (
            <div
              key={feat.title}
              className="rounded-[24px] bg-[#edf1f4] border border-[#dde5ed] p-7"
            >
              <h2 className="font-heading font-semibold text-[22px] text-[#1d1d1d]">
                {feat.title}
              </h2>
              <p className="mt-2.5 font-display font-medium text-[15.5px] leading-[1.5em] text-[#4d585f]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="space-y-6">
          <h2 className="font-heading font-semibold text-[32px] md:text-[42px] text-center text-[#1d1d1d]">
            How Hypocrates Compares
          </h2>

          <div className="rounded-[26px] border border-[#dde5ed] bg-white overflow-x-auto shadow-[0_14px_40px_rgba(0,0,0,0.04)]">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#edf1f4] border-b border-[#dde5ed]">
                  <th className="py-4 px-6 font-heading font-semibold text-[16px] text-[#1d1d1d]">
                    Capabilities
                  </th>
                  <th className="py-4 px-6 font-heading font-semibold text-[16px] text-[#4d585f]">
                    Legacy Clinic Software
                  </th>
                  <th className="py-4 px-6 font-heading font-semibold text-[16px] text-[#3b82f6]">
                    Hypocrates Platform
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b last:border-b-0 border-[#edf1f4]"
                  >
                    <td className="py-4 px-6 font-display font-semibold text-[15px] text-[#1d1d1d]">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-display font-medium text-[15px] text-[#4d585f]">
                      <span className="text-[#f51c23] font-bold mr-2">✗</span>
                      {row.traditional}
                    </td>
                    <td className="py-4 px-6 font-display font-semibold text-[15px] text-[#1d1d1d] bg-[#3b82f6]/[0.04]">
                      <span className="text-[#10b981] font-bold mr-2">✓</span>
                      {row.hypocrates}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CoreFeaturesSection />
      <MobileCompanionSection />
    </SubpageShell>
  );
}
