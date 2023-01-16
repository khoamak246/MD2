import React, { Component } from "react";

export class ServicesList extends Component {
  render() {
    return (
      <>
        <div className="col-lg-4 mb-3">
          <div className="product-item mb-2">
            <div className="product-img">
              <img className="img-fluid" src="img/product-1.jpg" alt="" />
              <a
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                <i className="fa fa-2x fa-plus text-white" />
              </a>
            </div>
            <div className="bg-secondary text-center p-4">
              <h3 className="m-0">Solar System</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ServicesList;
