import React from "react";
import TitleHome from "./TitleHome";

const FeatureSection = () => (
  <section className="w-full bg-transparent mt-20">
    <div className="rounded-2xl w-full">
      {/* Header */}
      
      <TitleHome
  title={[
    { text: "Our", highlight: false },
    { text: " Features", highlight: true }
  ]}
  subtitle="Experience a host of powerful features at YourBank, including
        seamless online banking, secure transactions, and personalized
        financial insights, all designed to enhance your banking experience"
/>
      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Vertical Menu */}
        <div className="col-span-12 lg:col-span-2 flex flex-col gap-4 mb-4 lg:mb-0">
          <button className="bg-[#1C1C1C] border border-[#262626] rounded-xl py-3 px-4 sm:py-4 sm:px-6 text-[#CAFF33] text-base font-light text-left focus:outline-none text-sm sm:text-base">
            Online Banking
          </button>
          <button className="bg-[#1C1C1C] border border-[#262626] rounded-xl py-3 px-4 sm:py-4 sm:px-6 text-[#B3B3B3] text-base font-light text-left focus:outline-none text-sm sm:text-base">
            Financial Tools
          </button>
          <button className="bg-[#1C1C1C] border border-[#262626] rounded-xl py-3 px-4 sm:py-4 sm:px-6 text-[#B3B3B3] text-base font-light text-left focus:outline-none text-sm sm:text-base">
            Customer Support
          </button>
        </div>
        {/* Right: Feature Cards */}
        <div className="col-span-12 lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-4 sm:p-8 flex flex-col justify-between min-h-[170px] sm:min-h-[220px]">
            <div>
              <h3 className="text-white text-base sm:text-lg font-normal mb-2">
                24/7 Account Access{" "}
                <span className="float-right text-[#CAFF33]">↗</span>
              </h3>
              <p className="text-[#B3B3B3] text-sm sm:text-base font-light">
                Enjoy the convenience of accessing your accounts anytime,
                anywhere through our secure online banking platform. Check
                balances, transfer funds, and pay bills with ease.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-4 sm:p-8 flex flex-col justify-between min-h-[170px] sm:min-h-[220px]">
            <div>
              <h3 className="text-white text-base sm:text-lg font-normal mb-2">
                Mobile Banking App{" "}
                <span className="float-right text-[#CAFF33]">↗</span>
              </h3>
              <p className="text-[#B3B3B3] text-sm sm:text-base font-light">
                Stay connected to your finances on the go with our user-friendly
                mobile banking app. Easily manage your accounts, deposit checks,
                and make payments from your smartphone or tablet.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-4 sm:p-8 flex flex-col justify-between min-h-[170px] sm:min-h-[220px]">
            <div>
              <h3 className="text-white text-base sm:text-lg font-normal mb-2">
                Secure Transactions{" "}
                <span className="float-right text-[#CAFF33]">↗</span>
              </h3>
              <p className="text-[#B3B3B3] text-sm sm:text-base font-light">
                Rest assured knowing that your transactions are protected by
                industry-leading security measures. We employ encryption and
                multi-factor authentication to safeguard your financial
                information.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-4 sm:p-8 flex flex-col justify-between min-h-[170px] sm:min-h-[220px]">
            <div>
              <h3 className="text-white text-base sm:text-lg font-normal mb-2">
                Bill Pay and Transfers{" "}
                <span className="float-right text-[#CAFF33]">↗</span>
              </h3>
              <p className="text-[#B3B3B3] text-sm sm:text-base font-light">
                Save time and avoid late fees with our convenient bill pay
                service. Set up recurring payments or make one-time transfers
                between your accounts with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;