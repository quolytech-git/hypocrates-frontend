import type { Metadata } from "next";
import Link from "next/link";
import { SubpageShell } from "@/components/SubpageShell";
import { resourceItems } from "@/lib/hypocrates-data";
import {
  ArrowRightIcon as ArrowRight,
  BookOpenIcon as BookOpen,
  CalendarIcon as Calendar,
  ClockIcon as Clock,
} from "@/components/ui/ClinicalIcons";

export const metadata: Metadata = {
  title: "Clinical Blog & Field Notes | Hypocrates",
  description:
    "Clinical guides, specialty practice case studies, and engineering updates from Hypocrates.",
};

export default function BlogPage() {
  return (
    <SubpageShell
      badge="Blog & Field Notes"
      title="Clinical operations research & product dispatches"
      subtitle="Implementation playbooks, HIPAA & GDPR security checklists, and specialty workflow case studies from Hypocrates practices."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {resourceItems.map((item) => (
          <article
            key={item.id}
            className="rounded-[24px] bg-white p-7 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col"
          >
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.06em] bg-[#3b82f6]/10 text-[#3b82f6]">
                <BookOpen className="w-3 h-3" />
                {item.categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1 text-[12px] text-[#5c6670]">
                <Clock className="w-3.5 h-3.5" />
                {item.readTime}
              </span>
            </div>

            <h2 className="text-[19px] font-semibold text-[#1d1d1d] leading-[1.3] mb-2">
              {item.title}
            </h2>
            <p className="text-[14px] text-[#5c6670] leading-[1.6] mb-5">
              {item.desc}
            </p>

            <ul className="flex flex-col gap-2 text-[13px] text-[#3a424b] mb-6 pt-4 border-t border-[#eef2f6]">
              {item.highlights.map((h) => (
                <li key={h} className="leading-[1.5]">
                  • {h}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between pt-3 border-t border-[#eef2f6] text-[12.5px] text-[#5c6670]">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </span>
              <Link
                href="/resources"
                className="inline-flex items-center gap-1 font-semibold text-[#3b82f6] hover:underline"
              >
                Read in Library
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SubpageShell>
  );
}
