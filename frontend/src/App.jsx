import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";

import Register from "./pages/Register";

import HomePage from "./HomePage";

import UserAccount from "./pages/UserAccount";
import EditProfile from "./pages/EditProfile";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#1E2530] to-blue-800 text-white h-[100vh]">
      <div className="mb-15 ">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit-profile" element={<EditProfile/>}/>

        <Route path="/myaccount" element={<UserAccount />} />
      </Routes>
    </div>
  );
};

export default App;
