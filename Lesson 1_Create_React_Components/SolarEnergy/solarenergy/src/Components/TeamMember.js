import React, { Component } from "react";

export class TeamMember extends Component {
  render() {
    return (
      <>
        <div className="row justify-content-lg-start m-0 mb-4 pb-2 mb-sm-0 pb-sm-0">
          <div className="col-lg-6 p-0">
            <div className="row m-0">
              <div className="col-sm-6 p-0 text-center">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                  <h5 className="mb-2">Donald John</h5>
                  <p className="text-muted font-italic mb-2">
                    CEO &amp; Founder
                  </p>
                  <p>
                    Lorem elitr magna stet rebum dolores sed. Est stet labore
                    est lorem lorem
                  </p>
                  <div className="position-relative mb-2">
                    <a
                      className="btn btn-outline-primary btn-square mr-1"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square mr-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square mr-1"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-0" style={{ minHeight: 300 }}>
                <img
                  className="position-absolute w-100 h-100"
                  src="img/team-1.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TeamMember;
