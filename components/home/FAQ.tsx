"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import Link from "next/link";

// Enhanced Accordion Component with Smooth Animations
const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="border-b border-gray-200"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20, scale: 0.95 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
      transition={
        shouldReduceMotion
          ? {}
          : {
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            }
      }
    >
      <motion.button
        onClick={onToggle}
        className="w-full py-3 px-0 flex items-center justify-between text-left group"
        whileHover={
          shouldReduceMotion
            ? {}
            : { backgroundColor: "rgba(249, 250, 251, 0.5)" }
        }
        whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          className="text-sm font-medium text-gray-900 pr-4 group-hover:text-gray-700"
          whileHover={shouldReduceMotion ? {} : { x: 2 }}
          transition={{ duration: 0.2 }}
        >
          {question}
        </motion.span>
        <motion.div
          animate={shouldReduceMotion ? {} : { rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown
            className={`w-4 h-4 text-gray-600 flex-shrink-0 group-hover:text-gray-700 ${
              isOpen ? "text-[#ED8123]" : ""
            }`}
          />
        </motion.div>
      </motion.button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={
              shouldReduceMotion
                ? { height: "auto", opacity: 1, marginBottom: 20 }
                : { height: 0, opacity: 0, marginBottom: 0 }
            }
            animate={
              shouldReduceMotion
                ? { height: "auto", opacity: 1, marginBottom: 20 }
                : { height: "auto", opacity: 1, marginBottom: 20 }
            }
            exit={
              shouldReduceMotion
                ? { height: "auto", opacity: 1, marginBottom: 20 }
                : { height: 0, opacity: 0, marginBottom: 0 }
            }
            transition={
              shouldReduceMotion
                ? {}
                : {
                    height: { duration: 0.4, ease: "easeInOut" },
                    opacity: { duration: 0.3, delay: 0.1 },
                    marginBottom: { duration: 0.4 },
                  }
            }
            className="overflow-hidden"
          >
            <motion.div
              className="pb-3 px-0 text-gray-600 text-xs leading-relaxed"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Enhanced Main Page Component with Scroll Animations
export default function ShopAmFAQPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [email, setEmail] = useState("");
  const [agreedToNews, setAgreedToNews] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Scroll animation refs
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(
    0.1,
    "0px"
  );
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation(
    0.1,
    "-50px"
  );

  const faqs = [
    {
      question: "What is ShopAm?",
      answer:
        "ShopAm is a mobile marketplace app that transforms e-commerce in Nigeria by connecting buyers and sellers through livestream shopping, secure transactions, verified products, and reliable delivery through our parcel shop network.",
    },
    {
      question: "How does ShopAm protect buyers?",
      answer:
        "ShopAm protects buyers through verified seller profiles, secure payment processing, buyer protection guarantees, and a reliable dispute resolution system.",
    },
    {
      question: "Do sellers pay commission on ShopAm?",
      answer:
        "Yes, sellers pay a small commission on successful sales made through the platform. This helps us maintain the platform and provide excellent service to both buyers and sellers.",
    },
    {
      question: "How does the referral program work?",
      answer:
        "Our referral program rewards you for inviting friends to ShopAm. When your referrals make purchases or sales, you earn rewards that can be used on the platform.",
    },
    {
      question: "What are ShopAm Parcel Shops?",
      answer:
        "ShopAm Parcel Shops are local pickup and drop-off points across Nigeria where you can conveniently collect or send your orders, providing flexible delivery options.",
    },
    {
      question: "How do livestream sales work?",
      answer:
        "Livestream sales allow sellers to showcase products in real-time, interact with potential buyers, and make sales through engaging live video broadcasts on the platform.",
    },
    {
      question: "When do sellers receive payment?",
      answer:
        "Sellers receive payment after the buyer confirms receipt of the product and the transaction is completed successfully, ensuring both parties are protected.",
    },
    {
      question: "Is my money safe in the ShopAm Wallet?",
      answer:
        "Yes, your money is completely safe in the ShopAm Wallet. We use bank-level security, encryption, and comply with all financial regulations to protect your funds.",
    },
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email, "Agreed:", agreedToNews);
    // Handle newsletter subscription
  };

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-30"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-32 left-10 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-8 md:py-8 lg:py-12 relative z-10">
        <div className="grid md:grid-cols-2 md:gap-8">
          {/* Left Column - Title and CTA */}
          <motion.div
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className="lg:pr-8"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={
              shouldReduceMotion
                ? {}
                : headerVisible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={
              shouldReduceMotion ? {} : { duration: 0.6, ease: "easeOut" }
            }
          >
            <motion.h1
              className="text-center md:text-start text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4"
              whileHover={shouldReduceMotion ? {} : { x: 2 }}
              transition={{ duration: 0.2 }}
            >
              Common Questions About ShopAm
            </motion.h1>
            <motion.p
              className="text-gray-600 text-sm mb-6 leading-relaxed"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion ? {} : { duration: 0.5, delay: 0.2 }
              }
            >
              Everything you need to know about buying, selling, payments,
              delivery, and earning with ShopAm.
            </motion.p>

            <motion.div
              className="mt-8 hidden md:block"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion ? {} : { duration: 0.5, delay: 0.4 }
              }
            >
              <motion.p
                className="text-xs font-semibold text-gray-900 mb-2"
                whileHover={shouldReduceMotion ? {} : { x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Still have a question in mind?
              </motion.p>
              <motion.p
                className="text-xs text-gray-600 mb-4"
                whileHover={shouldReduceMotion ? {} : { x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Contact us if you have any other questions.
              </motion.p>
              <Link href="/contant-us">
                <motion.button
                  className="border-2 border-[#ED8123]/90 text-[#ED8123]/90 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 relative overflow-hidden"
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.02,
                          y: -2,
                          boxShadow: "0 10px 25px -5px rgba(237, 129, 35, 0.1)",
                          transition: { duration: 0.3, ease: "easeOut" },
                        }
                  }
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Contact Us
                  </motion.span>
                  {!shouldReduceMotion && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            ref={accordionRef as React.RefObject<HTMLDivElement>}
            className="lg:pl-8"
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
            animate={
              shouldReduceMotion
                ? {}
                : accordionVisible
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 20 }
            }
            transition={
              shouldReduceMotion
                ? {}
                : {
                    duration: 0.6,
                    ease: "easeOut",
                    staggerChildren: 0.1,
                  }
            }
          >
            <motion.div
              className="bg-gray-50/30  md:p-4 backdrop-blur-sm border-t"
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              transition={{ duration: 0.3 }}
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  index={index}
                />
              ))}
            </motion.div>
            <motion.div
              className="mt-8 md:hidden"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion ? {} : { duration: 0.5, delay: 0.4 }
              }
            >
              <motion.p
                className="text-xs font-semibold text-gray-900 mb-2"
                whileHover={shouldReduceMotion ? {} : { x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Still have a question in mind?
              </motion.p>
              <motion.p
                className="text-xs text-gray-600 mb-4"
                whileHover={shouldReduceMotion ? {} : { x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Contact us if you have any other questions.
              </motion.p>
              <motion.button
                className="border-1 border-[#ED8123]/90 text-[#ED8123]/90 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 relative overflow-hidden w-full"
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.02,
                        y: -2,
                        boxShadow: "0 10px 25px -5px rgba(237, 129, 35, 0.1)",
                        transition: { duration: 0.3, ease: "easeOut" },
                      }
                }
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Contact Us
                </motion.span>
                {!shouldReduceMotion && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
