import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { SubmissionForm } from "@/components/SubmissionForm";

export default function WaitlistPage() {
  return (
    <SubpageShell
      badge="Early Access"
      title="Get priority access to new Hypocrates AI modules"
      subtitle="Join our clinical rollout waitlist for upcoming specialty engines, PACS connectors, and automated revenue cycle tools."
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

