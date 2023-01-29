import React, { useEffect, useState } from "react";

export default function App() {
	const [starWarsData, setStarWarsData] = useState({});
	const [count, setCount] = useState(1);

	// 1. GET the data (fetch)
	// 2. Save the data to state

	useEffect(() => {
		console.log("Effect ran");
		fetch(`https://swapi.dev/api/people/${count}`)
			.then((res) => res.json())
			.then((data) => setStarWarsData(data));
	}, [count]);

	return (
		<div>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Get Next Character
			</button>
			<pre>{JSON.stringify(starWarsData, null, 2)}</pre>
		</div>
	);
}
