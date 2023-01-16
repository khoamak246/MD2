import React, { Component } from "react";

export class SignUp extends Component {
  render() {
    return (
      <>
        <div className="w-100">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0"
              style={{ padding: 25 }}
              placeholder="Your Email"
            />
            <div className="input-group-append">
              <button className="btn btn-primary px-4">Sign Up</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
