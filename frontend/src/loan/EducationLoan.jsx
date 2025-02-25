import React from "react";
import { FaPercentage, FaRegClock, FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import { MdSchool, MdAttachMoney, MdCreditScore, MdPerson } from "react-icons/md";
import { BsFileEarmarkArrowUp, BsClipboardCheck } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import Contact from "../components/Contact";

const EducationLoan = () => {
  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="text-white text-center py-16 px-6 ">
        <h1 className="text-4xl font-bold">Invest in Your Future with an Education Loan</h1>
        <p className="mt-4 text-lg">Affordable financing options for your educational journey</p>
        <button className="mt-6 text-black bg-blue-100 px-6 py-3 rounded-lg font-semibold">
          Apply Now
        </button>
      </section>

      {/* Loan Features */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center">Why Choose Our Education Loan?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { icon: <FaPercentage size={30} />, title: "Competitive Interest Rates", desc: "Starting from 3.5% per annum" },
            { icon: <FaRegClock size={30} />, title: "Extended Repayment Period", desc: "Up to 15 years after graduation" },
            { icon: <FaCheckCircle size={30} />, title: "No Collateral Required", desc: "For loans up to $50,000" },
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
          <li className="flex items-center gap-2"><MdPerson size={24} className="text-blue-600" /> Age: 18+ years</li>
          <li className="flex items-center gap-2"><MdSchool size={24} className="text-blue-600" /> Admission to recognized educational institution</li>
          <li className="flex items-center gap-2"><FaGraduationCap size={24} className="text-blue-600" /> For courses with high employability potential</li>
          <li className="flex items-center gap-2"><MdCreditScore size={24} className="text-blue-600" /> Co-signer with good credit score (for larger loans)</li>
        </ul>
      </section>

      {/* Application Process */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center">Application Process</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8 text-center">
          {[
            { icon: <BsClipboardCheck size={30} />, step: "Submit Application" },
            { icon: <BsFileEarmarkArrowUp size={30} />, step: "Upload Documents" },
            { icon: <FaCheckCircle size={30} />, step: "Get Approved" },
            { icon: <AiOutlineSend size={30} />, step: "Funds Disbursed" },
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

export default EducationLoan;