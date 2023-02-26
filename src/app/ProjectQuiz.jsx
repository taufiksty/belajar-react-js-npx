import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../style/ProjectQuiz.css";
import Welcome from "../components/ProjectQuiz/Welcome";
import Quiz from "../components/ProjectQuiz/Quiz";

export default function App() {
	const [data, setData] = useState({ isLoading: true, results: [] });

	useEffect(() => {
		const getQuiz = async () => {
			const res = await fetch(
				"https://opentdb.com/api.php?amount=10&category=9&difficulty=easy"
			);
			const data = await res.json();
			setData({ isLoading: false, results: data.results });
		};

		getQuiz();
	}, []);

	return (
		<main>
			<div className="background">
				<div className="blob-background">
					<div className="blob-top">
						<svg
							viewBox="0 0 200 200"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#F1C21B"
								d="M47.6,-61.1C60.5,-56.2,68.7,-40.6,73.1,-24.4C77.4,-8.2,77.9,8.6,73,23.7C68.1,38.8,57.9,52.2,44.8,64C31.8,75.8,15.9,86.1,0.6,85.3C-14.7,84.5,-29.5,72.7,-38.4,59.5C-47.3,46.4,-50.5,31.9,-58.2,16.9C-65.8,1.8,-78,-13.7,-76.1,-26.2C-74.1,-38.7,-57.9,-48.1,-42.9,-52.3C-27.9,-56.5,-13.9,-55.5,1.7,-57.9C17.4,-60.2,34.8,-66,47.6,-61.1Z"
								transform="translate(100 100)"
							/>
						</svg>
					</div>
					<div className="blob-bottom">
						<svg
							viewBox="0 0 200 200"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#BAE6FF"
								d="M38.9,-54.8C52.4,-43.6,66.9,-35,75.7,-21.4C84.5,-7.8,87.7,10.9,82.9,27.2C78,43.6,65,57.6,49.8,68.8C34.7,80.1,17.3,88.5,-0.6,89.3C-18.4,90.1,-36.9,83.1,-47.9,70.5C-58.8,57.9,-62.3,39.6,-68.5,21.9C-74.8,4.2,-83.9,-13,-82.1,-29.2C-80.4,-45.5,-67.8,-60.7,-52.3,-71.3C-36.8,-81.8,-18.4,-87.7,-2.9,-83.8C12.7,-79.8,25.3,-66,38.9,-54.8Z"
								transform="translate(100 100)"
							/>
						</svg>
					</div>
				</div>
			</div>

			<BrowserRouter>
				<Switch>
					<Route
						exact
						path="/"
						component={Welcome}
					/>
					<Route
						path="/quiz"
						// component={Quiz}
						render={(props) => (
							<Quiz
								{...props}
								data={data}
							/>
						)}
					/>
				</Switch>
			</BrowserRouter>
		</main>
	);
}
