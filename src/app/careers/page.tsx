import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import { SecondaryPillButton } from "@/components/ui/ActionButtons";
import {
  HeartPulseIcon as HeartPulse,
  GlobeIcon as Globe2,
  SparklesIcon as Sparkles,
  BriefcaseIcon as Briefcase,
} from "@/components/ui/ClinicalIcons";

export const metadata: Metadata = {
  title: "Careers at Hypocrates | Clinical AI & Engineering",
  description:
    "Explore our mission, remote-first autonomy, and clinical-technology culture at Hypocrates.",
};

const pillars = [
  {
    icon: HeartPulse,
    title: "Impact-First Mission",
    description:
      "Every engineering sprint and clinical workflow directly reduces charting fatigue and returns hours back to direct patient care across 7 medical specialties.",
  },
  {
    icon: Globe2,
    title: "Distributed Autonomy",
    description:
      "We operate with high ownership across medical advisors, AI researchers, and product engineers working seamlessly across European and global time zones.",
  },
  {
    icon: Sparkles,
    title: "Clinical-Tech Growth",
    description:
      "Work alongside board-certified specialists, HIPAA/GDPR security architects, and systems designers building mission-critical healthcare software.",
  },
];

export default function CareersPage() {
  return (
    <SubpageShell
      badge="Careers"
      title="Build the clinical operating system of the future"
      subtitle="Join clinicians, AI engineers, and healthcare operators transforming specialty care delivery."
      backHref="/about"
      backLabel="Back to About"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="rounded-[24px] bg-white p-7 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="text-[19px] font-semibold text-[#1d1d1d] mb-2">
                {pillar.title}
              </h2>
              <p className="text-[14.5px] leading-[1.6] text-[#5c6670]">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="rounded-[24px] bg-white p-8 sm:p-10 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)] text-center max-w-[760px] mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-[#edf1f4] text-[#1d1d1d] flex items-center justify-center mx-auto mb-4">
          <Briefcase className="w-5 h-5" />
        </div>
        <h3 className="text-[22px] font-semibold text-[#1d1d1d] mb-2">
          Open Positions
        </h3>
        <p className="text-[15px] leading-[1.6] text-[#5c6670] mb-6">
          Currently, there are no open positions listed on our board, as our core
          product and clinical implementation cohorts are staffed. If you bring
          deep expertise in clinical NLP, FHIR interoperability, or medical
          UX, reach out anytime.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <SecondaryPillButton href="/contact" label="Introduce Yourself" variant="dark" />
        </div>
      </div>
    </SubpageShell>
  );
}
