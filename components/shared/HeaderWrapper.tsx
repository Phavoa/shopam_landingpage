"use client";

import React, { Suspense } from "react";
import ShopAmHeader from "./Header";

// Loading fallback component
const HeaderSkeleton = () => (
  <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200/90 bg-[#F0F8FF]/50 backdrop-blur supports-[backdrop-filter]:bg-[#F0F8FF]/50">
    <div className="md:container mx-auto px-4 lg:px-8">
      <div className="flex items-center justify-between h-12 md:h-18 lg:h-22">
        <div className="flex-shrink-0 w-32 h-6 md:w-52 md:h-14 bg-gray-300 rounded animate-pulse" />
        <div className="hidden lg:flex items-center gap-10 xl:gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-16 h-4 bg-gray-300 rounded animate-pulse"
            />
          ))}
        </div>
        <div className="hidden lg:block w-24 h-10 bg-gray-300 rounded animate-pulse" />
      </div>
    </div>
  </header>
);

export default function HeaderWrapper() {
  return (
    <Suspense fallback={<HeaderSkeleton />}>
      <ShopAmHeader />
    </Suspense>
  );
}
