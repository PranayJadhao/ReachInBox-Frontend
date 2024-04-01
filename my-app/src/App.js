import React, { useState } from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn && <LoginPage onLogin={handleLogin} />}
      {isLoggedIn && <HomePage />}
    </>
  );
};

export default App;
