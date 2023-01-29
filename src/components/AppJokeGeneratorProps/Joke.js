import React, { useState } from "react";

export default function Joke(props) {
	const [isShown, setIsShown] = useState(false);

	const handleShow = () => {
		setIsShown((prevState) => !prevState);
	};

	return (
		<div className="joke">
			{props.setup && <h2>{props.setup}</h2>}
			{isShown && <p>{props.punchline}</p>}
			<button onClick={handleShow}>
				{isShown ? "Hide" : "Show"} punchline
			</button>
			<hr></hr>
		</div>
	);
}
