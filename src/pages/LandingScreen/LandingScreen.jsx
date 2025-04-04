import React from "react";
import "./LandingScreen.css";
import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="landing_main_container">
      <div className="landing_container">
        <h2>Welcome to PopX</h2>

        <p>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit,
        </p>

        <button
          className="btn_Create_Account"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Create Account
        </button>

        <button
          className="btn_Register_Account"
          onClick={() => {
            navigate("/login");
          }}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
