import React, { Component } from "react";
import ServicesList from "./ServicesList";

export class Services extends Component {
  render() {
    return (
      <>
        <div className="container-fluid py-5" id="service">
          <div className="container py-5">
            <div className="section-title position-relative text-center">
              <h6
                className="text-uppercase text-primary mb-3"
                style={{ letterSpacing: 3 }}
              >
                Services
              </h6>
              <h1 className="font-secondary display-4">What We Cover</h1>
            </div>
            <div className="row">
              <ServicesList />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
