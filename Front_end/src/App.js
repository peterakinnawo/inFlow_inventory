import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Intro from "./pages/Intro/intro"
import ForgotPassword from "./pages/ForgotPassword/Forgotpassword";
import PasswordReset from "./pages/ForgotPassword/PasswordReset";
import PhoneOtp from "./pages/OTP/PhoneOtp";
import Product from "./pages/Products/Product";
import EditProfile from "./pages/Profile/EditProfile";
import Productupdate from "./pages/Productupdate/Productupdate";
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate";
// import SideBar from "./components/SideBar";
import Dashboard from "./pages/DashBoard/Dashboard";
import Dashboardd from "./pages/Dashboardd/Dashboardd";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/phoneotp" element={<PhoneOtp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productupdate" element={<Productupdate />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/profileupdate" element={<ProfileUpdate />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardd" element={<Dashboardd/>} />
      </Routes>
    </div>
  );
}

export default App;
