import "./App.css";
import RollDice from "./Components/RollDice";

import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDice />
      </div>
    );
  }
}

export default App;
