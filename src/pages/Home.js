import React from 'react';
const Home = () => {
  return (
   <div className='w-full h-screen bg-[#00000] display flex flex-col items-center justify-center relative'>
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
            w-[410.1921691894531px]
            h-[501.2744445800781px]
            gap-[20.66px]
            border-[0.69px]
            border-[#fff]
            p-[27.55px]
            rounded-[8.26px]
            flex
            flex-col
            bg-transparent

            border border-[#3240a8]
            "
        >
            {/* Right box content here */}
        </div>

        </div>
   </div>
  );
};

export default Home;