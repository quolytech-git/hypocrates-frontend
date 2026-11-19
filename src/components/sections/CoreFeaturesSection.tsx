"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PreTitleBadge, PrimaryGlassButton } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";

const riskTags = [
  "Real-time risk scoring",
  "Portfolio volatility tracking",
  "Predictive risk alerts",
];

const signals = [
  { label: "BUY", color: "#0bcf2d" },
  { label: "HOLD", color: "#ff8b06" },
  { label: "SELL", color: "#f51c23" },
];

const alerts = [
  "/images/alert-1.svg",
  "/images/alert-2.svg",
  "/images/alert-3.svg",
];

export function CoreFeaturesSection() {
  const [signalIndex, setSignalIndex] = useState(0);
  const [alertIndex, setAlertIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSignalIndex((prev) => (prev + 1) % signals.length);
      setAlertIndex((prev) => (prev + 1) % alerts.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const currentSignal = signals[signalIndex];

  return (
    <section id="core-features" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1160px] mx-auto px-5">
        {/* Header Split */}
        <SpringReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-[560px]">
            <PreTitleBadge text="Core features" variant="slate" />
            <h2 className="mt-5 font-heading font-semibold text-[34px] md:text-[48px] leading-[1.2em] tracking-[-1px] text-[#1d1d1d]">
              Everything you need to invest confidently
            </h2>
          </div>

          <div className="max-w-[420px] flex flex-col items-start lg:items-end lg:text-right">
            <p className="font-display font-medium text-[18px] leading-[1.35em] text-[#4d585f]">
              Professional tools designed for active traders and long-term
              investors managing diverse portfolios.
            </p>
            <div className="mt-6">
              <PrimaryGlassButton
                href="/features"
                label="View all features"
                variant="dark"
              />
            </div>
          </div>
        </SpringReveal>

        {/* 5-Card Bento Grid (Left 8 cols: 2 top + 1 wide bottom | Right 4 cols: tall AI + Smart alerts) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 8 Columns */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Advanced risk analysis */}
              <SpringReveal delay={0.05}>
                <div className="rounded-[24px] bg-[#edf1f4] pt-8 pb-7 flex flex-col justify-between h-[390px] overflow-hidden">
                  <h3 className="font-heading font-semibold text-[24px] text-center text-[#1d1d1d] px-6">
                    Advanced risk analysis
                  </h3>

                  <div className="flex items-center justify-center my-2">
                    <motion.img
                      src="/images/feature-shield.png"
                      alt="Risk analysis shield"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="h-[190px] w-auto object-contain drop-shadow-[0_18px_28px_rgba(64,106,228,0.22)]"
                    />
                  </div>

                  <div className="relative overflow-hidden">
                    <div className="animate-fx-marquee-pills gap-3">
                      {[...riskTags, ...riskTags].map((tag, i) => (
                        <span
                          key={i}
                          className="mx-1.5 px-4 py-2 rounded-full bg-white text-[#1d1d1d] font-display font-medium text-[14px] whitespace-nowrap shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpringReveal>

              {/* Card 2: Market insights */}
              <SpringReveal delay={0.1}>
                <div className="relative rounded-[24px] overflow-hidden pt-8 px-6 pb-0 flex flex-col justify-between h-[390px]">
                  <img
                    src="/images/feature-market-bg.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="relative z-10 text-center">
                    <h3 className="font-heading font-semibold text-[24px] text-[#1d1d1d]">
                      Market insights
                    </h3>
                  </div>

                  <div className="relative z-10 mt-6 mx-auto w-full max-w-[300px] rounded-t-[20px] bg-white/60 backdrop-blur-md border border-white/80 pt-4 px-4 pb-2 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                    <img
                      src="/images/feature-chart.svg"
                      alt="Market trend line chart"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </SpringReveal>
            </div>

            {/* Card 4: Portfolio tracking (Wide bottom-left) */}
            <SpringReveal delay={0.2}>
              <div className="relative rounded-[24px] overflow-hidden pt-8 px-6 md:px-10 pb-0 flex flex-col justify-between h-[360px]">
                <img
                  src="/images/feature-portfolio-bg.jpg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 text-center max-w-[460px] mx-auto">
                  <h3 className="font-heading font-semibold text-[24px] text-[#1d1d1d]">
                    Portfolio tracking
                  </h3>
                  <p className="mt-2 font-display font-medium text-[16px] leading-[1.4em] text-[#4d585f]">
                    See your entire financial picture in one place with
                    performance attribution and gain/loss analysis.
                  </p>
                </div>

                <div className="relative z-10 mt-5 flex items-end justify-center gap-4 md:gap-8 translate-y-2">
                  <motion.img
                    whileHover={{ y: -8, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    src="/images/feature-donut.svg"
                    alt="Portfolio donut allocation"
                    className="w-[170px] sm:w-[220px] h-auto -rotate-3 drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
                  />
                  <motion.img
                    whileHover={{ y: -8, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    src="/images/feature-stocks.svg"
                    alt="Stocks and crypto list"
                    className="w-[200px] sm:w-[270px] h-auto rotate-3 drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
                  />
                </div>
              </div>
            </SpringReveal>
          </div>

          {/* Right 4 Columns: AI-powered insights + Smart alerts */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 3: AI-powered insights */}
            <SpringReveal delay={0.15} className="flex-1">
              <div className="rounded-[24px] bg-black p-8 flex flex-col justify-between h-[420px] lg:h-[450px] overflow-hidden text-center">
                <h3 className="font-heading font-semibold text-[24px] text-white">
                  AI-powered insights
                </h3>

                {/* Slot-cycling BUY / HOLD / SELL with dark reflection */}
                <div className="my-auto flex flex-col items-center justify-center py-4">
                  <div className="h-[88px] overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSignal.label}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="font-heading font-bold text-[72px] sm:text-[82px] leading-none tracking-[-2px]"
                        style={{ color: currentSignal.color }}
                      >
                        {currentSignal.label}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Reflected inverted ghost */}
                  <div
                    aria-hidden="true"
                    className="h-[64px] overflow-hidden flex items-center justify-center -mt-3 opacity-25 scale-y-[-1] select-none pointer-events-none"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`reflect-${currentSignal.label}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="font-heading font-bold text-[72px] sm:text-[82px] leading-none tracking-[-2px]"
                        style={{ color: currentSignal.color }}
                      >
                        {currentSignal.label}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <p className="font-display font-medium text-[18px] leading-[1.35em] text-white/75 max-w-[260px] mx-auto">
                  Real-time market data and predictive analysis.
                </p>
              </div>
            </SpringReveal>

            {/* Card 5: Smart alerts */}
            <SpringReveal delay={0.25}>
              <div className="rounded-[24px] bg-[#edf1f4] p-8 flex flex-col justify-between h-[300px] overflow-hidden">
                <h3 className="font-heading font-semibold text-[24px] text-center text-[#1d1d1d]">
                  Smart alerts
                </h3>

                <div className="relative flex flex-col items-center justify-center my-auto pt-4">
                  <motion.img
                    src="/images/feature-bell.png"
                    alt="Notification bell"
                    animate={{ rotate: [0, -8, 8, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute -top-6 right-4 w-[66px] h-auto z-20 drop-shadow-[0_10px_20px_rgba(245,28,35,0.22)]"
                  />

                  {/* Stacked cycling alerts */}
                  <div className="relative w-full max-w-[280px] h-[130px] flex flex-col items-center justify-center">
                    {[0, 1, 2].map((offset) => {
                      const idx = (alertIndex + offset) % alerts.length;
                      const scale = offset === 0 ? 1 : offset === 1 ? 0.92 : 0.84;
                      const y = offset * 22;
                      const zIndex = 10 - offset;
                      const opacity = offset === 0 ? 1 : offset === 1 ? 0.82 : 0.6;
                      return (
                        <motion.img
                          key={alerts[idx]}
                          src={alerts[idx]}
                          alt="Smart alert notification"
                          animate={{ y, scale, opacity }}
                          transition={{ type: "spring", stiffness: 260, damping: 26 }}
                          style={{ zIndex }}
                          className="absolute top-2 w-full h-auto rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </SpringReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

