import React, { Component } from "react";
import cards from "../data/cards";
import Navbar from "../components/ProjectAirBnbExperiencesClone/Navbar";
import Hero from "../components/ProjectAirBnbExperiencesClone/Hero";
import Card from "../components/ProjectAirBnbExperiencesClone/Card";
import "../style/ProjectAirBnbExperiencesClone.css";

const card = cards.map((item) => (
	<Card
		key={item.id}
		{...item}
	/>
));

class App extends Component {
	render() {
		return (
			<div className="app">
				<Navbar />
				<Hero />
				<section className="card">
					<div className="card--container">
						{card}
					</div>
				</section>
			</div>
		);
	}
}

export default App;
