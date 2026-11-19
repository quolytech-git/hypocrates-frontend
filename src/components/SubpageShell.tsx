import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreTitleBadge } from "@/components/ui/ActionButtons";

interface SubpageShellProps {
  badge: string;
  title: string;
  subtitle: string;
  backHref?: string;
  backLabel?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export function SubpageShell({
  badge,
  title,
  subtitle,
  backHref,
  backLabel,
  actions,
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
          <div className="relative z-10 max-w-[860px] mx-auto px-5 text-center">
            {backHref && backLabel && (
              <div className="mb-5">
                <Link
                  href={backHref}
                  className="inline-flex items-center gap-1.5 font-display font-semibold text-[14px] text-[#3b82f6] hover:text-[#406ae4] transition-colors"
                >
                  {backLabel}
                </Link>
              </div>
            )}
            <PreTitleBadge text={badge} variant="white" />
            <h1 className="mt-5 font-heading font-semibold text-[40px] sm:text-[54px] md:text-[68px] leading-[1.08em] tracking-[-1.4px] text-[#1d1d1d]">
              {title}
            </h1>
            <p className="mt-5 font-display font-medium text-[18px] md:text-[20px] leading-[1.4em] text-[#4d585f] max-w-[640px] mx-auto">
              {subtitle}
            </p>
            {actions && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {actions}
              </div>
            )}
          </div>
        </section>

        <section className="pb-16">{children}</section>
      </main>
      <Footer />
    </div>
  );
}
