import React, { Component } from "react";
import Header from "../components/ProjectMemeGenerator/Header";
import Meme from "../components/ProjectMemeGenerator/Meme";
import "../style/ProjectMemeGenerator.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Meme />
      </div>
    );
  }
}

export default App;