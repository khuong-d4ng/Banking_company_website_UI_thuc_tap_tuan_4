import React from "react";

const ProductSection = () => (
  <section className="w-full">
    <div className="w-full bg-transparent mt-12">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-[80px]">
          <div>
            <h2 className="text-white text-4xl font-base mb-2">
              Our <span className="text-[#CAFF33]">Products</span>
            </h2>
            <p className="text-[#e0e0e0] max-w-4xl">
              Discover a range of comprehensive and customizable banking
              products at YourBank, designed to suit your unique financial
              needs and aspirations
            </p>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0 border-[#262626] border rounded-full px-3 py-2 bg-[#1C1C1C]">
            <button className="bg-[#CAFF33] text-[#232323] font-medium px-6 py-2 rounded-full focus:outline-none">
              For Individuals
            </button>
            <button className="bg-transparent text-white font-medium px-6 py-2 rounded-full focus:outline-none">
              For Businesses
            </button>
          </div>
        </div>
        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-xl font-normal">
          {/* Checking Accounts */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-[40px] relative">
              <span className="bg-[#CAFF33] bg-opacity-10 rounded-full p-4 absolute left-1/2 -translate-x-1/2 -top-2 blur-[2px] w-16 h-16"></span>
              <span className="relative z-10 text-3xl">💼</span>
            </div>
            <h3 className="text-white text-xl font-base mb-8">
              Checking Accounts
            </h3>
            <p className="text-[#e0e0e0] text-base font-light">
              Enjoy easy and convenient access to your funds with our range
              of checking account options. Benefit from features such as
              online and mobile banking, debit cards, and free ATM access.
            </p>
          </div>
          {/* Savings Accounts */}
          <div className="flex flex-col items-center text-center border-[#262626] border-l-[1px] border-r-[1px]">
            <div className="mb-[40px] relative">
              <span className="bg-[#CAFF33] bg-opacity-10 rounded-full p-4 absolute left-1/2 -translate-x-1/2 -top-2 blur-[2px] w-16 h-16"></span>
              <span className="relative z-10 text-3xl">🏦</span>
            </div>
            <h3 className="text-white text-xl font-base mb-8">
              Savings Accounts
            </h3>
            <p className="text-[#e0e0e0] text-base font-light">
              Build your savings with our competitive interest rates and
              flexible savings account options. Whether you’re saving for a
              specific goal or want to grow your wealth over time, we have
              the right account for you.
            </p>
          </div>
          {/* Loans and Mortgages */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-[40px] relative">
              <span className="bg-[#CAFF33] bg-opacity-10 rounded-full p-4 absolute left-1/2 -translate-x-1/2 -top-2 blur-[2px] w-16 h-16"></span>
              <span className="relative z-10 text-3xl">💳</span>
            </div>
            <h3 className="text-white text-xl font-base mb-8">
              Loans and Mortgages
            </h3>
            <p className="text-[#e0e0e0] text-base font-light">
              Realize your dreams with our flexible loan and mortgage
              options. From personal loans to home mortgages, our
              experienced loan officers are here to guide you through the
              application process and help you secure the funds you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductSection;