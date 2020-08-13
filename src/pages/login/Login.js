import React from "react";

import { Link, Route } from "react-router-dom";
import "./Login.css";
import LoginContent from "./LoginContent";
import Join from "./../join/Join";

const Login = () => {
  return (
    <div className="login-container">
      <LoginContent />
    </div>
  );
};

export default Login;
