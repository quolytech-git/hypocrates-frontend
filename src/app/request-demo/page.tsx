import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { DemoPricingConfigurator } from "@/components/hypocrates/DemoPricingConfigurator";

export default function RequestDemoPage() {
  return (
    <SubpageShell
      badge="Live Demo"
      title="Invest in your Clinic’s Focus. Delegate the Documentation."
      subtitle="Select your clinical domain, configure your tier, and schedule a personalized Hypocrates walkthrough."
    >
      <DemoPricingConfigurator />
    </SubpageShell>
  );
}
