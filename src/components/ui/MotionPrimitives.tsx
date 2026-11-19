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
  y = 20,
  className = "",
}: SpringRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0.001, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 1,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

