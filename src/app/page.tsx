import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientsAndBeforeAfter } from "@/components/sections/ClientsAndBeforeAfter";
import { CoreFeaturesSection } from "@/components/sections/CoreFeaturesSection";
import { SpecializedClinicsSection } from "@/components/hypocrates/SpecializedClinicsSection";
import { LiveClinicDashboardsShowcase } from "@/components/hypocrates/LiveClinicDashboardsShowcase";
import { PatientBookingPortalSection } from "@/components/hypocrates/PatientBookingPortalSection";
import { MobileCompanionSection } from "@/components/hypocrates/MobileCompanionSection";
import { OverviewAndHowItWorks } from "@/components/sections/OverviewAndHowItWorks";
import { SecurityAndUseCases } from "@/components/sections/SecurityAndUseCases";
import { IntegrationsAndStats } from "@/components/sections/IntegrationsAndStats";
import { HippocratesHeritageSection } from "@/components/hypocrates/HippocratesHeritageSection";
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
        <SpecializedClinicsSection includeSimulator />
        <LiveClinicDashboardsShowcase />
        <PatientBookingPortalSection />
        <MobileCompanionSection />
        <OverviewAndHowItWorks />
        <HippocratesHeritageSection />
        <SecurityAndUseCases />
        <IntegrationsAndStats />
        <TestimonialsPricingFaq />
      </main>
      <Footer />
    </div>
  );
}
