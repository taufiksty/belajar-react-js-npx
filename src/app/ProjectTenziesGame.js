import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "../style/ProjectTenziesGame.css";
import Die from "../components/ProjectTenziesGame/Die";
import { nanoid } from "nanoid";

export default function App() {
	const generateNewDie = () => ({
		id: nanoid(),
		value: Math.floor(Math.random() * 6) + 1,
		isHeld: false,
	});

	const allNewDice = () => {
		let randomValue = [];
		for (let i = 0; i < 10; i++) {
			randomValue.push(generateNewDie());
		}
		return randomValue;
	};

	const [dice, setDice] = useState(allNewDice());
	const [tenzies, setTenzies] = useState(false);
	const [roll, setRoll] = useState(0);

	const newGame = () => {
		setRoll(0);
		setDice(allNewDice());
		setTenzies(false);
	};

	const rollDice = () => {
		setRoll((oldState) => oldState + 1);
		setDice((oldDice) => {
			return oldDice.map((die) => (die.isHeld ? die : generateNewDie()));
		});
	};

	const holdDice = (id) => {
		setDice((oldDice) => {
			return oldDice.map((die) =>
				die.id === id ? { ...die, isHeld: !die.isHeld } : die
			);
		});
	};

	useEffect(() => {
		const allHeld = dice.every((die) => die.isHeld);
		const allValue = dice.every((die) => die.value === dice[0].value);

		if (allHeld && allValue) {
			setTenzies(true);
		}
	}, [dice]);

	const diceElements = dice?.map((die) => (
		<Die
			key={die.id}
			value={die.value}
			isHeld={die.isHeld}
			holdDice={() => holdDice(die.id)}
		/>
	));

	return (
		<div>
			<main>
				{tenzies && (
					<div>
						<Confetti
							width={window.innerWidth}
							height={window.innerHeight}
						/>
						<h2>You won!</h2>
					</div>
				)}
				<h1>Tenzies</h1>
				<h4>
					Roll until all dice are the same. Click each die to freeze it at its
					current value between rolls.
				</h4>
				<div className="die--box-center">
					<div className="die--container">{diceElements}</div>
				</div>
				<div className="total--roll-dice">Total roll dice : {roll}</div>
				<button
					className="button--roll"
					onClick={tenzies ? newGame : rollDice}>
					{tenzies ? "New Game" : "Roll"}
				</button>
			</main>
		</div>
	);
}
