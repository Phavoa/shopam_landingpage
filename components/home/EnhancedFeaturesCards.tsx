"use client";

import React from "react";
import EnhancedFeatureCard from "./EnhancedFeatureCard";

export default function EnhancedFeaturesCards() {
  const features = [
    {
      icon: "/images/live-stream1.png",
      title: "ShopAm Shop",
      description:
        "Your personal store inside the app. Upload items, showcase products, and grow your brand with confidence.",
    },
    {
      icon: "/images/live-stream2.png",
      title: "ShopAm Livestream",
      description:
        "Showcase products live, engage with buyers, and close sales instantly through real-time shopping experiences.",
    },
    {
      icon: "/images/live-stream3.png",
      title: "ShopAm Wallet",
      description:
        "Secure payments in one place. Fund your wallet, shop easily, and track sales or refunds effortlessly.",
    },
    {
      icon: "/images/live-stream4.png",
      title: "ShopAm Referral",
      description:
        "Earn rewards instantly when friends sign up with your code and keep earning as they shop.",
    },
    {
      icon: "/images/live-stream5.png",
      title: "ShopAm Parcel Shops",
      description:
        "Drop packages at nearby shops. We verify items, repackage them, and deliver safely to buyers.",
    },
    {
      icon: "/images/live-stream6.png",
      title: "Easy Returns",
      description:
        "Shop with confidence. Request returns if items aren't as described and get quick refunds to your ShopAm Wallet.",
    },
  ];

  return (
    <div className="py-4 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <EnhancedFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
