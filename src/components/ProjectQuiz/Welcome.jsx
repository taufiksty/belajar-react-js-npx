import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
		<div className="welcome">
			<h1 className="title">Quizzical</h1>
			<p className="description">Some description if needed</p>
			<Link to="/quiz">
				<button className="btn-start">Start quiz</button>
			</Link>
		</div>
	);
}