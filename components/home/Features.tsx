"use client";

import React from "react";
import EnhancedFeaturesCards from "./EnhancedFeaturesCards";

const Features = () => {
  return (
    <section id="features" className="bg-[#F0F8FF] relative pt-12 z-0">
      {/* Content */}
      <div className="relative z-10">
        {/* Static title and subtitle - no animations */}
        <div className="text-center md:mb-8">
          <h1 className="text-2xl md:text-3xl text-black font-bold font-termina mb-2">
            EveryThing You Need
          </h1>

          <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Everything You Need for Safe Shopping and Selling
          </p>

          <p className="text-lg font-sans text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Shop, sell, and earn with confidence using our comprehensive
            platform
          </p>
        </div>

        {/* Feature cards - now static */}
        <EnhancedFeaturesCards />
      </div>
    </section>
  );
};

export default Features;
