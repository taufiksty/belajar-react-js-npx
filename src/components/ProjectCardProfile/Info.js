import React from "react";
import Foto from "../../images/ronaldo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img src={Foto} alt="ronaldo" className="info--img" />
      <h2 className="info--name">Cristiano Ronaldo</h2>
      <p className="info--title"><i>Forward</i></p>
      <p className="info--detail">ronaldo.website</p>
      <div className="button">
        <button className="button--email">
          <FontAwesomeIcon icon={faEnvelope} className="button--logo" />
            Email
        </button>
        <button className="button--linkedin">
          <FontAwesomeIcon icon={faLinkedin} className="button--logo" />
            Linkedin
        </button>
      </div>
    </div>
  );
}