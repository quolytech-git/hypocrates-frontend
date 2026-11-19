"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PreTitleBadge,
  PrimaryGlassButton,
  SecondaryPillButton,
} from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";

const testimonials = [
  {
    quote:
      "This platform helped me understand my portfolio in ways I couldn’t before. The insights are clear and actually useful.",
    name: "David Miller",
    role: "Individual Investor",
    avatar: "/images/avatar-1.jpg",
  },
  {
    quote:
      "Managing multiple portfolios is much easier now. The risk analysis tools save us hours every week.",
    name: "Sarah Thompson",
    role: "Wealth Manager",
    avatar: "/images/avatar-2.jpg",
  },
  {
    quote:
      "The real-time insights and alerts help me react faster to market changes. It’s become part of my daily workflow.",
    name: "Michael Chen",
    role: "Active Trader",
    avatar: "/images/avatar-3.jpg",
  },
  {
    quote:
      "The data visualization and analytics tools make complex financial information far easier to interpret.",
    name: "Emily Rodriguez",
    role: "Financial Analyst",
    avatar: "/images/avatar-4.jpg",
  },
  {
    quote:
      "The insights are clear and actionable. It helps me track performance and make better investment decisions every day.",
    name: "Daniel Carter",
    role: "Portfolio Manager",
    avatar: "/images/avatar-5.jpg",
  },
];

const starterFeatures = [
  "Connect up to 5 investment accounts",
  "Portfolio performance tracking",
  "Basic AI insights",
  "Market updates & alerts",
  "Real-time price alerts",
  "Email support",
];

const proFeatures = [
  "Unlimited account connections",
  "Advanced AI investment insights",
  "Portfolio risk analysis",
  "Smart alerts & automation",
  "Historical performance analytics",
  "Priority support",
];

const faqs = [
  {
    q: "How secure is my financial data?",
    a: "Your data is protected with industry-standard encryption and secure infrastructure. We follow strict security practices to ensure your financial information remains private and safe.",
  },
  {
    q: "Can I connect multiple investment accounts?",
    a: "Yes. You can securely connect multiple bank, trading, and investment accounts to track everything in one unified dashboard.",
  },
  {
    q: "How do the AI insights work?",
    a: "Our AI analyzes market trends, portfolio performance, and risk signals to generate insights that help you make smarter investment decisions.",
  },
  {
    q: "Is a trial available before subscribing?",
    a: "Yes. You can explore the platform with a trial period to understand how the features work before choosing a paid plan.",
  },
  {
    q: "Do you offer plans for financial teams or organizations?",
    a: "Yes. We offer enterprise solutions designed for financial teams and institutions. You can contact our sales team to discuss custom requirements.",
  },
];

