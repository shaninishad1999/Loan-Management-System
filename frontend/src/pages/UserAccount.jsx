import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Changed to profile endpoint - GET is typically used for fetching profiles, not registering
        const response = await fetch("http://localhost:6050/api/users/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}` // Add token if you have auth
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
  
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
        
        // Fallback to dummy data if API fails
        setUser({
          name: "Rahul Sharma",
          email: "rahul@example.com",
          phone: "+91 9876543210",
          dob: "1995-08-12",
          address: "Mumbai, India",
          loanAmount: "₹50,000",
          loanStatus: "Active",
          dueDate: "15th March 2025",
          accountNumber: "LOAN-2021-6745",
          totalLoans: 1,
          creditScore: 750,
          lastLogin: "27 Feb 2025, 10:30 AM",
          notificationPreference: "Email",
          kycStatus: "Verified",
        });
      } finally {
        setLoading(false);
      }
    };
  
    fetchUser();
  }, []);
  
  // Show loading spinner
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Show error message
  if (error && !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-red-50 p-4 rounded-lg text-red-600">
          <p className="font-medium">Error loading profile: {error}</p>
          <button 
            onClick={() => navigate("/login")}
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  const handleViewStatement = () => {
    navigate("/loan-statement");
  };

  const handleDownloadDocuments = () => {
    navigate("/documents");
  };

  const handleContactSupport = () => {
    navigate("/support");
  };

  return (
    <div className="min-h-screen lg:mt-16 mt-14">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        {/* Header with avatar and name */}
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-xl p-6 mb-6 shadow-md">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-blue-800">
              {user.name.split(" ").map(name => name[0]).join("")}
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-blue-100">{user.email}</p>
              <p className="text-blue-200 text-sm mt-1">Account #{user.accountNumber}</p>
              <div className="mt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {user.kycStatus}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs navigation */}
        <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("personal")}
              className={`flex-1 py-4 px-4 text-center font-medium ${
                activeTab === "personal"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Personal Information
            </button>
            <button
              onClick={() => setActiveTab("loan")}
              className={`flex-1 py-4 px-4 text-center font-medium ${
                activeTab === "loan"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Loan Details
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`flex-1 py-4 px-4 text-center font-medium ${
                activeTab === "security"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Security
            </button>
          </div>

          {/* Tab content */}
          <div className="p-6">
            {activeTab === "personal" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                    <p className="text-gray-800 font-medium">{user.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                    <p className="text-gray-800 font-medium">{user.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                    <p className="text-gray-800 font-medium">{user.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Date of Birth</label>
                    <p className="text-gray-800 font-medium">{user.dob}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-500 mb-1">Address</label>
                    <p className="text-gray-800 font-medium">{user.address}</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <button 
                    onClick={handleEditProfile}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-sm font-medium transition duration-200"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            )}

            {activeTab === "loan" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Loan Amount</p>
                    <p className="text-xl font-bold text-gray-800">{user.loanAmount}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Loan Status</p>
                    <p className="text-xl font-bold text-gray-800">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {user.loanStatus}
                      </span>
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Next Payment Due</p>
                    <p className="text-xl font-bold text-gray-800">{user.dueDate}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <h3 className="font-medium text-gray-800">Loan Statistics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Credit Score</p>
                      <p className="font-semibold text-gray-800">{user.creditScore}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Loans</p>
                      <p className="font-semibold text-gray-800">{user.totalLoans}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Remaining EMIs</p>
                      <p className="font-semibold text-gray-800">36</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Interest Rate</p>
                      <p className="font-semibold text-gray-800">10.5%</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t flex flex-wrap gap-3">
                  <button 
                    onClick={handleViewStatement}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-sm font-medium transition duration-200"
                  >
                    View Statement
                  </button>
                  <button 
                    onClick={handleDownloadDocuments}
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 py-2 px-6 rounded-lg text-sm font-medium transition duration-200"
                  >
                    Download Documents
                  </button>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-3">Account Security</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">Password</p>
                        <p className="text-sm text-gray-500">Last changed 30 days ago</p>
                      </div>
                      <button 
                        onClick={() => navigate("/change-password")}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Change
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-500">Not enabled</p>
                      </div>
                      <button 
                        onClick={() => navigate("/enable-2fa")}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Enable
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">Account Activity</p>
                        <p className="text-sm text-gray-500">Last login: {user.lastLogin}</p>
                      </div>
                      <button 
                        onClick={() => navigate("/account-activity")}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View All
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-3">Notification Preferences</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                      <label className="ml-2 block text-sm text-gray-700">Email notifications</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                      <label className="ml-2 block text-sm text-gray-700">SMS notifications</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label className="ml-2 block text-sm text-gray-700">Marketing communications</label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <button 
                    onClick={handleLogout}
                    className="bg-red-50 hover:bg-red-100 text-red-600 py-2 px-6 rounded-lg text-sm font-medium transition duration-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center border border-gray-100">
            <div className="p-3 mr-4 bg-blue-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Documents</p>
              <p className="font-bold text-gray-800">12</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center border border-gray-100">
            <div className="p-3 mr-4 bg-green-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">KYC Status</p>
              <p className="font-bold text-gray-800">{user.kycStatus}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center border border-gray-100">
            <div className="p-3 mr-4 bg-yellow-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Credit Score</p>
              <p className="font-bold text-gray-800">{user.creditScore}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center border border-gray-100">
            <div className="p-3 mr-4 bg-purple-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Next Payment</p>
              <p className="font-bold text-gray-800">15 days</p>
            </div>
          </div>
        </div>

        {/* Support section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm border border-blue-100">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Need assistance with your account?</h3>
              <p className="text-gray-600">Our support team is available 24/7 to help you.</p>
            </div>
            <button 
              onClick={handleContactSupport}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-sm font-medium transition duration-200 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;