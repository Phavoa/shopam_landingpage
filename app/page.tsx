import ShopAmFAQPage from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import NewsletterSection from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import ShopAmAgents from "@/components/home/ShopAmAgents";
import WhatIsShopAm from "@/components/home/whatIsShopAm";
import ShopAmHeader from "@/components/shared/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#F0F8FF] via-[#F0F8FF] to-[#FFFFFF] ">
      <div className="relative w-full bg-gradient-to-r from-[#F0F8FF] via-[#F0F8FF] to-[#FFFFFF]">
        {/* Decorative background elements - positioned for responsive design */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <Image
            src="/images/rectangle_copy.png"
            alt=""
            width={1000}
            height={1000}
            className="hidden md:block w-full max-w-md lg:max-w-2xl xl:max-w-4xl absolute -top-16 lg:-top-20 xl:-top-30 right-0 lg:right-0 xl:right-0 opacity-50 lg:opacity-60 xl:opacity-100"
            priority
          />
        </div>

        {/* Main content with proper mobile spacing */}
        <div className="pt-20 sm:pt-24 lg:pt-28 w-full ">
          <ShopAmHeader />
          <HeroSection />
        </div>
        <WhatIsShopAm />
        <Features />
        <ShopAmAgents />
        <ShopAmFAQPage />
        <NewsletterSection />
      </div>
    </div>
  );
}
