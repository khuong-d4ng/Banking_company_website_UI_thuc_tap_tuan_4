import React from "react";
function MissionVision() {
    return (
        <section className="ml-4 gap-16 xl:mx-20 grid md:grid-cols-1 lg:p-10 lg:m-14">
            <div className="gap-2.5 xl:pr-[250px] font-lexend text-center xl:text-left">
                <p className="font-normal text-3xl leading-normal text-[#CAFF33] xl:text-4xl">
                    Mission & Vision
                </p>
                <p className="font-light text-sm leading-normal text-[#B3B3B3] xl:text-base">
                    We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development
                </p>
            </div>
            <div className="flex flex-col xl:flex-row justify-center items-center w-full">

                <div className="overflow-hidden flex relative w-full rounded-t-[50px] pt-5 px-5 gap-2.5 border border-[#262626]
                                xl:rounded-t-[50px] xl:rounded-b-3xl xl:px-16 xl:pt-16">
                    <img
                        src="/images/AbstractDesign-M-d.png"
                        alt="Abstract "
                        className="absolute z-0 rotate-90 hidden xl:block object-cover w-full"
                    />
                    <img
                        src="/images/M-d.png"
                        alt="Mission"
                        className="rounded-t-[50px] relative z-10 hidden xl:block object-cover w-full"
                    />
                    <img
                        src="/images/AbstractDesign-M-m.png"
                        alt="Abstract "
                        className="absolute z-0 rotate-90  block xl:hidden object-cover w-full"
                    />
                    <img
                        src="/images/M-m.png"
                        alt="Mission"
                        className="rounded-t-[50px] relative z-10  block xl:hidden object-cover w-full"
                    />
                </div>
                <div className="flex border-l border-[#CAFF33] pt-7 gap-2.5 font-lexend leading-normal text-white flex-col lg:flex-row text-center lg:text-left
                                lg:pl-10">
                    <p className="font-medium text-3xl lg:text-4xl">
                        Mission
                    </p>
                    <p className="font-light lg:text-base text-sm  text-[#B3B3B3]">
                        At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.
                    </p>
                </div>

            </div>
            <div className="flex flex-col xl:flex-row justify-center items-center w-full">
                <div className="border-r border-[#CAFF33] xl:pr-10 flex flex-col lg:flex-row text-center lg:text-left leading-normal">
                    <p className="font-medium text-3xl lg:text-4xl text-white">
                        Vision
                    </p>
                    <p className="font-light text-sm lg:text-base text-[#B3B3B3]">
                        Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.
                    </p>
                </div>
                <div className="overflow-hidden flex relative w-full rounded-t-[50px] pt-5 px-5 gap-2.5 border border-[#262626]
                                xl:rounded-t-[50px] xl:rounded-b-3xl xl:px-16 xl:pt-16">
                    <img
                        src="/images/AbstractDesign-M-d.png"
                        alt="Abstract "
                        className="absolute z-0 rotate-90 hidden xl:block object-cover w-full"
                    />
                    <img
                        src="/images/V-d.png"
                        alt="Mission"
                        className="rounded-t-[50px] relative z-10 hidden xl:block object-cover w-full"
                    />
                    <img
                        src="/images/AbstractDesign-M-m.png"
                        alt="Abstract "
                        className="absolute z-0 rotate-90  block xl:hidden object-cover w-full"
                    />
                    <img
                        src="/images/V-m.png"
                        alt="Mission"
                        className="rounded-t-[50px] relative z-10  block xl:hidden object-cover w-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default MissionVision