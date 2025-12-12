import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

// TypeScript interfaces
interface HeroSectionProps {
  className?: string;
}

interface AppStoreButtonProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
}

interface StatItemProps {
  value: string;
  label: string;
}

// Constants for better maintainability
const APP_STORE_CONFIG = {
  href: "#",
  iconSize: "w-8 h-8",
  containerPadding: "px-2 md:px-6",
  buttonPadding: "py-1 md:py-3.5",
  textSizes: {
    small: "text-[8px] md:text-[10px]",
    large: "text-xs md:text-[21px]",
  },
  margin: "ml-1 md:ml-3",
};

const STATS_CONFIG = [
  { value: "5,000+", label: "Active users" },
  { value: "95%", label: "On-Time Delivery Rate" },
  { value: "100+", label: "Parcel Shops Nationwide" },
];

const HEADING_CONFIG = {
  desktop: {
    size: "text-[42px] sm:text-[56px] lg:text-6xl",
    lines: ["See It Live, Buy", "With Confidence,", "Delivered Safe"],
  },
  mobile: {
    text: "See It Live, Buy With Confidence, Delivered Safe",
  },
};

const SUBHEADING_CONFIG = {
  desktop: {
    size: "text-base sm:text-lg lg:text-2xl",
    text: "Experience the future of e-commerce in Nigeria with",
    lines: ["livestream shopping, secure payments, and verified", "products."],
  },
  mobile: {
    text: "Experience the future of e-commerce in Nigeria with livestream shopping, secure payments, and verified products.",
  },
};

// SVG Components for better reusability and bundle optimization
const AppStoreIcon = memo(() => (
  <svg
    className={APP_STORE_CONFIG.iconSize}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
  </svg>
));

AppStoreIcon.displayName = "AppStoreIcon";

const GooglePlayIcon = memo(() => (
  <svg
    className={APP_STORE_CONFIG.iconSize}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285F4"
      d="M3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15Z"
    />
    <path fill="#34A853" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" />
    <path fill="#FBBC05" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    <path
      fill="#EA4335"
      d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"
    />
  </svg>
));

GooglePlayIcon.displayName = "GooglePlayIcon";

// Sub-components for better organization
const Heading = memo(() => (
  <>
    <h1 className="hidden md:block text-[42px] sm:text-[56px] lg:text-6xl font-black leading-[1.1] tracking-tight text-black mb-4 font-termina">
      {HEADING_CONFIG.desktop.lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < HEADING_CONFIG.desktop.lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </h1>

    <h1 className="md:hidden w-full text-center text-3xl font-black leading-[1.1] tracking-tight px-10">
      {HEADING_CONFIG.mobile.text}
    </h1>
  </>
));

Heading.displayName = "Heading";

const Subheading = memo(() => (
  <>
    <p className="hidden md:block text-base sm:text-lg lg:text-2xl text-gray-800 mb-8 sm:mb-10 lg:mb-12 leading-relaxed font-sans">
      {SUBHEADING_CONFIG.desktop.text}
      <br className="hidden sm:block" />
      {SUBHEADING_CONFIG.desktop.lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < SUBHEADING_CONFIG.desktop.lines.length - 1 && (
            <br className="hidden sm:block" />
          )}
        </React.Fragment>
      ))}
    </p>

    <p className="md:hidden px-10 text-center font-medium font-sans mt-2">
      {SUBHEADING_CONFIG.mobile.text}
    </p>
  </>
));

Subheading.displayName = "Subheading";

const AppStoreButton = memo<AppStoreButtonProps>(
  ({ href, ariaLabel, children, className }) => (
    <Link
      href={href}
      className={`inline-flex items-center justify-center bg-black text-white rounded-xl ${
        APP_STORE_CONFIG.containerPadding
      } ${
        APP_STORE_CONFIG.buttonPadding
      } hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${
        className || ""
      }`}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  )
);

AppStoreButton.displayName = "AppStoreButton";

const AppStoreButtons = memo(() => (
  <div className="mt-5 md:mt-0 flex justify-center items gap-2 md:gap-4 mb-12 lg:mb-20 px-4 md:px-0">
    <AppStoreButton
      href={APP_STORE_CONFIG.href}
      ariaLabel="Download on the App Store"
    >
      <AppStoreIcon />
      <div className={APP_STORE_CONFIG.margin}>
        <div
          className={`${APP_STORE_CONFIG.textSizes.small} font-normal leading-tight`}
        >
          Download on the
        </div>
        <div
          className={`${APP_STORE_CONFIG.textSizes.large} md:font-semibold leading-tight -mt-0.5`}
        >
          App Store
        </div>
      </div>
    </AppStoreButton>

    <AppStoreButton
      href={APP_STORE_CONFIG.href}
      ariaLabel="Get it on Google Play"
    >
      <GooglePlayIcon />
      <div className={APP_STORE_CONFIG.margin}>
        <div
          className={`${APP_STORE_CONFIG.textSizes.small} font-normal leading-tight`}
        >
          GET IT ON
        </div>
        <div
          className={`${APP_STORE_CONFIG.textSizes.large} md:font-semibold leading-tight -mt-0.5`}
        >
          Google Play
        </div>
      </div>
    </AppStoreButton>
  </div>
));

AppStoreButtons.displayName = "AppStoreButtons";

const StatItem = memo<StatItemProps>(({ value, label }) => (
  <div className="flex flex-col items-center md:items-start">
    <div className="text-xs md:text-xl font-medium text-black">{value}</div>
    <div className="text-[6.5px] md:text-sm text-gray-600">{label}</div>
  </div>
));

StatItem.displayName = "StatItem";

const Stats = memo(() => (
  <div className="flex justify-center md:justify-start gap-3 md:gap-6">
    {STATS_CONFIG.map((stat, index) => (
      <React.Fragment key={stat.label}>
        <StatItem value={stat.value} label={stat.label} />
        {index < STATS_CONFIG.length - 1 && (
          <div className="py-1">
            <div className="border-r h-full" />
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
));

Stats.displayName = "Stats";

const HeroImage = memo(() => (
  <div className="flex-1 relative h-full md:pt-6">
    {/* Blurred circle goes first so it's under */}
    <div className="hidden md:block absolute -bottom-25 left-3/5 w-100 h-100 bg-black/95 rounded-full blur-3xl -translate-x-1/2 z-10" />

    {/* Hero image */}
    <Image
      src="/images/hero.png"
      width={1000}
      height={800}
      alt="hero image"
      className="w-full h-full relative z-10"
    />
  </div>
));

HeroImage.displayName = "HeroImage";

// Main component
const HeroSection = memo<HeroSectionProps>(({ className }) => {
  return (
    <div
      className={`flex flex-col items-center md:flex-row pb-20 w-full ${
        className || ""
      }`}
    >
      {/* Hero Section */}
      <section className="w-full md:w-auto px-4 sm:pr-0 sm:pl-6 lg:pl-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full">
          <Heading />
          <Subheading />
          <AppStoreButtons />
          <Stats />
        </div>
      </section>
      <HeroImage />
    </div>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
