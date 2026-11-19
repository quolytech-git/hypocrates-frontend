"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PreTitleBadge, PrimaryGlassButton } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";

const securityTags = [
  "HIPAA & BAA Ready",
  "Zero-Retention Voice Scribe",
  "AES-256 Encryption",
];

const aiEngines = [
  { label: "CLINICAL AI", color: "#4ade80" },
  { label: "RECEPTION", color: "#93c5fd" },
  { label: "OPERATIONS", color: "#fdba74" },
  { label: "CLAIMS AI", color: "#5eead4" },
];

const smartAlerts = [
  {
    badge: "SOAP Ready",
    tone: "bg-[#10b981]/15 text-[#10b981]",
    title: "Ambient Note Drafted",
    detail: "Dental Exam • Emily Doe • 42s",
  },
  {
    badge: "Claims AI",
    tone: "bg-[#3b82f6]/15 text-[#3b82f6]",
    title: "ICD-10 / CPT Validated",
    detail: "DeltaDental 75% Pre-Checked",
  },
  {
    badge: "Reception AI",
    tone: "bg-[#ff8b06]/15 text-[#c26700]",
    title: "Waitlist Slot Matched",
    detail: "Branch A • 2:30 PM Filled",
  },
];

const specialtyChips = [
  { label: "Physiotherapy", href: "/solutions/physiotherapy" },
  { label: "Hair Transplant", href: "/solutions/hair-transplant" },
  { label: "Gynecology", href: "/solutions/gynecology" },
  { label: "Dermatology", href: "/solutions/dermatology" },
  { label: "Dental Clinics", href: "/solutions/dental" },
  { label: "Plastic Surgery", href: "/solutions/plastic-surgery" },
  { label: "ENT Clinics", href: "/solutions/ent" },
  { label: "Nutrition", href: "/solutions/nutrition" },
  { label: "Eye Centers", href: "/solutions/eye-center" },
];

