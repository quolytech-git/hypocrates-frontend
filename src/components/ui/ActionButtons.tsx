"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface PrimaryGlassButtonProps {
  href: string;
  label: string;
  variant?: "blue" | "dark";
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
}

export function PrimaryGlassButton({
  href,
  label,
  variant = "blue",
  size = "md",
  external = false,
  className = "",
}: PrimaryGlassButtonProps) {
  const [hovered, setHovered] = useState(false);

  const isBlue = variant === "blue";
  const isSmall = size === "sm";

  const outerStyle = isBlue
    ? "bg-white/15 border border-white/75 shadow-[0_10px_30px_rgba(58,119,229,0.28)] backdrop-blur-[6px]"
    : "bg-black/5 border border-white/80 shadow-[0_10px_28px_rgba(0,0,0,0.16)] backdrop-blur-[6px]";

  const innerStyle = isBlue
    ? "bg-gradient-to-b from-[#5290f4] via-[#3b82f6] to-[#406ae4] border border-[#5290f4] text-white"
    : "bg-gradient-to-b from-[#323232] to-[#000000] border border-white/15 text-white";

  const paddingClass = isSmall ? "p-[4px]" : "p-[6px]";
  const innerHeight = isSmall ? "h-[42px] px-4" : "h-[52px] px-5";
  const textSize = isSmall ? "text-[15px]" : "text-[18px]";
  const circleSize = isSmall ? 30 : 36;

  const content = (
    <span
      className={`inline-flex items-center rounded-full ${paddingClass} ${outerStyle} transition-transform duration-300 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`relative inline-flex items-center justify-center rounded-full overflow-hidden ${innerHeight} ${innerStyle} font-display font-semibold ${textSize} leading-[1.3em] whitespace-nowrap select-none`}
      >
        {/* Left Arrow Badge (expands in on hover) */}
        <motion.span
          initial={false}
          animate={{
            width: hovered ? circleSize : 0,
            marginRight: hovered ? 10 : 0,
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1 : 0.4,
          }}
          transition={{ type: "spring", stiffness: 420, damping: 30 }}
          className="inline-flex items-center justify-center rounded-full bg-white shrink-0 overflow-hidden"
          style={{ height: circleSize }}
        >
          <img
            src="/images/arrow.svg"
            alt=""
            className="w-[13px] h-[9px] shrink-0"
          />
        </motion.span>

        <span className="px-1">{label}</span>

        {/* Right Arrow Badge (collapses out on hover) */}
        <motion.span
          initial={false}
          animate={{
            width: hovered ? 0 : circleSize,
            marginLeft: hovered ? 0 : 10,
            opacity: hovered ? 0 : 1,
            scale: hovered ? 0.4 : 1,
          }}
          transition={{ type: "spring", stiffness: 420, damping: 30 }}
          className="inline-flex items-center justify-center rounded-full bg-white shrink-0 overflow-hidden"
          style={{ height: circleSize }}
        >
          <img
            src="/images/arrow.svg"
            alt=""
            className="w-[13px] h-[9px] shrink-0"
          />
        </motion.span>
      </span>
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}

interface SecondaryPillButtonProps {
  href: string;
  label: string;
  variant?: "white" | "dark";
  className?: string;
}

export function SecondaryPillButton({
  href,
  label,
  variant = "white",
  className = "",
}: SecondaryPillButtonProps) {
  const [hovered, setHovered] = useState(false);
  const isWhite = variant === "white";

  const colorClass = isWhite
    ? "bg-white text-[#1d1d1d] hover:bg-black hover:text-white"
    : "bg-[#1d1d1d] text-white hover:bg-[#dde5ed] hover:text-[#1d1d1d]";

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`inline-flex items-center justify-center rounded-full px-[44px] h-[64px] font-display font-semibold text-[18px] leading-[1.3em] transition-colors duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] shadow-[0_6px_24px_rgba(0,0,0,0.06)] ${colorClass} ${className}`}
    >
      <span className="relative block h-[24px] overflow-hidden">
        <motion.span
          animate={{ y: hovered ? -24 : 0 }}
          transition={{ duration: 0.35, ease: [0.44, 0, 0.56, 1] }}
          className="flex flex-col items-center"
        >
          <span className="h-[24px] flex items-center whitespace-nowrap">{label}</span>
          <span className="h-[24px] flex items-center whitespace-nowrap">{label}</span>
        </motion.span>
      </span>
    </Link>
  );
}

interface PreTitleBadgeProps {
  text: string;
  variant?: "slate" | "white";
  className?: string;
}

export function PreTitleBadge({
  text,
  variant = "slate",
  className = "",
}: PreTitleBadgeProps) {
  const bg = variant === "white" ? "bg-white" : "bg-[#edf1f4]";
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-[20px] py-[10px] border border-[#dde5ed] ${bg} font-display font-medium text-[14px] leading-[1.3em] text-[#1d1d1d] ${className}`}
    >
      {text}
    </span>
  );
}

