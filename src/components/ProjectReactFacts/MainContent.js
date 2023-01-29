import React from "react";
import logo from "../../images/logo.svg";

export default function MainContent(props) {
	return (
		<main
			className="main"
			style={
				props.onModeDark
					? { backgroundColor: "#282D35", color: "white" }
					: { backgroundColor: "white", color: "#2B283A" }
			}>
			<img
				src={logo}
				className="bg-logo"
				alt=""
				style={
					props.onModeDark
						? { color: "#33373E" }
						: { color: "rgba(162, 237, 250, 0.1)" }
				}
			/>
			<h1>Fun Facts About React</h1>
			<ul>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprise apps, including mobile apps</li>
			</ul>
		</main>
	);
}
