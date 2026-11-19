import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/ui/LegalDocumentView";
import { legalDocs } from "@/lib/hypocrates-data";

export const metadata: Metadata = {
  title: "Cookie Policy | Hypocrates",
  description: legalDocs["cookie-policy"].subtitle,
};

export default function CookiePolicyPage() {
  return <LegalDocumentView doc={legalDocs["cookie-policy"]} />;
}
