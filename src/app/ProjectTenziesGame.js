import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "../style/ProjectTenziesGame.css";
import Die from "../components/ProjectTenziesGame/Die";
// import Sidebar from "../components/ProjectTenziesGame/Sidebar";
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

	const getBestTimeLocalStorage = () => {
		const check = localStorage.getItem("bestTime");
		if (check) {
			return check;
		} else {
			return null;
		}
	};

	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(true);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes.toString().padStart(2, "0")}:${seconds
			.toString()
			.padStart(2, "0")}`;
	};

	const bestTime = getBestTimeLocalStorage()
		? formatTime(Number(getBestTimeLocalStorage()))
		: 0;

	useEffect(() => {
		let interval = null;
		if (isRunning) {
			interval = setInterval(() => {
				setTime((time) => time + 1);
			}, 1000);
		}

		return () => clearInterval(interval);
	}, [isRunning]);

	const newGame = () => {
		setRoll(0);
		setDice(allNewDice());
		setTenzies(false);
		setTime(0);
		setIsRunning(true);
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
			setIsRunning(false);
			if (bestTime === 0 || Number(getBestTimeLocalStorage()) > time) {
				localStorage.setItem("bestTime", time);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dice]);

	const diceElements = dice?.map((die) => (
		<Die
			key={die.id}
			value={die.value}
			isHeld={die.isHeld}
			holdDice={() => holdDice(die.id)}
		/>
	));

	// const [isOpen, setIsOpen] = useState(false);

	// const handleIsOpen = () => {
	// 	setIsOpen(!isOpen);
	// };

	return (
		<div>
			{/* <Sidebar
				isOpen={isOpen}
			/> */}
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
				{/* <button className={`button--bfr-open ${isOpen && 'behind'}`} onClick={handleIsOpen}>Best Scores</button> */}
				<h1>Tenzies</h1>
				<h4>
					Roll until all dice are the same. Click each die to freeze it at its
					current value between rolls.
				</h4>
				<div>
					{bestTime !== 0 ? <p>Best time : {bestTime}</p> : ""}
					<p>
						{isRunning
							? "Go! your time is running"
							: "Congratulations! you finished game at"}{" "}
						{formatTime(time)}
					</p>
				</div>
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
