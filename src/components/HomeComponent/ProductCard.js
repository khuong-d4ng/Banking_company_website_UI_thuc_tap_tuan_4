import React from "react";

const ProductCard = ({ icon, title, description, className = "" }) => (
  <div className={`flex flex-col items-center text-center ${className}`}>
    <div className="mb-[40px] relative flex items-center justify-center">
      <span className="bg-[#CAFF33] bg-opacity-10 rounded-full p-4 absolute left-1/2 -translate-x-1/2 -top-2 blur-[2px] w-16 h-16"></span>
      <span className="relative z-10 text-3xl">{icon}</span>
    </div>
    <h3 className="text-white text-xl font-base mb-8">{title}</h3>
    <p className="text-[#e0e0e0] text-base font-light">{description}</p>
  </div>
);

export default ProductCard;