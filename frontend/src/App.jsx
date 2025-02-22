import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import LoanApplication from "./pages/LoanApplication";
import Emi from "./pages/Emi";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply-loan" element={<LoanApplication />} />
        <Route path="/emi" element={<Emi />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
