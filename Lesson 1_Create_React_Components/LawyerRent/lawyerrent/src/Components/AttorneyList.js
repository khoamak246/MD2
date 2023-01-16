import React, { Component } from "react";

export class AttorneyList extends Component {
  render() {
    return (
      <>
        <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
          <h5 className="mb-2 px-4">Attorney Name</h5>
          <p className="mb-3 px-4">Practice Area</p>
          <div className="team-img position-relative">
            <img className="img-fluid" src="img/team-1.jpg" alt="" />
            <div className="team-social">
              <a className="btn btn-outline-light btn-square mx-1" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-outline-light btn-square mx-1" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-outline-light btn-square mx-1" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AttorneyList;
