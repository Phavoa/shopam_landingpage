"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import EnhancedFeaturesCards from "./EnhancedFeaturesCards";

const Features = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref, isVisible } = useScrollAnimation(0.3, "-50px");

  return (
    <div className="bg-[#F0F8FF] relative pt-12 z-0 overflow-hidden">
      {/* Background lines with animation */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute top-0 w-full h-full inset-0 flex justify-center z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="border-x-3 border-gray-300 h-full w-2/5" />
        </motion.div>
      )}

      {/* Animated background gradient */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Animated title and subtitle */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="text-center md:mb-8"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : isVisible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.3, staggerChildren: 0.05 }}
        >
          <motion.h1
            className="text-2xl md:text-3xl text-black font-bold font-termina mb-2 relative will-change-transform"
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : isVisible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            EveryThing You Need
            {/* Animated underline */}
          </motion.h1>

          <motion.p
            className="text-base md:text-lg font-sans text-gray-700 leading-relaxed max-w-3xl mx-auto will-change-transform"
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            Everything You Need for Safe Shopping and Selling
          </motion.p>

          <motion.p
            className="text-lg font-sans text-gray-700 leading-relaxed max-w-4xl mx-auto"
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : isVisible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          >
            Shop, sell, and earn with confidence using our comprehensive
            platform
          </motion.p>
        </motion.div>

        {/* Enhanced feature cards with scroll animations */}
        <EnhancedFeaturesCards />
      </div>

      {/* Floating decorative elements */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-purple-200/30 rounded-full blur-xl"
            animate={{
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300/20 rounded-full blur-lg"
            animate={{
              y: [0, -10, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}
    </div>
  );
};

export default Features;
