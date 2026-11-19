"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  CLINIC_ORDER,
  clinicSolutions,
  LIVE_CLINIC_DASHBOARDS,
} from "@/lib/hypocrates-data";
import { PreTitleBadge } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";
import { InteractiveClinicSimulator } from "@/components/hypocrates/InteractiveClinicSimulator";

export function SpecializedClinicsSection({
  includeSimulator = true,
}: {
  includeSimulator?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    const offset = dir === "left" ? -360 : 360;
    trackRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section id="specialties" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-5">
        <SpringReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <PreTitleBadge text="Specialized clinics" variant="slate" />
            <h2 className="mt-5 font-heading font-semibold text-[34px] md:text-[48px] leading-[1.15em] tracking-[-1px] text-[#1d1d1d]">
              Built for specialized medical clinics
            </h2>
            <p className="mt-3 font-display font-medium text-[17px] text-[#4d585f] max-w-[540px]">
              Isolated multi-location clinic tenants with role-specific
              dashboards, custom intake workflows, and orchestrated AI agents.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => scrollTrack("left")}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full bg-[#edf1f4] border border-[#dde5ed] hover:bg-[#1d1d1d] hover:text-white transition-colors font-display font-semibold cursor-pointer"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollTrack("right")}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full bg-[#edf1f4] border border-[#dde5ed] hover:bg-[#1d1d1d] hover:text-white transition-colors font-display font-semibold cursor-pointer"
            >
              →
            </button>
          </div>
        </SpringReveal>

        {/* Horizontal Scrollable Cards */}
        <div
          ref={trackRef}
          className="mt-10 flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory scroll-pl-5"
        >
          {CLINIC_ORDER.map((slug) => {
            const item = clinicSolutions[slug];
            const livePortal = LIVE_CLINIC_DASHBOARDS.find((d) => d.id === slug);
            return (
              <div
                key={slug}
                className="snap-start shrink-0 w-[84vw] max-w-[345px] rounded-[24px] bg-[#edf1f4] border border-[#dde5ed] p-5 sm:p-7 flex flex-col justify-between transition-transform duration-300 active:scale-[0.99]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white text-[#3b82f6] font-display font-semibold text-[12px]">
                      Sub-Tenant Solution
                    </span>
                    {livePortal && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#047857] font-display font-semibold text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                        Live Demo
                      </span>
                    )}
                  </div>

                  {livePortal && (
                    <a
                      href={livePortal.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block rounded-[16px] overflow-hidden border border-[#dde5ed] bg-[#0e1116] h-[132px] group"
                    >
                      <img
                        src={livePortal.screenshot}
                        alt={livePortal.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  )}

                  <h3 className="mt-4 font-heading font-semibold text-[24px] text-[#1d1d1d]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-display font-medium text-[15px] leading-[1.45em] text-[#4d585f]">
                    {item.showcaseDesc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#dde5ed]">
                    <div className="font-display font-semibold text-[12px] uppercase tracking-wider text-[#1d1d1d] mb-2.5">
                      Key Features
                    </div>
                    <ul className="space-y-2">
                      {item.showcaseFeatures.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2 font-display font-medium text-[14px] text-[#4d585f]"
                        >
                          <span className="text-[#10b981] font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <Link
                    href={`/solutions/${slug}`}
                    className="inline-flex items-center justify-between rounded-full bg-white hover:bg-[#1d1d1d] hover:text-white border border-[#dde5ed] px-5 py-3 font-display font-semibold text-[14px] text-[#1d1d1d] transition-colors"
                  >
                    <span>{item.ctaText}</span>
                    <span>→</span>
                  </Link>
                  {livePortal && (
                    <a
                      href={livePortal.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between rounded-full bg-[#3b82f6]/10 hover:bg-[#3b82f6] hover:text-white border border-[#3b82f6]/25 px-5 py-2.5 font-display font-semibold text-[13px] text-[#3b82f6] transition-colors"
                    >
                      <span>Open Live Dashboard</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {includeSimulator && (
          <div className="mt-14">
            <InteractiveClinicSimulator initialClinic="dental" allowSwitch />
          </div>
        )}
      </div>
    </section>
  );
}

