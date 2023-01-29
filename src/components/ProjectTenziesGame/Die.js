import React from "react";

export default function Die(props) {
	return (
		<div className={`die--box ${props.isHeld === true ? "is-held" : ""}`} onClick={props.holdDice}>
			{props.value}
		</div>
	);
}
