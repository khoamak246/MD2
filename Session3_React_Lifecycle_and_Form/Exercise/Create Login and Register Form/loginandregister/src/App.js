import React, { Component } from "react";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      registerVal: [],
    };
  }
  handleSetUser = (val) => {
    this.setState({
      user: [...this.state.user, val],
    });
  };
  handleSetRegisterVal = (val) => {
    this.setState({
      registerVal: [...this.state.registerVal, val],
    });
  };
  render() {
    return (
      <>
        {console.log(this.state)}
        <div>
          <Login loginVal={this.state.registerVal} />
          <Register
            handleSetUser={this.handleSetUser}
            handleRegister={this.handleSetRegisterVal}
          />
        </div>
      </>
    );
  }
}
