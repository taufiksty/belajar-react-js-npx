import React from "react";
import Foto from "../../images/ronaldo.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img src={Foto} alt="ronaldo" className="info--img" />
      <h2 className="info--name">Cristiano Ronaldo</h2>
      <p className="info--title">Forward</p>
      <p className="info--detail">ronaldo.website</p>
      <div className="button">
        {/* <button className="button--email">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </button>
        <button className="button--linkedin">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          Linkedin
        </button> */}
      </div>
    </div>
  );
}