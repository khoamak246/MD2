import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        registerUsername: "",
        registerPassword: "",
        registerConfirmPassword: "",
        registerEmailAddress: "",
      },
    };
  }
  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      newUser: { ...this.state.newUser, [name]: value },
    });
  };
  handleClickSubmit = (e) => {
    e.preventDefault();
    const { handleSetUser, handleRegister } = this.props;
    const {
      registerUsername,
      registerPassword,
      registerConfirmPassword,
      registerEmailAddress,
    } = this.state.newUser;
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let getUser = Object.entries(this.state.newUser);
    for (const [, value] of getUser) {
      if (value.length == 0 || value == null || value.includes(" ")) {
        return alert("Error");
      } else if (
        registerPassword !== registerConfirmPassword ||
        !mailformat.test(registerEmailAddress) ||
        format.test(registerUsername) ||
        format.test(registerPassword) ||
        format.test(registerConfirmPassword)
      ) {
        return alert("Error");
      }
    }
    handleSetUser(this.state.newUser);
    handleRegister({
      registerUsername: registerUsername,
      registerPassword: registerPassword,
    });
    document.getElementById("myForm").reset();
    return alert("Register success");
  };
  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.handleOnSubmit} id="myForm">
          <label htmlFor="registerUsername">USERNAME:</label>
          <input
            type="text"
            name="registerUsername"
            id="registerUsername"
            onChange={this.handleOnChange}
          />
          <br />
          <label htmlFor="registerPassword">PASSWORD:</label>
          <input
            type="password"
            id="registerPassword"
            name="registerPassword"
            onChange={this.handleOnChange}
          />
          <br />
          <label htmlFor="registerConfirmPassword">CONFIRM PASSWORD:</label>
          <input
            type="password"
            id="registerConfirmPassword"
            name="registerConfirmPassword"
            onChange={this.handleOnChange}
          />
          <br />
          <label htmlFor="registerEmailAddress">EMAIL ADDRESS:</label>
          <input
            type="text"
            id="registerEmailAddress"
            name="registerEmailAddress"
            onChange={this.handleOnChange}
          />
          <br />
          <button type="submit" onClick={this.handleClickSubmit}>
            Register
          </button>
        </form>
      </div>
    );
  }
}
