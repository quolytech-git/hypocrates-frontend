"use client";

import React from "react";
import { motion } from "framer-motion";

interface SpringRevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function SpringReveal({
  children,
  delay = 0,
  y = 18,
  className = "",
}: SpringRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0.001, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{
        type: "spring",
        stiffness: 210,
        damping: 26,
        delay: Math.min(delay, 0.25),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
