import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutCommon = () => {
  return (
    <div className="min-h-screen bg-black text-white max-w-screen-2xl flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutCommon;