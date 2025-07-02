import React from "react";
import { MdWork, MdHealthAndSafety, MdOutlineAccessTime, MdOutlineSavings } from "react-icons/md";

const values = [
  { title: "Integrity", desc: "We uphold the highest standards of integrity." },
  { title: "Customer Centricity", desc: "Customers are at the heart of what we do." },
  { title: "Collaboration", desc: "We work together to serve our customers." },
  { title: "Innovation", desc: "We foster innovation for growth." }
];

const benefits = [
  { icon: <MdWork />, title: "Competitive Compensation", desc: "Salaries that recognize your contribution." },
  { icon: <MdHealthAndSafety />, title: "Health & Wellness", desc: "Plans to support physical & mental health." },
  { icon: <MdOutlineSavings />, title: "Retirement Planning", desc: "Prepare for the future with our benefits." },
  { icon: <MdOutlineAccessTime />, title: "Work-Life Balance", desc: "Flexible hours & hybrid options." }
];

const Careers = () => {
  return (
    <div className="min-h-screen w-full bg-[#181818] text-white font-lexend">
      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-transparent">
        <h1 className="text-4xl md:text-5xl font-medium mb-4 text-center">
          Join <span className="text-[#CAFF33]">YourBank</span> Careers!
        </h1>
        <p className="text-[#bdbdbd] text-base font-light max-w-2xl text-center mb-10">
          Be part of a talented and passionate team shaping the future of banking. We value innovation, integrity, and collaboration.
        </p>
        <img
          src="/careers-hero.jpg"
          alt="Careers"
          className="rounded-2xl w-full max-w-xl object-cover border border-[#262626] shadow-lg"
        />
      </section>

      {/* Values */}
      <section className="w-full px-4 md:px-0 max-w-5xl mx-auto mt-20">
        <h2 className="text-white text-3xl font-base mb-2">
          Our <span className="text-[#CAFF33]">Values</span>
        </h2>
        <p className="text-[#bdbdbd] text-base font-light mb-10 max-w-3xl">
          At YourBank, our culture is built on strong values that guide our actions and decisions every day.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <div
              key={i}
              className="border border-[#262626] rounded-xl bg-[#1C1C1C] p-8 flex flex-col items-center text-center"
            >
              <h3 className="text-white text-lg font-medium mb-2">{val.title}</h3>
              <p className="text-[#bdbdbd] text-base font-light">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full px-4 md:px-0 max-w-5xl mx-auto mt-20">
        <h2 className="text-white text-3xl font-base mb-2">
          Our <span className="text-[#CAFF33]">Benefits</span>
        </h2>
        <p className="text-[#bdbdbd] text-base font-light mb-10 max-w-3xl">
          We care about our people. Enjoy a range of benefits designed to support your well-being and growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="border border-[#262626] rounded-xl bg-[#1C1C1C] p-8 flex flex-col items-center text-center"
            >
              <div className="text-[#CAFF33] text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-white text-lg font-medium mb-2">{benefit.title}</h3>
              <p className="text-[#bdbdbd] text-base font-light">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-4xl mx-auto mt-20 mb-20">
        <div className="relative w-full border border-[#262626] rounded-2xl flex flex-col md:flex-row items-center justify-between px-8 py-10 gap-8 bg-transparent">
          <div className="flex-1">
            <h2 className="text-white text-3xl font-normal mb-2">
              Start your career journey with <span className="text-[#CAFF33]">YourBank today!</span>
            </h2>
            <p className="text-[#bdbdbd] text-base font-light max-w-2xl">
              Explore opportunities and grow with us. Your future starts here.
            </p>
          </div>
          <div>
            <button className="bg-[#CAFF33] text-[#232323] font-normal px-8 py-3 rounded-full focus:outline-none hover:bg-[#b2e62e] transition">
              Join Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Careers;