import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { loginVal } = this.props;
    loginVal.forEach((val) => {
      if (
        val.registerUsername == username &&
        val.registerPassword == password
      ) {
        return alert("Login sucess");
      }
      return alert("Error");
    });
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="username">USERNAME:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.handleOnChange}
          />
          <br />
          <label htmlFor="password">PASSWORD:</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={this.handleOnChange}
          />
          <br />
          <input type="checkbox" />
          Remember Me <br />
          <a href="#">Forgot Password</a>
          <br />
          <button type="submit" onClick={this.handleOnSubmit}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
