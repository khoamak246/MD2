import React, { Component } from "react";
import Dice from "./Dice";
import "./Rolldice.css";

export class RollDice extends Component {
  constructor(props) {
    super();
    this.state = {
      roll: ["one", "two", "three", "four", "five", "six"],
      dice1: "one",
      dice2: "two",
      rolling: "Roll dice!",
      checkroll: false,
    };
  }
  handOnClick = (e) => {
    e.target.disabled = false;
    let index1 = Math.floor(Math.random() * 6);
    let index2 = Math.floor(Math.random() * 6);
    this.setState({
      dice1: this.state.roll[index1],
      dice2: this.state.roll[index2],
      rolling: "Rolling...",
      checkroll: true,
    });
    setTimeout(() => {
      this.setState({ rolling: "Roll dice!", checkroll: false });
    }, 1000);
  };
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem" }}>
          <div key={Math.random()} className="shaking">
            <Dice props={this.state.dice1} />
          </div>
          <div key={Math.random()} className="shaking">
            <Dice props={this.state.dice2} />
          </div>
        </div>
        <button
          style={{
            marginTop: "50px",
            padding: "20px 40px 20px 40px",
            color: "white",
            background: "black",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={this.handOnClick}
          disabled={this.state.checkroll}
        >
          {this.state.rolling}
        </button>
      </div>
    );
  }
}

export default RollDice;
