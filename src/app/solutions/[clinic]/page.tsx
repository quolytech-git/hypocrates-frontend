import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import {
  CLINIC_ORDER,
  ClinicSlug,
  clinicSolutions,
} from "@/lib/hypocrates-data";
import { SubpageShell } from "@/components/SubpageShell";
import { PrimaryGlassButton, SecondaryPillButton } from "@/components/ui/ActionButtons";
import { SolutionDetailView } from "@/components/hypocrates/SolutionDetailView";

export function generateStaticParams() {
  return CLINIC_ORDER.map((clinic) => ({ clinic }));
}

async function ClinicSolutionContent({
  params,
}: {
  params: Promise<{ clinic: string }>;
}) {
  const { clinic } = await params;
  const solution = clinicSolutions[clinic as ClinicSlug];

  if (!solution) {
    notFound();
  }

  return (
    <SubpageShell
      badge={solution.title}
      title={solution.tenantTitle}
      subtitle={solution.heroSubtitle}
      backHref="/solutions"
      backLabel="← All Specialty Solutions"
      actions={
        <>
          <PrimaryGlassButton
            href="/demo"
            label="Request Live Demo"
            variant="blue"
          />
          <SecondaryPillButton
            href="/contact"
            label="Contact Sales"
            variant="white"
          />
        </>
      }
    >
      <SolutionDetailView solution={solution} />
    </SubpageShell>
  );
}

export default function ClinicSolutionPage({
  params,
}: {
  params: Promise<{ clinic: string }>;
}) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ClinicSolutionContent params={params} />
    </Suspense>
  );
}
