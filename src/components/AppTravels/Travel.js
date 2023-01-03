import React from "react";
import pinLocation from "../../images/pin-location.svg";

export default function Travel(props) {
  // Date string to format en-US
  let dateStartString = props.startDate;
  let dateEndString = props.endDate;

  let dateStart = new Date(dateStartString);
  let dateEnd = new Date(dateEndString);

  let formattedDateStart = dateStart.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
  });
  let formattedDateEnd = dateEnd.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
  
  return (
		<div className="travel--item">
			<img
				src={props.imageURL}
				alt={props.title}
				className="travel--img"></img>
			<div className="travel--detail">
				<div className="travel--location">
					<img
						src={pinLocation}
						alt=""
						className="pin-location"></img>
					<p className="travel--country">{props.location}</p>
					<p>
						<a
							href={props.gmapLink}
							className="link-gmaps">
							View on Google Maps
						</a>
					</p>
				</div>
				<p className="travel--title">{props.title}</p>
        <p className="travel--date">{`${formattedDateStart} - ${formattedDateEnd}`}</p>
				<p className="travel--description">{props.description}</p>
			</div>
		</div>
	);
}
