import React, { useState } from "react";
import WindowTracker from "../components/WindowTracker";

export default function App() {
	const [show, setShow] = useState(true);

	function toggleShow() {
		setShow((prevState) => !prevState);
	}

	return (
		<div>
			<button onClick={toggleShow}>Toggle WindowTracker</button>
			{show && <WindowTracker />}
		</div>
	);
}
