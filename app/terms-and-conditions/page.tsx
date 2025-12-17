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
                Terms &
              </h1>
              <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 mb-2 md:mb-6 whitespace-nowrap">
                Conditions
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                Last Updated: December 2024
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6 text-gray-700 leading-loose font-sans">
              {/* Introduction */}
              <p className="text-[15px] sm:text-lg">
                Welcome to ShopAm. <br />
                By accessing or using the ShopAm website, mobile application, or
                services, you agree to be bound by the following Terms &
                Conditions. Please read carefully.
              </p>
              <div className="space-y-6 text-gray-700 leading-loose font-sans px-4">
                {/* Section 1 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">
                    1. Acceptance of Terms:
                  </strong>{" "}
                  By creating an account or using ShopAm's platform, you agree
                  to comply with these Terms & Conditions. ShopAm reserves the
                  right to update or modify these Terms at any time, and your
                  continued use of the platform constitutes acceptance of such
                  changes.
                </p>

                {/* Section 2 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">2. Eligibility:</strong> You
                  must be at least 18 years old, or have parental or guardian
                  consent, to use ShopAm. All registration details provided must
                  be accurate and truthful.
                </p>

                {/* Section 3 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">3. User Accounts:</strong>{" "}
                  You are responsible for maintaining the confidentiality and
                  security of your account credentials. ShopAm will not be
                  liable for any losses arising from unauthorized account use
                  caused by user negligence.
                </p>

                {/* Section 4 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">
                    4. Marketplace Rules:
                  </strong>{" "}
                  Sellers are permitted to list only genuine, legal, and safe
                  products. However, we do appreciate users take time to browse.
                  Products must be authentic and must in line with their
                  description. Any attempt to misrepresent fake items as
                  authentic will result in account suspension, frozen wallet
                  funds, or possible legal action. ShopAm reserves the right to
                  remove any listings that violate Nigerian law or these Terms,
                  and all live auction purchases are binding once confirmed.
                </p>

                {/* Section 5 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">
                    5. Payments & Commissions:
                  </strong>{" "}
                  All transactions on ShopAm must be processed through our
                  secure system. ShopAm charges a 6% commission fee on the value
                  of each completed sale made through standard shopping, and a
                  6% commission fee on sales completed via livestream. Delivery
                  fees are excluded from commission. This commission is deducted
                  automatically before payout. Sellers are paid once delivery is
                  confirmed and the return or refund window has closed. ShopAm
                  may adjust commission rates in the future, but notice will
                  always be given to sellers.
                </p>

                {/* Section 6 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">
                    6. Logistics & Delivery:
                  </strong>{" "}
                  ShopAm operates a fixed-price delivery system, with fees that
                  may vary by region or zone. Sellers ship products to ShopAm's
                  logistics centers, and ShopAm ensures final delivery to
                  purchasers. Before any shops to substitute delivery fees is
                  gain incentive or business growth tactics, sellers are
                  strongly encouraged.
                </p>

                {/* Section 7 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">
                    7. Product Verification & Branding:
                  </strong>{" "}
                  All products listed on ShopAm must pass through authenticity
                  verification. Products determined to be counterfeit,
                  mislabeled, or outright fake, ShopAm will confirm that it
                  matches its description and is clearly marked as "Not
                  Authentic" before approving delivery. ShopAm may also
                  repackage products or include ShopAm branding such as branded
                  packaging or inserts before sending items to buyers. This
                  verification and branding process is mandatory for all
                  sellers.
                </p>

                {/* Section 8 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">
                    8. Returns & Refunds:
                  </strong>{" "}
                  Payments may be held in escrow until the buyer confirms
                  delivery. Buyers are entitled to request returns or refunds
                  within a specified period after delivery if products are
                  misrepresented, damaged, or not as described. Refunds cannot
                  be requested solely for buyer's remorse. Abuse of the refund
                  system, such as unreasonable or frequent disputes regarding
                  returns or refunds will be investigated by ShopAm, whose
                  decision shall be final.
                </p>

                {/* Section 9 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">
                    9. Use of Seller Content for Promotion:
                  </strong>{" "}
                  By listing a product on ShopAm, sellers grant the platform a
                  non-exclusive, royalty-free license to use product images,
                  descriptions, videos, and livestreams for marketing purposes.
                  ShopAm may display such content on social media, digital
                  advertisements, or offline campaigns to attract buyers but
                  will not misrepresent products in doing so.
                </p>

                {/* Section 10 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">10. ShopAm Wallet:</strong>{" "}
                  ShopAm provides an in-app wallet for both buyers and sellers.
                  Buyers can fund their wallet using approved payment methods,
                  and refunds are automatically credited to the wallet. Sellers
                  will receive their proceeds, after deducting ShopAm's
                  commission and applicable fees, directly into their wallets.
                  Wallet funds can be used for purchases or be withdrawn to
                  linked bank accounts, subject to minimum and maximum limits.
                  ShopAm is not a bank and does not pay interest on wallet
                  balances. The company reserves the right to set limits or
                  freeze funds in cases of suspected fraud. Users are solely
                  responsible for securing access to their wallet.
                </p>

                {/* Section 11 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">
                    11. Livestream Shopping & Auctions:
                  </strong>{" "}
                  ShopAm offers a livestream feature that allows sellers to
                  showcase their products and interact with buyers in real time.
                  Sellers are fully responsible for the accuracy of claims and
                  demonstrations made during livestreams. Prohibited livestream
                  content includes nudity, violence, hate speech, abusive
                  behavior, or the promotion of counterfeit, illegal, or
                  restricted products. ShopAm may record, monitor, or terminate
                  livestreams that violate these rules. Orders placed in bids
                  made during livestreams are legally binding transactions and
                  subject to the same payment, commission, and logistics rules
                  as other sales. By using livestreams, sellers grant ShopAm the
                  right to reuse, share, and promote livestream recordings
                  across the platform, social media, and marketing channels.
                </p>

                {/* Section 12 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">
                    12. Prohibited Activities:
                  </strong>{" "}
                  Users must not engage in fraud, scams, or impersonation of the
                  auction platform. The sale of restricted items such as
                  weapons, drugs, or illegal substances is strictly forbidden.
                  Misuse of the platform is misled, harms, or spam is also
                  prohibited.
                </p>

                {/* Section 13 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">
                    13. Liability Limitation:
                  </strong>{" "}
                  ShopAm will not be responsible for indirect damages, including
                  loss of profits or emotional distress. Our total liability is
                  limited to the value of the transaction in question.
                </p>

                {/* Section 14 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">14. Termination:</strong>{" "}
                  ShopAm reserves the right to suspend or terminate user
                  accounts that violate these Terms. Fraudulent activity may
                  result in permanent suspension.
                </p>

                {/* Section 15 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">
                    15. Dispute Resolution:
                  </strong>{" "}
                  Disputes will first be handled internally by ShopAm's support
                  team. If unresolved, disputes shall be governed by Nigerian
                  law and resolved in Nigerian courts.
                </p>

                {/* Section 16 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">16. Governing Law:</strong>{" "}
                  These Terms & Conditions are governed by the laws of the
                  Federal Republic of Nigeria.
                </p>

                {/* Section 17 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">17. Buyer Terms:</strong>{" "}
                  Buyers must provide accurate delivery details and confirm
                  receipt of products promptly to bind payments can be released
                  to sellers. Returns or refunds can only be requested within
                  the specified period if the product is misrepresented,
                  damaged, or not as described. If a product is clearly marked
                  "Not Authentic" the buyer accepts it as such and cannot
                  request a refund on authenticity grounds. Buyers must not
                  misuse refunds, chargebacks, or attempt to defraud sellers or
                  ShopAm. Payments will remain in escrow until delivery is
                  confirmed.
                </p>

                {/* Section 18 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">18. Seller Terms:</strong>{" "}
                  Sellers may list both authentic and replica products, but
                  replicas must always be clearly labeled as "Not Authentic" in
                  the product title and description. All products must be
                  packaged securely to avoid damage during transit. Counterfeit
                  products intended to be counterfeit but listed as authentic
                  will be rejected and penalized. ShopAm reserves the right to
                  re-verify products at any point. Sellers must ship items to
                  ShopAm's logistics centers within the designated timeframe. A
                  6% commission fee is charged on every successful sale made
                  through standard shopping, and 6% on sales through
                  livestreams. Proceeds are credited to the seller's ShopAm
                  Wallet after deducting fees is confirmed and the return/refund
                  window has closed. Sellers must not cancel orders or ship
                  damaged products. Violations of these specified timeframe
                  after receiving notifications. All sellers must comply with
                  product verification and image guidelines to maintain listing
                  eligibility. Repeated violations including misrepresentation,
                  listing fake or banned items may result in product rejection
                  or account suspension. Fraudulent activity will result in
                  suspension, loss of wallet access, and possible legal action.
                </p>

                {/* Section 19 */}
                <p className="text-[15px] sm:text-lg">
                  <strong className="text-gray-900">
                    19. Product Image Guidelines:
                  </strong>{" "}
                  To maintain quality, trust, and consistency across the ShopAm
                  platform, all sellers must comply with the following image
                  guidelines when uploading product photos:
                </p>

                {/* Section 19 sub-points */}
                <div className="pl-4 space-y-4">
                  <p className="text-[15px] sm:text-lg">
                    <strong className="text-gray-900">
                      • Clarity & Quality:
                    </strong>{" "}
                    Images must be clear, well-lit, and high resolution. Blurry,
                    pixelated, or distorted images will not be accepted.
                  </p>

                  <p className="text-[15px] sm:text-lg">
                    <strong className="text-gray-900">• Authenticity:</strong>{" "}
                    Unedited photos and accurately represent the actual product
                    being sold. Use of stock images or photos taken from the
                    internet is strictly prohibited unless they are clearly
                    labeled for general representation (e.g., gift card products
                    or brand-authorized materials).
                  </p>

                  <p className="text-[15px] sm:text-lg">
                    <strong className="text-gray-900">
                      • Background & Presentation:
                    </strong>{" "}
                    Products must be photographed against a clean, plain, or
                    neutral backdrop and Distracting or general representation
                    (e.g., a gift or products or brand-authorized materials) or
                    unrelated objects are not allowed.
                  </p>

                  <p className="text-[15px] sm:text-lg">
                    <strong className="text-gray-900">
                      • Multiple Angles:
                    </strong>{" "}
                    Sellers must upload images showing different angles of the
                    product (front, back, sides, and close-ups if applicable).
                    This is to give buyers full visibility and confidence before
                    purchasing.
                  </p>

                  <p className="text-[15px] sm:text-lg">
                    <strong className="text-gray-900">
                      • Prohibited Content:
                    </strong>{" "}
                    No nudity, offensive, or misleading images are allowed.
                    False products must clearly display "Not Authentic" in both
                    the product title and product images so that buyers can make
                    informed decisions.
                  </p>

                  <p className="text-[15px] sm:text-lg">
                    <strong className="text-gray-900">
                      • Text and Copyright:
                    </strong>{" "}
                    Sellers should not add excessive text, filters, logos, or
                    watermarks that obscure the product. ShopAm reserves the
                    right to edit, watermark, or repackage images for platform
                    consistency. Sellers who repeatedly violate or fail to
                    adhere to these guidelines may result in product rejection,
                    suspension of the seller's account, or removal from the
                    platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
