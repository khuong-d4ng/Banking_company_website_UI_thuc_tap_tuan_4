import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdWork, MdHealthAndSafety, MdOutlineAccessTime, MdOutlineSavings } from "react-icons/md";

// 🔥 Thay thế Button & Card nếu chưa có components riêng
const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>{children}</button>
);

const Card = ({ children, className }) => (
  <div className={`p-4 rounded shadow bg-gray-900 ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

function Careers() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <div className="text-lime-400 font-bold">YourBank</div>
        <nav className="space-x-4">
          <a href="/" className="text-white hover:text-lime-400">Home</a>
          <a href="/careers" className="text-white hover:text-lime-400">Careers</a>
          <a href="/about" className="text-white hover:text-lime-400">About</a>
          <a href="#" className="text-white hover:text-lime-400">Security</a>
        </nav>
        <div>
          <button className="text-white mr-2">Sign in</button>
          <button className="bg-lime-400 px-4 py-1 rounded text-black">Login</button>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-10 bg-gray-900">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-lime-400">YourBank</span> Careers!
          </h1>
          <p className="text-gray-300">
            Join our talented and passionate team to shape the future of banking.
          </p>
        </div>
        <img src="/careers-hero.jpg" alt="Careers" className="mt-8 md:mt-0 md:w-1/2 rounded-lg" />
      </section>

      {/* Values */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-white mb-6">Our <span className="text-lime-400">Values</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Integrity", desc: "We uphold the highest standards of integrity." },
            { title: "Customer Centricity", desc: "Customers are at the heart of what we do." },
            { title: "Collaboration", desc: "We work together to serve our customers." },
            { title: "Innovation", desc: "We foster innovation for growth." }
          ].map((val, i) => (
            <Card key={i}>
              <CardContent>
                <h3 className="text-xl font-bold mb-2 text-white">{val.title}</h3>
                <p className="text-gray-400">{val.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-12 bg-gray-900">
        <h2 className="text-3xl font-bold text-white mb-6">Our <span className="text-lime-400">Benefits</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <MdWork />, title: "Competitive Compensation", desc: "Salaries that recognize your contribution." },
            { icon: <MdHealthAndSafety />, title: "Health and Wellness", desc: "Plans to support physical & mental health." },
            { icon: <MdOutlineSavings />, title: "Retirement Planning", desc: "Prepare for the future with our benefits." },
            { icon: <MdOutlineAccessTime />, title: "Work-Life Balance", desc: "Flexible hours & hybrid options." }
          ].map((benefit, i) => (
            <Card key={i}>
              <CardContent className="flex items-start gap-4">
                <div className="text-lime-400 text-2xl mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-lg">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Start your Career with <span className="text-lime-400">YourBank today!</span></h2>
        <p className="text-gray-400 mb-4">Explore opportunities and grow with us.</p>
        <Button className="bg-lime-400 text-black hover:bg-lime-500">Join Us Now</Button>
      </section>
    </div>
  );
}

export default Careers;
