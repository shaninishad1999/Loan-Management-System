import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LoanImg from "/Loan.png"; // Ensure the image is in 'public/'

const HeroSection = () => {
  return (
    <section className=" text-white py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Your Trusted Partner for Financial Growth
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Get instant access to Home, Personal, and Business loans with
              competitive interest rates and flexible repayment options.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/apply"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all"
              >
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link
                to="/learn-more"
                className="border border-white text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-blue-800 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end" data-aos="fade-left">
            <img
              src={LoanImg}
              alt="Financial Growth"
              className="rounded-lg shadow-2xl w-full max-w-[500px] md:max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
