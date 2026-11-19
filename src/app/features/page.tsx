import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { CoreFeaturesSection } from "@/components/sections/CoreFeaturesSection";
import { SecurityAndUseCases } from "@/components/sections/SecurityAndUseCases";

export default function FeaturesPage() {
  return (
    <SubpageShell
      badge="Features"
      title="Everything you need to invest confidently"
      subtitle="Explore real-time AI insights, predictive risk analysis, automated alerts, and portfolio tracking."
    >
      <CoreFeaturesSection />
      <SecurityAndUseCases />
    </SubpageShell>
  );
}

