"use client";

import React, { useRef } from "react";
import { PreTitleBadge, PrimaryGlassButton } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";

const securityItems = [
  "End-to-end encryption",
  "Secure data infrastructure",
  "Privacy-first approach",
  "Compliance standards",
];

const useCases = [
  {
    photo: "/images/usecase-1.jpg",
    bg: "/images/usecase-1-bg.jpg",
    title: "Individual investors",
    desc: "Track your portfolio, get AI insights, and make smarter investment decisions without relying on guesswork.",
    metric: "+32% Faster",
    metricDesc: "Decision-making with AI insights",
  },
  {
    photo: "/images/usecase-2.jpg",
    bg: "/images/usecase-2-bg.jpg",
    title: "Financial teams",
    desc: "Collaborate on financial strategies, monitor investments, and make data-driven decisions at scale.",
    metric: "Real-Time",
    metricDesc: "Collaboration across all investment data",
  },
  {
    photo: "/images/usecase-3.jpg",
    bg: "/images/usecase-3-bg.jpg",
    title: "Wealth managers",
    desc: "Manage multiple client portfolios efficiently with real-time data, risk analysis, and performance tracking.",
    metric: "10+",
    metricDesc: "Portfolios managed from a single dashboard",
  },
  {
    photo: "/images/usecase-4.jpg",
    bg: "/images/usecase-4-bg.jpg",
    title: "Active traders",
    desc: "Stay ahead of market movements with real-time alerts and AI-powered signals for quick decisions.",
    metric: "Up to 2X",
    metricDesc: "Better goal tracking and portfolio growth",
  },
];

const useCasePills = [
  "10,000+ Users",
  "4.9 Rating",
  "Real-time insights",
  "Secure & compliant",
];

export function SecurityAndUseCases() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    dragState.current = {
      isDown: true,
      startX: e.pageX - trackRef.current.offsetLeft,
      scrollLeft: trackRef.current.scrollLeft,
    };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragState.current.isDown || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.3;
    trackRef.current.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const stopDrag = () => {
    dragState.current.isDown = false;
  };

  return (
    <>
      {/* Security & Compliance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <SpringReveal className="lg:col-span-6">
            <div className="rounded-[28px] bg-[#edf1f4] overflow-hidden p-4 md:p-6">
              <img
                src="/images/security-diagram.png"
                alt="SOC2 Type 2, ISO 27001, and GDPR compliance architecture"
                className="w-full h-auto block rounded-[20px]"
              />
            </div>
          </SpringReveal>

          <SpringReveal delay={0.12} className="lg:col-span-6 lg:pl-6">
            <PreTitleBadge text="Security & compliance" variant="slate" />
            <h2 className="mt-5 font-heading font-semibold text-[34px] md:text-[48px] leading-[1.15em] tracking-[-1px] text-[#1d1d1d]">
              Your data is protected at every level
            </h2>
            <div className="mt-7">
              <PrimaryGlassButton
                href="/pricing"
                label="Get started now"
                variant="dark"
              />
            </div>
            <ul className="mt-8 space-y-3.5">
              {securityItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-display font-medium text-[17px] text-[#4d585f]"
                >
                  <img
                    src="/images/icon-security-chevron.svg"
                    alt=""
                    className="w-2.5 h-3.5 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SpringReveal>
        </div>
      </section>

      {/* Use Cases Carousel & Founder Quote Section */}
      <section id="use-cases" className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-[1160px] mx-auto px-5 text-center">
          <SpringReveal>
            <PreTitleBadge text="Use cases" variant="slate" />
            <h2 className="mt-5 font-heading font-semibold text-[34px] md:text-[48px] leading-[1.2em] tracking-[-1px] text-[#1d1d1d]">
              Who this platform is built for
            </h2>
          </SpringReveal>
        </div>

        {/* Horizontal Draggable / Scrollable Carousel */}
        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          className="mt-12 flex gap-5 overflow-x-auto no-scrollbar px-5 md:px-12 cursor-[col-resize] select-none"
        >
          {useCases.map((uc) => (
            <React.Fragment key={uc.title}>
              {/* Portrait Photo Card */}
              <div className="shrink-0 w-[290px] sm:w-[320px] h-[400px] rounded-[24px] overflow-hidden bg-[#edf1f4]">
                <img
                  src={uc.photo}
                  alt={uc.title}
                  draggable={false}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Frosted Glass Info Card over Nature BG */}
              <div className="relative shrink-0 w-[320px] sm:w-[360px] h-[400px] rounded-[24px] overflow-hidden border border-[#dde5ed]/80 p-7 flex flex-col justify-between">
                <img
                  src={uc.bg}
                  alt=""
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 backdrop-blur-[14px]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.68) 60%, rgba(255,255,255,0.35) 100%)",
                  }}
                />

                <div className="relative z-10">
                  <h3 className="font-heading font-semibold text-[28px] leading-[1.2em] text-[#1d1d1d]">
                    {uc.title}
                  </h3>
                  <p className="mt-3 font-display font-medium text-[16px] leading-[1.45em] text-[#4d585f]">
                    {uc.desc}
                  </p>
                </div>

                <div className="relative z-10">
                  <h4 className="font-heading font-semibold text-[24px] leading-[1.2em] text-[#1d1d1d]">
                    {uc.metric}
                  </h4>
                  <p className="mt-1 font-display font-medium text-[15px] text-[#1d1d1d]/80">
                    {uc.metricDesc}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* 4 Summary Pills + Founder Quote */}
        <div className="max-w-[780px] mx-auto px-5 mt-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {useCasePills.map((pill) => (
              <span
                key={pill}
                className="px-4 py-2 rounded-full bg-[#edf1f4] font-display font-medium text-[14px] text-[#1d1d1d]"
              >
                {pill}
              </span>
            ))}
          </div>

          <SpringReveal delay={0.1} className="mt-8">
            <blockquote className="font-display font-medium text-[19px] md:text-[21px] leading-[1.45em] text-[#1d1d1d] max-w-[540px] mx-auto">
              &ldquo;We built this platform to remove the guesswork from
              investing and give people clear, data-driven insights.&rdquo;
            </blockquote>
            <div className="mt-5 inline-flex items-center gap-3">
              <img
                src="/images/avatar-1.jpg"
                alt="Founder & CEO"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-display font-medium text-[15px] text-[#4d585f]">
                Founder &amp; CEO
              </span>
            </div>
          </SpringReveal>
        </div>
      </section>
    </>
  );
}

