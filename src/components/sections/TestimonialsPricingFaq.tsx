"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PrimaryGlassButton,
} from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";

const testimonials = [
  {
    quote:
      "Before/after photo tracking paired with Clinical AI cut our SOAP note overhead and saved 12 hours every single week.",
    name: "Dr. Elena Vance",
    role: "Director, Apex Dermatology",
    avatar: "/images/avatar-2.jpg",
  },
  {
    quote:
      "Operations AI optimized our diagnostic room rotations and shaved 22 minutes off patient wait times across branches.",
    name: "Dr. Marcus Chen",
    role: "Medical Lead, VisionEye Centers",
    avatar: "/images/avatar-3.jpg",
  },
  {
    quote:
      "Having Reception AI, Clinical AI, and DeltaDental billing pre-checks in one isolated multi-branch tenant changed our franchise.",
    name: "Dr. Sarah Jenkins",
    role: "Founder, BrightSmile Dental Group",
    avatar: "/images/avatar-4.jpg",
  },
  {
    quote:
      "Ambient voice dictation drafts structured ENT notes from our audiometry sessions in under a minute with zero-retention security.",
    name: "Dr. David Miller",
    role: "Otolaryngologist, ENT Care",
    avatar: "/images/avatar-1.jpg",
  },
  {
    quote:
      "Our physiotherapists track joint ROM and home exercise adherence effortlessly while Clinical AI flags early recovery regression.",
    name: "Daniel Carter",
    role: "Lead Physio, MotionRehab Clinic",
    avatar: "/images/avatar-5.jpg",
  },
];

const faqs = [
  {
    q: "Is Hypocrates HIPAA and GDPR compliant?",
    a: "Yes. Hypocrates acts as a Business Associate under HIPAA and executes Business Associate Agreements (BAAs) with Covered Entities. All PHI is encrypted with AES-256 at rest and TLS 1.3 in transit, with strict role-based access and audit logs.",
  },
  {
    q: "How does Zero-Retention Ambient Voice Scribing work?",
    a: "Consultation audio is processed in real time to compile structured SOAP notes and is immediately deleted once formatted. Hypocrates never retains raw patient or clinician voice recordings on disk.",
  },
  {
    q: "Which EHRs, imaging systems, and wearables are supported?",
    a: "Hypocrates integrates with Epic, Cerner, Athenahealth, Modernizing Medicine, DrChrono, eClinicalWorks, DICOM PACS, Apple HealthKit, Fitbit, Garmin, Dexcom CGM, Change Healthcare, Availity, and Stripe.",
  },
  {
    q: "Can we run multiple clinic branches or specialties under one account?",
    a: "Yes. Hypocrates uses a multi-level franchise architecture where each branch runs an isolated SQL database and automated public website while managers get unified cross-branch analytics.",
  },
  {
    q: "Does Hypocrates provide medical diagnosis or replace clinicians?",
    a: "No. Hypocrates is an AI-powered administrative and documentation assistant. Licensed healthcare professionals remain solely responsible for reviewing and verifying all documentation and clinical decisions.",
  },
];

export function TestimonialsPricingFaq() {
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
              <h2 className="font-heading font-semibold text-[34px] md:text-[48px] leading-[1.15em] tracking-[-1px] text-[#1d1d1d] max-w-[580px]">
                What clinicians say about Hypocrates
              </h2>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[#4d585f] font-display font-medium text-[15px]">
                <span className="inline-flex items-center gap-2">
                  <img src="/images/icon-star.svg" alt="" className="w-4 h-4" />
                  12+ hrs saved/week
                </span>
                <span className="hidden sm:block w-[1px] h-4 bg-[#1d1d1d]/15" />
                <span className="inline-flex items-center gap-2">
                  <img src="/images/icon-heart.svg" alt="" className="w-4 h-4" />
                  7 Medical Specialties
                </span>
                <span className="hidden sm:block w-[1px] h-4 bg-[#1d1d1d]/15" />
                <span className="inline-flex items-center gap-2">
                  <img src="/images/icon-users.svg" alt="" className="w-5 h-4" />
                  HIPAA &amp; GDPR Ready
                </span>
              </div>
            </div>

            <div>
              <PrimaryGlassButton
                href="/demo"
                label="Request Demo"
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <SpringReveal className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <h2 className="font-heading font-semibold text-[34px] md:text-[48px] leading-[1.12em] tracking-[-1px] text-[#1d1d1d]">
                Frequently asked questions
              </h2>
              <p className="mt-4 font-display font-medium text-[17px] leading-[1.45em] text-[#4d585f]">
                Quick answers about HIPAA compliance, zero-retention scribing,
                EHR integrations, and specialty workflows.
              </p>
            </div>

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
                Talk with our clinical workflow specialists.
              </p>

              <div className="mt-6">
                <PrimaryGlassButton
                  href="/contact"
                  label="Contact our team"
                  variant="dark"
                />
              </div>
            </div>
          </SpringReveal>

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
