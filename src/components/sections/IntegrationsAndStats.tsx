"use client";

import React from "react";
import { motion } from "framer-motion";
import { PreTitleBadge, PrimaryGlassButton } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";

const arcIcons = [
  { src: "/images/int-1.svg", pos: "left-[7%] bottom-[12%]" },
  { src: "/images/int-2.svg", pos: "left-[14%] bottom-[38%]" },
  { src: "/images/int-3.svg", pos: "left-[24%] bottom-[62%]" },
  { src: "/images/int-4.svg", pos: "left-[37%] bottom-[78%]" },
  { src: "/images/int-5.svg", pos: "right-[37%] bottom-[78%]" },
  { src: "/images/int-6.svg", pos: "right-[24%] bottom-[62%]" },
  { src: "/images/int-7.svg", pos: "right-[14%] bottom-[38%]" },
  { src: "/images/int-8.svg", pos: "right-[7%] bottom-[12%]" },
];

export function IntegrationsAndStats() {
  return (
    <>
      {/* Integrations Arc Section */}
      <section id="integrations" className="py-12 md:py-20 bg-white">
        <div className="max-w-[1160px] mx-auto px-5">
          <div className="relative rounded-[32px] bg-[#edf1f4] overflow-hidden pt-16 md:pt-20">
            {/* Header */}
            <SpringReveal className="relative z-20 max-w-[600px] mx-auto px-6 text-center">
              <PreTitleBadge text="Integrations" variant="white" />
              <h2 className="mt-5 font-heading font-semibold text-[34px] md:text-[48px] leading-[1.18em] tracking-[-1px] text-[#1d1d1d]">
                Connect with the tools you already use
              </h2>
              <p className="mt-4 font-display font-medium text-[17px] md:text-[18px] leading-[1.4em] text-[#4d585f]">
                Seamlessly integrate with your financial platforms, data
                sources, and tools to keep everything connected and up to date.
              </p>
              <div className="mt-7">
                <PrimaryGlassButton
                  href="https://www.framer.com/marketplace/plugins/"
                  label="Explore all integrations"
                  variant="blue"
                  external
                />
              </div>
            </SpringReveal>

            {/* Radial Arc Stage + Rolling Green Hills */}
            <div className="relative mt-8 md:mt-10 h-[340px] md:h-[430px] flex flex-col items-center justify-center">
              {/* Desktop Arc Icons */}
              <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
                {arcIcons.map((item, idx) => (
                  <motion.div
                    key={item.src}
                    animate={{ y: [0, idx % 2 === 0 ? -7 : 7, 0] }}
                    transition={{
                      duration: 4 + (idx % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${item.pos} w-[74px] h-[74px] rounded-full bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] flex items-center justify-center`}
                  >
                    <img
                      src={item.src}
                      alt=""
                      className="w-9 h-9 object-contain"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Mobile Grid Fallback */}
              <div className="md:hidden grid grid-cols-4 gap-3 px-6 mb-6 z-10">
                {arcIcons.map((item) => (
                  <div
                    key={item.src}
                    className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center"
                  >
                    <img
                      src={item.src}
                      alt=""
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Central Dark FintechX Emblem */}
              <div className="relative z-20 flex flex-col items-center -mt-4 md:mt-4">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="w-[104px] h-[104px] md:w-[116px] md:h-[116px] rounded-full bg-gradient-to-b from-[#323232] to-[#000000] shadow-[0_24px_50px_rgba(0,0,0,0.28)] border border-white/15 flex items-center justify-center"
                >
                  <img
                    src="/images/integrations-emblem.svg"
                    alt="FintechX Core"
                    className="w-12 h-12 object-contain"
                  />
                </motion.div>
                <h3 className="mt-6 font-heading font-semibold text-[24px] md:text-[28px] leading-[1.2em] text-[#1d1d1d] text-center max-w-[340px] px-4">
                  100+ integrations available and growing
                </h3>
              </div>

              {/* Rolling Green Hills at Bottom */}
              <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none select-none">
                <img
                  src="/images/integrations-hills.png"
                  alt=""
                  className="w-full h-[150px] md:h-[210px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats Scattered Bento Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1160px] mx-auto px-5">
          {/* Top Flanking Cards + Center Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Top-Left Card */}
            <SpringReveal delay={0.05} className="lg:col-span-3">
              <div className="rounded-[26px] bg-[#edf1f4] p-7 min-h-[240px] flex flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display font-medium text-[17px] text-[#1d1d1d]">
                    Active
                    <br />
                    investors
                  </span>
                  <span className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center shrink-0">
                    <img src="/images/stat-1.svg" alt="" className="w-5 h-5" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-[38px] leading-[1.1em] tracking-[-1px] text-[#1d1d1d]">
                    10,000+
                  </h3>
                  <p className="mt-2 font-display font-medium text-[15px] leading-[1.4em] text-[#4d585f]">
                    Users managing portfolios with AI insights.
                  </p>
                </div>
              </div>
            </SpringReveal>

            {/* Center Header */}
            <SpringReveal className="lg:col-span-6 text-center px-2 py-4">
              <PreTitleBadge text="Platform stats" variant="slate" />
              <h2 className="mt-5 font-heading font-semibold text-[34px] md:text-[48px] leading-[1.15em] tracking-[-1px] text-[#1d1d1d]">
                Powering smarter investment decisions
              </h2>
              <p className="mt-4 font-display font-medium text-[17px] md:text-[18px] leading-[1.4em] text-[#4d585f] max-w-[480px] mx-auto">
                Real-time insights, advanced analytics, and secure
                infrastructure working together.
              </p>
            </SpringReveal>

            {/* Top-Right Card */}
            <SpringReveal delay={0.1} className="lg:col-span-3">
              <div className="rounded-[26px] bg-gradient-to-br from-[#323232] to-[#000000] p-7 min-h-[240px] flex flex-col justify-between text-white">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display font-medium text-[17px] text-white/90">
                    Assets
                    <br />
                    tracked
                  </span>
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                    <img src="/images/stat-2.svg" alt="" className="w-5 h-5" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-[38px] leading-[1.1em] tracking-[-1px] text-white">
                    $250M+
                  </h3>
                  <p className="mt-2 font-display font-medium text-[15px] leading-[1.4em] text-white/75">
                    In investments monitored across the platform.
                  </p>
                </div>
              </div>
            </SpringReveal>
          </div>

          {/* Bottom 3 Staggered Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Bottom-Left Dark Card */}
            <SpringReveal delay={0.12}>
              <div className="rounded-[26px] bg-gradient-to-br from-[#323232] to-[#000000] p-7 min-h-[250px] flex flex-col justify-between text-white">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display font-medium text-[17px] text-white/90">
                    AI insights
                    <br />
                    generated
                  </span>
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                    <img src="/images/stat-5.svg" alt="" className="w-4 h-5" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-[40px] leading-[1.1em] tracking-[-1px] text-white">
                    1M+
                  </h3>
                  <p className="mt-2 font-display font-medium text-[15px] leading-[1.4em] text-white/75">
                    Data-driven signals delivered every month.
                  </p>
                </div>
              </div>
            </SpringReveal>

            {/* Bottom-Center Blue Card (staggered down on desktop) */}
            <SpringReveal delay={0.18} className="md:mt-14">
              <div className="rounded-[26px] bg-gradient-to-r from-[#406ae4] to-[#3b82f6] p-7 min-h-[250px] flex flex-col justify-between text-white shadow-[0_20px_50px_rgba(59,130,246,0.28)]">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display font-medium text-[17px] text-white/95">
                    Markets
                    <br />
                    covered
                  </span>
                  <span className="w-10 h-10 rounded-full bg-[#1d1d1d] flex items-center justify-center shrink-0">
                    <img src="/images/stat-4.svg" alt="" className="w-5 h-5" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-[40px] leading-[1.1em] tracking-[-1px] text-white">
                    120+
                  </h3>
                  <p className="mt-2 font-display font-medium text-[15px] leading-[1.4em] text-white/85">
                    Global financial markets are analyzed in real time.
                  </p>
                </div>
              </div>
            </SpringReveal>

            {/* Bottom-Right Slate Card */}
            <SpringReveal delay={0.22}>
              <div className="rounded-[26px] bg-[#edf1f4] p-7 min-h-[250px] flex flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display font-medium text-[17px] text-[#1d1d1d]">
                    Platform
                    <br />
                    uptime
                  </span>
                  <span className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center shrink-0">
                    <img src="/images/stat-3.svg" alt="" className="w-4 h-5" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-[40px] leading-[1.1em] tracking-[-1px] text-[#1d1d1d]">
                    99.9%
                  </h3>
                  <p className="mt-2 font-display font-medium text-[15px] leading-[1.4em] text-[#4d585f]">
                    Reliable access to your financial intelligence.
                  </p>
                </div>
              </div>
            </SpringReveal>
          </div>
        </div>
      </section>
    </>
  );
}

