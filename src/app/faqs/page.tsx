import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { TestimonialsPricingFaq } from "@/components/sections/TestimonialsPricingFaq";

export default function FaqsPage() {
  return (
    <SubpageShell
      badge="FAQs"
      title="Frequently asked questions"
      subtitle="Everything you need to know about Hypocrates security, specialty tenants, ambient AI scribing, and pricing."
    >
      <TestimonialsPricingFaq />
    </SubpageShell>
  );
}

