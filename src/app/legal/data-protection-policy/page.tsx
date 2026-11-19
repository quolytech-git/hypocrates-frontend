import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/ui/LegalDocumentView";
import { legalDocs } from "@/lib/hypocrates-data";

export const metadata: Metadata = {
  title: "Data Protection Policy | Hypocrates",
  description: legalDocs["data-protection-policy"].subtitle,
};

export default function DataProtectionPolicyPage() {
  return <LegalDocumentView doc={legalDocs["data-protection-policy"]} />;
}
