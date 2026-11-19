"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PrimaryGlassButton } from "@/components/ui/ActionButtons";
import { HypocratesLogo } from "@/components/HypocratesLogo";

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none">
      <nav
        aria-label="Primary navigation"
        className="pointer-events-auto w-full max-w-[980px] bg-white/95 backdrop-blur-md border border-[#dde5ed]/90 rounded-full px-3.5 py-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex items-center justify-between gap-2"
      >
        <Link
          href="/"
          className="pl-2 pr-2 py-0.5 flex items-center shrink-0"
          aria-label="Hypocrates Home"
          onClick={() => setMobileOpen(false)}
        >
          <HypocratesLogo size="md" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href + "/"));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-full font-display font-semibold text-[15px] leading-[1.3em] transition-colors duration-200 whitespace-nowrap ${
                  active
                    ? "bg-[#edf1f4] text-[#1d1d1d]"
                    : "text-[#4d585f] hover:bg-[#edf1f4] hover:text-[#1d1d1d]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block shrink-0">
          <PrimaryGlassButton
            href="/demo"
            label="Request Demo"
            variant="dark"
            size="sm"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden mr-1 w-10 h-10 rounded-full bg-[#edf1f4] flex flex-col items-center justify-center gap-1.5 text-[#1d1d1d] cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`w-4 h-0.5 bg-[#1d1d1d] rounded-full transition-transform ${
              mobileOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`w-4 h-0.5 bg-[#1d1d1d] rounded-full transition-transform ${
              mobileOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="pointer-events-auto lg:hidden mt-2 w-full max-w-[940px] bg-white/95 backdrop-blur-md border border-[#dde5ed] rounded-[24px] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)] flex flex-col gap-1.5">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href + "/"));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-full font-display font-semibold text-[16px] ${
                  active
                    ? "bg-[#edf1f4] text-[#1d1d1d]"
                    : "text-[#4d585f] hover:bg-[#edf1f4] hover:text-[#1d1d1d]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 flex justify-center">
            <PrimaryGlassButton
              href="/demo"
              label="Request Demo"
              variant="dark"
              size="sm"
            />
          </div>
        </div>
      )}
    </header>
  );
}
