import React, { useState } from "react";
import Count from "./Count";




/**
 * TestState--StateAsProps
 */

// export default function TestState() {
// 	const [count, setCount] = useState(0);

// 	const addCount = () => {
// 		setCount((prevCount) => prevCount + 1);
// 	};

// 	const subtractCount = () => {
// 		setCount((prevCount) => prevCount - 1);
// 	};

// 	return (
// 		<div>
// 			<button onClick={addCount}>+</button>
// 			<Count number={count} />
// 			<button onClick={subtractCount}>-</button>
// 		</div>
// 	);
// }


/**
 * TestState--withObject
 */

export default function TestState(props) {
	const [contact, setContact] = useState({
		firstName: "Jhon",
		lastName: "Doe",
		phone: "(+62) 123 456 7890",
		email: "jhondoe@mail.com",
		isFavorite: props.isFilled,
	});

	const setFavorite = () => {
		setContact((prevState) => ({
			...prevState,
			isFavorite: !prevState.isFavorite,
		}));
	};

	return (
		<main>
			<article>
				<button onClick={setFavorite}>Toggle Favorite</button>
				<p>{contact.isFavorite ? "Yes" : ""}</p>
				<h2>
					{contact.firstName} {contact.lastName}
				</h2>
				<p>{contact.phone}</p>
				<p>{contact.email}</p>
			</article>
		</main>
	);
}


/**
 * TestState--AddItem
 */

// export default function TestState() {
// 	const [presiden, setPresiden] = useState(["Presiden 1", "Presiden 2"]);

// 	const addPresiden = () => {
// 		setPresiden((prevState) => [
// 			...prevState,
// 			`Presiden ${prevState.length + 1}`,
// 		]);
//   };

//   const listPresiden = presiden.map((pres) => <h2>{pres}</h2>);

// 	return (
// 		<div>
//       <button onClick={addPresiden}>Add Presiden</button>
//       {listPresiden}
// 		</div>
// 	);
// }

 