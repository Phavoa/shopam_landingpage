import React from "react";
import BuyerSection from "./BuyerSection";
import SellerSection from "./SellerSection";

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pb-8 pt-7 md:pb-12 pt-12"
    >
      <div className="absolute top-5 md:inset-0 opacity-15">
        <div className="text-5xl md:text-9xl font-black text-gray-900 top-0  select-none text-center">
          How it Works
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 md:pt-10 relative z-10">
        <BuyerSection />
        <SellerSection />
      </div>
    </section>
  );
}
