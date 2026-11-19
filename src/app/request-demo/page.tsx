import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { SubmissionForm } from "@/components/SubmissionForm";

export default function RequestDemoPage() {
  return (
    <SubpageShell
      badge="Live Demo"
      title="Request a personalized demo"
      subtitle="See how FintechX unifies portfolio tracking, risk scoring, and real-time AI insights for your team."
    >
      <div className="max-w-[680px] mx-auto px-5 space-y-8">
        <div className="rounded-[24px] border border-[#bababa] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
          <img
            src="/images/overview-dashboard.jpg"
            alt="FintechX Interactive Dashboard Preview"
            className="w-full h-auto block"
          />
        </div>
        <SubmissionForm
          type="demo"
          submitLabel="Schedule live demo"
          showCompany
          showMessage
        />
      </div>
    </SubpageShell>
  );
}

