import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreTitleBadge } from "@/components/ui/ActionButtons";

interface SubpageShellProps {
  badge: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function SubpageShell({
  badge,
  title,
  subtitle,
  children,
}: SubpageShellProps) {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      <Navbar />
      <main>
        <section className="relative pt-[150px] md:pt-[180px] pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none select-none">
            <img
              src="/images/hero-bg.jpg"
              alt=""
              className="w-full h-full object-cover object-top opacity-45"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, #ffffff 100%)",
              }}
            />
          </div>
          <div className="relative z-10 max-w-[820px] mx-auto px-5 text-center">
            <PreTitleBadge text={badge} variant="white" />
            <h1 className="mt-5 font-heading font-semibold text-[44px] sm:text-[56px] md:text-[72px] leading-[1.1em] tracking-[-1.4px] text-[#1d1d1d]">
              {title}
            </h1>
            <p className="mt-5 font-display font-medium text-[18px] md:text-[20px] leading-[1.4em] text-[#4d585f] max-w-[600px] mx-auto">
              {subtitle}
            </p>
          </div>
        </section>

        <section className="pb-16">{children}</section>
      </main>
      <Footer />
    </div>
  );
}

