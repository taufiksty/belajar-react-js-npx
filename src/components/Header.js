import React from "react";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img className="image" src={logo} alt="react-logo" />
          <h1>ReactFacts</h1>
        </div>
        <h4 className="project-name">React Course - Project 1</h4>
      </nav>
    </header>
  );
}
