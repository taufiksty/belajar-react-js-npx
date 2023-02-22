import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import he from "he";
import { nanoid } from "nanoid";

export default function Quiz(props) {
	const [dataQA, setDataQA] = useState([]);
	const [check, setCheck] = useState({ isCheck: false });

	const holdAnswer = (quizId, ansId) => {
		setDataQA((oldData) => {
			return oldData.map((quiz) =>
				quiz.id === quizId
					? {
							...quiz,
							answers: quiz.answers.map((answer) => {
								let falseIsHeld = { ...answer, isHeld: false };
								return answer.id === ansId
									? { ...falseIsHeld, isHeld: !answer.falseIsHeld }
									: falseIsHeld;
							}),
					  }
					: quiz
			);
		});
	};

	useEffect(() => {
		setDataQA(
			props.data.results.map((quiz) => {
				const answers = [...quiz.incorrect_answers, quiz.correct_answer];
				const shuffledAnswers = answers
					.sort(() => Math.random() - 0.5)
					.map((ans) => ({
						id: nanoid(),
						answer: ans,
						isHeld: false,
					}));

				return {
					id: nanoid(),
					question: quiz.question,
					answers: shuffledAnswers,
					correct_answer: quiz.correct_answer,
				};
			})
		);
		// eslint-disable-next-line
	}, [props.data.isLoading]);

	const handleCheck = () => {
		const answers = dataQA.map((quiz) => {
			for (let i = 0; i < quiz.answers.length; i++) {
				if (quiz.answers[i].isHeld === true) {
					return quiz.answers[i].answer;
				}
			}
			return null;
		});

		let countTrue = 0;
		for (let i = 0; i < answers.length; i++) {
			if (answers[i] === dataQA[i].correct_answer) {
				countTrue += 1;
			}
		}

		setCheck({ isCheck: true, totalTrue: countTrue });
	};

	return (
		<div className="quizs-component">
			<div className={`loading ${props.data.isLoading ? "" : "hidden"}`}>
				Loading...
			</div>
			<div className={`quizs ${props.data.isLoading ? "hidden" : ""}`}>
				{dataQA.map((quiz, i) => (
					<div
						key={i}
						className="quiz">
						<p
							dangerouslySetInnerHTML={{ __html: he.decode(quiz.question) }}
							className="question"
						/>
						{quiz.answers.map((a, i) => (
							<button
								key={i}
								className={`answer ${a.isHeld ? "hold-ans" : ""}`}
								onClick={() => holdAnswer(quiz.id, a.id)}
								dangerouslySetInnerHTML={{ __html: he.decode(a.answer) }}
							/>
						))}
						<hr />
					</div>
				))}
				{check.isCheck && (
					<p className="total-true">
						{check.totalTrue <= 5
							? `Unfortunately, you got ${check.totalTrue}/10`
							: check.totalTrue < 8
							? `Good, you got ${check.totalTrue}/10`
							: check.totalTrue < 10
							? `Great, you got ${check.totalTrue}/10`
							: `Perfect, you got 10/10`}
					</p>
				)}
				{check.isCheck ? (
					<Link to="/">
						<button
							className="btn-check">
							Back
						</button>
					</Link>
				) : (
					<button
						className="btn-check"
						onClick={handleCheck}>
						Check Answer
					</button>
				)}
			</div>
		</div>
	);
}
