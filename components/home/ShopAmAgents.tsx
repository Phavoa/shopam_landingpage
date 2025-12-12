import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ShopAmAgents() {
  return (
    <div className=" bg-white">
      {/* Hero Section - How it Works */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pb-16 md:pb-24 pt-20">
        <div className="absolute inset-0 opacity-15">
          <div className="text-6xl md:text-[10rem] font-black text-gray-900 top-0  select-none text-center">
            How it Works
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* As a Buyer Section */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 ">
              As a Buyer
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                  ShopAm makes shopping safe, easy, and fun. Every product is
                  checked before delivery, so you can trust what you buy.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check
                        className="w-5 h-5 text-[#ED8123]"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Download & Sign Up
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        - Get the app and set up your wallet in minutes
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check
                        className="w-5 h-5 text-[#ED8123]"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Browse & Watch Live
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        - Explore products and see items demonstrated in real
                        time
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check
                        className="w-5 h-5 text-[#ED8123]"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Shop Securely
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        - Buy with confidence—payments held until delivery
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check
                        className="w-5 h-5 text-[#ED8123]"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Get Your Order
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        - Reliable delivery straight to your doorstep
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check
                        className="w-5 h-5 text-[#ED8123]"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Confirm Delivery
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        - Click {'"Received"'} and seller gets paid instantly
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check
                        className="w-5 h-5 text-[#ED8123]"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Earn Referral Bonuses
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        - Invite friends and earn as they shop
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 blur-3xl rounded-full transform -rotate-6"></div>
                  <Image
                    src="/images/buyer.png"
                    width={700}
                    height={450}
                    alt="ShopAm Buyer App"
                    className="relative z-10 w-full h-auto rounded-t-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* As a Seller Section */}
          <div className="">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 md:mb-12 text-right">
              As a Seller
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-[#ED8123]/90/20 blur-3xl rounded-full transform rotate-6"></div>
                  <Image
                    src="/images/seller.png"
                    width={700}
                    height={450}
                    alt="ShopAm Buyer App"
                    className="relative z-10 w-full h-auto rounded-t-3xl shadow-2xl"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 text-right">
                  ShopAM makes selling easy by managing packaging, verification,
                  and delivery.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-3 flex-row-reverse text-right">
                    <div className="mt-1">
                      <Check
                        className="w-5 h-5 text-[#ED8123]"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Get Approved
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        - Complete registration and get verified to start
                        selling
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 flex-row-reverse text-right">
                    <div className="mt-1">
                      <Check
                        className="w-5 h-5 text-[#ED8123]"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Book a Livestream Slot
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        - Reserve your time to showcase products live
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 flex-row-reverse text-right">
                    <div className="mt-1">
                      <Check
                        className="w-5 h-5 text-[#ED8123]"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Set Up Your Shop
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        - Create your store and upload products easily
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 flex-row-reverse text-right">
                    <div className="mt-1">
                      <Check
                        className="w-5 h-5 text-[#ED8123]"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Sell in Real Time
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        - Go live, interact with buyers, and close sales
                        instantly
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 flex-row-reverse text-right">
                    <div className="mt-1">
                      <Check
                        className="w-5 h-5 text-[#ED8123]"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Receive Payment
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        - Funds released immediately after delivery
                        confirmation—little commission
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 flex-row-reverse text-right">
                    <div className="mt-1">
                      <Check
                        className="w-5 h-5 text-[#ED8123]"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Grow Your Brand
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        - Build trust and scale your business on ShopAm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 md:mb-12">
            ShopAm Referral
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                The ShopAm referral program lets you earn while your friends
                shop. Each buyer gets a referral code or link to share.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="w-5 h-5 text-[#ED8123]" strokeWidth={3} />
                  </div>
                  <div className="text-gray-700">
                    Earn N1,000 instantly when someone signs up and makes first
                    purchase
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="w-5 h-5 text-[#ED8123]" strokeWidth={3} />
                  </div>
                  <div className="text-gray-700">
                    Get N5,000 when they spend N500,000
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="w-5 h-5 text-[#ED8123]" strokeWidth={3} />
                  </div>
                  <div className="text-gray-700">
                    Earn N10,000 when they reach N1,500,000
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="w-5 h-5 text-[#ED8123]" strokeWidth={3} />
                  </div>
                  <div className="text-gray-700">
                    No limit to how many people you can refer
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-green-600/20 blur-3xl rounded-full"></div>
                <Image
                  src="/images/refferal.png"
                  width={700}
                  height={450}
                  alt="ShopAm Buyer App"
                  className="relative z-10 w-full h-auto rounded-t-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcel Shops Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 text-center">
            ShopAm Parcel Shops
          </h2>

          <p className="text-base md:text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Simple, secure delivery that protects both buyers and sellers
          </p>

          <div className="max-w-4xl mx-auto space-y-5">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Check className="w-5 h-5 text-[#ED8123]" strokeWidth={3} />
              </div>
              <div>
                <span className="font-bold text-gray-900">
                  Drop at Parcel Shop
                </span>
                <span className="text-gray-700">
                  {" "}
                  - Sellers drop packages at the nearest ShopAM parcel shop
                  after completing a sale.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Check className="w-5 h-5 text-[#ED8123]" strokeWidth={3} />
              </div>
              <div>
                <span className="font-bold text-gray-900">
                  We Verify & Ship
                </span>
                <span className="text-gray-700">
                  {" "}
                  - ShopAm repacks, verify products carefully before ship to
                  buyer destination.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Check className="w-5 h-5 text-[#ED8123]" strokeWidth={3} />
              </div>
              <div>
                <span className="font-bold text-gray-900">Buyer Receives</span>
                <span className="text-gray-700">
                  {" "}
                  - Buyers collect parcels at home or from a ShopAM parcel shop,
                  with full purchase protection until confirmed delivery.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl  font-black text-gray-900 mb-8 mx-auto leading-tight whitespace-nowrap">
            Ready to Experience the Future of Shopping in Nigeria?
          </h2>

          <Button className="bg-[#ED8123] hover:bg-[#ED8123]/90 text-white font-bold text-lg px-12 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Download Free App
          </Button>
        </div>
      </section>
    </div>
  );
}
