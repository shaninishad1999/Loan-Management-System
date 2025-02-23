import React from "react";
import { CheckCircle } from "lucide-react";
import LoanProcessImg from "/about.webp"; // Ensure the image is placed in 'public/'

const HowToApply = () => {
  const steps = [
    "Fill out the online application form",
    "Submit required documents",
    "Get loan approval decision",
    "Sign the agreement",
    "Receive funds in your account",
  ];

  return (
    <section className=" py-16 px-4 w-full">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
        
        {/* Left - Steps */}
        <div data-aos="fade-right" className="w-full">
          <h2 className="text-4xl font-extrabold text-white-900 mb-6 leading-tight">
            How to Apply for a Loan
          </h2>
          <p className="text-lg text-gray-100 mb-6">
            Follow these simple steps to get your loan approved quickly and easily.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ul className="space-y-5">
              {steps.map((step, index) => (
                <li key={index} className="flex items-center text-lg text-gray-900 font-medium">
                  <CheckCircle className="text-blue-600 mr-3" size={26} />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right - Image */}
        <div data-aos="fade-left" className="flex justify-center w-full">
          <img
            src={LoanProcessImg}
            alt="Loan Application Process"
            className="rounded-lg shadow-xl w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
