import React from "react";
import ProductCard from "./ProductCard";
import TitleHome from "./TitleHome";

const ProductSection = () => (
  <section className="w-full">
    <div className="w-full bg-transparent mt-12">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-[80px]">
          <div>
  <TitleHome
  title={[
    { text: "Our", highlight: false },
    { text: " Products", highlight: true }
  ]}
  subtitle="Discover a range of comprehensive and customizable banking
              products at YourBank, designed to suit your unique financial
              needs and aspirations"
/>
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
          <ProductCard
            icon="💼"
            title="Checking Accounts"
            description="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
          />
          <ProductCard
            icon="💼"
            title="Savings Accounts"
            description="Build your savings with our competitive interest rates and
              flexible savings account options. Whether you’re saving for a
              specific goal or want to grow your wealth over time, we have
              the right account for you."
          />
          <ProductCard
            icon="💳"
            title="Credit Cards"
            description="Experience the freedom of cashless transactions with our
              range of credit cards. Enjoy rewards, cashback, and exclusive
              benefits to help you manage your finances effectively."
          />
        </div>
      </div>
    </div>
  </section>
);

export default ProductSection;