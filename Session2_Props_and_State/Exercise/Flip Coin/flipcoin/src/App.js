import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    {
      super();
      this.state = {
        flipCount: 0,
        flipHead: 0,
        flipTail: 0,
      };
    }
  }
  handleOnClick = () => {
    let flip = Math.random() * 1;
    this.setState({
      flipCount: this.state.flipCount + 1,
    });
    if (flip <= 0.5) {
      this.setState({
        flipHead: this.state.flipHead + 1,
      });
    } else if (flip > 0.5) {
      this.setState({
        flipTail: this.state.flipTail + 1,
      });
    }
    console.log(flip);
  };
  render() {
    return (
      <div className="App">
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
          Let's Flip a coin!
        </p>
        <button onClick={this.handleOnClick}>Click me!</button>
        <p>
          Out of {this.state.flipCount} flips, these have been{" "}
          {this.state.flipHead} heads and {this.state.flipTail} tails
        </p>
      </div>
    );
  }
}

export default App;
