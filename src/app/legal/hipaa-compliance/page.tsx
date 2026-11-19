import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/ui/LegalDocumentView";
import { legalDocs } from "@/lib/hypocrates-data";

export const metadata: Metadata = {
  title: "HIPAA Compliance | Hypocrates",
  description: legalDocs["hipaa-compliance"].subtitle,
};

export default function HipaaCompliancePage() {
  return <LegalDocumentView doc={legalDocs["hipaa-compliance"]} />;
}
