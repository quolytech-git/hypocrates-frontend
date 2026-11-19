"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { PrimaryGlassButton, SecondaryPillButton } from "@/components/ui/ActionButtons";
import { HypocratesDashboardPreview } from "@/components/hypocrates/HypocratesDashboardPreview";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  // Responsive, silky scroll curve: slightly faster than 0.62 while avoiding sluggish spring lag
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 34,
    mass: 0.2,
  });

  // Dashboard starts tucked behind flower hills at scale 0.76 and rises cleanly to full width 1.0
  const dashboardScale = useTransform(smoothProgress, [0, 0.46], [0.76, 1]);
  const dashboardY = useTransform(smoothProgress, [0, 0.46], [10, -56]);

  // Foreground flower hills sit IN FRONT of the peeking dashboard at scroll=0, then recede swiftly & smoothly
  const hillsY = useTransform(smoothProgress, [0, 0.44], [0, 320]);
  const hillsOpacity = useTransform(smoothProgress, [0.14, 0.46], [1, 0]);

  // Smooth cloud parallax across the hero scroll
  const cloudLeftX = useTransform(smoothProgress, [0, 1], [0, -110]);
  const cloudRightX = useTransform(smoothProgress, [0, 1], [0, 110]);
  const cloudCenterY = useTransform(smoothProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden pt-[148px] sm:pt-[158px] lg:pt-[165px] pb-32 md:pb-44"
    >
      {/* Sky & Meadow Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Bottom white gradient fade over meadow & bottom edge of scrolled dashboard */}
      <div
        className="pointer-events-none select-none absolute inset-x-0 bottom-0 h-[180px] md:h-[210px] z-30"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 70%, #ffffff 100%)",
        }}
      />

      {/* Floating Clouds (Desktop) */}
      <motion.div
        style={{ x: cloudLeftX }}
        className="hidden lg:block absolute top-[20px] -left-[120px] w-[620px] pointer-events-none select-none z-[1] will-change-transform"
      >
        <motion.img
          src="/images/cloud-1.png"
          alt=""
          animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-auto object-contain opacity-95 will-change-transform"
        />
      </motion.div>

      <motion.div
        style={{ x: cloudRightX }}
        className="hidden lg:block absolute top-[110px] -right-[110px] w-[640px] pointer-events-none select-none z-[1] will-change-transform"
      >
        <motion.img
          src="/images/cloud-3.png"
          alt=""
          animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-auto object-contain opacity-95 will-change-transform"
        />
      </motion.div>

      <motion.div
        style={{ y: cloudCenterY }}
        className="hidden lg:block absolute top-[260px] left-1/2 -translate-x-1/2 w-[720px] pointer-events-none select-none z-[1] will-change-transform"
      >
        <motion.img
          src="/images/cloud-2.png"
          alt=""
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-auto object-contain opacity-80 will-change-transform"
        />
      </motion.div>

      {/* Hero Center Content (z-30 ensures Trust Row & buttons always stay crisp above meadow hills) */}
      <div className="relative z-30 max-w-[1140px] mx-auto px-5 text-center">
        {/* Animated Brand Seal above Headline */}
        <motion.div
          initial={{ opacity: 0.001, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/90 backdrop-blur-md border border-[#dde5ed] pl-3 pr-5 py-2 shadow-[0_10px_28px_rgba(16,28,48,0.08)]"
        >
          <motion.img
            src="/images/hypocrates-logo.png"
            alt="Hypocrates Logo"
            animate={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="h-9 w-9 object-contain shrink-0"
          />
          <span className="font-heading font-bold text-[16px] text-[#1d1d1d]">
            Hypocrates
          </span>
          <span className="w-[1px] h-4 bg-[#1d1d1d]/15" />
          <span className="inline-flex items-center gap-1.5 font-display font-medium text-[13.5px] text-[#4d585f]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            Ancient Clinical Wisdom × Modern AI
          </span>
        </motion.div>

        {/* Headline: Clinical [AI] Platform */}
        <motion.div
          initial={{ opacity: 0.001, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 1, delay: 0.05 }}
          className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-2"
        >
          <h1 className="font-heading font-semibold text-[48px] sm:text-[74px] lg:text-[100px] leading-[1em] tracking-[-1.4px] text-[#1d1d1d]">
            Clinical
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.75, rotate: -22 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            whileHover={{ rotate: -2, scale: 1.07 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.12 }}
            className="inline-flex items-center justify-center w-[56px] h-[56px] sm:w-[82px] sm:h-[82px] lg:w-[104px] lg:h-[104px] shrink-0 cursor-pointer"
          >
            <img
              src="/images/hero-ai-badge.png"
              alt="AI"
              className="w-full h-full object-contain drop-shadow-[0_14px_24px_rgba(16,28,58,0.28)]"
            />
          </motion.div>

          <h1 className="font-heading font-semibold text-[48px] sm:text-[74px] lg:text-[100px] leading-[1em] tracking-[-1.4px] text-[#1d1d1d]">
            Platform
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0.001, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 1, delay: 0.15 }}
          className="mt-5 font-display font-medium text-[17px] sm:text-[20px] leading-[1.35em] text-[#4d585f] max-w-[620px] mx-auto"
        >
          The AI Management System for Modern Healthcare Clinics — operate
          smarter, faster, and more efficiently with specialized clinical workflows.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0.001, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 1, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <PrimaryGlassButton
            href="/demo"
            label="Request Demo"
            variant="blue"
          />
          <SecondaryPillButton
            href="/platform"
            label="Explore Platform"
            variant="white"
          />
        </motion.div>

        {/* Trust Row */}
        <motion.div
          initial={{ opacity: 0.001, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 1, delay: 0.32 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-[#4d585f] font-display font-medium text-[15px] sm:text-[16px]"
        >
          <div className="flex items-center gap-2">
            <img src="/images/icon-star.svg" alt="" className="w-[18px] h-[18px]" />
            <span>7 Medical Specialties</span>
          </div>
          <span className="hidden sm:block w-[1px] h-[16px] bg-[#1d1d1d]/15" />
          <div className="flex items-center gap-2">
            <img src="/images/icon-shield.svg" alt="" className="w-[17px] h-[18px]" />
            <span>HIPAA &amp; GDPR Compliant</span>
          </div>
          <span className="hidden sm:block w-[1px] h-[16px] bg-[#1d1d1d]/15" />
          <div className="flex items-center gap-2">
            <img src="/images/icon-bolt.svg" alt="" className="w-[13px] h-[18px]" />
            <span>Ambient AI SOAP Scribe</span>
          </div>
        </motion.div>
      </div>

      {/* Dashboard Mockup + Foreground Flower Hills Layer */}
      <div className="relative mt-10 md:mt-12 max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Scroll transform wrapper kept separate from mount entrance so y transforms never fight */}
        <motion.div
          style={{
            scale: dashboardScale,
            y: dashboardY,
          }}
          className="relative z-10 max-w-[1040px] mx-auto origin-top will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0.001, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 26, delay: 0.25 }}
            className="rounded-[18px] md:rounded-[24px] border border-[#bababa] overflow-hidden bg-white shadow-[0_30px_80px_rgba(16,28,48,0.16)]"
          >
            <HypocratesDashboardPreview variant="command" />
          </motion.div>
        </motion.div>

        {/* Foreground Flower Hills (sit IN FRONT of the peeking dashboard at scrollY=0, glide down & fade out smoothly) */}
        <motion.div
          style={{
            y: hillsY,
            opacity: hillsOpacity,
          }}
          className="hidden md:block absolute -top-[40px] lg:-top-[55px] left-1/2 -translate-x-1/2 w-[108vw] max-w-[1720px] z-20 pointer-events-none select-none will-change-[transform,opacity]"
        >
          <img
            src="/images/hero-hills.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
