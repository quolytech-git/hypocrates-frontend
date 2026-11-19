import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { IntegrationsAndStats } from "@/components/sections/IntegrationsAndStats";

export default function AboutPage() {
  return (
    <SubpageShell
      badge="About FintechX"
      title="Removing the guesswork from investing"
      subtitle="We built FintechX to give individual investors and financial teams clear, data-driven intelligence."
    >
      <IntegrationsAndStats />
    </SubpageShell>
  );
}

