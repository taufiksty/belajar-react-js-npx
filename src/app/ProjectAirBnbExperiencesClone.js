import React, { Component } from "react";
import Navbar from "../components/ProjectAirBnbExperiencesClone/Navbar";
import Hero from "../components/ProjectAirBnbExperiencesClone/Hero";
import Card from "../components/ProjectAirBnbExperiencesClone/Card";
import '../style/ProjectAirBnbExperiencesClone.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Hero />
        <Card />
      </div>
    );
  }
}

export default App;