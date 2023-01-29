import React, { useState } from "react";

export default function App() {
	const [message, setMessage] = useState([]);
	setMessage();

	return (
		<div>
			<h1>
				{message.length === 0
					? "You're all caught up!"
					: `You have ${message.length} unread message${
							message.length > 1 ? "s" : ""
					  }`}
			</h1>
		</div>
	);
}
