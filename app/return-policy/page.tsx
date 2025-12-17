import React from "react";

export default function RefundPolicyPage() {
  return (
    <div className="mt-12 md:mt-24 min-h-screen bg-gray-50">
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12">
          {/* Left Column - Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-8">
              <h1 className="text-3xl md:text-[40px] font-bold text-gray-900 mb-2">
                ShopAm
              </h1>
              <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 mb-6">
                Refund Policy
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                Effective Date: December 2025
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
              {/* Paragraph 1 */}
              <p className="text-base sm:text-lg">
                ShopAm Returns is designed to protect buyers and make shopping
                safe. When a buyer receives a product, they have a set period of
                time to check it and request a return if the item is not as
                described, damaged, or fake. To make returns easy, buyers simply
                ship the package back through a ShopAm Parcel Shop, and ShopAm's
                logistics team handles the process. The cost of return logistics
                is the responsibility of the seller, which ensures that sellers
                remain accountable for the quality of the products they list.
              </p>

              {/* Paragraph 2 */}
              <p className="text-base sm:text-lg">
                Refunds are processed quickly and credited directly into the
                buyer's ShopAm Wallet, allowing them to shop again or withdraw
                to a bank account. Sellers only receive their payments after the
                return window closes, creating an extra layer of trust and
                fairness on the platform.
              </p>

              {/* Paragraph 3 */}
              <p className="text-base sm:text-lg">
                By combining product verification, buyer protection, and a
                simple returns process, ShopAm makes online shopping
                transparent, reliable, and stress-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