function AnimatedPrice({ value }: { value: number }) {
  return (
    <span className="inline-flex items-baseline font-heading font-semibold text-[48px] leading-[1em] tracking-[-1px] overflow-hidden">
      <span>$</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="inline-block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function TestimonialsPricingFaq() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Testimonials Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src="/images/testimonials-bg.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 24%, rgba(255,255,255,0) 76%, #ffffff 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1160px] mx-auto px-5">
          <SpringReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-heading font-semibold text-[34px] md:text-[48px] leading-[1.15em] tracking-[-1px] text-[#1d1d1d] max-w-[540px]">
                What investors say about the platform
              </h2>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[#4d585f] font-display font-medium text-[15px]">
                <span className="inline-flex items-center gap-2">
                  <img src="/images/icon-star.svg" alt="" className="w-4 h-4" />
                  4.9/5 Rating
                </span>
                <span className="hidden sm:block w-[1px] h-4 bg-[#1d1d1d]/15" />
                <span className="inline-flex items-center gap-2">
                  <img src="/images/icon-heart.svg" alt="" className="w-4 h-4" />
                  75+ Testimonials
                </span>
                <span className="hidden sm:block w-[1px] h-4 bg-[#1d1d1d]/15" />
                <span className="inline-flex items-center gap-2">
                  <img src="/images/icon-users.svg" alt="" className="w-5 h-4" />
                  10K+ Growth community
                </span>
              </div>
            </div>

            <div>
              <PrimaryGlassButton
                href="/pricing"
                label="Get started today"
                variant="dark"
              />
            </div>
          </SpringReveal>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative z-10 mt-12 overflow-hidden hover-pause">
          <div className="animate-fx-marquee-slow gap-5">
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div
                key={idx}
                className="mx-2.5 shrink-0 w-[330px] sm:w-[370px] rounded-[24px] bg-white p-7 shadow-[0_14px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between min-h-[270px]"
              >
                <div>
                  <img
                    src="/images/stars-5.svg"
                    alt="5 out of 5 stars"
                    className="h-[18px] w-auto"
                  />
                  <p className="mt-5 font-display font-medium text-[17px] leading-[1.45em] text-[#1d1d1d]">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <div className="font-display font-semibold text-[16px] text-[#1d1d1d]">
                      {item.name}
                    </div>
                    <div className="font-display font-medium text-[14px] text-[#4d585f]">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="max-w-[960px] mx-auto px-5">
          <SpringReveal className="text-center">
            <PreTitleBadge text="Subscription plans" variant="slate" />
            <h2 className="mt-5 font-heading font-semibold text-[34px] md:text-[48px] leading-[1.15em] tracking-[-1px] text-[#1d1d1d] max-w-[540px] mx-auto">
              Transparent pricing without hidden fees
            </h2>
          </SpringReveal>

          {/* Outer Tabbed Container */}
          <div className="mt-10 flex flex-col items-center">
            {/* Monthly / Yearly Switcher */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-t-[20px] border border-b-0 border-[#dde5ed] bg-white">
              <button
                type="button"
                onClick={() => setYearly(false)}
                className={`font-display font-semibold text-[15px] cursor-pointer transition-colors ${
                  !yearly ? "text-[#1d1d1d]" : "text-[#4d585f]"
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                role="switch"
                aria-checked={yearly}
                aria-label="Toggle yearly billing"
                onClick={() => setYearly((prev) => !prev)}
                className="relative w-[52px] h-[28px] rounded-full bg-[#edf1f4] border border-[#dde5ed] p-0.5 cursor-pointer flex items-center"
              >
                <motion.span
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                  className={`w-[22px] h-[22px] rounded-full shadow-sm ${
                    yearly
                      ? "ml-auto bg-[#3b82f6]"
                      : "mr-auto bg-white"
                  }`}
                />
              </button>

              <button
                type="button"
                onClick={() => setYearly(true)}
                className={`font-display font-semibold text-[15px] cursor-pointer transition-colors ${
                  yearly ? "text-[#1d1d1d]" : "text-[#4d585f]"
                }`}
              >
                Yearly
              </button>

              <span className="px-2.5 py-0.5 rounded-full bg-[#10b981]/15 text-[#10b981] font-display font-semibold text-[13px]">
                20%off
              </span>
            </div>

            {/* 2-Plan Container */}
            <div className="w-full rounded-[30px] border border-[#dde5ed] p-3 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Starter Plan */}
                <div className="rounded-[24px] bg-[#edf1f4] p-7 md:p-9 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-[24px] text-[#1d1d1d]">
                      Starter plan
                    </h3>
                    <p className="mt-1 font-display font-medium text-[15px] text-[#4d585f]">
                      Best for individual investors
                    </p>

                    <div className="mt-7 flex items-baseline gap-1.5 text-[#1d1d1d]">
                      <AnimatedPrice value={yearly ? 16 : 19} />
                      <span className="font-display font-medium text-[16px] text-[#4d585f]">
                        /month
                      </span>
                    </div>

                    <div className="mt-7">
                      <SecondaryPillButton
                        href="/contact"
                        label="Get started"
                        variant="dark"
                        className="w-full !h-[56px]"
                      />
                    </div>

                    <ul className="mt-8 space-y-3.5">
                      {starterFeatures.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-3 font-display font-medium text-[15px] text-[#4d585f]"
                        >
                          <img
                            src="/images/icon-pricing-chevron.svg"
                            alt=""
                            className="w-2 h-3 shrink-0"
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pro Plan */}
                <div className="rounded-[24px] bg-gradient-to-b from-[#323232] to-[#000000] p-7 md:p-9 flex flex-col justify-between text-white">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-heading font-semibold text-[24px] text-white">
                        Pro plan
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-[#3b82f6] text-white font-display font-semibold text-[13px]">
                        Popular
                      </span>
                    </div>
                    <p className="mt-1 font-display font-medium text-[15px] text-white/70">
                      Best for active investors
                    </p>

                    <div className="mt-7 flex items-baseline gap-1.5 text-white">
                      <AnimatedPrice value={yearly ? 32 : 39} />
                      <span className="font-display font-medium text-[16px] text-white/70">
                        /month
                      </span>
                    </div>

                    <div className="mt-7">
                      <SecondaryPillButton
                        href="/contact"
                        label="Get started"
                        variant="white"
                        className="w-full !h-[56px]"
                      />
                    </div>

                    <ul className="mt-8 space-y-3.5">
                      {proFeatures.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-3 font-display font-medium text-[15px] text-white/80"
                        >
                          <img
                            src="/images/icon-pricing-chevron.svg"
                            alt=""
                            className="w-2 h-3 shrink-0 brightness-150"
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Note Bar */}
              <div className="py-4 px-4 text-center font-display font-medium text-[14px] text-[#4d585f] flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                <span>7-day free trial available</span>
                <span>•</span>
                <span>No credit card required</span>
                <span>•</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Enterprise Plan Banner */}
          <SpringReveal delay={0.1} className="mt-6">
            <div className="relative rounded-[24px] overflow-hidden border border-[#dde5ed] bg-gradient-to-r from-[#eef7fc] to-[#d9f0fc] p-7 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <img
                src="/images/enterprise-flowers.png"
                alt=""
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 20%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 20%)",
                }}
                className="hidden sm:block absolute right-0 bottom-0 h-full w-auto object-contain pointer-events-none select-none"
              />
              <div className="relative z-10 max-w-[460px]">
                <h3 className="font-heading font-semibold text-[24px] text-[#1d1d1d]">
                  Enterprise plan
                </h3>
                <p className="mt-2 font-display font-medium text-[16px] leading-[1.45em] text-[#4d585f]">
                  Need a custom solution for your organization? Talk with our
                  team to design a plan for your needs.
                </p>
              </div>
              <div className="relative z-10 shrink-0">
                <SecondaryPillButton
                  href="/contact"
                  label="Contact sales"
                  variant="dark"
                  className="!h-[56px] !px-9"
                />
              </div>
            </div>
          </SpringReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <SpringReveal className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <h2 className="font-heading font-semibold text-[34px] md:text-[48px] leading-[1.12em] tracking-[-1px] text-[#1d1d1d]">
                Frequently asked questions
              </h2>
              <p className="mt-4 font-display font-medium text-[17px] leading-[1.45em] text-[#4d585f]">
                Find quick answers to common questions about the platform,
                pricing, and security.
              </p>
            </div>

            {/* Support Card */}
            <div className="rounded-[24px] bg-[#edf1f4] p-7 max-w-[380px]">
              <div className="flex items-center">
                <div className="flex -space-x-2.5">
                  <img
                    src="/images/avatar-1.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#edf1f4]"
                  />
                  <img
                    src="/images/avatar-2.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#edf1f4]"
                  />
                  <img
                    src="/images/avatar-3.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#edf1f4]"
                  />
                </div>
                <span className="mx-2 font-display font-semibold text-[#1d1d1d]">
                  +
                </span>
                <span className="w-10 h-10 rounded-full bg-[#3b82f6] text-white font-display font-semibold text-[12px] flex items-center justify-center">
                  You
                </span>
              </div>

              <h3 className="mt-5 font-heading font-semibold text-[22px] text-[#1d1d1d]">
                Still have questions?
              </h3>
              <p className="mt-1.5 font-display font-medium text-[15px] text-[#4d585f]">
                Reach out, and our team will guide you.
              </p>

              <div className="mt-6">
                <PrimaryGlassButton
                  href="/contact"
                  label="Talk to our team"
                  variant="dark"
                />
              </div>
            </div>
          </SpringReveal>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className={`rounded-[20px] border border-[#dde5ed] transition-colors duration-300 ${
                    isOpen ? "bg-[#edf1f4]" : "bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-display font-medium text-[18px] md:text-[20px] leading-[1.3em] text-[#1d1d1d]">
                      {item.q}
                    </span>
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#1d1d1d] text-white"
                          : "bg-[#edf1f4] text-[#1d1d1d]"
                      }`}
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 0 : 90 }}
                        transition={{ duration: 0.25 }}
                        className="relative block w-3.5 h-3.5"
                      >
                        <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.8px] bg-current rounded-full" />
                        {!isOpen && (
                          <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.8px] bg-current rounded-full" />
                        )}
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 34,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 font-display font-medium text-[16px] leading-[1.45em] text-[#4d585f]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

