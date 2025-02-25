import React, { useState } from 'react';

const ApplyLoan = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    fatherHusbandName: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    nationality: '',
    // Contact Details
    address: '',
    phone: '',
    email: '',
    // Identification Details
    pan: '',
    aadhar: '',
    idProof: '',
    // File uploads (will store Base64 string)
    panDocument: '',
    aadharDocument: '',
    idProofDocument: '',
    // Residential Details
    housingType: '',
    residenceDuration: '',
    // Employment/Business Details
    employerName: '',
    position: '',
    income: '',
    workAddress: '',
    experience: '',
    // Financial Details
    annualIncome: '',
    existingLoans: '',
    liabilities: '',
    // Loan Details
    loanType: '',
    loanAmount: '',
    loanDuration: '',
    loanPurpose: '',
    // Bank Details
    bankAccount: '',
    bankNameBranch: '',
    ifsc: '',
    // Additional Information
    coApplicant: '',
    agreement: false,
    applicationDate: '',
    signature: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (type === 'file') {
      // Handle file uploads: convert file to Base64 string
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setFormData(prevState => ({
            ...prevState,
            [name]: reader.result,
          }));
        };
        reader.onerror = error => {
          console.error('Error reading file:', error);
        };
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data in local storage
    localStorage.setItem('loanApplication', JSON.stringify(formData));
    console.log('Form data stored in localStorage:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Loan Application Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <fieldset className="border p-4 rounded">
          <legend className="text-xl font-semibold mb-2">Personal Information</legend>
          <div className="mb-4">
            <label className="block">
              Full Name:
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Father's/Husband's Name:
              <input
                type="text"
                name="fatherHusbandName"
                placeholder="Enter father's or husband's name"
                value={formData.fatherHusbandName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              >
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Marital Status:
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              >
                <option value="">--Select--</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Nationality:
              <input
                type="text"
                name="nationality"
                placeholder="Enter your nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
        </fieldset>

        {/* Contact Details */}
        <fieldset className="border p-4 rounded">
          <legend className="text-xl font-semibold mb-2">Contact Details</legend>
          <div className="mb-4">
            <label className="block">
              Address:
              <textarea
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              ></textarea>
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Phone Number:
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Email Address:
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
        </fieldset>

        {/* Identification Details */}
        <fieldset className="border p-4 rounded">
          <legend className="text-xl font-semibold mb-2">Identification Details</legend>
          <div className="mb-4">
            <label className="block">
              PAN Card Number:
              <input
                type="text"
                name="pan"
                placeholder="Enter your PAN card number"
                value={formData.pan}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Upload PAN Document:
              <input
                type="file"
                name="panDocument"
                onChange={handleChange}
                className="mt-1 block w-full text-black"
                accept="image/*,application/pdf"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Aadhaar Card Number:
              <input
                type="text"
                name="aadhar"
                placeholder="Enter your Aadhaar card number"
                value={formData.aadhar}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Upload Aadhaar Document:
              <input
                type="file"
                name="aadharDocument"
                onChange={handleChange}
                className="mt-1 block w-full text-black"
                accept="image/*,application/pdf"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Driving License/Voter ID:
              <input
                type="text"
                name="idProof"
                placeholder="Enter your Driving License or Voter ID number"
                value={formData.idProof}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Upload ID Proof Document:
              <input
                type="file"
                name="idProofDocument"
                onChange={handleChange}
                className="mt-1 block w-full text-black"
                accept="image/*,application/pdf"
              />
            </label>
          </div>
        </fieldset>

        {/* Residential Details */}
        <fieldset className="border p-4 rounded">
          <legend className="text-xl font-semibold mb-2">Residential Details</legend>
          <div className="mb-4">
            <label className="block">
              Housing Type:
              <select
                name="housingType"
                value={formData.housingType}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              >
                <option value="">--Select--</option>
                <option value="own">Own</option>
                <option value="rent">Rent</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Duration of Residence (in years):
              <input
                type="number"
                name="residenceDuration"
                placeholder="Enter number of years"
                value={formData.residenceDuration}
                onChange={handleChange}
                min="0"
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
        </fieldset>

        {/* Employment/Business Details */}
        <fieldset className="border p-4 rounded">
          <legend className="text-xl font-semibold mb-2">Employment/Business Details</legend>
          <div className="mb-4">
            <label className="block">
              Employer/Business Name:
              <input
                type="text"
                name="employerName"
                placeholder="Enter your employer or business name"
                value={formData.employerName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Position/Designation:
              <input
                type="text"
                name="position"
                placeholder="Enter your position or designation"
                value={formData.position}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Monthly/Annual Income:
              <input
                type="number"
                name="income"
                placeholder="Enter your income"
                value={formData.income}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Work Address:
              <textarea
                name="workAddress"
                placeholder="Enter your work address"
                value={formData.workAddress}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              ></textarea>
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Experience (in years):
              <input
                type="number"
                name="experience"
                placeholder="Enter your experience in years"
                value={formData.experience}
                onChange={handleChange}
                min="0"
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
        </fieldset>

        {/* Financial Details */}
        <fieldset className="border p-4 rounded">
          <legend className="text-xl font-semibold mb-2">Financial Details</legend>
          <div className="mb-4">
            <label className="block">
              Annual Income:
              <input
                type="number"
                name="annualIncome"
                placeholder="Enter your annual income"
                value={formData.annualIncome}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Existing Loans:
              <textarea
                name="existingLoans"
                placeholder="Provide details of any existing loans"
                value={formData.existingLoans}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              ></textarea>
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Liabilities:
              <textarea
                name="liabilities"
                placeholder="Enter your liabilities"
                value={formData.liabilities}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              ></textarea>
            </label>
          </div>
        </fieldset>

        {/* Loan Details */}
        <fieldset className="border p-4 rounded">
          <legend className="text-xl font-semibold mb-2">Loan Details</legend>
          <div className="mb-4">
            <label className="block">
              Loan Type:
              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              >
                <option value="">--Select--</option>
                <option value="personal">Personal</option>
                <option value="home">Home</option>
                <option value="vehicle">Vehicle</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Loan Amount:
              <input
                type="number"
                name="loanAmount"
                placeholder="Enter the loan amount"
                value={formData.loanAmount}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Loan Duration (in years):
              <input
                type="number"
                name="loanDuration"
                placeholder="Enter loan duration"
                value={formData.loanDuration}
                onChange={handleChange}
                min="1"
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Loan Purpose:
              <textarea
                name="loanPurpose"
                placeholder="Enter the purpose of the loan"
                value={formData.loanPurpose}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              ></textarea>
            </label>
          </div>
        </fieldset>

        {/* Bank Details */}
        <fieldset className="border p-4 rounded">
          <legend className="text-xl font-semibold mb-2">Bank Details</legend>
          <div className="mb-4">
            <label className="block">
              Bank Account Number:
              <input
                type="text"
                name="bankAccount"
                placeholder="Enter your bank account number"
                value={formData.bankAccount}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Bank Name & Branch:
              <input
                type="text"
                name="bankNameBranch"
                placeholder="Enter your bank name and branch"
                value={formData.bankNameBranch}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              IFSC Code:
              <input
                type="text"
                name="ifsc"
                placeholder="Enter the IFSC code"
                value={formData.ifsc}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
        </fieldset>

        {/* Additional Information */}
        <fieldset className="border p-4 rounded">
          <legend className="text-xl font-semibold mb-2">Additional Information</legend>
          <div className="mb-4">
            <label className="block">
              Co-Applicant Details:
              <textarea
                name="coApplicant"
                placeholder="Enter details of the co-applicant (if any)"
                value={formData.coApplicant}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              ></textarea>
            </label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="mr-2 text-black"
            />
            <span>I agree to the terms and conditions</span>
          </div>
          <div className="mb-4">
            <label className="block">
              Application Date:
              <input
                type="date"
                name="applicationDate"
                value={formData.applicationDate}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Signature:
              <input
                type="text"
                name="signature"
                placeholder="Enter your signature"
                value={formData.signature}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2 text-black"
              />
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyLoan;
