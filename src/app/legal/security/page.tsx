import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/ui/LegalDocumentView";
import { legalDocs } from "@/lib/hypocrates-data";

export const metadata: Metadata = {
  title: "Security Architecture | Hypocrates",
  description: legalDocs["security"].subtitle,
};

export default function LegalSecurityPage() {
  return <LegalDocumentView doc={legalDocs["security"]} />;
}
