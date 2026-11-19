import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { platformEngines } from "@/lib/hypocrates-data";
import { PrimaryGlassButton, SecondaryPillButton } from "@/components/ui/ActionButtons";
import { LiveClinicDashboardsShowcase } from "@/components/hypocrates/LiveClinicDashboardsShowcase";
import { PatientBookingPortalSection } from "@/components/hypocrates/PatientBookingPortalSection";
import { MobileCompanionSection } from "@/components/hypocrates/MobileCompanionSection";

export default function PlatformPage() {
  return (
    <SubpageShell
      badge="Platform Overview"
      title="The AI Operating System for Modern Healthcare"
      subtitle="Hypocrates integrates specialized artificial intelligence engines to automate manual workflows, allowing your staff to focus on high-quality patient care."
      actions={
        <>
          <PrimaryGlassButton href="/demo" label="Request Demo" variant="blue" />
          <SecondaryPillButton
            href="/solutions"
            label="Explore Solutions"
            variant="white"
          />
        </>
      }
    >
      <div className="max-w-[1160px] mx-auto px-5 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platformEngines.map((engine) => (
            <div
              key={engine.title}
              className="rounded-[26px] bg-[#edf1f4] border border-[#dde5ed] p-8 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-white text-[#3b82f6] font-display font-semibold text-[12.5px]">
                  {engine.badge}
                </span>
                <h2 className="mt-4 font-heading font-semibold text-[28px] text-[#1d1d1d]">
                  {engine.title}
                </h2>
                <p className="mt-2.5 font-display font-medium text-[16px] leading-[1.5em] text-[#4d585f]">
                  {engine.desc}
                </p>

                <ul className="mt-6 pt-5 border-t border-[#dde5ed] space-y-2.5">
                  {engine.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 font-display font-medium text-[15px] text-[#1d1d1d]"
                    >
                      <span className="text-[#10b981] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-[28px] bg-gradient-to-b from-[#323232] to-[#000000] text-white p-8 md:p-12 text-center space-y-5">
          <h2 className="font-heading font-semibold text-[28px] md:text-[38px] leading-[1.15em]">
            Ready to transform your clinic operations?
          </h2>
          <p className="font-display font-medium text-[17px] text-white/75 max-w-[560px] mx-auto">
            Deploy the Hypocrates AI platform and start optimizing your patient
            and clinician experience today.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <PrimaryGlassButton href="/demo" label="Request Demo" variant="blue" />
            <SecondaryPillButton
              href="/solutions"
              label="Explore Solutions"
              variant="white"
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <LiveClinicDashboardsShowcase />
        <PatientBookingPortalSection />
        <MobileCompanionSection />
      </div>
    </SubpageShell>
  );
}

