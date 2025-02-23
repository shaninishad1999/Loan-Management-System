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




const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#1E2530] to-blue-800 text-white">
      <div className="mb-15 ">

      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply-loan" element={<LoanApplication />} />
        <Route path="/emi" element={<Emi />} />
        <Route path="/emi-calculator" element={<EMICalculator />} />
        <Route path="/about" element={<About />} />
        <Route path="home-loan" element={<HomeLoan />} />
        <Route path="business-loan" element={<BusinessLoan />} />
        <Route path="property-loan" element={<PropertyLoan />} />
        <Route path="personal-loan" element={<PersonalLoan />} />
        <Route path="contact" element={<Contact />} />
       

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
