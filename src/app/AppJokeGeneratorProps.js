import React, { Component } from "react";
import Joke from "../components/AppJokeGeneratorProps/Joke";
import jokes from "../data/jokes";

const components = jokes.map((joke) => (<Joke
  setup={joke.setup}
  punchline={joke.punchline}
/>));

class App extends Component {
	render() {
    return (
      <div className="app">
        {components}
      </div>      
		);
	}
}

export default App;
