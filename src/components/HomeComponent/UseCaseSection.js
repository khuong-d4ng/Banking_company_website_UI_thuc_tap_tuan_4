import React from "react";

const UseCaseSection = () => (
  <section className="w-full">
    <div className="w-full bg-transparent mt-20">
      <div className="rounded-2xl w-full">
        {/* Header */}
        <div>
          <h2 className="text-[#CAFF33] text-4xl font-base mb-2">
            Use Cases
          </h2>
          <p className="text-[#B3B3B3] text-base font-light mb-10">
            At YourBank, we cater to the diverse needs of individuals and
            businesses alike, offering a wide range of financial solutions
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Use Case Cards (6 columns) */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center px-10 py-10 bg-[#1C1C1C] rounded-xl relative">
            <div>
              <img
                src="/use-case-ab-1.png"
                alt="Use Cases"
                className="w-auto h-auto mb-6 absolute top-0 left-0"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Card 1 */}
              <div className="bg-[#1A1A1A] rounded-xl border border-[#262626] flex flex-col items-center py-8 px-6">
                <div className="mb-4 relative">
                  <span className="bg-[#CAFF33] bg-opacity-10 rounded-full p-6 absolute left-1/2 -translate-x-1/2 -top-2 blur-[2px] w-16 h-16"></span>
                  <span className="relative z-10 text-3xl">❤️</span>
                </div>
                <div className="text-white text-lg font-base text-center">
                  Managing Personal Finances
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-[#181818] rounded-xl border border-[#262626] flex flex-col items-center py-8 px-6">
                <div className="mb-4 relative">
                  <span className="bg-[#CAFF33] bg-opacity-10 rounded-full p-6 absolute left-1/2 -translate-x-1/2 -top-2 blur-[2px] w-16 h-16"></span>
                  <span className="relative z-10 text-3xl">💚</span>
                </div>
                <div className="text-white text-lg font-base text-center">
                  Saving for the Future
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-[#181818] rounded-xl border border-[#262626] flex flex-col items-center py-8 px-6">
                <div className="mb-4 relative">
                  <span className="bg-[#CAFF33] bg-opacity-10 rounded-full p-6 absolute left-1/2 -translate-x-1/2 -top-2 blur-[2px] w-16 h-16"></span>
                  <span className="relative z-10 text-3xl">💙</span>
                </div>
                <div className="text-white text-lg font-base text-center">
                  Homeownership
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-[#181818] rounded-xl border border-[#262626] flex flex-col items-center py-8 px-6">
                <div className="mb-4 relative">
                  <span className="bg-[#CAFF33] bg-opacity-10 rounded-full p-6 absolute left-1/2 -translate-x-1/2 -top-2 blur-[2px] w-16 h-16"></span>
                  <span className="relative z-10 text-3xl">🩷</span>
                </div>
                <div className="text-white text-lg font-base text-center">
                  Education Funding
                </div>
              </div>
            </div>
          </div>
          {/* Right: For Individuals (6 columns) */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-between px-10">
            <div>
              <h3 className="text-white text-2xl font-medium mb-4">
                For Individuals
              </h3>
              <p className="text-[#B3B3B3] text-base font-light mb-8">
                For individuals, our mortgage services pave the way to
                homeownership, and our flexible personal loans provide vital
                support during various life milestones. We also prioritize
                retirement planning, ensuring a financially secure future
                for our customers
              </p>
              {/* Stats */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:divide-x md:divide-dashed md:divide-[#262626] mb-8">
                <div className="flex-1 flex flex-col items-center md:items-start px-0 md:px-8">
                  <div className="text-[#CAFF33] text-4xl font-bold mb-2">
                    78%
                  </div>
                  <div className="text-[#B3B3B3] text-base">
                    Secure Retirement Planning
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center md:items-start px-0 md:px-8">
                  <div className="text-[#CAFF33] text-4xl font-bold mb-2">
                    63%
                  </div>
                  <div className="text-[#B3B3B3] text-base">
                    Manageable Debt Consolidation
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center md:items-start px-0 md:px-8">
                  <div className="text-[#CAFF33] text-4xl font-bold mb-2">
                    91%
                  </div>
                  <div className="text-[#B3B3B3] text-base">
                    Reducing financial burdens
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-4 md:mt-0 w-fit btn-outline">
              Learn More
            </button>
          </div>
        </div>
        {/* For Business */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          {/* L: For Business */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center rounded-xl py-10">
            <h3 className="text-white text-2xl font-medium mb-4">
              For Business
            </h3>
            <p className="text-[#B3B3B3] text-base font-light mb-8">
              For businesses, we empower growth with working capital
              solutions that optimize cash flow, and our tailored financing
              options fuel business expansion. Whatever your financial
              aspirations, YourBank is committed to providing the right
              tools and support to achieve them
            </p>
            {/* Stats */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:divide-x md:divide-dashed md:divide-[#262626] mb-8">
              <div className="flex-1 flex flex-col items-center md:items-start px-0 md:px-8">
                <div className="text-[#CAFF33] text-4xl font-bold mb-2">
                  65%
                </div>
                <div className="text-[#B3B3B3] text-base">
                  Cash Flow Management
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start px-0 md:px-8">
                <div className="text-[#CAFF33] text-4xl font-bold mb-2">
                  70%
                </div>
                <div className="text-[#B3B3B3] text-base">
                  Drive Business Expansion
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start px-0 md:px-8">
                <div className="text-[#CAFF33] text-4xl font-bold mb-2">
                  45%
                </div>
                <div className="text-[#B3B3B3] text-base">
                  Streamline payroll processing
                </div>
              </div>
            </div>
            <button className="mt-4 md:mt-0 w-fit btn-outline">
              Learn More
            </button>
          </div>
          {/* R: For Business */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center px-10 py-10 bg-[#1C1C1C] rounded-xl relative">
            <div>
              <img
                src="/use-case-ab-2.png"
                alt="Use Cases"
                className="w-auto h-auto mb-6 absolute top-0 right-0"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Card 1 */}
              <div className="bg-[#1A1A1A] rounded-xl border border-[#262626] flex flex-col items-center py-8 px-6">
                <div className="mb-4 relative">
                  <span className="bg-[#CAFF33] bg-opacity-10 rounded-full p-6 absolute left-1/2 -translate-x-1/2 -top-2 blur-[2px] w-16 h-16"></span>
                  <span className="relative z-10 text-3xl">🏢</span>
                </div>
                <div className="text-white text-lg font-base text-center">
                  Startups and Entrepreneurs
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-[#181818] rounded-xl border border-[#262626] flex flex-col items-center py-8 px-6">
                <div className="mb-4 relative">
                  <span className="bg-[#CAFF33] bg-opacity-10 rounded-full p-6 absolute left-1/2 -translate-x-1/2 -top-2 blur-[2px] w-16 h-16"></span>
                  <span className="relative z-10 text-3xl">💳</span>
                </div>
                <div className="text-white text-lg font-base text-center">
                  Cash Flow Management
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-[#181818] rounded-xl border border-[#262626] flex flex-col items-center py-8 px-6">
                <div className="mb-4 relative">
                  <span className="bg-[#CAFF33] bg-opacity-10 rounded-full p-6 absolute left-1/2 -translate-x-1/2 -top-2 blur-[2px] w-16 h-16"></span>
                  <span className="relative z-10 text-3xl">📈</span>
                </div>
                <div className="text-white text-lg font-base text-center">
                  Business Expansion
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-[#181818] rounded-xl border border-[#262626] flex flex-col items-center py-8 px-6">
                <div className="mb-4 relative">
                  <span className="bg-[#CAFF33] bg-opacity-10 rounded-full p-6 absolute left-1/2 -translate-x-1/2 -top-2 blur-[2px] w-16 h-16"></span>
                  <span className="relative z-10 text-3xl">💲</span>
                </div>
                <div className="text-white text-lg font-base text-center">
                  Payment Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default UseCaseSection;