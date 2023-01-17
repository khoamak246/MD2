import React, { Component } from "react";
import AttorneyList from "./AttorneyList";

export class Attorneys extends Component {
  render() {
    return (
      <>
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center pb-2">
              <h6 className="text-uppercase">Our Attorneys</h6>
              <h1 className="mb-4">Meet Our Attorneys</h1>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="bg-primary rounded" style={{ height: 200 }} />
                <div
                  className="owl-carousel team-carousel position-relative"
                  style={{ marginTop: "-97px", padding: "0 30px" }}
                >
                  <AttorneyList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Attorneys;
