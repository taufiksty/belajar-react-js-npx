import React from "react";

export default function Die(props) {
	const dots = Array(props.value).fill("•").join(" ");
	return (
		<div
			className={`die--box ${props.isHeld === true ? "is-held" : ""}`}
			onClick={props.holdDice}>
			<div className={props.value === 4 ? "dot dot-four" : "dot"}>{dots}</div>
		</div>
	);
}
