import React from "react";
import { logo } from "images";
import "./style/AnimatedLogo.css";

const AnimatedLogo = () => {
  return (
    <div className="animated-logo">
      <img src={logo.halfLogo} className="App-logo1" alt="logo" />
      <img src={logo.halfLogo} className="App-logo2" alt="logo" />
    </div>
  );
};

export default AnimatedLogo;
