import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { OverviewAndHowItWorks } from "@/components/sections/OverviewAndHowItWorks";
import { CoreFeaturesSection } from "@/components/sections/CoreFeaturesSection";
import { IntegrationsAndStats } from "@/components/sections/IntegrationsAndStats";
import { TestimonialsPricingFaq } from "@/components/sections/TestimonialsPricingFaq";
import { Footer } from "@/components/Footer";

export default function HomeTwoPage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      <Navbar />
      <main>
        <HeroSection />
        <CoreFeaturesSection />
        <OverviewAndHowItWorks />
        <IntegrationsAndStats />
        <TestimonialsPricingFaq />
      </main>
      <Footer />
    </div>
  );
}

