import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { SpecializedClinicsSection } from "@/components/hypocrates/SpecializedClinicsSection";

export default function SolutionsPage() {
  return (
    <SubpageShell
      badge="Solutions"
      title="Tailored Solutions for Every Medical Specialty"
      subtitle="Hypocrates provides clinical workflows, custom intake structures, and specialized AI models built for your exact practice needs."
    >
      <SpecializedClinicsSection includeSimulator />
    </SubpageShell>
  );
}

