"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

// Predefined particle positions for consistent animation
const PARTICLE_POSITIONS = [
  { x: 30, y: 40 },
  { x: 70, y: 60 },
  { x: 50, y: 30 },
];

// Optimized easing functions for better performance
const easing = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  easeOut: "easeOut" as const,
  easeInOut: "easeInOut" as const,
};

// Animation variants with proper typing
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
  hover: {
    y: -6,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: easing.smooth,
    },
  },
};

const microInteractionVariants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 0.2,
      ease: easing.easeInOut,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Icon animation configuration based on reduced motion preference
  const iconAnimation = shouldReduceMotion
    ? { initial: { scale: 1 } }
    : {
        initial: { scale: 0, rotate: -90 },
        animate: {
          scale: 1,
          rotate: 0,
          transition: {
            delay: index * 0.05 + 0.2,
            duration: 0.4,
            ease: easing.smooth,
          },
        },
        hover: {
          scale: 1.05,
          rotate: 3,
          transition: {
            duration: 0.2,
            ease: easing.easeOut,
          },
        },
      };

  // Background glow effect variants
  const glowVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: isHovered ? 0.08 : 0,
      scale: isHovered ? 1.1 : 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : cardVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileHover={shouldReduceMotion ? undefined : "hover"}
      className="relative"
    >
      {/* Background glow effect */}
      {!shouldReduceMotion && (
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-purple-600/15 rounded-3xl blur-xl"
          style={{ zIndex: -1 }}
        />
      )}

      <motion.div
        className={`
          group relative p-6 border border-gray-200 rounded-3xl bg-white 
          transition-all duration-200 cursor-pointer overflow-hidden
          ${
            isHovered
              ? "shadow-xl border-blue-200"
              : "shadow-sm hover:shadow-md"
          }
          ${shouldReduceMotion ? "" : "hover:-translate-y-1"}
        `}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Animated background pattern */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 opacity-0"
            animate={{
              opacity: isHovered ? 0.03 : 0,
              background: isHovered
                ? "radial-gradient(circle at center, #3B82F6 0%, transparent 70%)"
                : "transparent",
            }}
            transition={{ duration: 0.2 }}
          />
        )}

        {/* Icon container with enhanced animations */}
        <motion.div className="mb-4 relative" {...iconAnimation}>
          <div
            className={`
            w-16 h-16 rounded-full border-2 flex items-center justify-center
            transition-all duration-200 relative overflow-hidden
            ${
              isHovered
                ? "border-blue-300 bg-blue-50 shadow-md"
                : "border-gray-100 bg-white shadow-sm"
            }
          `}
          >
            {/* Ripple effect on hover */}
            {!shouldReduceMotion && isHovered && (
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-400/15"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.4, ease: easing.easeOut }}
              />
            )}

            <motion.div
              variants={microInteractionVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="relative z-10"
            >
              <Image
                src={icon}
                alt={title}
                width={40}
                height={40}
                className="transition-transform duration-200"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Content with micro-interactions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.05 + 0.3, duration: 0.3 },
          }}
        >
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-1 relative"
            whileHover={shouldReduceMotion ? undefined : { x: 2 }}
            transition={{ duration: 0.15 }}
          >
            {title}
            {/* Underline animation on hover */}
            {!shouldReduceMotion && (
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2, ease: easing.easeOut }}
              />
            )}
          </motion.h3>

          <motion.p
            className="text-gray-600 leading-relaxed text-sm"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    color: isHovered ? "#374151" : "#6B7280",
                  }
            }
            transition={{ duration: 0.15 }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Interactive border highlight */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-transparent"
            animate={{
              borderColor: isHovered ? "#3B82F6" : "transparent",
            }}
            transition={{ duration: 0.2 }}
            style={{
              background: isHovered
                ? "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)"
                : "transparent",
            }}
          />
        )}

        {/* Simplified particle effect on hover */}
        {!shouldReduceMotion && isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {PARTICLE_POSITIONS.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full opacity-50"
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                }}
                animate={{
                  x: `${pos.x}%`,
                  y: `${pos.y}%`,
                  scale: [0, 0.8, 0],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.05,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
