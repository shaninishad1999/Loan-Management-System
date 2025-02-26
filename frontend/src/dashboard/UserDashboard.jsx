import React, { useState } from 'react';
import { Link } from "react-router-dom";
const UserDashboard = () => {
  
  // Sample data - in a real app this would come from an API
  const [loanData, setLoanData] = useState({
    name: "John Doe",
    loanAmount: 25000,
    interestRate: 5.75,
    termMonths: 60,
    nextPayment: {
      amount: 482.22,
      dueDate: "2025-03-15"
    },
    totalPaid: 6787.08,
    remainingBalance: 18212.92,
    paymentHistory: [
      { date: "2025-02-15", amount: 482.22, status: "Paid" },
      { date: "2025-01-15", amount: 482.22, status: "Paid" },
      { date: "2024-12-15", amount: 482.22, status: "Paid" }
    ]
  });

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Calculate loan progress percentage
  const progressPercentage = Math.round((loanData.totalPaid / (loanData.totalPaid + loanData.remainingBalance)) * 100);

  return (
    <div className=" min-h-screen max-w-7xl mx-auto lg:mt-20 mt-14">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">XYZ Finance</h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-blue-100">
                Welcome, {loanData.name}
              </div>
              <Link to="/myaccount">
              <button className="bg-blue-800 hover:bg-blue-900 py-2 px-4 rounded-lg text-sm">
                My Account
              </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Loan Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border-r pr-4">
                <p className="text-sm text-gray-500">Loan Amount</p>
                <p className="text-xl font-bold text-gray-800">{formatCurrency(loanData.loanAmount)}</p>
              </div>
              <div className="border-r pr-4">
                <p className="text-sm text-gray-500">Interest Rate</p>
                <p className="text-xl font-bold text-gray-800">{loanData.interestRate}%</p>
              </div>
              <div className="border-r pr-4">
                <p className="text-sm text-gray-500">Loan Term</p>
                <p className="text-xl font-bold text-gray-800">{loanData.termMonths} months</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Monthly Payment</p>
                <p className="text-xl font-bold text-gray-800">{formatCurrency(loanData.nextPayment.amount)}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress: {progressPercentage}% paid</span>
                <span className="text-sm font-medium text-gray-700">
                  {formatCurrency(loanData.totalPaid)} of {formatCurrency(loanData.loanAmount)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-500 h-3 rounded-full" 
                  style={{ width: `${progressPercentage}%` }} 
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Next Payment</h2>
            <div className="text-center">
              <p className="text-sm text-gray-500">Due on</p>
              <p className="text-lg font-bold text-gray-800 mb-3">{formatDate(loanData.nextPayment.dueDate)}</p>
              <p className="text-3xl font-bold text-gray-800 mb-5">{formatCurrency(loanData.nextPayment.amount)}</p>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium">
                Make Payment
              </button>
            </div>
          </div>
        </div>

        {/* Payment History & Loan Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
            <h2 className="text-xl font-semibold text-black mb-4">Payment History</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loanData.paymentHistory.map((payment, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-3 text-black">{formatDate(payment.date)}</td>
                      <td className="py-3 text-black">{formatCurrency(payment.amount)}</td>
                      <td className="py-3 text-black">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                          payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Transactions →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-3">
  <Link to="/apply-loan">
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium mb-2">
      Apply for New Loan
    </button>
  </Link>
  <Link to="/statement">
    <button className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 py-2 px-4 rounded-lg text-sm font-medium mb-2">
      Download Statement
    </button>
  </Link>
  <Link to="/payment-method">
    <button className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 py-2 px-4 rounded-lg text-sm font-medium mb-2">
      Update Payment Method
    </button>
  </Link>
  <Link to="/support">
    <button className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 py-2 px-4 rounded-lg text-sm font-medium">
      Contact Support
    </button>
  </Link>
</div>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Our customer service team is available 24/7 to assist you with any questions.
              </p>
              <div className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Call 1-800-123-4567
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;