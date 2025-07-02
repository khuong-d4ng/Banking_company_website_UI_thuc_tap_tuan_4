import React from "react";
import "./Home.css";
import OurTestimonials from "../components/OurTestimonials";

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
      <div className="w-full mb-40 relative top-[60px] grid grid-cols-12 gap-0">
        {/* L: 6 col */}
        <div className="col-span-6 h-[422px] flex flex-col bg-transparent justify-between px-0 py-0 lexend">
          <div className="llc-badge mb-4">
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
        <div className="col-span-1"></div>

        {/* R: 5 col */}
        <div className="col-span-5">
          <div className=" w-[20em] h-[20em] absolute right-0 top-0 z-10">
            <img src="/home-4.png" alt="Decoration" className="z-10" />
          </div>
          <div className="relative w-4/5 px-8 py-7 rounded-[8.26px] flex flex-col z-30 border-gradient-custom">
            {/* Transactions */}
            <div className="flex flex-col gap-4 items-center text-xs font-light">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className={`transaction-card ${tx.opacity} ${tx.width} ${tx.zIndex} relative ${tx.top}`}
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
            <div className="font-light text-xs">
              <h2 className="text-white font-normal text-lg mb-4">
                Money Exchange
              </h2>
              <div className="grid grid-cols-2 bg-[#181818] rounded-xl overflow-hidden border border-[#232323]">
                {/* INR */}
                <div className="exchange-card border-b border-r">
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
                <div className="exchange-card border-b">
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
                <button className="exchange-btn">Exchange</button>
              </div>
            </div>
          </div>
        </div>

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
      <div className="w-full">
        <div className="w-full bg-transparent mt-12">
          <div className=" w-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-[80px] ">
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
      </div>

      {/*** Third section */}
      <div className="w-full">
        <div className="w-full bg-transparent mt-20">
          <div className=" rounded-2xl w-full">
            {/* Header */}
            <div className="">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative ">
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
              <div className="col-span-12 lg:col-span-6 flex flex-col justify-between  px-10">
                <div>
                  <h3 className="text-white text-2xl font-base mb-4">
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
                  <div className=" flex flex-col md:flex-row gap-8 md:gap-0 md:divide-x md:divide-dashed md:divide-[#262626] mb-8">
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
                <button className=" border border-[#262626] mt-4 md:mt-0 w-fit px-8 py-3 rounded-full text-white bg-[#1C1C1C] hover:bg-[#232323] transition">
                  Learn More
                </button>
              </div>
            </div>
            {/* For Business*/}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
              {/* L: For Business*/}
              <div className="col-span-12 lg:col-span-6 flex flex-col justify-center rounded-xl px-10 py-10">
                <h3 className="text-white text-2xl font-semibold mb-4">
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
                <button className="mt-4 md:mt-0 w-fit px-8 py-3 rounded-full border border-[#262626] text-white bg-[#1C1C1C] hover:bg-[#232323] transition">
                  Learn More
                </button>
              </div>

              {/* R: For Business*/}
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
      </div>

      {/* 4 Section */}
      <div className="w-full bg-transparent mt-20">
        <div className="rounded-2xl w-full ">
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
      </div>

      {/* FAQ Section */}
      <div className="w-full mt-20">
        <h2 className="text-white text-4xl font-base mb-2">
          <span className="text-[#CAFF33]">Frequently</span> Asked Questions
        </h2>
        <p className="text-[#B3B3B3] text-base font-light mb-10">
          Still you have any questions? Contact our Team via
          support@yourbank.com
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="border border-[#262626] rounded-xl p-8">
            <h3 className="text-white text-lg font-medium mb-4">
              How do I open an account with YourBank?
            </h3>
            <p className="text-[#B3B3B3] text-base font-light">
              Opening an account with YourBank is easy. Simply visit our website
              and click on the "Open an Account" button. Follow the prompts,
              provide the required information, and complete the application
              process. If you have any questions or need assistance, our
              customer support team is available to help.
            </p>
          </div>
          {/* Card 2 */}
          <div className="border border-[#262626] rounded-xl p-8">
            <h3 className="text-white text-lg font-medium mb-4">
              What documents do I need to provide to apply for a loan?
            </h3>
            <p className="text-[#B3B3B3] text-base font-light">
              The documents required for a loan application may vary depending
              on the type of loan you are applying for. Generally, you will need
              to provide identification documents (such as a passport or
              driver's license), proof of income (such as pay stubs or tax
              returns), and information about the collateral (if applicable).
              Our loan officers will guide you through the specific requirements
              during the application process.
            </p>
          </div>
          {/* Card 3 */}
          <div className="border border-[#262626] rounded-xl p-8">
            <h3 className="text-white text-lg font-medium mb-4">
              How can I access my accounts online?
            </h3>
            <p className="text-[#B3B3B3] text-base font-light">
              Accessing your accounts online is simple and secure. Visit our
              website and click on the "Login" button. Enter your username and
              password to access your accounts. If you haven't registered for
              online banking, click on the "Enroll Now" button and follow the
              registration process. If you need assistance, our customer support
              team is available to guide you.
            </p>
          </div>
          {/* Card 4 */}
          <div className="border border-[#262626] rounded-xl p-8">
            <h3 className="text-white text-lg font-medium mb-4">
              Are my transactions and personal information secure?
            </h3>
            <p className="text-[#B3B3B3] text-base font-light">
              At YourBank, we prioritize the security of your transactions and
              personal information. We employ industry-leading encryption and
              multi-factor authentication to ensure that your data is protected.
              Additionally, we regularly update our security measures to stay
              ahead of emerging threats. You can bank with confidence knowing
              that we have robust security systems in place.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
          <button className="px-8 py-3 rounded-full border border-[#262626] text-white bg-transparent hover:bg-[#232323] transition">
            Load All FAQ's <span className="ml-2">⌄</span>
          </button>
        </div>
      </div>

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
