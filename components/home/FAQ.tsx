"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

interface FAQItemProps extends FAQItem {
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-3 px-0 flex items-center justify-between text-left group"
      >
        <span className="text-sm font-medium text-gray-900 pr-4">
          {question}
        </span>
        <div
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </button>

      {isOpen && (
        <div className="pb-3">
          <div className="pb-3 px-0 text-gray-600 text-xs leading-relaxed">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#F0F8FF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <>
            <div className="lg:pr-8">
              <h1 className="text-center md:text-start text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4">
                Common Questions About ShopAm
              </h1>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Find answers to common questions about shopping, selling,
                delivery, and earning with ShopAm.
              </p>

              <div className="mt-8 hidden md:block">
                <p className="text-xs font-semibold text-gray-900 mb-2">
                  Still have a question in mind?
                </p>
                <p className="text-xs text-gray-600 mb-4">
                  Contact us if you have any other questions.
                </p>
                <Link href="/contant-us">
                  <button className="border-2 border-[#ED8123]/90 text-[#ED8123]/90 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-gray-50/30 md:p-4 backdrop-blur-sm border-t">
                {items.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                ))}
              </div>
              <div className="mt-8 md:hidden">
                <p className="text-xs font-semibold text-gray-900 mb-2">
                  Still have a question in mind?
                </p>
                <p className="text-xs text-gray-600 mb-4">
                  Contact us if you have any other questions.
                </p>
                <button className="border-1 border-[#ED8123]/90 text-[#ED8123]/90 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 w-full">
                  Contact Us
                </button>
              </div>
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

const ShopAmFAQPage: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      question: "What is ShopAm?",
      answer:
        "ShopAm is a comprehensive e-commerce platform that allows users to shop, sell, and earn through various features including live streaming, parcel services, and a built-in wallet system.",
    },
    {
      question: "How do I create a seller account?",
      answer:
        "To create a seller account, download the ShopAm app, sign up, and complete the seller verification process. You can then set up your ShopAm Shop and start uploading products.",
    },
    {
      question: "What payment methods does ShopAm accept?",
      answer:
        "ShopAm accepts various payment methods including bank transfers, mobile money, and payments through the ShopAm Wallet for quick and secure transactions.",
    },
    {
      question: "How does ShopAm Livestream work?",
      answer:
        "ShopAm Livestream allows sellers to showcase their products in real-time. Viewers can interact, ask questions, and make purchases directly during the live stream.",
    },
    {
      question: "What are ShopAm Parcel Shops?",
      answer:
        "ShopAm Parcel Shops are verified drop-off points where you can leave your packages. We verify the items, repackage them securely, and ensure safe delivery to buyers.",
    },
    {
      question: "How do returns work?",
      answer:
        "If you're not satisfied with your purchase, you can request a return through the app. Once approved, refunds are processed directly to your ShopAm Wallet.",
    },
    {
      question: "How can I earn through referrals?",
      answer:
        "Share your unique referral code with friends. When they sign up and make purchases, you earn rewards that accumulate in your ShopAm Wallet.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Yes, we use industry-standard security measures to protect your personal information and transaction data. Your privacy and security are our top priorities.",
    },
  ];

  return <FAQ items={faqData} />;
};

export default ShopAmFAQPage;
