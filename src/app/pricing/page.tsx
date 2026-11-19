import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { TestimonialsPricingFaq } from "@/components/sections/TestimonialsPricingFaq";

export default function PricingPage() {
  return (
    <SubpageShell
      badge="Pricing"
      title="Transparent pricing without hidden fees"
      subtitle="Start with a 7-day free trial. No credit card required, and cancel anytime."
    >
      <TestimonialsPricingFaq />
    </SubpageShell>
  );
}

