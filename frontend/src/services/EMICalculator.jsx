import React, { useState } from "react";
import { CreditCard, Calendar, Percent } from "lucide-react";
import Contact from "../components/Contact";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(24);
  const [interestRate, setInterestRate] = useState(10.49);
  const [loanType, setLoanType] = useState("Personal Loan");

  const loanTypes = [
    { name: "Home Loan", path: "/home-loan" },
    { name: "Personal Loan", path: "/personal-loan" },
    { name: "Business Loan", path: "/business-loan" },
    { name: "Property Loan", path: "/property-loan" },
    { name: "Loan Transfer", path: "/loan-transfer" },
  ];

  const calculateEMI = (P, r, n) => {
    r = r / 100 / 12; // Convert annual interest rate to monthly
    return Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  };

  const emi = calculateEMI(loanAmount, interestRate, tenure);
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - loanAmount;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
   
    <div className="mt-20 p-4 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md overflow-hidden p-6 flex">
        {/* Left Side: Inputs */}
        <div className="w-1/2 pr-4 border-r">
          <h2 className="text-xl font-semibold text-blue-900 text-center mb-4">
            {loanType} EMI Calculator
          </h2>
          {/* Loan Type Dropdown */}
          <div className="mb-4">
            <label className="font-medium text-gray-700 text-sm">Loan Type</label>
            <select
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="w-full p-2 border rounded-md text-gray-700 focus:outline-none"
            >
              {loanTypes.map((type) => (
                <option key={type.name} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          {/* Loan Amount Input */}
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-600" />
              <label className="font-medium text-gray-700 text-sm">Loan Amount</label>
            </div>
            <input
              type="range"
              min="100000"
              max="5000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-1 bg-gray-300 rounded-lg cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-600">
              <span>₹1L</span>
              <span className="text-base font-semibold text-blue-900">{formatCurrency(loanAmount)}</span>
              <span>₹50L</span>
            </div>
          </div>
          {/* Tenure Input */}
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <label className="font-medium text-gray-700 text-sm">Loan Tenure</label>
            </div>
            <input
              type="range"
              min="6"
              max="84"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-1 bg-gray-300 rounded-lg cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-600">
              <span>6M</span>
              <span className="text-base font-semibold text-blue-900">{tenure} months</span>
              <span>84M</span>
            </div>
          </div>
          {/* Interest Rate Input */}
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <Percent className="w-4 h-4 text-blue-600" />
              <label className="font-medium text-gray-700 text-sm">Interest Rate (% p.a.)</label>
            </div>
            <input
              type="range"
              min="5"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-1 bg-gray-300 rounded-lg cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-600">
              <span>5%</span>
              <span className="text-base font-semibold text-blue-900">{interestRate.toFixed(2)}%</span>
              <span>20%</span>
            </div>
          </div>
        </div>

        {/* Right Side: Results */}
        <div className="w-1/2 pl-4 flex flex-col justify-center items-center space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center w-full">
            <p className="text-gray-600 text-sm">Your Monthly EMI</p>
            <p className="text-2xl font-bold text-blue-700 mt-1">{formatCurrency(emi)}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-md w-full">
            <p className="text-gray-600 text-sm">Total Interest</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">{formatCurrency(totalInterest)}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-md w-full">
            <p className="text-gray-600 text-sm">Total Amount</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">{formatCurrency(totalAmount)}</p>
          </div>
          <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
      <Contact/>

    </>
  );
};

export default EMICalculator;
