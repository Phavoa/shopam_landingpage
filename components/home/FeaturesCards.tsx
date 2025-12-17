import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card className="p-8 border border-gray-200 rounded-3xl bg-white shadow-sm cursor-pointer">
      <div className="mb-6">
        <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm">
          <Image src={icon} alt="ShopAm Shop" width={50} height={50} />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-base">{description}</p>
    </Card>
  );
};

export default function ShopAmFeatures() {
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
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {features.map((feature, index) => (
            <FeatureCard
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
