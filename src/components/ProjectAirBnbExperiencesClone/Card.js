import React from "react";
import Star from "../../images/star.svg";

export default function Card(props) {
	console.log(props.openSpot);
	let badgeText;
	if (props.openSpot === 0) {
		badgeText = "SOLD OUT";
	} else if (props.location === "ONLINE") {
		badgeText = "ONLINE";
	}

	return (
		<div className="card--item">
			<img
				src={require(`../../images/${props.img}`)}
				alt={props.img.replace(".png", "")}
				className="card--photo"></img>
			{badgeText && <div className="card--status">{badgeText}</div>}
			<div className="card--star">
				<img
					src={Star}
					alt=""></img>
				<p>
					{props.rating.toFixed(1)}{" "}
					<span className="star--number">
						({props.reviewCount}) | {props.country}
					</span>
				</p>
			</div>
			<p className="card--detail">{props.title}</p>
			<p className="card--detail">
				<span className="bold">From ${props.price}</span> / person
			</p>
		</div>
	);
}
