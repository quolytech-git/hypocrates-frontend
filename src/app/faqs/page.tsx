import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { TestimonialsPricingFaq } from "@/components/sections/TestimonialsPricingFaq";

export default function FaqsPage() {
  return (
    <SubpageShell
      badge="FAQs"
      title="Frequently asked questions"
      subtitle="Everything you need to know about FintechX security, integrations, AI insights, and billing."
    >
      <TestimonialsPricingFaq />
    </SubpageShell>
  );
}

