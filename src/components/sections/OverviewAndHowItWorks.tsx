"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PreTitleBadge,
  PrimaryGlassButton,
  SecondaryPillButton,
} from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";

const overviewCards = [
  {
    icon: "/images/icon-rocket.svg",
    title: "All your work in one place:",
    desc: "Bring all your tasks, projects, and updates together in one clear, unified view.",
  },
  {
    icon: "/images/icon-overview-bolt.svg",
    title: "Make progress faster:",
    desc: "Access key insights instantly and act without delays or unnecessary steps.",
  },
  {
    icon: "/images/icon-bulb.svg",
    title: "Built for better focus:",
    desc: "A clean interface that helps you stay focused and keep everything simple.",
  },
];

const steps = [
  {
    id: "Step 01",
    image: "/images/step-1.png",
    title: "Connect your accounts",
    desc: "Securely link your bank, trading, and investment accounts.",
  },
  {
    id: "Step 02",
    image: "/images/step-2.png",
    title: "Analyze your data",
    desc: "AI processes your data to generate clear insights.",
  },
  {
    id: "Step 03",
    image: "/images/step-3.png",
    title: "Get smart insights",
    desc: "Receive real-time recommendations to optimize your portfolio.",
  },
];

export function OverviewAndHowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000;
    let start = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (elapsed >= duration) {
        setActiveStep((prev) => (prev + 1) % steps.length);
        start = performance.now();
        setProgress(0);
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [activeStep]);

  const selectStep = (idx: number) => {
    setActiveStep(idx);
    setProgress(0);
  };

  return (
    <>
      {/* Platform Overview Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Mountain / Sky Background with Top & Bottom White Fades */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src="/images/overview-bg.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 22%, rgba(255,255,255,0) 78%, #ffffff 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1160px] mx-auto px-5">
          <SpringReveal className="text-center max-w-[660px] mx-auto">
            <PreTitleBadge text="Platform overview" variant="white" />
            <h2 className="mt-5 font-heading font-semibold text-[34px] md:text-[48px] leading-[1.2em] tracking-[-1px] text-[#1d1d1d]">
              See your financial intelligence in action
            </h2>
            <p className="mt-4 font-display font-medium text-[18px] leading-[1.4em] text-[#4d585f]">
              Explore a real-time dashboard that brings your portfolio,
              insights, and risk analysis together in one clear view.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <PrimaryGlassButton
                href="/features"
                label="Explore features"
                variant="blue"
              />
              <SecondaryPillButton
                href="/request-demo"
                label="Try the live demo"
                variant="dark"
              />
            </div>
          </SpringReveal>

          {/* Dashboard Preview */}
          <SpringReveal delay={0.15} className="mt-14 max-w-[1040px] mx-auto">
            <div className="rounded-[20px] md:rounded-[26px] border border-[#bababa] overflow-hidden bg-white shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
              <img
                src="/images/overview-dashboard.jpg"
                alt="Market Intelligence Center Dashboard"
                className="w-full h-auto block"
              />
            </div>
          </SpringReveal>

          {/* 3 White Benefit Cards */}
          <div className="mt-8 max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {overviewCards.map((card, i) => (
              <SpringReveal key={card.title} delay={0.1 + i * 0.08}>
                <div className="h-full rounded-[22px] bg-white p-6 shadow-[0_12px_36px_rgba(0,0,0,0.07)] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-b from-[#323232] to-[#000000] flex items-center justify-center shrink-0">
                    <img
                      src={card.icon}
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <p className="font-display font-medium text-[15px] leading-[1.45em] text-[#4d585f]">
                    <strong className="font-semibold text-[#1d1d1d]">
                      {card.title}
                    </strong>{" "}
                    {card.desc}
                  </p>
                </div>
              </SpringReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column */}
          <SpringReveal className="lg:col-span-5">
            <PreTitleBadge text="How it works" variant="slate" />
            <h2 className="mt-5 font-heading font-semibold text-[34px] md:text-[48px] leading-[1.15em] tracking-[-1px] text-[#1d1d1d]">
              Start investing in minutes
            </h2>
            <p className="mt-4 font-display font-medium text-[18px] leading-[1.4em] text-[#4d585f]">
              Connect your accounts, let AI analyze your data, and get clear
              insights to invest with confidence.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading font-semibold text-[28px] md:text-[32px] leading-[1.2em] text-[#1d1d1d]">
                  100%
                </h3>
                <p className="mt-1.5 font-display font-medium text-[15px] leading-[1.4em] text-[#4d585f]">
                  Secure, encrypted data protection
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-[28px] md:text-[32px] leading-[1.2em] text-[#1d1d1d]">
                  2 Minutes
                </h3>
                <p className="mt-1.5 font-display font-medium text-[15px] leading-[1.4em] text-[#4d585f]">
                  Set up to connect and begin instantly
                </p>
              </div>
            </div>
          </SpringReveal>

          {/* Right Column: Interactive Step Switcher */}
          <SpringReveal delay={0.12} className="lg:col-span-7">
            <div className="flex flex-col items-center">
              {/* Step Tabs */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-t-[20px] border border-b-0 border-[#dde5ed] bg-white">
                {steps.map((step, idx) => {
                  const isActive = idx === activeStep;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => selectStep(idx)}
                      className={`relative overflow-hidden px-4 py-1.5 rounded-full font-display font-semibold text-[14px] transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#edf1f4] text-white"
                          : "bg-[#edf1f4] text-[#4d585f] hover:text-[#1d1d1d]"
                      }`}
                    >
                      {isActive && (
                        <span
                          className="absolute inset-y-0 left-0 bg-[#1d1d1d] rounded-full transition-none"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                      <span
                        className={`relative z-10 ${
                          isActive ? "mix-blend-difference text-white" : ""
                        }`}
                      >
                        {step.id}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Outer Card Frame */}
              <div className="w-full rounded-[28px] border border-[#dde5ed] p-2 bg-white">
                <div className="rounded-[22px] bg-[#edf1f4] p-7 md:p-10 text-center min-h-[340px] flex flex-col items-center justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={steps[activeStep].id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="w-full flex flex-col items-center"
                    >
                      <div className="w-full max-w-[480px] h-[200px] flex items-center justify-center">
                        <img
                          src={steps[activeStep].image}
                          alt={steps[activeStep].title}
                          className="max-h-full w-auto object-contain"
                        />
                      </div>
                      <h4 className="mt-5 font-heading font-semibold text-[22px] md:text-[24px] text-[#1d1d1d]">
                        {steps[activeStep].title}
                      </h4>
                      <p className="mt-2 font-display font-medium text-[16px] text-[#4d585f]">
                        {steps[activeStep].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SpringReveal>
        </div>
      </section>
    </>
  );
}

