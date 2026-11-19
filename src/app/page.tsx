import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientsAndBeforeAfter } from "@/components/sections/ClientsAndBeforeAfter";
import { CoreFeaturesSection } from "@/components/sections/CoreFeaturesSection";
import { OverviewAndHowItWorks } from "@/components/sections/OverviewAndHowItWorks";
import { SecurityAndUseCases } from "@/components/sections/SecurityAndUseCases";
import { IntegrationsAndStats } from "@/components/sections/IntegrationsAndStats";
import { TestimonialsPricingFaq } from "@/components/sections/TestimonialsPricingFaq";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      <Navbar />
      <main>
        <HeroSection />
        <ClientsAndBeforeAfter />
        <CoreFeaturesSection />
        <OverviewAndHowItWorks />
        <SecurityAndUseCases />
        <IntegrationsAndStats />
        <TestimonialsPricingFaq />
      </main>
      <Footer />
    </div>
  );
}
