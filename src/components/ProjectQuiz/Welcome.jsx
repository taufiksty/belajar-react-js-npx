import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {

	return (
		<div className="welcome">
			<h1 className="title">Quizzical</h1>
			<p className="description">
				Here's a fun and challenging 10-question general knowledge quiz that
				covers various topics from history, science, sports, to arts and
				culture!
			</p>
			<Link to="/quiz">
				<button className="btn-start">Start quiz</button>
			</Link>
		</div>
	);
}
