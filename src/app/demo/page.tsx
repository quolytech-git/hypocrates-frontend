import React from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { DemoPricingConfigurator } from "@/components/hypocrates/DemoPricingConfigurator";
import { LiveClinicDashboardsShowcase } from "@/components/hypocrates/LiveClinicDashboardsShowcase";
import { PatientBookingPortalSection } from "@/components/hypocrates/PatientBookingPortalSection";

export default function DemoPage() {
  return (
    <SubpageShell
      badge="Live Demo"
      title="Explore Live Specialty Dashboards & Book Your Walkthrough"
      subtitle="Test our five deployed clinical portals live in your browser or configure a tailored Hypocrates walkthrough for your medical team."
    >
      <LiveClinicDashboardsShowcase />
      <PatientBookingPortalSection />
      <div className="mt-12">
        <DemoPricingConfigurator />
      </div>
    </SubpageShell>
  );
}

