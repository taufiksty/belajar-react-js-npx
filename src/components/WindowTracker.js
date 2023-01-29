import React, { useEffect, useState } from "react";

export default function WindowTracker() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		// Function to set window width
		function watchWidth() {
			console.log("Setting up..");
			setWindowWidth(window.innerWidth);
		}

		// Event listener if the window resize
		window.addEventListener("resize", watchWidth);

		// Clean up function
		return function () {
			console.log("Cleaning up..");
			window.removeEventListener("resize", watchWidth);
		};
	}, []);

	return (
		<div className="window-tracker">
			<h1>Window width : {windowWidth}</h1>
		</div>
	);
}
