import type { Metadata } from "next";
import Link from "next/link";
import { SubpageShell } from "@/components/SubpageShell";
import { trustCenterCards } from "@/lib/hypocrates-data";
import {
  ShieldCheckIcon as ShieldCheck,
  ArrowRightIcon as ArrowRight,
  LockIcon as Lock,
} from "@/components/ui/ClinicalIcons";

export const metadata: Metadata = {
  title: "Trust & Compliance Center | Hypocrates",
  description:
    "Explore Hypocrates HIPAA, GDPR, SOC 2 security infrastructure, subprocessors, disaster recovery, and business continuity standards.",
};

export default function ComplianceCenterPage() {
  return (
    <SubpageShell
      badge="Trust Center"
      title="Healthcare security, privacy, and resilience by design"
      subtitle="Hypocrates isolates every clinic tenant inside encrypted infrastructure built to exceed HIPAA and GDPR healthcare standards."
    >
      <div className="rounded-[24px] bg-[#1d1d1d] text-white p-7 sm:p-9 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-2xl bg-[#10b981]/20 text-[#10b981] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[12px] uppercase tracking-[0.08em] text-[#10b981] font-semibold mb-1">
              Operational Security Posture
            </div>
            <h2 className="text-[20px] font-semibold">
              AES-256 at rest · TLS 1.3 in transit · Zero-Data-Retention AI
            </h2>
            <p className="text-[14px] text-white/75 mt-1 max-w-[620px]">
              All voice scribing pipelines operate under zero-data-retention BAA
              terms. Patient PHI is isolated per tenant and audited continuously.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full bg-white/10 border border-white/15 shrink-0 self-start md:self-center">
          <Lock className="w-3.5 h-3.5 text-[#10b981]" />
          <span>99.9% SLA Uptime</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trustCenterCards.map((card) => (
          <Link
            key={card.title}
            href={card.link}
            className="group rounded-[24px] bg-white p-7 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:border-[#3b82f6]/50 hover:shadow-[0_14px_32px_rgba(59,130,246,0.08)] transition-all flex flex-col"
          >
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.06em] bg-[#edf1f4] text-[#3a424b]">
                {card.tag}
              </span>
              <ArrowRight className="w-4 h-4 text-[#8c96a0] group-hover:text-[#3b82f6] group-hover:translate-x-0.5 transition-all" />
            </div>
            <h3 className="text-[19px] font-semibold text-[#1d1d1d] mb-2 group-hover:text-[#3b82f6] transition-colors">
              {card.title}
            </h3>
            <p className="text-[14px] leading-[1.6] text-[#5c6670]">
              {card.desc}
            </p>
          </Link>
        ))}
      </div>
    </SubpageShell>
  );
}
