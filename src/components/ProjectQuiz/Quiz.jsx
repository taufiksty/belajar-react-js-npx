import React, { useEffect, useState } from "react";
import he from "he";
import { nanoid } from "nanoid";

export default function Quiz(props) {
	const [dataQA, setDataQA] = useState(
		props.data.map((quiz) => {
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
		setTimeout(() => {
			// eslint-disable-next-line
			if (dataQA == 0) {
				alert(
					"Sorry, quiz failed to load. Please go back and start quiz again."
				);
			}
		}, 2000);
		// eslint-disable-next-line
	}, [])

	return (
		<div className="quizs">
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
			<button className="btn-check">Check Answer</button>
		</div>
	);
}
