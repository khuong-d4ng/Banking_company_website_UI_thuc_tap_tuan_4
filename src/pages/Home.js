import React from "react";
import "./Home.css";
import OurTestimonials from "../components/OurTestimonials";
import ProductSection from "../components/HomeComponent/ProductSection";
import UseCaseSection from "../components/HomeComponent/UseCaseSection";
import FAQSection from "../components/HomeComponent/FAQSection";
import FeatureSection from "../components/HomeComponent/FeatureSection";

const transactions = [
  {
    id: 1,
    name: "Joel Kenley",
    amount: "-$68.00",
    opacity: "opacity-90",
    width: "w-full",
    zIndex: "z-30",
    top: "top-0",
  },
  {
    id: 2,
    name: "Mark Smith",
    amount: "-$1238.00",
    opacity: "opacity-30",
    width: "w-[98%]",
    zIndex: "z-20",
    top: "top-[-40px]",
  },
  {
    id: 3,
    name: "Lenen Roy",
    amount: "-$haha8.00",
    opacity: "opacity-20",
    width: "w-[90%]",
    zIndex: "z-10",
    top: "top-[-80px]",
  },
];

const Home = () => {
  return (
    <div className="w-full min-h-screen  flex flex-col items-center justify-center relative">
      {/* First section */}
      <div className="w-full mb-40 relative top-[60px] grid grid-cols-1 lg:grid-cols-12 gap-0">
  {/* L: 6 col */}
  <div className="lg:col-span-6 h-[422px] flex flex-col bg-transparent justify-between px-0 py-0 lexend">
    <div className="llc-badge mb-4 flex items-center gap-2">
      <img src="/Icon-mark-LLC.png" alt="Icon" />
      <span className="text-white text-[12px] font-normal leading-[150%]">
        No LLC Required, No Credit Check.
      </span>
    </div>
    <div>
      <h1 className="text-white mb-2 font-medium text-[38px] leading-[150%]">
        Welcome to YourBank
        <br />
        Empowering Your{" "}
        <span className="text-[#CAFF33]">Financial Journey</span>
      </h1>
      <p className="text-white mb-6 font-light text-[16px] leading-[150%]">
        At YourBank, our mission is to provide comprehensive banking
        solutions that empower individuals and businesses to achieve their
        financial goals. We are committed to delivering personalized and
        innovative services that prioritize our customers' needs.
      </p>
    </div>
    <div className="flex items-center gap-4">
      <button className="w-[144px] h-[49px] rounded-full bg-[#CAFF33] text-[#232323] hover:bg-[#b2e62e] transition flex items-center justify-center text-[14px] font-normal leading-[150%]">
        Open Account
      </button>
    </div>
  </div>

  {/* Khoang trong: 1 col */}
  <div className="hidden lg:block lg:col-span-1"></div>

  {/* R: 5 col */}
  <div className="lg:col-span-5 flex flex-col items-center relative mt-10 lg:mt-0">
    <div className="w-[16em] h-[16em] lg:w-[20em] lg:h-[20em] absolute right-0 top-0 z-10 hidden lg:block">
      <img src="/home-4.png" alt="Decoration" className="z-10" />
    </div>
    <div className="relative w-full max-w-md px-4 py-7 rounded-[8.26px] flex flex-col z-30 border-gradient-custom bg-[#181818]">
      {/* Transactions */}
      <div className="flex flex-col gap-3 items-center text-xs font-light h-fit max-h-[180px]">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className={`transaction-card ${tx.opacity} ${tx.width} ${tx.zIndex} relative ${tx.top} flex items-center justify-between px-4 py-3 bg-[#232323] rounded-xl`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#CAFF33] flex items-center justify-center">
                <span>✅</span>
              </div>
              <div>
                <div className="text-white text-base">Transaction</div>
                <div className="text-white text-lg leading-tight">
                  {tx.name}
                </div>
              </div>
            </div>
            <div className="text-white text-xl">{tx.amount}</div>
          </div>
        ))}
      </div>

      {/* Money Exchange */}
      <div className="font-light text-xs mt-8">
        <h2 className="text-white font-normal text-lg mb-4">
          Money Exchange
        </h2>
        <div className="grid grid-cols-2 bg-[#181818] rounded-xl overflow-hidden border border-[#232323]">
          {/* INR */}
          <div className="exchange-card border-b border-r p-4 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span>🟥</span>
              <span className="text-white text-base">INR</span>
            </div>
            <span className="text-[#B3B3B3] text-xs">Indian Rupees</span>
            <span className="text-white text-lg mt-4 font-medium">
              5,0000
            </span>
          </div>

          {/* USD */}
          <div className="exchange-card border-b p-4 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span>🟩</span>
              <span className="text-white text-base">USD</span>
            </div>
            <span className="text-[#B3B3B3] text-xs">
              United States Dollar
            </span>
            <span className="text-white text-lg mt-4 font-medium">
              12.00
            </span>
          </div>
        </div>

        {/* Exchange button */}
        <div className="w-full flex justify-center mt-6">
          <button className="exchange-btn bg-[#CAFF33] text-[#232323] rounded-full px-6 py-2 font-medium hover:bg-[#b2e62e] transition">
            Exchange
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Supported Currency Badge */}
  <div className="flex items-center gap-4 absolute bottom-[-100px] right-0">
    <div className="flex items-center border border-[#232323] rounded-full px-6 py-3 bg-[#181818]">
      <span className="text-white text-base font-medium leading-tight mr-4 text-left">
        Supported <br /> Currency
      </span>
      <div className="flex gap-3">
        <span className="w-10 h-10 rounded-full bg-[#23281C] flex items-center justify-center">
          <span className="text-[#CAFF33] text-xl font-bold">$</span>
        </span>
        <span className="w-10 h-10 rounded-full bg-[#23281C] flex items-center justify-center">
          <span className="text-[#CAFF33] text-xl font-bold">€</span>
        </span>
        <span className="w-10 h-10 rounded-full bg-[#23281C] flex items-center justify-center">
          <span className="text-[#CAFF33] text-xl font-bold">฿</span>
        </span>
        <span className="w-10 h-10 rounded-full bg-[#23281C] flex items-center justify-center">
          <span className="text-[#CAFF33] text-xl font-bold">♦</span>
        </span>
      </div>
    </div>
  </div>
</div>

      {/* Second section */}
      <ProductSection />

      {/*** Third section */}
      <UseCaseSection />

      {/* 4 Section */}
      <FeatureSection/>

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <OurTestimonials />

      {/* lass\t Section */}
      <div className="w-full mt-20 mb-20">
        <div className="relative w-full border border-[#262626] rounded-2xl flex flex-col md:flex-row items-center justify-between px-8 py-10 gap-8 bg-transparent">
          <div className="h-full absolute left-0">
            <img src="./last-section-ab-1.png"></img>
          </div>
          <div className="flex-1">
            <h2 className="text-white text-3xl font-normal mb-2">
              Start your financial journey with{" "}
              <span className="text-[#CAFF33]">YourBank today!</span>
            </h2>
            <p className="text-[#bdbdbd] text-base font-light max-w-5xl text-left">
              Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
              pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
              Nascetur viverra arcu sed amet cursus purus.
            </p>
          </div>
          <div>
            <button className="bg-[#CAFF33] text-[#232323] font-normal px-8 py-3 rounded-full focus:outline-none hover:bg-[#b2e62e] transition">
              Open Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
