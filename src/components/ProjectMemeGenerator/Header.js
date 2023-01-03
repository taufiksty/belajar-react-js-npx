import React from "react";
import trollface from "../../images/troll-face.png";

export default function Header() {
	return (
		<header className="nav">
			<div className="nav--left">
				<img
					src={trollface}
					alt=""
          className="nav--logo"></img>
        <p>Meme Generator</p>
      </div>
      <p className="nav--right">React Course - Project 3</p>
		</header>
	);
}
