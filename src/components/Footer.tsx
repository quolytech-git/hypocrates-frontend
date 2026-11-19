"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PrimaryGlassButton, SecondaryPillButton } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";
import { HypocratesLogo } from "@/components/HypocratesLogo";

const productLinks = [
  { label: "Platform Overview", href: "/platform" },
  { label: "Patient Booking Portal", href: "/#patient-booking" },
  { label: "Features & Modules", href: "/features" },
  { label: "Integrations", href: "/integrations" },
  { label: "Live Demos", href: "/demo" },
];

const solutionsLinks = [
  { label: "Physiotherapy", href: "/solutions/physiotherapy" },
  { label: "Hair Transplant", href: "/solutions/hair-transplant" },
  { label: "Gynecology", href: "/solutions/gynecology" },
  { label: "Dermatology", href: "/solutions/dermatology" },
  { label: "Dental Clinics", href: "/solutions/dental" },
  { label: "Plastic Surgery", href: "/solutions/plastic-surgery" },
  { label: "ENT Clinics", href: "/solutions/ent" },
  { label: "Nutrition Clinics", href: "/solutions/nutrition" },
  { label: "Eye Centers", href: "/solutions/eye-center" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Partner Program", href: "/partner-program" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms-of-service" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Data Protection", href: "/legal/data-protection-policy" },
  { label: "HIPAA Compliance", href: "/legal/hipaa-compliance" },
  { label: "GDPR Compliance", href: "/legal/gdpr-compliance" },
  { label: "Security", href: "/legal/security" },
  { label: "Trust Center", href: "/compliance" },
];

export function Footer() {
  const pathname = usePathname();

  const renderLinkList = (
    items: { label: string; href: string }[],
  ) => (
    <ul className="space-y-2.5">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`font-display font-medium text-[15px] leading-[1.35em] transition-colors duration-[300ms] ${
                isActive
                  ? "text-[#3b82f6]"
                  : "text-[#4d585f] hover:text-[#3b82f6]"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <footer className="relative overflow-hidden pt-28 md:pt-36">
      {/* Mountain Sunrise Meadow Background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/images/prefooter-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.65) 18%, rgba(255,255,255,0) 45%)",
          }}
        />
      </div>

      {/* Pre-Footer CTA */}
      <div className="relative z-10 max-w-[780px] mx-auto px-6 text-center pb-20 md:pb-24">
        <SpringReveal>
          <h2 className="font-heading font-semibold text-[34px] md:text-[48px] leading-[1.15em] tracking-[-1px] text-[#1d1d1d]">
            Transform your clinic into an AI-powered healthcare system
          </h2>
          <p className="mt-4 font-display font-medium text-[18px] leading-[1.4em] text-[#4d585f] max-w-[560px] mx-auto">
            Reclaim 12+ hours weekly per practitioner with ambient SOAP scribing,
            multi-location tenant isolation, and orchestrated clinical AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryGlassButton
              href="/demo"
              label="Request Demo"
              variant="blue"
            />
            <SecondaryPillButton
              href="/contact"
              label="Contact Sales"
              variant="white"
            />
          </div>
        </SpringReveal>
      </div>

      {/* White Rounded Footer Card */}
      <div className="relative z-10 max-w-[1160px] mx-auto px-4 md:px-6">
        <div className="bg-white rounded-t-[30px] px-7 md:px-14 pt-12 md:pt-14 pb-9 shadow-[0_-10px_40px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            {/* Brand + Support Email */}
            <div className="md:col-span-4 flex flex-col items-start">
              <Link href="/" aria-label="Hypocrates Home">
                <HypocratesLogo size="xl" />
              </Link>
              <p className="mt-4 font-display font-medium text-[15px] leading-[1.45em] text-[#4d585f] max-w-[290px]">
                The AI Management System for Modern Healthcare Clinics.
              </p>
              <a
                href="mailto:sales@hypocrates.ai"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-[#1d1d1d] hover:bg-[#323232] text-white font-display font-semibold text-[15px] px-7 py-3.5 transition-colors duration-300"
              >
                sales@hypocrates.ai
              </a>
            </div>

            {/* Product */}
            <div className="md:col-span-2">
              <h3 className="font-display font-semibold text-[17px] leading-[1.3em] text-[#1d1d1d] mb-4">
                Product
              </h3>
              {renderLinkList(productLinks)}
            </div>

            {/* Solutions */}
            <div className="md:col-span-2">
              <h3 className="font-display font-semibold text-[17px] leading-[1.3em] text-[#1d1d1d] mb-4">
                Solutions
              </h3>
              {renderLinkList(solutionsLinks)}
            </div>

            {/* Company */}
            <div className="md:col-span-2">
              <h3 className="font-display font-semibold text-[17px] leading-[1.3em] text-[#1d1d1d] mb-4">
                Company
              </h3>
              {renderLinkList(companyLinks)}
            </div>

            {/* Legal & Trust */}
            <div className="md:col-span-2">
              <h3 className="font-display font-semibold text-[17px] leading-[1.3em] text-[#1d1d1d] mb-4">
                Legal &amp; Trust
              </h3>
              {renderLinkList(legalLinks)}
            </div>
          </div>

          {/* Clinical Disclaimer */}
          <div className="mt-10 pt-6 border-t border-[#edf1f4]">
            <p className="font-display font-medium text-[12.5px] leading-[1.55em] text-[#4d585f] text-center max-w-[920px] mx-auto">
              <strong className="text-[#1d1d1d]">Disclaimer:</strong> Hypocrates is an
              AI-powered administrative assistant designed to optimize clinical
              documentation. The platform does not provide medical advice,
              diagnosis, or treatment. Licensed healthcare professionals are solely
              responsible for reviewing and verifying the accuracy, completeness,
              and appropriateness of all documentation, notes, and records
              generated or processed by the system before clinical use.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="mt-6 pt-6 border-t border-[#edf1f4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-display font-medium text-[14px] text-[#4d585f]">
              &copy; 2026 Hypocrates. All rights reserved.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                {
                  name: "Facebook",
                  href: "https://facebook.com/",
                  icon: "/images/social-fb.svg",
                },
                {
                  name: "Instagram",
                  href: "https://instagram.com/",
                  icon: "/images/social-ig.svg",
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com/",
                  icon: "/images/social-li.svg",
                },
                {
                  name: "Twitter",
                  href: "https://twitter.com/",
                  icon: "/images/social-x.svg",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-[10px] bg-[#edf1f4] hover:bg-[#dde5ed] flex items-center justify-center transition-colors duration-200"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-4 h-4 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
