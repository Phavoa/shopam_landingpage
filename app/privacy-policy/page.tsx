import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="mt-12 md:mt-24 min-h-screen bg-white">
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12">
          {/* Left Column - Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-8">
              <h1 className="text-3xl md:text-[40px] font-bold text-gray-900 md:mb-4">
                ShopAM
              </h1>
              <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 mb-2 md:mb-6 whitespace-nowrap">
                Privacy Policy
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                Effective Date: December 2025
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6 text-gray-700 leading-loose font-sans">
              {/* Paragraph 1 */}
              <p className="text-[15px] sm:text-lg">
                At ShopAm, we value your privacy and are committed to protecting
                the personal information you share with us. This Privacy Policy
                explains how we collect, use, store, and protect your data when
                you use our website, mobile application, or services.
              </p>

              {/* Paragraph 2 */}
              <p className="text-[15px] sm:text-lg">
                ShopAm collects different types of information to operate
                effectively and provide you with a safe and reliable platform.
                This includes personal details such as your name, email, phone
                number, and delivery address, along with account information
                like your username, password, and profile details. We also
                collect transaction details related to your purchases, sales, ,
                while payment details are processed securely through trusted
                third-party providers. In addition, we gather device and usage
                data such as your IP address, browser, and app activity, as well
                as livestream interactions including recordings, comments, and
                bids.
              </p>

              {/* Paragraph 3 */}
              <p className="text-[15px] sm:text-lg">
                The information we collect is primarily used to process orders,
                payments, deliveries, and refunds, as well as to verify sellers
                and confirm product authenticity. We also use it to prevent
                fraud or misuse of auctions and livestreams, to improve the
                overall platform experience, and to communicate with you through
                updates, notifications, and promotions. In some cases, we may be
                legally required to use your data in compliance with Nigerian
                laws and the Nigeria Data Protection Regulation (NDPR).
              </p>

              {/* Paragraph 4 */}
              <p className="text-[15px] sm:text-lg">
                We may share your information with trusted partners when
                necessary. This includes delivery providers to ensure your
                orders reach you, payment providers to process transactions, and
                marketing platforms where we may use product images or
                livestreams for promotional purposes. ShopAm does not sell or
                rent your personal information to third parties.
              </p>

              {/* Paragraph 5 */}
              <p className="text-[15px] sm:text-lg">
                Payments and wallet transactions are handled with high levels of
                security. Refunds are credited directly to your ShopAm Wallet,
                which functions as a digital credit system but is not a bank
                account and does not generate interest. ShopAm reserves the
                right to set limits on wallet use and to freeze wallet funds if
                fraudulent activity is suspected.
              </p>

              {/* Paragraph 6 */}
              <p className="text-[15px] sm:text-lg">
                Like most platforms, ShopAm uses cookies and similar
                technologies to improve user experience, personalize features,
                and analyze traffic. You may choose to disable cookies in your
                browser settings, but please note that some features of the
                platform may not function properly as a result.
              </p>

              {/* Paragraph 7 */}
              <p className="text-[15px] sm:text-lg">
                We implement strong security measures, including encryption,
                firewalls, and secure servers, to protect your data. However,
                users are responsible for maintaining the confidentiality of
                their account credentials. In the event of a data breach, ShopAm
                will promptly notify affected users in accordance with NDPR
                requirements.
              </p>

              {/* Paragraph 8 */}
              <p className="text-[15px] sm:text-lg">
                Your personal data will only be retained for as long as
                necessary to fulfill legal, operational, and business
                obligations. You have the right to request access to the data we
                hold about you, to request corrections, or to ask for deletion
                of your data, provided that such requests do not conflict with
                ongoing transactions or legal requirements. You may also
                withdraw consent for marketing communications or file a
                complaint with the Nigeria Data Protection Bureau if you believe
                your rights have been violated.
              </p>

              {/* Paragraph 9 */}
              <p className="text-[15px] sm:text-lg">
                ShopAm does not knowingly collect personal information from
                individuals under the age of 18 without parental or guardian
                consent. If we discover that we have inadvertently collected
                such information, we will delete it immediately.
              </p>

              {/* Paragraph 10 */}
              <p className="text-[15px] sm:text-lg">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, services, or legal obligations.
                Updates will be posted on the ShopAm platform, and your
                continued use of our services will be deemed acceptance of the
                updated policy.
              </p>

              {/* Paragraph 11 */}
              <p className="text-[15px] sm:text-lg">
                If you have any questions or concerns about how ShopAm handles
                your personal data, you can reach us by email at [Insert Support
                Email], by phone at [Insert Support Number], or by visiting our
                office at [Insert Office Address].
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
