import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { integrationCategories } from "@/lib/hypocrates-data";
import { PrimaryGlassButton } from "@/components/ui/ActionButtons";

export default function IntegrationsPage() {
  return (
    <SubpageShell
      badge="Integrations"
      title="Connected Clinic Integrations"
      subtitle="Hypocrates fits directly into your existing infrastructure, communicating securely across legacy EHR channels, diagnostic imaging, wearables, and billing clearinghouses."
      actions={
        <PrimaryGlassButton href="/demo" label="Request Demo" variant="blue" />
      }
    >
      <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrationCategories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-[26px] bg-[#edf1f4] border border-[#dde5ed] p-8 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-heading font-semibold text-[24px] text-[#1d1d1d]">
                {cat.title}
              </h2>
              <p className="mt-2.5 font-display font-medium text-[15.5px] leading-[1.5em] text-[#4d585f]">
                {cat.desc}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#dde5ed] flex flex-wrap gap-2">
              {cat.partners.map((partner) => (
                <span
                  key={partner}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-[#dde5ed] font-display font-semibold text-[13px] text-[#1d1d1d]"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SubpageShell>
  );
}

