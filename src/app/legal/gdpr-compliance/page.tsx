import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/ui/LegalDocumentView";
import { legalDocs } from "@/lib/hypocrates-data";

export const metadata: Metadata = {
  title: "GDPR Compliance | Hypocrates",
  description: legalDocs["gdpr-compliance"].subtitle,
};

export default function GdprCompliancePage() {
  return <LegalDocumentView doc={legalDocs["gdpr-compliance"]} />;
}
