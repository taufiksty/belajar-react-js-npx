import React from "react";
import Logo from "../../images/world.svg";

export default function Navbar() {
	return (
		<nav className="navbar">
			<img
				src={Logo}
				alt=""
				className="logo"></img>
			<p className="navbar--title">my travel journal.</p>
		</nav>
	);
}
