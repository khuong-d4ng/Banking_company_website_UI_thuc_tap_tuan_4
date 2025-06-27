import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function OurTestimonials() {
    const [activeTab, setActiveTab] = useState("individual");

    return (
        <section className="w-full px-4 lg:px-20 py-10 grid grid-cols-1 gap-10 overflow-hidden">
            <div className="w-full text-center lg:text-left">
                {/* Header */}
                <div className="gap-5 lg:gap-40 flex flex-col lg:flex-row w-full">
                    <div className="w-full lg:w-2/3">
                        <p className="font-medium text-3xl font-lexend text-white lg:text-4xl">
                            Our <span className="text-[#CAFF33]">Testimonials</span>
                        </p>
                        <p className="font-light font-lexend text-sm text-[#B3B3B3] lg:text-base">
                            Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service.
                        </p>
                    </div>
                    <div className="rounded-[82px] border border-[#262626] bg-[#262626] px-1 py-3 flex justify-center gap-2 lg:w-1/3 font-lexend">
                        <button
                            onClick={() => setActiveTab("individual")}
                            className={`rounded-[140px] px-5 py-1 text-sm ${activeTab === "individual" ? "bg-[#CAFF33] text-[#1C1C1C]" : "text-white hover:bg-[#333333]"}`}>
                            For Individuals
                        </button>
                        <button
                            onClick={() => setActiveTab("business")}
                            className={`rounded-[140px] px-5 py-1 text-sm ${activeTab === "business" ? "bg-[#CAFF33] text-[#1C1C1C]" : "text-white hover:bg-[#333333]"}`}>
                            For Businesses
                        </button>
                    </div>
                </div>

                {/* Testimonial Cards + Arrow */}
                <div className="w-full flex items-center justify-between lg:gap-6 lg:py-14 mt-10">
                    {/* Left arrow */}
                    <button className="rounded-full border border-[#262626] p-3 w-12 h-12 flex justify-center items-center">
                        <FaArrowLeft />
                    </button>

                    {/* Testimonials container */}
                    <div className="flex overflow-x-auto gap-6 lg:gap-10 scroll-smooth no-scrollbar">
                        {[1, 2, 3].map((item, index) => (
                            <div
                                key={index}
                                className={`min-w-[90%] max-w-md lg:min-w-[300px] lg:max-w-[350px] border border-[#262626] bg-[#1C1C1C] p-6 rounded-xl ${index > 0 ? "hidden lg:block" : ""
                                    }`}
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <img
                                        src="/images/Text.png"
                                        alt="Testimonial Icon"
                                        className="w-[36px] h-[28px] object-contain"
                                    />
                                    <p className="font-lexend text-sm text-white text-center leading-relaxed">
                                        I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure financing.
                                    </p>
                                    <p className="text-[#CAFF33] text-sm font-medium mt-2">John D</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button className="rounded-full border border-[#262626] p-3 w-12 h-12 flex justify-center items-center">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default OurTestimonials;
