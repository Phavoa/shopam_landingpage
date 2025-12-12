"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronsRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    if (agreed && email) {
      console.log("Newsletter signup:", email);
      // Handle newsletter signup
    }
  };

  return (
    <div className="bg-neutral-800 flex flex-col">
      {/* Main Content Area */}
      <div className="">
        <div className="w-full ">
          {/* Newsletter Card */}
          <div className="relative bg-neutral-700/50 backdrop-blur-sm  p-6  shadow-2xl">
            {/* Decorative Shopping Bags */}
            <Image
              src="/images/blurredLogo.png"
              alt="logo"
              fill
              className="w-full absolute"
            />
            <div className="bg-white/10  backdrop-blur p-20 rounded-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
              {/* Left Content */}
              <div className="text-white space-y-4">
                <p className="text-[#ED8123] font-semibold text-sm sm:text-base tracking-wide uppercase">
                  Stay up to Date
                </p>
                <h2 className="text-4xl font-bold leading-tight">
                  Stay Informed with ShopAm's Latest Updates and Newsletters
                </h2>
              </div>

              {/* Right Form */}
              <div className="space-y-6">
                <div className="space-y-6">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/30 border-none text-white placeholder:text-neutral-400 rounded-full pl-6 pr-16 py-6 sm:py-7 text-base sm:text-lg focus-visible:ring-2 focus-visible:ring-[#ED8123] focus-visible:ring-offset-0"
                    />
                    <Button
                      onClick={handleSubmit}
                      size="icon"
                      className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#ED8123] hover:bg-[#ED8123]/90 text-white rounded-full w-12 h-12 sm:w-12 sm:h-12 transition-all duration-200"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4843 15.4843L1.73428 29.2343C1.53879 29.4164 1.28022 29.5156 1.01306 29.5109C0.745894 29.5062 0.490989 29.3979 0.302046 29.209C0.113103 29.0201 0.00487446 28.7652 0.000160665 28.498C-0.00455313 28.2308 0.0946159 27.9723 0.276776 27.7768L13.2963 14.7555L0.276776 1.73428C0.0946159 1.53879 -0.00455313 1.28022 0.000160665 1.01306C0.00487446 0.745894 0.113103 0.490989 0.302046 0.302046C0.490989 0.113103 0.745894 0.00487446 1.01306 0.000160665C1.28022 -0.00455313 1.53879 0.0946159 1.73428 0.276776L15.4843 14.0268C15.6774 14.2201 15.7859 14.4822 15.7859 14.7555C15.7859 15.0288 15.6774 15.2909 15.4843 15.4843ZM29.2343 14.0268L15.4843 0.276776C15.2888 0.0946159 15.0302 -0.00455313 14.7631 0.000160665C14.4959 0.00487446 14.241 0.113103 14.052 0.302046C13.8631 0.490989 13.7549 0.745894 13.7502 1.01306C13.7454 1.28022 13.8446 1.53879 14.0268 1.73428L27.0463 14.7555L14.0268 27.7768C13.9255 27.8712 13.8442 27.985 13.7878 28.1115C13.7315 28.238 13.7012 28.3746 13.6987 28.5131C13.6963 28.6515 13.7217 28.7891 13.7736 28.9175C13.8255 29.0459 13.9027 29.1625 14.0006 29.2605C14.0985 29.3584 14.2152 29.4356 14.3436 29.4874C14.472 29.5393 14.6095 29.5648 14.748 29.5623C14.8865 29.5599 15.023 29.5296 15.1495 29.4732C15.276 29.4169 15.3899 29.3356 15.4843 29.2343L29.2343 15.4843C29.4274 15.2909 29.5359 15.0288 29.5359 14.7555C29.5359 14.4822 29.4274 14.2201 29.2343 14.0268Z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="newsletter-consent"
                      checked={agreed}
                      onCheckedChange={(checked) =>
                        setAgreed(checked as boolean)
                      }
                      className="w-5 h-5 border-neutral-400 data-[state=checked]:bg-[#ED8123] data-[state=checked]:border-[#ED8123]"
                    />
                    <label
                      htmlFor="newsletter-consent"
                      className="text-sm sm:text-base text-neutral-300 leading-relaxed cursor-pointer whitespace-nowrap"
                    >
                      I agree to receive news and updates from Milroz ShopAm
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Footer */}
          <div className="py-8 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="w-40 h-16">
              {" "}
              <Image
                src="/images/shopAm_logo.png"
                alt="logo"
                height={300}
                width={300}
                className="w-full h-full"
              />
            </div>

            {/* Download Button */}
            <Button className="bg-[#ED8123] hover:bg-[#ED8123]/90 text-white px-8 py-6 rounded-xl text-base font-semibold shadow-lg transition-all duration-200">
              Download App
            </Button>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-neutral-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Links */}
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Return Policy
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-neutral-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p>© 2025 ShopAm</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
