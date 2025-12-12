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
    <Card className="group p-8 border border-gray-200 rounded-3xl bg-white shadow-none transition-all duration-300 hover:-translate-y-1 cursor-pointer gap-0">
      <div className="mb-6">
        <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
          <Image src={icon} alt="ShopAm Shop" width={50} height={50} />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-base">{description}</p>
    </Card>
  );
};

// SVG Icons recreated based on the screenshot
const ShoppingCartIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="12"
      width="24"
      height="18"
      rx="2"
      fill="#FEF3C7"
      stroke="#F59E0B"
      strokeWidth="2"
    />
    <path
      d="M14 12V10C14 7.79086 15.7909 6 18 6H22C24.2091 6 26 7.79086 26 10V12"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="16" cy="21" r="1.5" fill="#F59E0B" />
    <circle cx="24" cy="21" r="1.5" fill="#F59E0B" />
    <path
      d="M10 32L12 32"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M28 32L30 32"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const LivestreamIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="20"
      cy="20"
      r="14"
      fill="#FEE2E2"
      stroke="#EF4444"
      strokeWidth="2"
    />
    <text
      x="20"
      y="15"
      textAnchor="middle"
      fill="#EF4444"
      fontSize="8"
      fontWeight="bold"
    >
      LIVE
    </text>
    <circle cx="20" cy="24" r="4" fill="#EF4444" />
    <circle cx="20" cy="24" r="2" fill="white" />
  </svg>
);

const WalletIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="10"
      y="12"
      width="20"
      height="16"
      rx="2"
      fill="#DBEAFE"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <rect x="24" y="18" width="6" height="6" rx="1" fill="#3B82F6" />
    <circle cx="26.5" cy="21" r="1" fill="white" />
    <path
      d="M14 18H18M14 22H16"
      stroke="#3B82F6"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M32 16L34 18L32 20"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="32" cy="12" r="2" fill="#F59E0B" />
  </svg>
);

const GiftIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="12"
      y="18"
      width="16"
      height="14"
      rx="1"
      fill="#FEE2E2"
      stroke="#EF4444"
      strokeWidth="2"
    />
    <rect x="10" y="14" width="20" height="4" rx="1" fill="#EF4444" />
    <path d="M20 14V32" stroke="#EF4444" strokeWidth="2" />
    <path
      d="M20 14C20 14 18 10 16 10C14 10 13 11 13 12C13 13 14 14 16 14H20Z"
      fill="#F59E0B"
    />
    <path
      d="M20 14C20 14 22 10 24 10C26 10 27 11 27 12C27 13 26 14 24 14H20Z"
      fill="#F59E0B"
    />
  </svg>
);

const ParcelShopIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22L12 30L28 30L28 22"
      fill="#FEE2E2"
      stroke="#EF4444"
      strokeWidth="2"
    />
    <path
      d="M10 22L20 12L30 22"
      fill="#EF4444"
      stroke="#EF4444"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect
      x="17"
      y="24"
      width="6"
      height="6"
      rx="1"
      fill="#3B82F6"
      stroke="#3B82F6"
      strokeWidth="1"
    />
    <path d="M20 24V27" stroke="white" strokeWidth="1.5" />
  </svg>
);

const ReturnIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="20"
      cy="20"
      r="12"
      fill="#FEF3C7"
      stroke="#F59E0B"
      strokeWidth="2"
    />
    <path
      d="M20 14L20 26M20 14L16 18M20 14L24 18"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="20"
      cy="20"
      r="2"
      fill="white"
      stroke="#F59E0B"
      strokeWidth="1.5"
    />
    <path
      d="M25 16C26 17 28 19 28 19"
      stroke="#F59E0B"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

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
