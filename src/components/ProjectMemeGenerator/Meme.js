import React from "react";

export default function Meme() {
	return (
		<section className="meme">
			<div className="meme--container">
				<form action="">
					<div className="meme--input">
						<input
							type="text"
							className="input"
							placeholder="Top text"></input>
						<input
							type="text"
							className="input"
							placeholder="Bottom text"></input>
					</div>
					<button
						className="meme--button"
						type="submit">
						Get a new meme image 🖼
					</button>
				</form>
			</div>
		</section>
	);
}
