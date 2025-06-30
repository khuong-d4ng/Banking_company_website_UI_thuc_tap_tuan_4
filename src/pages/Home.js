import React from 'react';
const Home = () => {
  return (
   <div className='w-full h-screen bg-black display flex flex-col items-center justify-center relative'>
        <div>
            <img className='h-[446.75px] w-[640px] border border-[#a83232] absolute top-0 left-0'
            src="/abc.png"></img>
        </div>

        {/* First section */}
        <div
        className="
            border border-[#3240a8]
            w-[1440px]
            h-[621.2744140625px]
            gap-[100px]
            pt-[60px]
            pr-[200px]
            pb-[60px]
            pl-[80px]
            relative
            top-[60px]
            flex
            flex-row
        "
        >

        <div
            className="
            w-[649.81px]
            h-[422px]
            flex
            flex-col
            bg-transparent
            border border-[#3240a8]
            justify-between
            px-0
            py-0
            "
            style={{ fontFamily: 'Lexend' }}
        >
                        <div
                style={{
                    width: 278,
                    height: 40,
                    gap: 4,
                    paddingTop: 8,
                    paddingRight: 16,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    borderRadius: 61,
                    background: '#232323',
                    display: 'flex',
                    alignItems: 'center',
                }}
                className="mb-4"
            >
                <img src="/Icon-mark-LLC.png" alt="Icon" />
                <span
                    style={{
                        fontFamily: 'Lexend',
                        fontWeight: 400,
                        fontSize: 12,
                        lineHeight: '150%',
                        letterSpacing: 0,
                        color: '#fff',
                    }}
                >
                    No LLC Required, No Credit Check.
                </span>
            </div>
            <div>
                <h1
                    className="text-white mb-2"
                    style={{
                        fontFamily: 'Lexend',
                        fontWeight: 500,
                        fontSize: 38,
                        lineHeight: '150%',
                        letterSpacing: 0,
                    }}
                >
                    Welcome to YourBank<br />
                    Empowering Your <span className="text-[#CAFF33]">Financial Journey</span>
                </h1>
                <p
                    className="text-white mb-6"
                    style={{
                        fontFamily: 'Lexend',
                        fontWeight: 300,
                        fontSize: 16,
                        lineHeight: '150%',
                        letterSpacing: 0,
                    }}
                >
                    At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
                </p>
            </div>
            <div className="flex items-center gap-4">
                <button
                    className="text-[#232323] bg-[#CAFF33] hover:bg-[#b2e62e] transition"
                    style={{
                        width: 144,
                        height: 49,
                        gap: 10,
                        paddingTop: 14,
                        paddingRight: 24,
                        paddingBottom: 14,
                        paddingLeft: 24,
                        borderRadius: 82,
                        fontFamily: 'Lexend',
                        fontWeight: 400,
                        fontSize: 14,
                        lineHeight: '150%',
                        letterSpacing: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    Open Account
                </button>
            </div>
        </div>

        <div
            className="
            gap-[20.66px]
            px-8
            py-7
            rounded-[8.26px]
            flex
            flex-col
            bg-transparent
            z-30
            "
            style={{
                background: `linear-gradient(0deg, #1A1A1A, #1A1A1A), linear-gradient(214.85deg, rgba(26, 26, 26, 0) 0%, #1A1A1A 39.72%)`,
                borderWidth: "0.69px",
                borderStyle: "solid",
                borderImage: `linear-gradient(0deg, #262626, #262626), 
                            linear-gradient(214.24deg, rgba(202, 255, 51, 0.2) 0%, rgba(202, 255, 51, 0) 11.24%), 
                            linear-gradient(214.24deg, rgba(202, 255, 51, 0) 91.73%, rgba(202, 255, 51, 0.2) 99.95%)`,
                borderImageSlice: 1
            }}
        >

            <div className="flex flex-col gap-4 items-center text-xs font-light border border-[#CAFF33] h-[45%]">
                <div className=''>Your Transaction</div>
                {/* 1 */}
                <div className="flex items-center justify-between bg-[#232323] opacity-90 rounded-lg px-4 py-1 w-[100%] relative top-[0px] z-30">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#CAFF33] flex items-center justify-center">
                            <span>✅</span>
                        </div>
                        <div>
                            <div className="text-white text-base">Transaction</div>
                            <div className="text-white text-lg leading-tight">Joel Kenley</div>
                        </div>
                    </div>
                    <div className="text-white text-xl">-$68.00</div>
                </div>
                {/* 22 */}
                <div className="flex items-center justify-between bg-[#232323] rounded-lg px-4 py-1 opacity-30 w-[95%] relative top-[-40px] z-20">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#CAFF33] flex items-center justify-center">
                            <span>✅</span>
                        </div>
                        <div>
                            <div className="text-white text-base">Transaction</div>
                            <div className="text-white text-lg leading-tight">Mark Smith</div>
                        </div>
                    </div>
                    <div className="text-white text-xl ">-$68.00</div>
                </div>
                {/* 3 */}
                <div className="flex items-center justify-between bg-[#232323] rounded-lg px-4 py-1 opacity-20 w-[90%] relative top-[-80px] z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#CAFF33] flex items-center justify-center">
                            <span>✅</span>
                        </div>
                        <div>
                            <div className="text-white text-base">Transaction</div>
                            <div className="text-white text-lg leading-tight">Lenen Roy</div>
                        </div>
                    </div>
                    <div className="text-white text-xl ">-$68.00</div>
                </div>
            </div>

            {/* Cuc thu 2 */}
            <div className='font-light text-xs'>
                {/* Heading */}
                <div>
                    <h2 className="text-white font-normal text-lg mb-4">Money Exchange</h2>
                </div>
                {/* Card */}
                <div className="grid grid-cols-2 gap-0 bg-[#181818] rounded-xl overflow-hidden border border-[#232323] font-weight-400">
                    {/* INR */}
                    <div className="flex flex-col gap-2 p-4 border-b border-r border-[#232323]">
                        <div className="flex items-center gap-2">
                        <span>🟥</span>
                        <span className="text-white text-base">INR</span>
                        </div>
                        <span className="text-[#bdbdbd] text-xs">Indian Rupees</span>
                        <span className="text-white text-lg mt-4 font-medium">5,0000</span>
                    </div>
                    {/* USD */}
                    <div className="flex flex-col gap-2 p-4 border-b border-[#232323]">
                        <div className="flex items-center gap-2">
                        <spam>🟩</spam>
                        <span className="text-white text-base">USD</span>
                        </div>
                        <span className="text-[#bdbdbd] text-xs">United States Dollar</span>
                        <span className="text-white text-lg mt-4 font-medium">12.00</span>
                    </div>
                </div>
                {/* Exchange button */}
                <div className="w-full flex justify-center mt-6">
                    <button
                        className="w-[95%] h-12 rounded-full bg-[#232823] text-[#CAFF33] text-base tracking-wide"
                        style={{
                        background: "rgba(202, 255, 51, 0.07)"
                        }}
                    >
                        Exchange
                    </button>
                </div>
            </div>
        </div>

        

        <div className='border border-[blue] w-[20em] h-[20em] absolute top-[50px] right-[50px]'>
                    <img src='/home-4.png'></img>
        </div>

        </div>
   </div>
  );
};

export default Home;