import "./App.css";
import DisplaySimpson from "./components/DisplaySimpson";
import React from "react";
import axios from "axios";

const sampleSimpson = {
  quote:
    "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection: "Left",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: sampleSimpson,
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          simpson: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <DisplaySimpson simpson={this.state.simpson} />
        <button type="button" onClick={this.getSimpson}>
          Get simpson
        </button>
      </div>
    );
  }
}

export default App;
