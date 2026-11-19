import React from "react";

interface HypocratesLogoProps {
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  wordmarkClassName?: string;
}

export function HypocratesMark({
  className = "h-10 w-10",
  alt = "Hypocrates icon",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src="/images/hypocrates-logo.png"
      alt={alt}
      className={`${className} object-contain transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3`}
    />
  );
}

export function HypocratesLogo({
  showWordmark = true,
  size = "md",
  className = "",
  wordmarkClassName = "",
}: HypocratesLogoProps) {
  const iconSizeClass =
    size === "sm"
      ? "h-10 w-10"
      : size === "lg"
      ? "h-16 w-16"
      : size === "xl"
      ? "h-20 w-20"
      : "h-12 w-12";

  const textSizeClass =
    size === "sm"
      ? "text-[20px]"
      : size === "lg"
      ? "text-[28px]"
      : size === "xl"
      ? "text-[34px]"
      : "text-[23px]";

  return (
    <span className={`group inline-flex items-center gap-3 shrink-0 ${className}`}>
      <HypocratesMark className={iconSizeClass} alt="Hypocrates Logo" />
      {showWordmark && (
        <span
          className={`font-heading font-bold tracking-[-0.03em] text-[#1d1d1d] leading-none ${textSizeClass} ${wordmarkClassName}`}
        >
          Hypocrates
        </span>
      )}
    </span>
  );
}
