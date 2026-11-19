import React from "react";
import { SubpageShell } from "@/components/SubpageShell";

export default function PrivacyPolicyPage() {
  return (
    <SubpageShell
      badge="Legal"
      title="Privacy Policy"
      subtitle="Your data is protected with industry-standard encryption and a privacy-first architecture."
    >
      <div className="max-w-[780px] mx-auto px-5">
        <div className="rounded-[24px] bg-[#edf1f4] border border-[#dde5ed] p-8 space-y-5 font-display font-medium text-[16px] leading-[1.6em] text-[#4d585f]">
          <p>
            FintechX protects your personal and financial data using end-to-end
            encryption in transit and at rest. We never sell your portfolio
            holdings or personal information to third parties.
          </p>
          <p>
            Account connections operate via read-only OAuth tokens and
            bank-grade tokenization so your credentials are never stored on our
            servers.
          </p>
          <p>
            For data deletion or compliance inquiries, please reach out to{" "}
            <a
              href="mailto:support@yourbrand.com"
              className="text-[#3b82f6] underline"
            >
              support@yourbrand.com
            </a>
            .
          </p>
        </div>
      </div>
    </SubpageShell>
  );
}

