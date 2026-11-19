"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { PreTitleBadge } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";

const clientLogos = Array.from({ length: 11 }, (_, i) => `/images/client-${i + 1}.svg`);

const beforeItems = [
  "Financial data is spread across platforms and is hard to understand",
  "Lack of clear direction for buy, hold, or sell decisions",
  "Tracking investments manually takes time and effort",
  "Decisions based on incomplete or outdated information",
];

const afterItems = [
  "Get clear recommendations based on real-time data",
  "Understand risks before making investment decisions",
  "Monitor your portfolio in real time no manual effort required",
  "Make consistent and informed investment choices",
];

export function ClientsAndBeforeAfter() {
  const [mode, setMode] = useState<"before" | "after">("before");
  const [userClicked, setUserClicked] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const isTriggerInView = useInView(triggerRef, { amount: 0.7 });

  // Mirror the live site's scroll-triggered switch unless manually overridden
  useEffect(() => {
    if (!userClicked && isTriggerInView) {
      setMode("after");
    }
  }, [isTriggerInView, userClicked]);

  const handleSelect = (next: "before" | "after") => {
    setUserClicked(true);
    setMode(next);
  };

  return (
    <>
      {/* Client Ticker Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#dde5ed]" />
            <PreTitleBadge
              text="Trusted by investors and financial teams"
              variant="slate"
              className="relative z-10"
            />
          </div>

          <div className="relative mt-10 overflow-hidden">
            {/* Left & Right White Fade Masks */}
            <div
              className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0) 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%)",
              }}
            />

            <div className="animate-fx-marquee items-center">
              {[...clientLogos, ...clientLogos].map((src, idx) => (
                <div
                  key={idx}
                  className="mx-[35px] shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={src}
                    alt={`Client partner ${(idx % 11) + 1}`}
                    className="h-[30px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Comparison Section */}
      <section id="before-after" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <SpringReveal className="text-center">
            <h2 className="font-heading font-semibold text-[34px] md:text-[48px] leading-[1.2em] tracking-[-1px] text-[#1d1d1d] max-w-[560px] mx-auto">
              Smarter decisions start with clear data
            </h2>
          </SpringReveal>

          {/* Tab Header + Rotary Dial */}
          <div className="mt-12 relative flex items-center justify-center">
            <div className="grid grid-cols-3 items-center w-full max-w-[580px]">
              <button
                type="button"
                onClick={() => handleSelect("before")}
                className={`py-4 px-4 text-right md:text-center font-display font-semibold text-[16px] md:text-[18px] transition-colors cursor-pointer rounded-tl-[24px] ${
                  mode === "before"
                    ? "text-[#1d1d1d]"
                    : "text-[#4d585f]/60 hover:text-[#1d1d1d]"
                }`}
              >
                Before FintechX
              </button>

              {/* Central Rotary Dial */}
              <div className="flex items-center justify-center relative z-20 -mb-6">
                <motion.div
                  onClick={() =>
                    handleSelect(mode === "before" ? "after" : "before")
                  }
                  animate={{ rotate: mode === "before" ? 0 : 0 }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  className="w-[108px] md:w-[126px] cursor-pointer select-none"
                  title="Toggle Before / After FintechX"
                >
                  <AnimatePresence mode="wait">
                    {mode === "before" ? (
                      <motion.img
                        key="dial-before"
                        src="/images/dial-before.png"
                        alt="Before FintechX Dial"
                        initial={{ opacity: 0.5, rotate: -18 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0.5, rotate: 18 }}
                        transition={{ duration: 0.35 }}
                        className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
                      />
                    ) : (
                      <motion.img
                        key="dial-after"
                        src="/images/dial-after.png"
                        alt="After FintechX Dial"
                        initial={{ opacity: 0.5, rotate: -18 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0.5, rotate: 18 }}
                        transition={{ duration: 0.35 }}
                        className="w-full h-auto drop-shadow-[0_12px_28px_rgba(16,185,129,0.28)]"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              <button
                type="button"
                onClick={() => handleSelect("after")}
                className={`py-4 px-4 text-left md:text-center font-display font-semibold text-[16px] md:text-[18px] transition-colors cursor-pointer rounded-tr-[24px] ${
                  mode === "after"
                    ? "text-[#1d1d1d]"
                    : "text-[#4d585f]/60 hover:text-[#1d1d1d]"
                }`}
              >
                After FintechX
              </button>
            </div>
          </div>

          {/* Outer Frame */}
          <div
            ref={triggerRef}
            className="rounded-[30px] border border-[#dde5ed] p-2 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.04)]"
          >
            <AnimatePresence mode="wait">
              {mode === "before" ? (
                <motion.div
                  key="before-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-[24px] bg-[#edf1f4] p-7 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  <div className="md:col-span-7">
                    <h3 className="font-heading font-semibold text-[26px] md:text-[32px] leading-[1.2em] text-[#1d1d1d] max-w-[380px]">
                      Challenges of managing investments today
                    </h3>
                    <ul className="mt-7 space-y-4">
                      {beforeItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-display font-medium text-[16px] leading-[1.4em] text-[#4d585f]"
                        >
                          <img
                            src="/images/icon-red-x.svg"
                            alt=""
                            className="w-3 h-3 mt-1.5 shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-5 flex flex-col gap-4">
                    <div className="rounded-[20px] bg-[#ff0d0d]/[0.05] border border-[#ff0d0d]/30 p-6">
                      <h4 className="font-heading font-semibold text-[32px] leading-[1.1em] text-[#1d1d1d]">
                        68%
                      </h4>
                      <p className="mt-2 font-display font-medium text-[16px] text-[#4d585f]">
                        Financial data confusion
                      </p>
                    </div>
                    <div className="rounded-[20px] bg-[#ff0d0d]/[0.05] border border-[#ff0d0d]/30 p-6">
                      <h4 className="font-heading font-semibold text-[32px] leading-[1.1em] text-[#1d1d1d]">
                        55%
                      </h4>
                      <p className="mt-2 font-display font-medium text-[16px] text-[#4d585f]">
                        Poor data understanding
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="after-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="relative rounded-[24px] overflow-hidden bg-[#0a0f0d] p-7 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  <img
                    src="/images/prefooter-bg.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,0,0,0.94) 20%, rgba(10,25,18,0.75) 100%)",
                    }}
                  />

                  <div className="relative z-10 md:col-span-7">
                    <h3 className="font-heading font-semibold text-[26px] md:text-[32px] leading-[1.2em] text-white max-w-[380px]">
                      Smarter way to manage your investments
                    </h3>
                    <ul className="mt-7 space-y-4">
                      {afterItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-display font-medium text-[16px] leading-[1.4em] text-white/85"
                        >
                          <img
                            src="/images/icon-green-check.svg"
                            alt=""
                            className="w-3.5 h-3.5 mt-1.5 shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 md:col-span-5 flex flex-col gap-4">
                    <div className="rounded-[20px] bg-[#10b981]/[0.1] border border-[#10b981]/30 backdrop-blur-md p-6">
                      <h4 className="font-heading font-semibold text-[32px] leading-[1.1em] text-white">
                        3X Faster
                      </h4>
                      <p className="mt-2 font-display font-medium text-[16px] text-white/75">
                        Smart decisions
                      </p>
                    </div>
                    <div className="rounded-[20px] bg-[#10b981]/[0.1] border border-[#10b981]/30 backdrop-blur-md p-6">
                      <h4 className="font-heading font-semibold text-[32px] leading-[1.1em] text-white">
                        24/7
                      </h4>
                      <p className="mt-2 font-display font-medium text-[16px] text-white/75">
                        Real-time tracking
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

