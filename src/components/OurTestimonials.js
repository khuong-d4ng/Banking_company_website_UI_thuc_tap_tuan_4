import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "D:/THUC_TAP/Banking_company_website_UI_thuc_tap_tuan_4/src/components/StyleC.css"; 
import TitleHome from "./HomeComponent/TitleHome";
const testimonials = [
  {
    name: "Sara T",
    text: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
  },
  {
    name: "John D",
    text: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
  },
  {
    name: "Emily G",
    text: "I love the convenience of YourBank’s mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
  },
   {
    name: "Emily G",
    text: "I love the convenience of YourBank’s mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
  },
   {
    name: "Emily G",
    text: "I love the convenience of YourBank’s mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
  },
   {
    name: "Emily G",
    text: "I love the convenience of YourBank’s mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
  },
];

function OurTestimonials() {
  return (
    <div className="w-full mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-[80px] ">
        <div>
  <TitleHome
  title={[
    { text: "Our", highlight: false },
    { text: " Testimonials", highlight: true }
  ]}
  subtitle="Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey"
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
      {/* Testimonials Cards */}
      <div className="w-full flex items-center justify-between lg:gap-6 lg:py-14 mt-10">
        {/* Left arrow */}
        <button className="rounded-full border border-[#262626] p-3 w-12 h-12 flex justify-center items-center">
          <FaArrowLeft className="text-[#CAFF33]" />
        </button>

        {/* Testimonials container */}
        {/* Testimonials container */}
        <div className="flex overflow-x-auto gap-6 lg:gap-10 scroll-smooth no-scrollbar relative">
        <div className="absolute left-0 top-0 h-full w-[150px] fade-left-testimonials pointer-events-none z-10"></div>
        <div className="h-full w-[150px] absolute right-0 fade-right-testimonials"></div>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`min-w-[90%] max-w-md lg:min-w-[300px] lg:max-w-[350px] border border-[#262626] bg-[#1C1C1C] p-6 rounded-xl ${
                index > 0 ? "hidden lg:block" : ""
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <img
                  src="/images/Text.png"
                  alt="Testimonial Icon"
                  className="w-[36px] h-[28px] object-contain"
                />
                <p className="font-lexend text-sm text-white text-center leading-relaxed">
                  {item.text}
                </p>
                <p className="text-[#CAFF33] text-sm font-medium mt-2">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button className="rounded-full border border-[#262626] p-3 w-12 h-12 flex justify-center items-center">
          <FaArrowRight className="text-[#CAFF33]" />
        </button>
      </div>
    </div>
  );
}

export default OurTestimonials;
