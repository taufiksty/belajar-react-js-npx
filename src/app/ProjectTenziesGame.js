import React, { useState } from "react";
import "../style/ProjectTenziesGame.css";
import Die from "../components/ProjectTenziesGame/Die";

export default function App() {
	const allNewDice = () => {
		let randomValue = [];
		for (let i = 0; i < 10; i++) {
			randomValue.push(Math.floor(Math.random() * 6) + 1);
		}
		return randomValue;
	};

	const [dice, setDice] = useState(allNewDice());

	const diceElements = dice.map((die) => <Die value={die} />);

	return (
		<div>
			<main>
				<h1>Tenzies</h1>
				<h4>
					Roll until all dice are the same. Click each die to freeze it at its
					current value between rolls.
				</h4>
				<div className="die--box-center">
					<div className="die--container">{diceElements}</div>
				</div>
				<button className="button--roll">Roll</button>
			</main>
		</div>
	);
}
