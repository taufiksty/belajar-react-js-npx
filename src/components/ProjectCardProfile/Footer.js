import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <div className="footer">
      <div className="footer--logo">
        <FontAwesomeIcon icon={faTwitterSquare} size="2xl" className="footer--icon" />
        <FontAwesomeIcon icon={faFacebookSquare} size="2xl" className="footer--icon" />
        <FontAwesomeIcon icon={faInstagramSquare} size="2xl" className="footer--icon" />
        <FontAwesomeIcon icon={faGithubSquare} size="2xl" className="footer--icon" />
      </div>
    </div>
  );
}