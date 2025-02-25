import React, { useState } from 'react';
import { File, Image, FileText, CreditCard, Home, Briefcase, Building, GraduationCap } from 'lucide-react';

const loanDocuments = [
  {
    type: "Home Loan",
    icon: <Home className="w-10 h-10 text-blue-600" />,
    documents: [
      { name: "Identity Proof", details: "Aadhar Card, Voter ID, Passport or PAN Card (colored scanned copy, 100 KB to 4 MB in JPG/PDF format)" },
      { name: "Address Proof", details: "Utility bills, Passport or Driving License (recent, not older than 3 months, JPG/PDF format)" },
      { name: "Income Proof", details: "Latest 3 months salary slips, Form 16 (PDF format, max 10 MB)" },
      { name: "Property Documents", details: "Sale deed, property registration documents (colored scan, PDF format, 5-15 MB)" },
      { name: "Bank Statements", details: "Last 6 months bank statements with seal & signature (PDF format, max 10 MB)" }
    ]
  },
  {
    type: "Personal Loan",
    icon: <CreditCard className="w-10 h-10 text-green-600" />,
    documents: [
      { name: "Identity Proof", details: "Aadhar Card, Voter ID, Passport (colored scanned copy, 100 KB to 4 MB in JPG/PDF format)" },
      { name: "Address Proof", details: "Utility bills or Passport (recent, not older than 3 months, JPG/PDF format)" },
      { name: "Income Proof", details: "Latest 3 months salary slips (PDF format, max 5 MB)" },
      { name: "Bank Statements", details: "Last 3 months statements (PDF format, max 10 MB)" },
      { name: "PAN Card", details: "Clear colored scan (JPG format, 100 KB to 4 MB)" }
    ]
  },
  {
    type: "Business Loan",
    icon: <Briefcase className="w-10 h-10 text-purple-600" />,
    documents: [
      { name: "Identity Proof", details: "Aadhar Card, Passport of proprietor/directors (JPG/PDF format, max 4 MB)" },
      { name: "Business Registration", details: "GST registration, business incorporation documents (PDF format, max 5 MB)" },
      { name: "Bank Statements", details: "Business account statements for last 12 months (PDF format, max 15 MB)" },
      { name: "Income Tax Returns", details: "Last 2 years ITR with computation of income (PDF format, max 10 MB)" },
      { name: "Financial Statements", details: "Balance sheet & P&L for last 2 years (PDF format, max 10 MB)" }
    ]
  },
  {
    type: "Property Loan",
    icon: <Building className="w-10 h-10 text-orange-600" />,
    documents: [
      { name: "Identity Proof", details: "Aadhar Card, Voter ID, Passport (colored scanned copy, 100 KB to 4 MB in JPG/PDF format)" },
      { name: "Property Documents", details: "Sale deed, property tax receipts, NOC from builder (PDF format, 5-15 MB)" },
      { name: "Income Proof", details: "Latest 6 months salary slips, Form 16 (PDF format, max 10 MB)" },
      { name: "Bank Statements", details: "Last 6 months statements with seal & signature (PDF format, max 10 MB)" },
      { name: "Title Deed", details: "Original property ownership document (clear scan, PDF format, 5-15 MB)" }
    ]
  },
  {
    type: "Education Loan",
    icon: <GraduationCap className="w-10 h-10 text-red-600" />,
    documents: [
      { name: "Identity Proof", details: "Aadhar Card, Passport of student & co-applicant (JPG/PDF format, max 4 MB)" },
      { name: "Address Proof", details: "Utility bills or Passport (recent, not older than 3 months, JPG/PDF format)" },
      { name: "Admission Letter", details: "College/University offer letter on letterhead (PDF format, max 5 MB)" },
      { name: "Fee Structure", details: "Detailed semester-wise fee structure from institution (PDF format, max 5 MB)" },
      { name: "Co-applicant Income Proof", details: "Latest 3 months salary slips or 2 years ITR for self-employed (PDF format, max 10 MB)" }
    ]
  }
];

const DocumentsRequired = () => {
  const [expandedLoan, setExpandedLoan] = useState(null);

  const toggleExpand = (index) => {
    if (expandedLoan === index) {
      setExpandedLoan(null);
    } else {
      setExpandedLoan(index);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-10 text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-200 mb-4">Required Documents for Loan Application</h2>
        <p className="text-gray-100 max-w-3xl mx-auto">
          Please ensure all documents are clear, complete, and in the specified format. Higher quality documents help process your application faster.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loanDocuments.map((loan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 ${expandedLoan === index ? 'md:col-span-2 lg:col-span-3' : ''}`}
          >
            <div className="flex items-center p-5 cursor-pointer" onClick={() => toggleExpand(index)}>
              <div className="p-2 mr-4">
                {loan.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{loan.type}</h3>
                <p className="text-gray-500 text-sm">{loan.documents.length} documents required</p>
              </div>
              <button className="text-blue-600 font-medium">
                {expandedLoan === index ? 'View Less' : 'View All'}
              </button>
            </div>
            
            {expandedLoan === index && (
              <div className="p-5 pt-0 border-t border-gray-100">
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <FileText className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-medium text-blue-800">Document Requirements</h4>
                  </div>
                  <p className="text-sm text-blue-700">
                    All documents should be clear, legible scans. Photos must be well-lit and focused. Maximum file size varies by document type.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {loan.documents.map((doc, docIndex) => (
                    <div key={docIndex} className="flex border-b border-gray-100 pb-4">
                      <div className="mr-3 mt-1">
                        {docIndex % 2 === 0 ? 
                          <File className="w-5 h-5 text-gray-600" /> : 
                          <Image className="w-5 h-5 text-gray-600" />
                        }
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">{doc.name}</h5>
                        <p className="text-sm text-gray-600 mt-1">{doc.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Notes for Document Submission</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>All images should be clear and legible, preferably between 2-8 megapixels for photographs</li>
          <li>PDF documents should not exceed 15 MB per file</li>
          <li>For identity documents, both front and back sides are required</li>
          <li>All documents should be recent (not older than 3 months unless specified)</li>
          <li>Self-attested copies are accepted for preliminary verification, but originals may be required later</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentsRequired;