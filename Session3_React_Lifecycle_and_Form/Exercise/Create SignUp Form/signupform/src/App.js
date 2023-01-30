import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
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
    const { username, password, email } = this.state;
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let getUser = Object.entries(this.state);
    for (const [, value] of getUser) {
      if (value.length == 0 || value == null || value.includes(" ")) {
        return alert("Error");
      } else if (
        !mailformat.test(email) ||
        format.test(username) ||
        format.test(password) ||
        !email.includes("@gmail.com")
      ) {
        return alert("Error");
      }

      return alert("Registed");
    }
  };
  render() {
    return (
      <>
        {console.log(this.state)}
        <div className="signupSection">
          <div className="info">
            <h2>Welcome to Rikkei Academy</h2>
            <i className="icon ion-ios-ionic-outline" aria-hidden="true" />
            <p>The Future Is Here</p>
          </div>
          <form className="signupForm" name="signupform">
            <h2>Sign Up</h2>
            <ul className="noBullet">
              <li>
                <label htmlFor="username" />
                <input
                  type="text"
                  className="inputFields"
                  id="username"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleOnChange}
                />
              </li>
              <li>
                <label htmlFor="password" />
                <input
                  type="password"
                  className="inputFields"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleOnChange}
                />
              </li>
              <li>
                <label htmlFor="email" />
                <input
                  type="email"
                  className="inputFields"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleOnChange}
                />
              </li>
              <li id="center-btn">
                <input
                  type="submit"
                  id="join-btn"
                  name="join"
                  alt="Join"
                  onClick={this.handleOnSubmit}
                />
              </li>
            </ul>
          </form>
        </div>
      </>
    );
  }
}
