"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.4,
        },
      }}
      className="relative"
    >
      <Card className="group p-6 border border-gray-200 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
        {/* Icon */}
        <div className="mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-gray-100 bg-white shadow-sm flex items-center justify-center group-hover:border-blue-300 group-hover:bg-blue-50 transition-all duration-200">
            <Image
              src={icon}
              alt={title}
              width={40}
              height={40}
              className="transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default SimpleFeatureCard;
