import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 flex justify-center w-full ">
      <div className="flex items-center justify-between w-[1280px] h-[73px] mt-8 rounded-full border border-[#262626] px-6 py-3 box-border bg-[#1C1C1C]">
        <div className="flex items-center gap-2 text-white text-xl font-bold">
          <img src="/shape-30.png" alt="logo" width="32" height="32" />
          <span>YourBanK</span>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className="px-4 h-10 flex items-center rounded-full bg-[#272727] text-sm font-medium text-white"
          >
            Home
          </Link>
          <Link to="/careers" className="h-10 flex items-center text-sm text-white hover:text-lime-400">
            Careers
          </Link>
          <Link to="/about" className="h-10 flex items-center text-sm text-white hover:text-lime-400">
            About
          </Link>
          <Link to="/security" className="h-10 flex items-center text-sm text-white hover:text-lime-400">
            Security
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/signup" className="text-sm text-white hover:underline">
            Sign Up
          </Link>
          <Link
            to="/login"
            className="px-5 py-2 bg-lime-400 text-black rounded-full text-sm font-semibold shadow hover:bg-lime-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;