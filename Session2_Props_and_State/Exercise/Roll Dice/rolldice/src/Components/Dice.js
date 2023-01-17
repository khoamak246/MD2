import React, { Component } from "react";

export class Dice extends Component {
  render() {
    return (
      <div>
        <i
          class={`fas fa-dice-${this.props.props} fa-5x`}
          style={{ color: "#7b6cd3" }}
        ></i>
      </div>
    );
  }
}

export default Dice;
