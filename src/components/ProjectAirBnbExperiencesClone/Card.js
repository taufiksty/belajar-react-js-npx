import React from "react";
import CardPhoto from "../../images/card-photo.png";
import Star from "../../images/star.svg";

export default function Card(props) {
  return (
    <section className="card">
      <div className="card--container">
        <div className="card--item">
          <img src={CardPhoto} alt="katie-zaferes" className="card--photo"></img>
          <div className="card--status">
            SOLD OUT
          </div>
          <div className="card--star">
            <img src={Star} alt=""></img>
            <p>5.0 <span className="star--number">(6) | USA</span></p>
          </div>
          <p className="card--detail">Life lessons with Katie Zaferes</p>
          <p className="card--detail"><span className="bold">From $136</span> / person</p>
        </div>
      </div>
    </section>
  );
}