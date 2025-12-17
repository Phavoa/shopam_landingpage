import React from "react";
import StepItem from "./StepItem";
import ProcessImage from "./ProcessImage";
import AnimatedUnderlineTitle from "./AnimatedUnderlineTitle";

const buyerSteps = [
  {
    title: "Download & Sign Up",
    description: "Get the app and set up your wallet in minutes",
    icon: "arrow" as const,
  },
  {
    title: "Browse & Watch Live",
    description: "Explore products and see items demonstrated in real time",
    icon: "arrow" as const,
  },
  {
    title: "Shop Securely",
    description: "Buy with confidence—payments held until delivery",
    icon: "arrow" as const,
  },
  {
    title: "Get Your Order",
    description: "Reliable delivery straight to your doorstep",
    icon: "check" as const,
  },
  {
    title: "Confirm Delivery",
    description: "Click 'Received' and seller gets paid instantly",
    icon: "check" as const,
  },
  {
    title: "Earn Referral Bonuses",
    description: "Invite friends and earn as they shop",
    icon: "check" as const,
  },
];

export default function BuyerSection() {
  return (
    <div className="mb-6">
      <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-4 ">
        <AnimatedUnderlineTitle className="text-xl md:text-3xl font-black text-gray-900">
          As a Buyer
        </AnimatedUnderlineTitle>
      </h2>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="space-y-4">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            ShopAm makes shopping safe, easy, and fun. Every product is checked
            before delivery, so you can trust what you buy.
          </p>

          <div className="space-y-3">
            {buyerSteps.map((step, index) => (
              <StepItem
                key={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ProcessImage
            src="/images/buyer.png"
            alt="ShopAm Buyer App"
            gradientColor="green"
          />
        </div>
      </div>
    </div>
  );
}
