import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full px-20 pt-16 pb-7 flex flex-col items-center gap-10 bg-[#1C1C1C] mx-auto absolute bottom-0">
      {/* Logo and Navigation */}
      <div className="w-[1280px] mx-auto flex flex-col items-center gap-5">
        <img src="/shape-30.png" alt="logo" width="32" height="32" />
        <h2 className="text-white font-bold text-lg">YourBanK</h2>
        <div className="flex gap-8 text-sm text-white">
          <Link to="/">Home</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/about">About</Link>
          <Link to="/security">Security</Link>
        </div>
      </div>

      {/* Contact Info */}
      <div className="w-[1280px] mx-auto flex items-center gap-5 text-white text-sm">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-lime-400" />
          <span>hello@skillbridge.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-lime-400" />
          <span>+91 91813 23 2309</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-lime-400" />
          <span>Somewhere in the World</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-[1280px] flex justify-between items-center px-6 py-3 border border-[#262626] rounded-full text-white text-sm">
        <div className="flex gap-4">
          <div className="w-8 h-8 bg-lime-200 rounded-full flex justify-center items-center text-[#1C1C1C] text-sm">
            <FaFacebookF />
          </div>
          <div className="w-8 h-8 bg-lime-200 rounded-full flex justify-center items-center text-[#1C1C1C] text-sm">
            <FaTwitter />
          </div>
          <div className="w-8 h-8 bg-lime-200 rounded-full flex justify-center items-center text-[#1C1C1C] text-sm">
            <FaLinkedinIn />
          </div>
        </div>
        <div>YourBank All Rights Reserved</div>
        <div className="flex gap-4 text-[#999]">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;