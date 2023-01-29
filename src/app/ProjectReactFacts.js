import React, { Component } from "react";
import "../style/ProjectReactFacts.css";
import Navbar from "../components/ProjectReactFacts/Navbar";
import MainContent from "../components/ProjectReactFacts/MainContent";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modeDark: true,
		};
		this.handleToggleModeDark = this.handleToggleModeDark.bind(this);
	}

	handleToggleModeDark() {
		this.setState((prevState) => ({
			modeDark: !prevState.modeDark,
		}));
  }
  
	render() {
		return (
			<div className="App">
				<Navbar
					onModeDark={this.state.modeDark}
					toggleModeDark={this.handleToggleModeDark}
				/>
				<MainContent onModeDark={this.state.modeDark} />
			</div>
		);
	}
}
export default App;
