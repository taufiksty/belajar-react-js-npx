import React, { useState } from "react";

export default function App() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		subscribe: false,
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
		try {
			if (formData.email === "") throw new Error("Email is empty");
			if (formData.password === "") throw new Error("Password is empty");
			if (formData.confirmPassword === "")
				throw new Error("Confirm password is empty");
			if (formData.password !== formData.confirmPassword)
				throw new Error("Password to not match");
		} catch (error) {
			console.log(error.message);
			return;
		}

		if (formData.subscribe)
			console.log("Thanks for signing up our newsletter!");
		console.log("Succesfully signed up!");

		let sendFormData = Object.assign({}, formData);
		delete sendFormData.confirmPassword;
		console.log(sendFormData);
  }
  
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					rowGap: "20px",
					width: "500px",
				}}>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={formData.password}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					value={formData.confirmPassword}
					onChange={handleChange}
				/>
				<div>
					<input
						type="checkbox"
						id="subscribe"
						name="subscribe"
						checked={formData.subscribe}
						onChange={handleChange}
					/>
					<label htmlFor="subscribe">I want to join the newsletter</label>
				</div>
				<button>Sign Up</button>
			</form>
		</div>
	);
}
