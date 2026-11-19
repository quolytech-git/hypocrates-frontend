import React from "react";
import Link from "next/link";
import { LegalDoc } from "@/lib/hypocrates-data";
import { SubpageShell } from "@/components/SubpageShell";

export function LegalDocumentView({ doc }: { doc: LegalDoc }) {
  return (
    <SubpageShell
      badge={doc.badge}
      title={doc.title}
      subtitle={doc.subtitle}
      backHref="/compliance"
      backLabel="← Back to Trust Center"
    >
      <div className="max-w-[1080px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sticky TOC Sidebar */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28 rounded-[24px] bg-[#edf1f4] border border-[#dde5ed] p-6 space-y-5">
          <div>
            <p className="font-display font-semibold text-[12px] uppercase tracking-wider text-[#4d585f]">
              Contents
            </p>
            <ul className="mt-3 space-y-2">
              {doc.sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className="font-display font-medium text-[14.5px] text-[#4d585f] hover:text-[#3b82f6] transition-colors"
                  >
                    {sec.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-[#dde5ed]">
            <p className="font-display font-semibold text-[13px] text-[#1d1d1d]">
              Questions?
            </p>
            <a
              href={`mailto:${doc.contactEmail}`}
              className="mt-1 inline-block font-display font-semibold text-[14px] text-[#3b82f6] hover:underline"
            >
              {doc.contactEmail}
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-8 space-y-6">
          {doc.sections.map((sec) => (
            <section
              key={sec.id}
              id={sec.id}
              className="scroll-mt-28 rounded-[24px] bg-white border border-[#dde5ed] p-7 md:p-8 space-y-3"
            >
              <h2 className="font-heading font-semibold text-[22px] text-[#1d1d1d]">
                {sec.title}
              </h2>
              {sec.content.map((p, idx) => (
                <p
                  key={idx}
                  className="font-display font-medium text-[15.5px] leading-[1.6em] text-[#4d585f]"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* Related Policies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {doc.relatedLinks.map((rel) => (
              <Link
                key={rel.href}
                href={rel.href}
                className="rounded-[20px] bg-[#edf1f4] border border-[#dde5ed] p-6 hover:bg-white transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading font-semibold text-[18px] text-[#1d1d1d]">
                    {rel.label}
                  </h3>
                  <p className="mt-1.5 font-display text-[14px] text-[#4d585f]">
                    {rel.desc}
                  </p>
                </div>
                <span className="mt-4 font-display font-semibold text-[14px] text-[#3b82f6]">
                  Read policy →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SubpageShell>
  );
}

