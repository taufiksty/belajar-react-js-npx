import React from "react";
import logo from "../images/logo.svg";

export default function MainContent() {
  return (
    <main className="main">
      <img src={logo} className="bg-logo" alt="" />
      <h1>Fun Facts About React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
