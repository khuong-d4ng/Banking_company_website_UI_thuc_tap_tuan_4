import React from "react";

function About() {
    return (
        <section className="w-full flex justify-center px-4 py-12 max-w-[1599px]">
            <div className="relative flex flex-col lg:flex-row items-center max-w-[1279px] max-h-[648px] h-auto bg-[#1C1C1C] p-[50px] rounded-[20px]">
                <div className=" w-[329px] h-[451px] p-[24px] gap-[14px] rounded-[20px] 
                                xl:w-[658px] xl:h-[507px] xl:p-[60px] xl:gap-[20px] xl:rounded-tl-[20px] xl:rounded-br-[60px] xl:rounded-bl-[20px] 
                                2xl:w-[791px] 2xl:h-[579px] 2xl:p-[80px] 2xl:gap-[23px] 2xl:rounded-tl-[20px] 2xl:rounded-br-[80px] 2xl:rounded-bl-[20px]
                                bg-[#1A1A1A] relative z-10 overflow-hidden">
                    <div>
                        <p className="font-lexend font-400 text-[18px] text-[#FFFFFF] leading-[1.5]"> Welcome to YourBank </p>
                        <p className="font-lexend font-500 text-[48px] leading-[1.3] text-[#FFFFFF]">
                            Where Banking Meets <br />
                            <span className="text-[#CAFF33]">Excellence!</span>
                        </p>
                    </div>
                    <div>
                        <p className="font-lexend font-300 text-[16px] leading-[1.5] text-[#B3B3B3]">At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.</p>
                    </div>
                </div>
                <div className="relative z-0 w-[329px] h-[325px] md:w-[715px] md:h-[568px] 2xl:w-[968px] 2xl:h-[716px] lg:-ml-16 ">
                    <img
                        src="/images/about1.png"
                        alt="Banking team"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
