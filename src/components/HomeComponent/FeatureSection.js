import React from "react";

const FeatureSection = () => (
  <section className="w-full bg-transparent mt-20">
    <div className="rounded-2xl w-full">
      {/* Header */}
      <h2 className="text-white text-4xl font-base mb-2">
        Our <span className="text-[#CAFF33]">Features</span>
      </h2>
      <p className="text-[#B3B3B3] text-base font-light mb-10 max-w-4xl">
        Experience a host of powerful features at YourBank, including
        seamless online banking, secure transactions, and personalized
        financial insights, all designed to enhance your banking experience
      </p>
      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Vertical Menu */}
        <div className="col-span-12 lg:col-span-2 flex flex-col gap-4">
          <button className="bg-[#1C1C1C] border border-[#262626] rounded-xl py-4 px-6 text-[#CAFF33] text-base font-light text-left focus:outline-none">
            Online Banking
          </button>
          <button className="bg-[#1C1C1C] border border-[#262626] rounded-xl py-4 px-6 text-[#B3B3B3] text-base font-light text-left focus:outline-none">
            Financial Tools
          </button>
          <button className="bg-[#1C1C1C] border border-[#262626] rounded-xl py-4 px-6 text-[#B3B3B3] text-base font-light text-left focus:outline-none">
            Customer Support
          </button>
        </div>
        {/* Right: Feature Cards */}
        <div className="col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-lg font-normal mb-2">
                24/7 Account Access{" "}
                <span className="float-right text-[#CAFF33]">↗</span>
              </h3>
              <p className="text-[#B3B3B3] text-base font-light">
                Enjoy the convenience of accessing your accounts anytime,
                anywhere through our secure online banking platform. Check
                balances, transfer funds, and pay bills with ease.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-lg font-normal mb-2">
                Mobile Banking App{" "}
                <span className="float-right text-[#CAFF33]">↗</span>
              </h3>
              <p className="text-[#B3B3B3] text-base font-light">
                Stay connected to your finances on the go with our
                user-friendly mobile banking app. Easily manage your
                accounts, deposit checks, and make payments from your
                smartphone or tablet.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-lg font-normal mb-2">
                Secure Transactions{" "}
                <span className="float-right text-[#CAFF33]">↗</span>
              </h3>
              <p className="text-[#B3B3B3] text-base font-light">
                Rest assured knowing that your transactions are protected by
                industry-leading security measures. We employ encryption and
                multi-factor authentication to safeguard your financial
                information.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-lg font-normal mb-2">
                Bill Pay and Transfers{" "}
                <span className="float-right text-[#CAFF33]">↗</span>
              </h3>
              <p className="text-[#B3B3B3] text-base font-light">
                Save time and avoid late fees with our convenient bill pay
                service. Set up recurring payments or make one-time
                transfers between your accounts with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;