import React, { Component } from "react";
import "../style/ProjectCardProfile.css";
import Info from "../components/ProjectCardProfile/Info";
import About from "../components/ProjectCardProfile/About";
import Interests from "../components/ProjectCardProfile/Interests";
import Footer from "../components/ProjectCardProfile/Footer";

class App extends Component {
  render() {
    return (
      <div className="card">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    );
  }
}

export default App;
