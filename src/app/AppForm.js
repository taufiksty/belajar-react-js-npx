import React, { useState } from "react";

export default function App() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		comments: "",
		isFriendly: false,
		employment: "Unemployed",
		favColor: "",
	});

	function handleChange(event) {
		const { name, type, value, checked } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: type === "checkbox" ? checked : value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();
		// submitToAPI(formData);
		console.log(formData);
	}

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					width: "500px",
					margin: "10px",
					rowGap: "10px",
				}}>
				<input
					type="text"
					name="firstName"
					placeholder="First Name"
					onChange={handleChange}
					value={formData.firstName}
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					onChange={handleChange}
					value={formData.lastName}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={handleChange}
					value={formData.email}
				/>
				<textarea
					name="comments"
					placeholder="Type your comments"
					onChange={handleChange}
					value={formData.comments}
				/>
				<div className="input--checkbox">
					<input
						type="checkbox"
						id="isFriendly"
						name="isFriendly"
						onChange={handleChange}
						checked={formData.isFriendly}
					/>
					<label htmlFor="isFriendly">Are you friendly</label>
				</div>
				<fieldset>
					<legend>Current employment status</legend>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div>
							<input
								type="radio"
								id="unemployed"
								name="employment"
								value="Unemployed"
								onChange={handleChange}
								checked={formData.employment === "Unemployed"}
							/>
							<label htmlFor="unemployed">Unemployed</label>
						</div>

						<div>
							<input
								type="radio"
								id="part-time"
								name="employment"
								value="Part-time"
								onChange={handleChange}
								checked={formData.employment === "Part-time"}
							/>
							<label htmlFor="part-time">Part-time</label>
						</div>

						<div>
							<input
								type="radio"
								id="full-time"
								name="employment"
								value="Full-time"
								onChange={handleChange}
								checked={formData.employment === "Full-time"}
							/>
							<label htmlFor="full-time">Full-time</label>
						</div>
					</div>
				</fieldset>
				<div>
					<label htmlFor="fav-color">What is your favorite color?</label>
					<br />
					<select
						id="fav-color"
						name="favColor"
						value={formData.favColor}
						onChange={handleChange}>
						<option value="">--Choose--</option>
						<option value="Red">Red</option>
						<option value="Orange">Orange</option>
						<option value="Yellow">Yellow</option>
						<option value="Green">Green</option>
						<option value="Blue">Blue</option>
						<option value="White">White</option>
						<option value="Violet">Violet</option>
					</select>
				</div>
				<button>Submit</button>
			</form>
			<h1>{formData.firstName}</h1>
			<h1>{formData.lastName}</h1>
			<h1>{formData.email}</h1>
			<h1>{formData.comments}</h1>
			<h1>{formData.isFriendly ? "true" : "false"}</h1>
			<h1>{formData.employment}</h1>
			<h1>{formData.favColor}</h1>
		</div>
	);
}
