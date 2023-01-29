import React, { Component } from "react";
import TestState from "../components/TestState";

/** Define State using OOP
 *  credit. FreeCodeCamp
 *  @readonly
 */

// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			presiden: ["Presiden 1", "Presiden 2"],
// 		};
// 		this.addPresiden = this.addPresiden.bind(this);
// 	}

// 	addPresiden() {
// 		this.setState((prevState) => ({
// 			presiden: [
// 				...prevState.presiden,
// 				`Presiden ${prevState.presiden.length + 1}`,
// 			],
// 		}));
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.addPresiden}>Add Presiden</button>
//         {this.state.presiden.map((pres) => <h2>{pres}</h2>)}
// 			</div>
// 		);
// 	}
// }

class App extends Component {
	render() {
		return <TestState />;
	}
}

export default App;
