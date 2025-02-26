import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import LoanApplication from "./pages/LoanApplication";
import Register from "./pages/Register";
import Emi from "./pages/Emi";
import HomePage from "./HomePage";
import EMICalculator from "./services/EMICalculator";
import About from "./section/About";
import HomeLoan from "./loan/HomeLoan";
import BusinessLoan from "./loan/BusinessLoan";
import PropertyLoan from "./loan/PropertyLoan";
import PersonalLoan from "./loan/PersonalLoan";
import Contact from "./components/Contact";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import Documents from "./aboutmenu/Documents";
import EducationLoan from "./loan/EducationLoan";
import ProcessGuide from "./aboutmenu/ProceesGuide";
import ForgotPassword from "./pages/ForgotPassword";
import ApplyLoan from "./pages/ApplyLoan";
import UserDashboard from "./dashboard/UserDashboard";
import Statement from "./pages/Statement";
import PaymentMethod from "./pages/PaymentMethod";
import Support from "./pages/Support";
import UserAccount from "./pages/UserAccount";




const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#1E2530] to-blue-800 text-white">
      <div className="mb-15 ">

      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/apply-loan" element={<LoanApplication />} /> */}
        <Route path="/emi" element={<Emi />} />
        <Route path="/emi-calculator" element={<EMICalculator />} />
        <Route path="/about" element={<About />} />
        <Route path="home-loan" element={<HomeLoan />} />
        <Route path="business-loan" element={<BusinessLoan />} />
        <Route path="property-loan" element={<PropertyLoan />} />
        <Route path="personal-loan" element={<PersonalLoan />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsCondition/>}/>
        <Route path="documents" element={<Documents/>}/>
        <Route path="education-loan" element={<EducationLoan/>}/>
        <Route path="process" element={<ProcessGuide/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="forgot-password" element={<ForgotPassword/>}/>
        <Route path="/apply-loan" element={<ApplyLoan/>}/>
        <Route path="dashboard" element={<UserDashboard/>}/>

        <Route path="/apply-loan" element={<ApplyLoan />} />
        <Route path="/statement" element={<Statement />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        <Route path="/support" element={<Support />} />

        <Route path="/myaccount" element={<UserAccount/>}/>

      </Routes>
      <Footer />

      {/* <AuthProvider>
      <div>
        <h1>Welcome to My App</h1>
        <Login />
        <Register />
      </div>
    </AuthProvider> */}
    </div>
  );
};

export default App;
