"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <Card className="relative px-4 py-6 border border-gray-200 rounded-3xl bg-white shadow-sm cursor-pointer">
      {/* Icon container - static, no hover effects */}
      <div className="mb-3">
        <div className="w-15 h-15 rounded-full border-2 border-gray-100 bg-white shadow-sm flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={28}
            height={28}
            className="transition-transform duration-150"
          />
        </div>
      </div>

      {/* Content - static display */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </Card>
  );
};

export default FeatureCard;
