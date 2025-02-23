import React from "react";
import { CheckCircle } from "lucide-react";
import AboutImg from "..//../public/about.webp";
const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative flex justify-center">
          <div className="absolute -left-6 -top-6 w-64 h-64 bg-blue-600 rounded-lg opacity-20 hidden md:block"></div>
          <img
            src={AboutImg}
            alt="About XYZ Finance"
            className="rounded-lg shadow-xl relative z-10 w-full max-w-[500px] h-auto"
          />
          <div className="absolute -right-6 -bottom-6 w-64 h-64 bg-blue-600 rounded-lg opacity-20 hidden md:block"></div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6 text-center md:text-left">
          <div>
            <h4 className="text-blue-600 font-semibold mb-2 uppercase">
              About Our Company
            </h4>
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              Trusted Financial Partner Since 2010
            </h2>
            <p className="text-white leading-relaxed">
              XYZ Finance has been at the forefront of providing innovative
              financial solutions to individuals and businesses. With over a
              decade of experience, we've helped thousands of customers achieve
              their financial goals through our comprehensive range of loan
              products and services.
            </p>
          </div>

          {/* Key Points */}
          <div className="space-y-4">
            {[
              "Customer-centric approach with tailored solutions",
              "Transparent processes and competitive rates",
              "Quick loan approval and disbursement",
              "Dedicated relationship managers",
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
                <span className="text-white">{point}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="border-l-4 border-blue-600 pl-4 text-center md:text-left">
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-white">Happy Customers</div>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 text-center md:text-left">
              <div className="text-3xl font-bold text-blue-600">₹500Cr+</div>
              <div className="text-white">Loans Disbursed</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
