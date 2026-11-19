import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { SubmissionForm } from "@/components/SubmissionForm";

export default function ContactPage() {
  return (
    <SubpageShell
      badge="Contact"
      title="Talk to our team"
      subtitle="Start your 7-day free trial or ask about custom plans for financial teams and organizations."
    >
      <div className="max-w-[680px] mx-auto px-5">
        <SubmissionForm
          type="contact"
          submitLabel="Send message"
          showCompany
          showMessage
        />
      </div>
    </SubpageShell>
  );
}

