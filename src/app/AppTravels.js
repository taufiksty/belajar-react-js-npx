import React, { Component } from "react";
import Navbar from "../components/AppTravels/Navbar";
import Travel from "../components/AppTravels/Travel";
import "../style/AppTravels.css";
import travels from "../data/travels";

const travel = travels.map((item) => (
	<div>
		<Travel
			key={item.id}
			{...item}
		/>
		<hr className="horizontal-line"></hr>
	</div>
));

class App extends Component {
	render() {
		return (
			<div className="app">
				<Navbar />
				<section className="travel">
					<div className="travel--container">
						{travel}
					</div>
				</section>
			</div>
		);
	}
}

export default App;
