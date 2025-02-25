import React from "react";
import { FaFileAlt, FaUserCheck, FaSearchDollar, FaFileSignature, FaMoneyCheckAlt, FaRegClock } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const ProcessGuide = () => {
  const steps = [
    {
      id: 1,
      title: "Application Submission",
      icon: <FaFileAlt className="text-blue-400" size={40} />,
      description: "Fill out our simple online application form with your personal and financial details.",
      timeframe: "5-10 minutes"
    },
    {
      id: 2,
      title: "Document Verification",
      icon: <FaUserCheck className="text-blue-400" size={40} />,
      description: "Upload required documents for identity and income verification.",
      timeframe: "1-2 business days"
    },
    {
      id: 3,
      title: "Loan Assessment",
      icon: <FaSearchDollar className="text-blue-400" size={40} />,
      description: "Our team evaluates your application against our lending criteria.",
      timeframe: "2-3 business days"
    },
    {
      id: 4,
      title: "Approval & Agreement",
      icon: <FaFileSignature className="text-blue-400" size={40} />,
      description: "Receive your loan offer and sign the agreement electronically.",
      timeframe: "1 business day"
    },
    {
      id: 5,
      title: "Loan Disbursement",
      icon: <FaMoneyCheckAlt className="text-blue-400" size={40} />,
      description: "Funds are transferred directly to your bank account.",
      timeframe: "1-2 business days"
    }
  ];

  const documents = [
    "Valid government-issued ID (passport, driver's license)",
    "Proof of address (utility bill, bank statement)",
    "Income verification (pay stubs, tax returns)",
    "Bank statements from the last 3 months",
    "Business documentation (for business loans)",
    "Admission letter (for education loans)"
  ];

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold">Loan Application Process Guide</h1>
        <p className="mt-4 text-lg">Understanding our simple 5-step process to get your loan approved</p>
      </section>

      {/* Timeline Process */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Loan Process</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
          
          {steps.map((step, index) => (
            <div key={step.id} className="mb-16 relative">
              <div className={`md:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-blue-800 border-4 border-blue-600 z-10">
                  <span className="text-white font-bold">{step.id}</span>
                </div>
                
                {/* Content box */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
                    <div className="flex items-center mb-4 gap-3 justify-center md:justify-start">
                      {index % 2 !== 0 && <div className="md:hidden">{step.icon}</div>}
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      {index % 2 === 0 && <div className="md:hidden">{step.icon}</div>}
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-blue-400 justify-center md:justify-start">
                      <FaRegClock />
                      <span>{step.timeframe}</span>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="md:w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-12 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Required Documents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Documentation Checklist</h3>
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="text-blue-400 mt-1"><BsArrowRight /></div>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Tips for Faster Approval</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1"><BsArrowRight /></div>
                  <span>Ensure all documents are clear and legible</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1"><BsArrowRight /></div>
                  <span>Submit all required documents together to avoid delays</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1"><BsArrowRight /></div>
                  <span>Verify that all information matches across all documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1"><BsArrowRight /></div>
                  <span>Address any credit issues before applying</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1"><BsArrowRight /></div>
                  <span>Maintain regular income during the application process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              question: "How long does the entire loan process take?",
              answer: "From application to disbursement, the typical timeline is 5-10 business days, depending on document verification and assessment complexity."
            },
            {
              question: "Can I check my application status?",
              answer: "Yes, you can track your application status through our online portal or mobile app at any time."
            },
            {
              question: "What if my application is rejected?",
              answer: "We provide detailed feedback on rejection reasons. You can reapply after addressing these issues or explore alternative loan options with our advisors."
            },
            {
              question: "Are there any fees for early repayment?",
              answer: "We offer flexible repayment options with no penalties for early repayment on most loan types."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Ready to Start Your Application?</h2>
          <p className="mt-4 text-lg">Our team is ready to guide you through every step of the process</p>
          <button className="mt-6 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProcessGuide;