import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import {
  PrimaryGlassButton,
  SecondaryPillButton,
} from "@/components/ui/ActionButtons";
import {
  BuildingIcon as Building2,
  CpuIcon as Cpu,
  CompassIcon as Compass,
  CheckCircleIcon as CheckCircle2,
} from "@/components/ui/ClinicalIcons";

export const metadata: Metadata = {
  title: "Partner Program | Hypocrates Ecosystem",
  description:
    "Collaborate with Hypocrates as a Clinical Integrator, Technology Partner, or Strategic Advisor.",
};

const tracks = [
  {
    icon: Building2,
    title: "Clinical Integrators",
    description:
      "Healthcare IT consultancies, multi-clinic rollout teams, and revenue-cycle specialists deploying Hypocrates across regional practices.",
    bullets: [
      "Dedicated sandbox environments & migration tooling",
      "Certified HL7 / FHIR onboarding playbooks",
      "Recurring implementation & managed service incentives",
    ],
  },
  {
    icon: Cpu,
    title: "Technology Partners",
    description:
      "Diagnostic hardware makers, imaging PACS vendors, laboratory networks, and telehealth infrastructure providers.",
    bullets: [
      "Bi-directional webhook & REST API certification",
      "Joint solution validation across 7 specialties",
      "Co-marketing inside the Hypocrates Integrations directory",
    ],
  },
  {
    icon: Compass,
    title: "Strategic Advisors",
    description:
      "Chief medical officers, specialty society leaders, and clinical compliance experts shaping next-generation specialty workflows.",
    bullets: [
      "Early access to specialty AI copilot roadmaps",
      "Clinical safety & documentation rubric workshops",
      "Executive briefings and advisory summits",
    ],
  },
];

export default function PartnerProgramPage() {
  return (
    <SubpageShell
      badge="Partner Ecosystem"
      title="Grow the modern clinical network with Hypocrates"
      subtitle="We partner with medical integrators, diagnostic hardware makers, and clinical leaders to unify specialty care."
      backHref="/about"
      backLabel="Back to About"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {tracks.map((track) => {
          const Icon = track.icon;
          return (
            <div
              key={track.title}
              className="rounded-[24px] bg-white p-7 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="text-[20px] font-semibold text-[#1d1d1d] mb-2">
                {track.title}
              </h2>
              <p className="text-[14.5px] leading-[1.6] text-[#5c6670] mb-5">
                {track.description}
              </p>
              <ul className="mt-auto flex flex-col gap-2.5 pt-4 border-t border-[#eef2f6]">
                {track.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13.5px] text-[#3a424b]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="rounded-[24px] bg-[#1d1d1d] text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-[580px]">
          <h3 className="text-[24px] font-semibold tracking-tight mb-2">
            Ready to apply to the Hypocrates Partner Program?
          </h3>
          <p className="text-[14.5px] text-white/75 leading-[1.6]">
            Tell us which specialty domains or technical integrations you
            support and our partnerships team will schedule an architecture
            review.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <PrimaryGlassButton href="/contact" label="Become a Partner" />
          <SecondaryPillButton
            href="/integrations"
            label="View Integrations"
            variant="white"
          />
        </div>
      </div>
    </SubpageShell>
  );
}
