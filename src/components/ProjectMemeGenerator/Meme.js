import React, { useEffect } from "react";

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "https://i.imgflip.com/25w3.jpg",
	});

	const [allMemes, setAllMemes] = React.useState([]);

	const getMemeImage = () => {
		const random = Math.floor(Math.random() * (allMemes.length + 0.5));
		const imageURL = allMemes[random].url;
		setMeme((prevState) => ({
			...prevState,
			randomImage: imageURL,
		}));
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setMeme((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	useEffect(() => {
		// Fetch an API using async function
		const getMemes = async () => {
			const res = await fetch("https://api.imgflip.com/get_memes");
			const data = await res.json();
			setAllMemes(data.data.memes);
		};

		// Callback async function
		getMemes();
	}, []);

	return (
		<section className="meme">
			<div className="meme--container">
				<div className="meme--input">
					<input
						type="text"
						name="topText"
						className="input"
						placeholder="Top text"
						value={meme.topText}
						onChange={handleChange}></input>
					<input
						type="text"
						name="bottomText"
						className="input"
						placeholder="Bottom text"
						value={meme.bottomText}
						onChange={handleChange}></input>
				</div>
				<button
					className="meme--button"
					type="submit"
					onClick={getMemeImage}>
					Get a new meme image 🖼
				</button>
				<div className="meme--image-container">
					<img
						src={meme.randomImage}
						alt=""
						className="meme--image"></img>
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</div>
			</div>
		</section>
	);
}
