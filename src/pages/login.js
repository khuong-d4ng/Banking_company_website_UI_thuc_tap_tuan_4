import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import OurTestimonials from "../components/OurTestimonials";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <section className="w-full min-h-screen flex items-center justify-center lg:px flex-col lg:flex-row py-20 lg:py-32">
                <div className=" rounded-2xl border border-[#262626] p-8 gap-10 bg-[#1C1C1C]
                             lg:py-15 lg:gap-14">
                    <div className="gap-2.5 lg:gap-4 text-center font-lexend py-4 lg:py-6">
                        <p className="font-medium text-2xl leading-none text-[#CAFF33] lg:text-3xl lg:py-6 py-3">
                            Login
                        </p>
                        <p className="font-light text-sm leading-none text-[#BFBFBF] lg:text-lg">
                            Welcome back! Please log in to access your account.
                        </p>
                    </div>
                    <div className="gap-6 lg:gap-8 flex flex-col lg:flex-row w-full">
                        <div className="gap-5 lg:gap-6 py-3 flex flex-col lg:flex-row items-center">
                            <div>
                                <input type="email" placeholder="Enter your Email"
                                    className="rounded-[88px] border border-[#262626]  gap-2.5 font-lexend text-base leading-normal text-white bg-[#1A1A1A] px-20 py-3 lg:py-3" />
                            </div>
                            <div className="w-full relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your Password"
                                    className="w-full rounded-[88px] border border-[#262626] font-lexend text-base leading-normal text-white bg-[#1A1A1A] px-20 py-3 pr-14"


                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-5 transform -translate-y-1/2 text-[#B3B3B3] hover:text-[#CAFF33] ">
                                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-lexend font-normal text-base leading-normal underline decoration-slice text-center lg:py-10 py:7">
                            Forgot Password?
                        </p>
                    </div>
                    <div className="lg:px-32 lg:gap-24 gap-6 w-full ">
                        <div className=" py-2 lg:py-4">
                            <button className="px-10 py-3 gap-2.5 bg-[#CAFF33] rounded-[63px] border border-[#333333] w-full">
                                Login
                            </button>
                        </div>
                        <button className="px-10 py-3 gap-2.5 bg-[#262626] rounded-[63px] border border-[#333333] w-full">
                            Sight Up
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
                                    <FcGoogle size={32} />
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
            </section>
            <div>
                <OurTestimonials />
            </div>
        </>

    )
}
export default Login;