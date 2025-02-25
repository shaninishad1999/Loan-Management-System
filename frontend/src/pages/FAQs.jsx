import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How can I apply for a loan?',
      answer: 'You can apply for a loan by filling out our online application form and submitting the required documents.'
    },
    {
      question: 'What are the eligibility criteria?',
      answer: 'To be eligible, you must be at least 18 years old, have a stable income, and meet our credit score requirements.'
    },
    {
      question: 'How long does loan approval take?',
      answer: 'Loan approval typically takes 24-48 hours after submitting all necessary documents.'
    },
    {
      question: 'What is the interest rate on loans?',
      answer: 'Our interest rates vary depending on the loan type and your credit score. Please check our loan calculator for details.'
    },
    {
      question: 'Can I repay my loan early?',
      answer: 'Yes, you can repay your loan early without any prepayment penalties.'
    },
    {
      question: 'What documents do I need to submit with my application?',
      answer: 'You will need to submit proof of identity (valid ID), proof of address (utility bill or similar), proof of income (pay stubs or tax returns), and bank statements for the past 3 months.'
    },
    {
      question: 'Do you offer secured loans?',
      answer: 'Yes, we offer both secured and unsecured loans. Secured loans typically have lower interest rates but require collateral.'
    },
    {
      question: 'What is the maximum loan amount I can apply for?',
      answer: 'The maximum loan amount depends on your income, credit history, and the type of loan. For personal loans, the maximum is typically $50,000.'
    },
    {
      question: 'What happens if I miss a payment?',
      answer: 'If you miss a payment, you may be charged a late fee. Multiple missed payments can negatively impact your credit score and may result in additional collection actions.'
    },
    {
      question: 'Can I apply for a loan with a co-signer?',
      answer: 'Yes, applying with a co-signer may improve your chances of approval and potentially secure a better interest rate, especially if you have limited credit history.'
    },
    {
      question: 'How do I check my application status?',
      answer: 'You can check your application status by logging into your account on our website or by contacting our customer service team.'
    },
    {
      question: 'Are there any application fees?',
      answer: 'No, we do not charge any application fees. However, depending on the loan type, there may be origination fees that are disclosed before finalizing your loan.'
    },
    {
      question: 'Can I apply for multiple loans simultaneously?',
      answer: 'While you can submit multiple loan applications, we generally recommend against it as it may negatively impact your credit score due to multiple hard inquiries.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept payments via direct debit, online banking transfer, debit card, credit card, and checks. The easiest method is setting up automatic payments from your bank account.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'Our customer support team is available Monday-Friday from 8am to 8pm and Saturdays from 9am to 3pm. You can reach us by phone at (555) 123-4567, email at support@loanscompany.com, or through the live chat on our website.'
    },
    {
      question: 'Do you offer refinancing options?',
      answer: 'Yes, we offer refinancing options for existing loans. Refinancing may help you secure a better interest rate or change your payment terms. Contact us to discuss your specific situation.'
    },
    {
      question: 'What is the minimum credit score required?',
      answer: 'For standard loans, we typically require a minimum credit score of 650. However, we offer special programs for those with scores as low as 580, though these may have higher interest rates.'
    },
    {
      question: 'Can I use a loan for any purpose?',
      answer: 'Personal loans can generally be used for any legal purpose, including debt consolidation, home improvements, or major purchases. However, specific loan types may have restrictions on how funds can be used.'
    },
    {
      question: 'How are interest rates determined?',
      answer: 'Interest rates are determined based on several factors, including your credit score, income, debt-to-income ratio, loan amount, loan term, and market conditions. Better credit scores typically qualify for lower interest rates.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes, we take data security very seriously. All personal information is encrypted using industry-standard protocols, and we never share your information with third parties without your explicit consent. Our systems comply with all relevant data protection regulations.'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6  rounded-xl mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-gray-900 transition-all duration-200 hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-gray-300">{faq.question}</h3>
              {openIndex === index ? 
                <ChevronUp className="text-blue-600 w-5 h-5 flex-shrink-0" /> : 
                <ChevronDown className="text-gray-100 w-5 h-5 flex-shrink-0" />
              }
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="p-5 pt-0 text-gray-100">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;