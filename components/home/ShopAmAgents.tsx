import React from "react";
import HowItWorksSection from "./HowItWorksSection";
import ReferralSection from "./ReferralSection";
import ParcelShopsSection from "./ParcelShopsSection";
import CallToAction from "./CallToAction";

export default function ShopAmAgents() {
  return (
    <div className=" bg-white">
      <HowItWorksSection />
      <ReferralSection />
      <ParcelShopsSection />
      <CallToAction />
    </div>
  );
}
