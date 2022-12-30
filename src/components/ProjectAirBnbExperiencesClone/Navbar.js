import React from "react";
import logo from '../../images/airbnb.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar--logo" src={logo} alt="react-logo" />
    </nav>
  );
}