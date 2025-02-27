import React from "react";
import { FaPercentage, FaRegClock, FaCheckCircle } from "react-icons/fa";
import { MdWork, MdAttachMoney, MdCreditScore, MdOutlineEmail, MdPerson } from "react-icons/md";
import { BsFileEarmarkArrowUp, BsClipboardCheck } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import Contact from "../components/Contact";

const PropertyLoan = () => {
  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="text-white text-center py-16 px-6 ">
        <h1 className="text-4xl font-bold">Unlock Your Property's Potential with a Loan</h1>
        <p className="mt-4 text-lg">Competitive interest rates & flexible repayment plans</p>
        <button className="mt-6 text-black bg-blue-100 px-6 py-3 rounded-lg font-semibold">
          Apply Now
        </button>
      </section>

      {/* Loan Features */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center">Why Choose Our Property Loan?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[ 
            { icon: <FaPercentage size={30} />, title: "Attractive Interest Rates", desc: "Starting from 5% per annum" },
            { icon: <FaRegClock size={30} />, title: "Flexible Repayment", desc: "Choose from 5-20 years" },
            { icon: <FaCheckCircle size={30} />, title: "Quick Processing", desc: "Minimal documentation required" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md text-center text-white">
              <div className="flex justify-center mb-3 text-blue-400">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-12 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center">Eligibility Criteria</h2>
        <ul className="max-w-4xl mx-auto mt-6 space-y-4 text-lg text-white">
          <li className="flex items-center gap-2"><MdPerson size={24} className="text-blue-600" /> Age: 25-65 years</li>
          <li className="flex items-center gap-2"><MdAttachMoney size={24} className="text-blue-600" /> Minimum income: $30,000 per annum</li>
          <li className="flex items-center gap-2"><MdWork size={24} className="text-blue-600" /> Owned property as collateral</li>
          <li className="flex items-center gap-2"><MdCreditScore size={24} className="text-blue-600" /> Good credit history required</li>
        </ul>
      </section>

      {/* Application Process */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center">Application Process</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8 text-center">
          {[ 
            { icon: <BsClipboardCheck size={30} />, step: "Submit Application" },
            { icon: <BsFileEarmarkArrowUp size={30} />, step: "Upload Documents" },
            { icon: <FaCheckCircle size={30} />, step: "Approval Process" },
            { icon: <AiOutlineSend size={30} />, step: "Loan Disbursed" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-3 text-blue-400">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <Contact/>
    </div>
  );
};

export default PropertyLoan;
