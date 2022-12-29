import React from "react";
import Foto from "../../images/ronaldo.jpg";

export default function Info() {
  return (
    <div className="info">
      <img src={Foto} alt="ronaldo" className="info--img"/>
      <h2 className="info--name">Cristiano Ronaldo</h2>
      <p className="info--title">Forward</p>
      <p className="info--detail">ronaldo.website</p>
      <div>
        <button>Email</button>
        <button>Linkedin</button>
      </div>
    </div>
  );
}