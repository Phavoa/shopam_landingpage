import ShopAmFAQPage from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import ShopAmAgents from "@/components/home/ShopAmAgents";
import WhatIsShopAm from "@/components/home/whatIsShopAm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#F0F8FF] via-[#F0F8FF] to-[#FFFFFF] w-full ">
      <div className="relative w-full bg-gradient-to-r from-[#F0F8FF] via-[#F0F8FF] to-[#FFFFFF]">
        {/* Decorative background elements - positioned for responsive design */}

        {/* Main content with proper mobile spacing */}
        <div className="pt-20 sm:pt-24 lg:pt-28 w-full relative">
          <HeroSection />
          <div className="hidden md:block absolute  top-0 right-0 h-full">
            <Image
              src="/images/rectangle_copy.png"
              alt=""
              width={1000}
              height={1000}
              className="h-full max-w-3xl"
              // className="hidden md:block h-full absolute -top-16 lg:-top-20 xl:-top-30 right-0 lg:right-0 xl:right-0 opacity-50 lg:opacity-60 xl:opacity-100  border"
              priority
            />
          </div>
        </div>
        <WhatIsShopAm />
        <Features />
        <ShopAmAgents />
        <ShopAmFAQPage />
      </div>
    </div>
  );
}
