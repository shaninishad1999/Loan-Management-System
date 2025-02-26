import React, { useState } from 'react';
import axios from 'axios';

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
    // File uploads (Base64 strings)
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
    bankName: '',
    branchName: '',
    ifsc: '',
    bankPassbook: '',
    // Co-Applicant Details
    coApplicant: '',
    coApplicantPan: '',
    coApplicantPanDocument: '',
    coApplicantAadhar: '',
    coApplicantAadharDocument: '',
    // Final Details
    applicationDate: '',
    signature: '',
    // New Fields: Applicant Photo and Signature Upload
    applicantPhoto: '',
    applicantSign: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setFormData((prevState) => ({
            ...prevState,
            [name]: reader.result,
          }));
        };
        reader.onerror = (error) => {
          console.error('Error reading file:', error);
        };
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Store data in localStorage
    localStorage.setItem('loanApplication', JSON.stringify(formData));
    console.log('Form data stored in localStorage:', formData);

    // API Integration using Axios
    try {
      const response = await axios.post('https://api.example.com/apply-loan', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Application submitted successfully:', response.data);
      // Optionally handle success (e.g., navigate to a thank you page)
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  // Responsive CSS classes using Tailwind CSS
  const inputClass = "h-8 text-sm mt-1 block w-full border border-gray-300 rounded p-1 text-black";
  const selectClass = "h-8 text-sm mt-1 block w-full border border-gray-300 rounded p-1 text-black";
  const textareaClass = "text-sm h-16 mt-1 block w-full border border-gray-300 rounded p-1 text-black";
  const labelClass = "text-sm font-medium";
  const fieldsetClass = "border p-3 rounded mb-3";
  const legendClass = "text-base font-semibold px-1";
  const fieldClass = "mb-2";
  const rowClass = "flex flex-wrap -mx-2";
  const colHalf = "px-2 w-full sm:w-1/2";
  const colThird = "px-2 w-full sm:w-1/3";
  const fileInputClass = "text-xs mt-1 block w-full";

  return (
    <div className="max-w-4xl mx-auto p-4 shadow-md rounded-lg ">
      <h1 className="text-xl font-bold mb-4 text-center">Loan Application Form</h1>
      
      <form onSubmit={handleSubmit} className="text-sm">
        {/* Personal Information */}
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>Personal Information</legend>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Full Name:
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Father's/Husband's Name:
                  <input
                    type="text"
                    name="fatherHusbandName"
                    placeholder="Enter father's or husband's name"
                    value={formData.fatherHusbandName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className={rowClass}>
            <div className={colThird}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Date of Birth:
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colThird}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">--Select--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
            </div>
            
            <div className={colThird}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Marital Status:
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">--Select--</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          
          <div className={fieldClass}>
            <label className={labelClass}>
              Nationality:
              <input
                type="text"
                name="nationality"
                placeholder="Enter your nationality"
                value={formData.nationality}
                onChange={handleChange}
                className={inputClass}
              />
            </label>
          </div>
        </fieldset>

        {/* Contact Details */}
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>Contact Details</legend>
          
          <div className={fieldClass}>
            <label className={labelClass}>
              Address:
              <textarea
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className={textareaClass}
              ></textarea>
            </label>
          </div>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Phone Number:
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Email:
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        {/* Identification Details */}
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>Identification Details</legend>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  PAN Card Number:
                  <input
                    type="text"
                    name="pan"
                    placeholder="Enter your PAN card number"
                    value={formData.pan}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Upload PAN Document:
                  <input
                    type="file"
                    name="panDocument"
                    onChange={handleChange}
                    className={fileInputClass}
                    accept="image/*,application/pdf"
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Aadhaar Card Number:
                  <input
                    type="text"
                    name="aadhar"
                    placeholder="Enter your Aadhaar card number"
                    value={formData.aadhar}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Upload Aadhaar Document:
                  <input
                    type="file"
                    name="aadharDocument"
                    onChange={handleChange}
                    className={fileInputClass}
                    accept="image/*,application/pdf"
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Driving License/Voter ID:
                  <input
                    type="text"
                    name="idProof"
                    placeholder="Enter your Driving License or Voter ID"
                    value={formData.idProof}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Upload ID Proof:
                  <input
                    type="file"
                    name="idProofDocument"
                    onChange={handleChange}
                    className={fileInputClass}
                    accept="image/*,application/pdf"
                  />
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        {/* Residential Details */}
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>Residential Details</legend>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Type of Housing:
                  <select
                    name="housingType"
                    value={formData.housingType}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">--Select--</option>
                    <option value="own">Own</option>
                    <option value="rent">Rented</option>
                  </select>
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Duration of Residence (years):
                  <input
                    type="number"
                    name="residenceDuration"
                    placeholder="Enter number of years"
                    value={formData.residenceDuration}
                    onChange={handleChange}
                    min="0"
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        {/* Employment/Business Details */}
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>Employment/Business Details</legend>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Employer/Business Name:
                  <input
                    type="text"
                    name="employerName"
                    placeholder="Enter employer or business name"
                    value={formData.employerName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Position/Designation:
                  <input
                    type="text"
                    name="position"
                    placeholder="Enter your position or designation"
                    value={formData.position}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Monthly/Annual Income:
                  <input
                    type="number"
                    name="income"
                    placeholder="Enter your income"
                    value={formData.income}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Experience (years):
                  <input
                    type="number"
                    name="experience"
                    placeholder="Enter your experience in years"
                    value={formData.experience}
                    onChange={handleChange}
                    min="0"
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className={fieldClass}>
            <label className={labelClass}>
              Workplace Address:
              <textarea
                name="workAddress"
                placeholder="Enter your workplace address"
                value={formData.workAddress}
                onChange={handleChange}
                className={textareaClass}
              ></textarea>
            </label>
          </div>
        </fieldset>

        {/* Financial Details */}
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>Financial Details</legend>
          
          <div className={fieldClass}>
            <label className={labelClass}>
              Annual Income:
              <input
                type="number"
                name="annualIncome"
                placeholder="Enter your annual income"
                value={formData.annualIncome}
                onChange={handleChange}
                className={inputClass}
              />
            </label>
          </div>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Existing Loans:
                  <textarea
                    name="existingLoans"
                    placeholder="Provide details of any existing loans"
                    value={formData.existingLoans}
                    onChange={handleChange}
                    className={textareaClass}
                  ></textarea>
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Liabilities:
                  <textarea
                    name="liabilities"
                    placeholder="Enter your liabilities"
                    value={formData.liabilities}
                    onChange={handleChange}
                    className={textareaClass}
                  ></textarea>
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        {/* Loan Details */}
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>Loan Details</legend>
          
          <div className={rowClass}>
            <div className={colThird}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Loan Type:
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className={selectClass}
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
            </div>
            
            <div className={colThird}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Loan Amount:
                  <input
                    type="number"
                    name="loanAmount"
                    placeholder="Enter loan amount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colThird}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Loan Duration (years):
                  <input
                    type="number"
                    name="loanDuration"
                    placeholder="Enter loan duration"
                    value={formData.loanDuration}
                    onChange={handleChange}
                    min="1"
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className={fieldClass}>
            <label className={labelClass}>
              Purpose of Loan:
              <textarea
                name="loanPurpose"
                placeholder="Enter the purpose of the loan"
                value={formData.loanPurpose}
                onChange={handleChange}
                className={textareaClass}
              ></textarea>
            </label>
          </div>
        </fieldset>

        {/* Bank Details */}
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>Bank Details</legend>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Bank Account Number:
                  <input
                    type="text"
                    name="bankAccount"
                    placeholder="Enter your bank account number"
                    value={formData.bankAccount}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Bank Name:
                  <input
                    type="text"
                    name="bankName"
                    placeholder="Enter your bank name"
                    value={formData.bankName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Branch Name:
                  <input
                    type="text"
                    name="branchName"
                    placeholder="Enter your branch name"
                    value={formData.branchName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  IFSC Code:
                  <input
                    type="text"
                    name="ifsc"
                    placeholder="Enter IFSC code"
                    value={formData.ifsc}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className={fieldClass}>
            <label className={labelClass}>
              Upload Bank Passbook:
              <input
                type="file"
                name="bankPassbook"
                onChange={handleChange}
                className={fileInputClass}
                accept="image/*,application/pdf"
              />
            </label>
          </div>
        </fieldset>

        {/* Co-Applicant Details */}
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>Co-Applicant Details</legend>
          
          <div className={fieldClass}>
            <label className={labelClass}>
              Co-Applicant Information:
              <textarea
                name="coApplicant"
                placeholder="Enter co-applicant details (if any)"
                value={formData.coApplicant}
                onChange={handleChange}
                className={textareaClass}
              ></textarea>
            </label>
          </div>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Co-Applicant PAN Number:
                  <input
                    type="text"
                    name="coApplicantPan"
                    placeholder="Enter co-applicant PAN number"
                    value={formData.coApplicantPan}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Upload Co-Applicant PAN:
                  <input
                    type="file"
                    name="coApplicantPanDocument"
                    onChange={handleChange}
                    className={fileInputClass}
                    accept="image/*,application/pdf"
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Co-Applicant Aadhaar Number:
                  <input
                    type="text"
                    name="coApplicantAadhar"
                    placeholder="Enter co-applicant Aadhaar number"
                    value={formData.coApplicantAadhar}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Upload Co-Applicant Aadhaar:
                  <input
                    type="file"
                    name="coApplicantAadharDocument"
                    onChange={handleChange}
                    className={fileInputClass}
                    accept="image/*,application/pdf"
                  />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        
        {/* Final Details */}
        <fieldset className={fieldsetClass}>
          <legend className={legendClass}>Final Details</legend>
          
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Application Date:
                  <input
                    type="date"
                    name="applicationDate"
                    value={formData.applicationDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
            
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Signature (Text):
                  <input
                    type="text"
                    name="signature"
                    placeholder="Enter your signature"
                    value={formData.signature}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </label>
              </div>
            </div>
          </div>
          
          {/* New fields for applicant photo and signature file */}
          <div className={rowClass}>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Applicant Photo:
                  <input
                    type="file"
                    name="applicantPhoto"
                    onChange={handleChange}
                    className={fileInputClass}
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
            <div className={colHalf}>
              <div className={fieldClass}>
                <label className={labelClass}>
                  Upload Signature (File):
                  <input
                    type="file"
                    name="applicantSign"
                    onChange={handleChange}
                    className={fileInputClass}
                    accept="image/*,application/pdf"
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="mr-2 h-4 w-4"
            />
            <span className="text-sm">I agree to the terms and conditions</span>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyLoan;
