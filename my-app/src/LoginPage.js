import React from "react";
import styles from "./App.css"
const LoginPage = ({ onLogin }) => {
  return (
    <div>
      <h2 className="login-nav">REAVHINBOX</h2>
      <div className="login-div">
        <h2 className="login-hed">Create a new account</h2>
        <div>
          <div className="login-google" onClick={onLogin}>
            Signup with Google
          </div>
        </div>
        <button className="login-acc">Create an Account</button>
        <p>
          Already have an account? <span className="login-sign">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
