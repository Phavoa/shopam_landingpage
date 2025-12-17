"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedUnderlineTitleProps {
  children: React.ReactNode;
  className?: string;
  underlineColor?: string;
}

export default function AnimatedUnderlineTitle({
  children,
  className = "",
  underlineColor = "bg-orange-500",
}: AnimatedUnderlineTitleProps) {
  return (
    <span className="relative inline-block w-full">
      <span className={className}>{children}</span>
      <motion.span
        className={`absolute bottom-0 left-0 h-[2px] ${underlineColor} w-full`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.2,
        }}
        style={{
          transformOrigin: "left",
        }}
      />
    </span>
  );
}
