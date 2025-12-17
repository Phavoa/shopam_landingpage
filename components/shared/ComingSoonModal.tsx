"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({
  isOpen,
  onClose,
}: ComingSoonModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Focus management
  const getFocusableElements = useCallback(() => {
    if (!modalRef.current) return [];
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    return Array.from(focusableElements) as HTMLElement[];
  }, []);

  // Trap focus within modal
  const trapFocus = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }

      if (e.key === "Escape") {
        onClose();
      }
    },
    [isOpen, getFocusableElements, onClose]
  );

  // Handle outside click
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  // Handle escape key and focus trap
  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Focus the first focusable element
      const focusableElements = getFocusableElements();
      focusableElements[0]?.focus();

      // Add event listeners
      document.addEventListener("keydown", trapFocus);
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", trapFocus);
        document.body.style.overflow = "unset";

        // Restore focus to the previously focused element
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, trapFocus, getFocusableElements]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed h-screen inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={handleBackdropClick}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ED8123] focus:ring-opacity-50"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Icon */}
              <motion.div
                className="flex justify-center mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#ED8123] to-orange-400 rounded-full flex items-center justify-center">
                  <motion.svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </motion.svg>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                id="modal-title"
                className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-3 font-termina"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                Coming Soon!
              </motion.h2>

              {/* Description */}
              <motion.p
                id="modal-description"
                className="text-gray-600 text-center mb-6 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                We're putting the finishing touches on the ShopAm app. Get ready
                for an amazing shopping experience coming to your device soon!
              </motion.p>

              {/* Features List */}
              <motion.div
                className="space-y-3 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                {[
                  "Secure Shopping & Selling",
                  "Live Streaming Commerce",
                  "ShopAm Wallet System",
                  "Parcel Shop Network",
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center text-sm text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#ED8123] rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <button
                  onClick={onClose}
                  className="flex-1 bg-[#ED8123] hover:bg-[#ED8123]/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ED8123] focus:ring-opacity-50 text-sm"
                >
                  Got it!
                </button>
                <button
                  onClick={() => {
                    // Could add email signup here in the future
                    onClose();
                  }}
                  className="flex-1 border border-gray-300 hover:border-[#ED8123] text-gray-700 hover:text-[#ED8123] font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ED8123] focus:ring-opacity-50 text-sm"
                >
                  Notify Me
                </button>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ED8123]/10 to-transparent rounded-full -translate-y-16 translate-x-16"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full translate-y-12 -translate-x-12"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
