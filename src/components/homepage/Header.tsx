import React from "react";
import { logo, icons } from "images";
import "./style/HomepageComponents.css";
import useAuth from "hooks/useAuth";

const Header = () => {
  const { auth, setAuth } = useAuth();

  return (
    <header className="header">
      <img src={logo.etecubeLogo} alt="etecube logo" className="etecube-logo" />
      <img src={logo.suppliers} alt="etecube logo" className="suppliers-logo" />
      <h1>ETE [Suppliers]</h1>
      <div className="avatar">
        <div className="photo-container">
          <img src={icons.user} alt="user" />
        </div>
        <div className="user-info">
          <h4>{auth?.username}</h4>
          <p>{auth?.email}</p>
          <p>{auth?.role}</p>
        </div>
        <div className="logout" onClick={() => setAuth(undefined)}>
          <img src={icons.powerOff} alt="logout button" />
        </div>
      </div>
    </header>
  );
};

export default Header;
