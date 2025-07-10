import React from "react";

const TitleHome = ({ title, subtitle }) => (
  <div>
    <div>
      <h2 className="text-4xl font-base mb-3 text-center">
        {title.map((part, idx) =>
          part.highlight ? (
            <span key={idx} className="text-[#CAFF33]">{part.text}</span>
          ) : (
            <span key={idx} className="text-white">{part.text}</span>
          )
        )}
      </h2>
    </div>
    <p className="text-[#B3B3B3] text-base font-light text-center mb-4">
      {subtitle}
    </p>
  </div>
);

export default TitleHome;