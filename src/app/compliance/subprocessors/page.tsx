import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import { subprocessors } from "@/lib/hypocrates-data";
import {
  ServerIcon as Server,
  GlobeIcon as Globe,
  ShieldCheckIcon as ShieldCheck,
} from "@/components/ui/ClinicalIcons";

export const metadata: Metadata = {
  title: "Authorized Subprocessors | Hypocrates Trust Center",
  description:
    "Directory of vetted third-party cloud, AI, email, and billing subprocessors used by Hypocrates.",
};

export default function SubprocessorsPage() {
  return (
    <SubpageShell
      badge="Trust Center · Subprocessors"
      title="Authorized Infrastructure Subprocessors"
      subtitle="Hypocrates vets every third-party provider for HIPAA Business Associate Agreement (BAA) readiness, encryption standards, and GDPR compliance."
      backHref="/compliance"
      backLabel="Back to Trust Center"
    >
      <div className="rounded-[24px] bg-white border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)] overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#eef2f6] bg-[#f8fafc] text-[12px] uppercase tracking-[0.06em] text-[#5c6670]">
                <th className="py-4 px-6 font-semibold">Subprocessor</th>
                <th className="py-4 px-6 font-semibold">Clinical & Platform Purpose</th>
                <th className="py-4 px-6 font-semibold">Processing Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eef2f6] text-[14.5px]">
              {subprocessors.map((sub) => (
                <tr key={sub.name} className="hover:bg-[#f8fafc]/70 transition-colors">
                  <td className="py-5 px-6 font-semibold text-[#1d1d1d] whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-[#3b82f6] shrink-0" />
                      <span>{sub.name}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-[#5c6670] leading-[1.55]">
                    {sub.purpose}
                  </td>
                  <td className="py-5 px-6 text-[#3a424b] whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edf1f4] text-[12.5px] font-medium">
                      <Globe className="w-3.5 h-3.5 text-[#3b82f6]" />
                      <span>{sub.location}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-[20px] bg-white p-6 border border-[#dee5ec] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
          <p className="text-[14px] text-[#5c6670]">
            Need a signed Business Associate Agreement (BAA) or subprocessor
            change notifications? Contact{" "}
            <a
              href="mailto:privacy@hypocrates.ai"
              className="text-[#3b82f6] font-medium hover:underline"
            >
              privacy@hypocrates.ai
            </a>
            .
          </p>
        </div>
      </div>
    </SubpageShell>
  );
}
