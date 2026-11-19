import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import {
  DatabaseBackupIcon as DatabaseBackup,
  RefreshIcon as RefreshCw,
  ShieldCheckIcon as ShieldAlert,
} from "@/components/ui/ClinicalIcons";

export const metadata: Metadata = {
  title: "Disaster Recovery | Hypocrates Trust Center",
  description:
    "Continuous encrypted backups, cross-region failover, and clinical Recovery Point and Recovery Time Objectives.",
};

const metrics = [
  { label: "Recovery Point Objective (RPO)", value: "≤ 24 hours" },
  { label: "Recovery Time Objective (RTO)", value: "≤ 4 hours" },
  { label: "Backup Encryption", value: "AES-256 + KMS" },
];

const controls = [
  {
    icon: DatabaseBackup,
    title: "Automated Encrypted Snapshots",
    body: "Primary multi-tenant databases undergo continuous point-in-time recovery (PITR) logging paired with daily immutable snapshots replicated across geographically isolated availability zones.",
  },
  {
    icon: RefreshCw,
    title: "Cross-Region Failover Drills",
    body: "Engineering conducts scheduled quarterly restoration simulations verifying schema integrity, isolated tenant decryption keys, and clinical imaging blob availability within target RTO bounds.",
  },
  {
    icon: ShieldAlert,
    title: "Zero-Tamper Audit Trail Preservation",
    body: "Audit logs capturing authentication events, clinical chart modifications, and role permission changes are written to append-only storage separate from transactional compute clusters.",
  },
];

export default function DisasterRecoveryPage() {
  return (
    <SubpageShell
      badge="Trust Center · Availability"
      title="Disaster Recovery & Clinical Resilience"
      subtitle="Engineered so medical records, imaging, and schedules remain recoverable across infrastructure disruptions."
      backHref="/compliance"
      backLabel="Back to Trust Center"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-[20px] bg-white p-6 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
          >
            <div className="text-[12.5px] font-medium text-[#5c6670] mb-1">
              {m.label}
            </div>
            <div className="text-[28px] font-semibold tracking-tight text-[#1d1d1d]">
              {m.value}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {controls.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-[24px] bg-white p-7 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center mb-4">
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
    </SubpageShell>
  );
}
