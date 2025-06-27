import React from "react";
function AboutIntro() {
    return (
        <section className="grid md:grid-cols-1 ml-4 mt-10 lg:py-20
                        lg:p-10 lg:m-14">
            <div className="flex flex-col lg:flex-row rounded-3xl bg-[#1C1C1C] lg:py-10">
                <div className="rounded-3xl p-6 gap-3 bg-[#1A1A1A] text-center font-lexend w-full lg:w-1/2
                        lg:rounded-br-[60px] lg:rounded-bl-3xl lg:rounded-tl-3xl lg:p-16 lg:gap-5 lg:text-left border border-black">
                    <p className="font-normal leading-normal text-sm lg:text-lg text-white">
                        Welcome to YourBank
                    </p>
                    <p className="font-medium text-3xl leading-tight lg:text-4xl text-white">
                        Where Banking Meets <span className="text-[#CAFF33]">Excellence!</span>
                    </p>
                    <p className="font-light text-sm leading-normal text-[#B3B3B3] lg:text-base">
                        At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.
                    </p>
                </div>
                <div className="w-full overflow-hidden rounded-2xl flex flex-col lg:flex-row lg:w-1/2 relative border border-black">
                    <img
                        src="/images/AbstraciDesight-intro-m.png"
                        alt="AbstraciDesight"
                        className="w-full object-cover block lg:hidden rotate-90 absolute z-0"
                    />
                    <img
                        src="/images/aboutintro-m.png"
                        alt="About Intro"
                        className="w-full object-cover block lg:hidden relative z-10"
                    />
                    <img
                        src="/images/AbstraciDesight-intro-d.png"
                        alt="aaa"
                        className="w-full object-cover hidden lg:block rotate-90 absolute z-0"
                    />
                    <img
                        src="/images/aboutintro-d.png"
                        alt="aaa"
                        className="w-full object-cover hidden lg:block absolute z-0"
                    />
                </div>
            </div>

        </section>
    )
}

export default AboutIntro