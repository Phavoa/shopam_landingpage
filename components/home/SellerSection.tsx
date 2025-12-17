import React from "react";
import StepItem from "./StepItem";
import ProcessImage from "./ProcessImage";
import AnimatedUnderlineTitle from "./AnimatedUnderlineTitle";

const sellerSteps = [
  {
    title: "Get Approved",
    description: "Complete registration and get verified to start selling",
  },
  {
    title: "Book a Livestream Slot",
    description: "Reserve your time to showcase products live",
  },
  {
    title: "Set Up Your Shop",
    description: "Create your store and upload products easily",
  },
  {
    title: "Sell in Real Time",
    description: "Go live, interact with buyers, and close sales instantly",
  },
  {
    title: "Receive Payment",
    description:
      "Funds released immediately after delivery confirmation—little commission",
  },
  {
    title: "Grow Your Brand",
    description: "Build trust and scale your business on ShopAm",
  },
];

export default function SellerSection() {
  return (
    <div className="">
      <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 text-right">
        <AnimatedUnderlineTitle
          className="text-xl md:text-3xl font-black text-gray-900"
          underlineColor="bg-green-500"
        >
          As a Seller
        </AnimatedUnderlineTitle>
      </h2>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <ProcessImage
            src="/images/seller.png"
            alt="ShopAm Seller App"
            rotation="rotate-6"
          />
        </div>

        <div className="order-1 lg:order-2 space-y-4">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 text-right">
            ShopAM makes selling easy by managing packaging, verification, and
            delivery.
          </p>

          <div className="space-y-3">
            {sellerSteps.map((step, index) => (
              <StepItem
                key={index}
                title={step.title}
                description={step.description}
                // reverse={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
