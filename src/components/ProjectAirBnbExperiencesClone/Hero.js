import React from "react";
import heroImg from '../../images/hero.png';

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} alt="hero" className="hero--image"></img>
      <p className="hero--title">Online Experiences</p>
      <p className="hero--title-detail">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </section>
  );
}