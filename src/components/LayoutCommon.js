import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutCommon = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white max-w-screen-2xl flex flex-col mx-auto">
       
        <div>
            <img className='h-[446.75px] w-[640px] absolute top-0 left-0'
            src="/abc.png"></img>
        </div>
        <Navbar />
        <div className="flex-1 px-[80px] pt-[150px]">
            <Outlet />
        </div>
        <Footer />
    </div>
  );
};

export default LayoutCommon;