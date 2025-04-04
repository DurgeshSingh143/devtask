import React from "react";
import "./App.css";
import LandingScreen from "./pages/LandingScreen/LandingScreen";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import SignupScreen from "./pages/SignupScreen/SignupScreen";
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
