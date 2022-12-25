import React, { Component } from 'react';
import './style--ProjectReactFacts.css';
import Header from './components/ProjectReactFacts/Navbar';
import MainContent from './components/ProjectReactFacts/MainContent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
      </div>
);
  }
}
export default App;