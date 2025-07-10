import React from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import OurTestimonials from "../components/OurTestimonials";

const SignUp = () => {
  return (
    <div className="w-full min-h-screen  flex flex-col items-center justify-center relative">
      <div className="relative w-full max-w-6xl  border border-[red] rounded-2xl bg-[#1C1C1C]">
        <div className="absolute top-0 right-0 max-w-4xl h-full">
          <img
            src="signup-ab-1.png"
            alt="Background Decoration"
            className="w-[400px]"
          ></img>
        </div>
        {/* Title & Description */}
        <div className="text-center py-[80px]">
          <h2 className="text-[#CAFF33] text-4xl font-bold mb-4">Sign Up</h2>
          <p className="text-white text-base font-light max-w-xl mx-auto">
            Join our community today! Create an account to unlock exclusive
            features and personalized experiences.
          </p>
        </div>
        {/* Form */}
        <div className="bg-transparent border border-[#262626] rounded-2xl p-10 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter First Name"
              className="flex-1 bg-[#181818] border border-[#232323] rounded-full px-6 py-4 text-white placeholder-[#bdbdbd] outline-none"
            />
            <input
              type="text"
              placeholder="Enter Last Name"
              className="flex-1 bg-[#181818] border border-[#232323] rounded-full px-6 py-4 text-white placeholder-[#bdbdbd] outline-none"
            />
          </div>
          {/* Email Password */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 bg-[#181818] border border-[#232323] rounded-full px-6 py-4 text-white placeholder-[#bdbdbd] outline-none"
            />
            <div className="flex-1 relative">
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full bg-[#181818] border border-[#232323] rounded-full px-6 py-4 text-white placeholder-[#bdbdbd] outline-none pr-12"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bdbdbd] cursor-pointer">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="#bdbdbd"
                    strokeWidth="2"
                    d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="#bdbdbd"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </div>
          </div>
          <button className="w-full bg-[#CAFF33] text-[#232323] font-medium rounded-full py-4 text-lg hover:bg-[#b2e62e] transition">
            Sign Up
          </button>
          <button className="w-full bg-[#232323] text-white font-medium rounded-full py-4 text-lg mt-2 hover:bg-[#181818] transition">
            Login
          </button>
          <div className="w-full items-center py-7">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 h-px bg-[#B3B3B3]"></div>
              <p className="font-lexend text-sm leading-normal text-[#B3B3B3]  px-3 ">
                Or Continue with
              </p>
              <div className="flex-1 h-px bg-[#B3B3B3] items-end"></div>
            </div>
            <div className="flex justify-center gap-6 mt-6">
              <div className="rounded-full w-14 h-14 flex items-center justify-center bg-[#1C1C1C] shadow-[0_0_20px_#caff33]">
                <FaGoogle size={32} />
              </div>
              <div className="rounded-full w-14 h-14 flex items-center justify-center bg-[#1C1C1C] shadow-[0_0_20px_#caff33] text-[#CAFF33]">
                <FaFacebookF size={28} />
              </div>
              <div className="rounded-full w-14 h-14 flex items-center justify-center bg-[#1C1C1C] shadow-[0_0_20px_#caff33] text-[#CAFF33]">
                <FaApple size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurTestimonials />
    </div>
    
  );
};

export default SignUp;
