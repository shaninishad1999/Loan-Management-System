import React from "react";
import { Banknote, Timer, Handshake, ShieldCheck, EyeOff } from "lucide-react";

const WhyChooseLoan = () => {
  const benefits = [
    { title: "Low Interest Rates", description: "We offer competitive interest rates to make repayments easier.", icon: <Banknote size={40} className="text-blue-500" /> },
    { title: "Fast Approval", description: "Get your loan approved within 24 hours with our quick process.", icon: <Timer size={40} className="text-green-500" /> },
    { title: "Flexible Repayment", description: "Choose repayment plans that suit your financial needs.", icon: <Handshake size={40} className="text-orange-500" /> },
    { title: "No Hidden Fees", description: "We ensure transparency with no unexpected charges.", icon: <EyeOff size={40} className="text-red-500" /> },
    { title: "Secure Process", description: "Your data and transactions are 100% secure with us.", icon: <ShieldCheck size={40} className="text-purple-500" /> },
  ];

  return (
    <section className=" py-16 px-5 text-center w-full">
      <h2 className="text-4xl font-bold text-blue-700 mb-10">Why Choose Our Loan?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-5">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseLoan;
