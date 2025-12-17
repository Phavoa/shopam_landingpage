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

const SimpleFeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <div className="relative">
      <Card className="p-6 border border-gray-200 rounded-3xl bg-white shadow-sm cursor-pointer">
        {/* Icon */}
        <div className="mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-gray-100 bg-white shadow-sm flex items-center justify-center">
            <Image src={icon} alt={title} width={40} height={40} />
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>
      </Card>
    </div>
  );
};

export default SimpleFeatureCard;