export function CoreFeaturesSection() {
  const [engineIndex, setEngineIndex] = useState(0);
  const [alertIndex, setAlertIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setEngineIndex((prev) => (prev + 1) % aiEngines.length);
      setAlertIndex((prev) => (prev + 1) % smartAlerts.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const currentEngine = aiEngines[engineIndex];

  return (
    <section id="core-features" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1160px] mx-auto px-5">
        {/* Header Split */}
        <SpringReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-[580px]">
            <PreTitleBadge text="Core features" variant="slate" />
            <h2 className="mt-5 font-heading font-semibold text-[34px] md:text-[48px] leading-[1.2em] tracking-[-1px] text-[#1d1d1d]">
              Built to simplify your daily clinic workflows
            </h2>
          </div>

          <div className="max-w-[420px] flex flex-col items-start lg:items-end lg:text-right">
            <p className="font-display font-medium text-[18px] leading-[1.35em] text-[#4d585f]">
              One unified platform combining patient records, ambient AI scribes,
              smart scheduling, and automated billing.
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

        {/* 5-Card Bento Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 8 Columns */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: HIPAA & Security */}
              <SpringReveal delay={0.05}>
                <div className="rounded-[24px] bg-[#edf1f4] pt-8 pb-7 flex flex-col justify-between h-[390px] overflow-hidden">
                  <h3 className="font-heading font-semibold text-[24px] text-center text-[#1d1d1d] px-6">
                    HIPAA &amp; GDPR safeguards
                  </h3>

                  <div className="flex items-center justify-center my-2">
                    <motion.img
                      src="/images/feature-shield.png"
                      alt="HIPAA security shield"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-[190px] w-auto object-contain drop-shadow-[0_18px_28px_rgba(64,106,228,0.22)]"
                    />
                  </div>

                  <div className="relative overflow-hidden">
                    <div className="animate-fx-marquee-pills gap-3">
                      {[...securityTags, ...securityTags].map((tag, i) => (
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

              {/* Card 2: Clinic Analytics */}
              <SpringReveal delay={0.1}>
                <div className="relative rounded-[24px] overflow-hidden pt-8 px-6 pb-0 flex flex-col justify-between h-[390px]">
                  <img
                    src="/images/feature-market-bg.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="relative z-10 text-center">
                    <h3 className="font-heading font-semibold text-[24px] text-[#1d1d1d]">
                      Real-time clinic analytics
                    </h3>
                  </div>

                  <div className="relative z-10 mt-6 mx-auto w-full max-w-[310px] rounded-t-[20px] bg-white/80 backdrop-blur-md border border-white pt-5 px-5 pb-5 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-display text-[12px] text-[#4d585f]">
                          Patient Throughput
                        </div>
                        <div className="font-heading font-semibold text-[26px] text-[#1d1d1d]">
                          +18.4%
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] font-display font-semibold text-[12px]">
                        30 days
                      </span>
                    </div>
                    <svg
                      viewBox="0 0 260 110"
                      className="w-full h-[110px] mt-3"
                      fill="none"
                    >
                      <path
                        d="M6 92 C40 82, 58 64, 90 66 C122 68, 138 40, 174 42 C205 44, 226 16, 254 12"
                        stroke="#3b82f6"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <circle cx="254" cy="12" r="5" fill="#10b981" />
                    </svg>
                  </div>
                </div>
              </SpringReveal>
            </div>

            {/* Card 4: Multi-Specialty Tenants (Wide bottom-left) */}
            <SpringReveal delay={0.2}>
              <div className="relative rounded-[24px] overflow-hidden pt-8 px-6 md:px-10 pb-8 flex flex-col justify-between min-h-[340px]">
                <img
                  src="/images/feature-portfolio-bg.jpg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 text-center max-w-[520px] mx-auto">
                  <h3 className="font-heading font-semibold text-[24px] text-[#1d1d1d]">
                    Multi-location &amp; specialty ready
                  </h3>
                  <p className="mt-2 font-display font-medium text-[16px] leading-[1.4em] text-[#4d585f]">
                    Isolated branch SQL databases, automated public clinic
                    websites, and shared authentication across 7 medical specialties.
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-2.5">
                  {specialtyChips.map((chip) => (
                    <Link
                      key={chip.href}
                      href={chip.href}
                      className="px-4 py-2.5 rounded-full bg-white/90 hover:bg-[#1d1d1d] hover:text-white border border-[#dde5ed] font-display font-semibold text-[14px] text-[#1d1d1d] shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-colors"
                    >
                      {chip.label} →
                    </Link>
                  ))}
                </div>
              </div>
            </SpringReveal>
          </div>

          {/* Right 4 Columns: AI Ecosystem + Smart Clinical Alerts */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 3: Slot-cycling AI Engines */}
            <SpringReveal delay={0.15} className="flex-1">
              <div className="rounded-[24px] bg-black p-8 flex flex-col justify-between h-[420px] lg:h-[450px] overflow-hidden text-center">
                <h3 className="font-heading font-semibold text-[24px] text-white">
                  Integrated AI ecosystem
                </h3>

                <div className="my-auto flex flex-col items-center justify-center py-4">
                  <div className="h-[78px] overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentEngine.label}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="font-heading font-bold text-[34px] sm:text-[42px] lg:text-[46px] leading-none tracking-[-1.2px] whitespace-nowrap"
                        style={{ color: currentEngine.color }}
                      >
                        {currentEngine.label}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div
                    aria-hidden="true"
                    className="h-[52px] overflow-hidden flex items-center justify-center -mt-2 opacity-25 scale-y-[-1] select-none pointer-events-none"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`reflect-${currentEngine.label}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="font-heading font-bold text-[34px] sm:text-[42px] lg:text-[46px] leading-none tracking-[-1.2px] whitespace-nowrap"
                        style={{ color: currentEngine.color }}
                      >
                        {currentEngine.label}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <p className="font-display font-medium text-[17px] leading-[1.35em] text-white/75 max-w-[260px] mx-auto">
                  Orchestrated AI agents collaborating across every clinic role.
                </p>
              </div>
            </SpringReveal>

            {/* Card 5: Smart Clinical Alerts */}
            <SpringReveal delay={0.25}>
              <div className="rounded-[24px] bg-[#edf1f4] p-7 flex flex-col justify-between h-[300px] overflow-hidden">
                <h3 className="font-heading font-semibold text-[24px] text-center text-[#1d1d1d]">
                  Smart clinical alerts
                </h3>

                <div className="relative flex flex-col items-center justify-center my-auto pt-4">
                  <motion.img
                    src="/images/feature-bell.png"
                    alt="Notification bell"
                    animate={{ rotate: [0, -8, 8, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="absolute -top-6 right-3 w-[62px] h-auto z-20 drop-shadow-[0_10px_20px_rgba(245,28,35,0.22)]"
                  />

                  <div className="relative w-full max-w-[290px] h-[130px] flex flex-col items-center justify-center">
                    {[0, 1, 2].map((offset) => {
                      const idx = (alertIndex + offset) % smartAlerts.length;
                      const item = smartAlerts[idx];
                      const scale =
                        offset === 0 ? 1 : offset === 1 ? 0.92 : 0.84;
                      const y = offset * 22;
                      const zIndex = 10 - offset;
                      const opacity =
                        offset === 0 ? 1 : offset === 1 ? 0.85 : 0.65;
                      return (
                        <motion.div
                          key={item.title}
                          animate={{ y, scale, opacity }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 26,
                          }}
                          style={{ zIndex }}
                          className="absolute top-2 w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center justify-between gap-2"
                        >
                          <div className="text-left">
                            <div className="font-heading font-semibold text-[14px] text-[#1d1d1d]">
                              {item.title}
                            </div>
                            <div className="font-display text-[12px] text-[#4d585f]">
                              {item.detail}
                            </div>
                          </div>
                          <span
                            className={`px-2.5 py-1 rounded-full font-display font-semibold text-[11px] shrink-0 ${item.tone}`}
                          >
                            {item.badge}
                          </span>
                        </motion.div>
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
