import React from "react";

export default function Joke(props) {
  console.log(props);
  return (
    <div className="joke">
      {props.setup && <h2>Setup: {props.setup}</h2>}
      <p>Punchline: {props.punchline}</p>
      <hr></hr>
      <br></br>
    </div>
  );
}