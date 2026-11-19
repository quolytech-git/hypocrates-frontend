"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PrimaryGlassButton, SecondaryPillButton } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";

export function Footer() {
  const pathname = usePathname();

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
          <h2 className="font-heading font-semibold text-[36px] md:text-[48px] leading-[1.2em] tracking-[-1px] text-[#1d1d1d]">
            Ready to invest smarter?
          </h2>
          <p className="mt-4 font-display font-medium text-[18px] leading-[1.4em] text-[#4d585f] max-w-[540px] mx-auto">
            Join investors using AI insights and real-time data to track
            portfolios and make better financial decisions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryGlassButton
              href="/pricing"
              label="Start free trial"
              variant="blue"
            />
            <SecondaryPillButton
              href="/request-demo"
              label="Try the live demo"
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
            <div className="md:col-span-5 flex flex-col items-start">
              <Link href="/" aria-label="FintechX Home">
                <img
                  src="/images/logo.svg"
                  alt="FintechX"
                  className="h-[30px] w-auto"
                />
              </Link>
              <p className="mt-4 font-display font-medium text-[16px] leading-[1.45em] text-[#4d585f] max-w-[300px]">
                A modern platform for smarter portfolio tracking and financial
                insights.
              </p>
              <a
                href="mailto:support@yourbrand.com"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-[#1d1d1d] hover:bg-[#323232] text-white font-display font-semibold text-[15px] px-7 py-3.5 transition-colors duration-300"
              >
                support@yourbrand.com
              </a>
            </div>

            {/* Quick links */}
            <div className="md:col-span-2">
              <h3 className="font-display font-medium text-[20px] leading-[1.3em] text-[#1d1d1d] mb-4">
                Quick links
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Features", href: "/#core-features" },
                  { label: "How It Works", href: "/#how-it-works" },
                  { label: "Use Cases", href: "/#use-cases" },
                  { label: "Integrations", href: "/#integrations" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-display font-medium text-[16px] leading-[1.3em] text-[#4d585f] hover:text-[#3b82f6] transition-colors duration-[400ms]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages */}
            <div className="md:col-span-3">
              <h3 className="font-display font-medium text-[20px] leading-[1.3em] text-[#1d1d1d] mb-4">
                Pages
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "Home 2", href: "/home-2", badge: "New" },
                  { label: "Features", href: "/features" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Blog", href: "/blog" },
                  { label: "About", href: "/about" },
                  { label: "Waitlist", href: "/waitlist" },
                ].map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.label} className="flex items-center gap-2">
                      <Link
                        href={item.href}
                        className={`font-display font-medium text-[16px] leading-[1.3em] transition-colors duration-[400ms] ${
                          isActive
                            ? "text-[#3b82f6]"
                            : "text-[#4d585f] hover:text-[#3b82f6]"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.badge && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-black text-white font-display font-semibold text-[12px] leading-[1.3em]">
                          {item.badge}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Support */}
            <div className="md:col-span-2">
              <h3 className="font-display font-medium text-[20px] leading-[1.3em] text-[#1d1d1d] mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "FAQs", href: "/faqs" },
                  { label: "Contact", href: "/contact" },
                  { label: "Changelog", href: "/changelog" },
                  { label: "Privacy Policy", href: "/legal-pages/privacy-policy" },
                  { label: "Request a Demo", href: "/request-demo" },
                ].map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={`font-display font-medium text-[16px] leading-[1.3em] transition-colors duration-[400ms] ${
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
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-[#edf1f4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-display font-medium text-[15px] text-[#4d585f]">
              Designed by{" "}
              <a
                href="https://www.webestica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#3b82f6] transition-colors"
              >
                Webestica
              </a>
              , Powered by{" "}
              <a
                href="https://framer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#3b82f6] transition-colors"
              >
                Framer
              </a>
              .
            </p>
            <div className="flex items-center gap-2.5">
              {[
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/",
                  icon: "/images/social-ig.svg",
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/",
                  icon: "/images/social-li.svg",
                },
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/",
                  icon: "/images/social-fb.svg",
                },
                {
                  name: "X",
                  href: "https://x.com/",
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

