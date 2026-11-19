import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/ui/LegalDocumentView";
import { legalDocs } from "@/lib/hypocrates-data";

export const metadata: Metadata = {
  title: "Terms of Service | Hypocrates",
  description: legalDocs["terms-of-service"].subtitle,
};

export default function TermsOfServicePage() {
  return <LegalDocumentView doc={legalDocs["terms-of-service"]} />;
}
