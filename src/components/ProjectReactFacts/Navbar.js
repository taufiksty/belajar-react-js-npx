import React from "react";
import logo from "../../images/logo.svg";

export default function Navbar(props) {
	const handleClick = () => {
		props.toggleModeDark();
	};

	return (
		<header>
			<nav
				className="nav"
				style={
					props.onModeDark
						? { backgroundColor: "#21222A" }
						: {
								backgroundColor: "white",
								boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
								borderBottom: ".5px solid black",
						  }
				}>
				<div className="logo">
					<img
						className="image"
						src={logo}
						alt="react-logo"
					/>
					<h1>ReactFacts</h1>
				</div>
				<div className="toggle-mode">
					<p
						style={
							props.onModeDark
								? { color: "#918E9B" }
								: { color: "rgb(27, 27, 27)" }
						}>
						Light
					</p>
					<div
						className="box-mode"
						onClick={handleClick}
						style={
							props.onModeDark
								? { backgroundColor: "#F5F5F5", justifyContent: "end" }
								: {
										backgroundColor: "rgb(27, 27, 27)",
										justifyContent: "start",
								  }
						}>
						<div
							className="round-mode"
							style={
								props.onModeDark
									? { backgroundColor: "rgb(27, 27, 27" }
									: { backgroundColor: "white" }
							}></div>
					</div>
					<p
						style={
							props.onModeDark ? { color: "white" } : { color: "#D5D4D8" }
						}>
						Dark
					</p>
				</div>
			</nav>
		</header>
	);
}
