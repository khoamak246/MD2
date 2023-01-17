import React, { Component } from "react";
import TeamMember from "./TeamMember";

export class Teams extends Component {
  render() {
    return (
      <>
        <div className="container-fluid py-5" id="team">
          <div className="container py-5">
            <div className="section-title position-relative text-center">
              <h6
                className="text-uppercase text-primary mb-3"
                style={{ letterSpacing: 3 }}
              >
                Team
              </h6>
              <h1 className="font-secondary display-4">Meet The Team</h1>
            </div>
            <TeamMember />
          </div>
        </div>
      </>
    );
  }
}

export default Teams;
