import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/ui/LegalDocumentView";
import { legalDocs } from "@/lib/hypocrates-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Hypocrates",
  description: legalDocs["privacy-policy"].subtitle,
};

export default function PrivacyPolicyPage() {
  return <LegalDocumentView doc={legalDocs["privacy-policy"]} />;
}
