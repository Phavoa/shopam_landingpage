import { useCallback } from "react";

// Check if user prefers reduced motion
const prefersReducedMotion = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return false;
};

export const useSmoothScroll = () => {
  const scrollToElement = useCallback(
    (elementId: string, behavior: ScrollBehavior = "smooth") => {
      const element = document.getElementById(elementId.replace("#", ""));

      if (!element) {
        console.warn(`Element with id "${elementId}" not found`);
        return;
      }

      // Determine scroll behavior based on user preference
      const scrollBehavior = prefersReducedMotion() ? "auto" : behavior;

      // Calculate offset for fixed header (height of header is approximately 88px)
      const headerOffset = 88;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      if (scrollBehavior === "auto") {
        // Instant scroll for users who prefer reduced motion
        window.scrollTo(0, offsetPosition);
      } else {
        // Smooth scroll
        (window as any).scrollTo({
          top: offsetPosition,
          behavior: scrollBehavior,
        });
      }

      // Focus management for accessibility
      element.focus();
      if (element.tabIndex === -1) {
        element.tabIndex = -1;
      }
    },
    []
  );

  const scrollToHash = useCallback(
    (hash: string) => {
      const elementId = hash.startsWith("#") ? hash.slice(1) : hash;
      scrollToElement(elementId);
    },
    [scrollToElement]
  );

  return {
    scrollToElement,
    scrollToHash,
  };
};
