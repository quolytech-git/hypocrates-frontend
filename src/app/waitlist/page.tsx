import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { SubmissionForm } from "@/components/SubmissionForm";

export default function WaitlistPage() {
  return (
    <SubpageShell
      badge="Waitlist"
      title="Get early access to new AI tools"
      subtitle="Join the priority waitlist for upcoming institutional analytics and automated rebalancing features."
    >
      <div className="max-w-[640px] mx-auto px-5">
        <SubmissionForm
          type="waitlist"
          submitLabel="Join the waitlist"
          showMessage={false}
        />
      </div>
    </SubpageShell>
  );
}

