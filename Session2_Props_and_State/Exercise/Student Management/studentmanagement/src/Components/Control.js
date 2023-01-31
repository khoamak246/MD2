import React, { Component } from "react";

export class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      searchVal: e.target.value,
    });
    if (e.target.value == "") {
      this.props.handleSearch("");
    }
  };
  handleSearch = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchVal);
  };
  handleSort = (e) => {
    this.props.handleSort(e.target.value);
  };
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary btn-icon-text"
              onClick={this.props.handleToggleForm}
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6">
            <form className="search-form" action="#">
              <i className="icon-search"></i>
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                onChange={this.handleChange}
              />
              <button
                className="btn btn-primary btn-icon-text"
                onClick={this.handleSearch}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control" onChange={this.handleSort}>
              <option value="">Sắp xếp</option>
              <option value="AZ">A - Z</option>
              <option value="ZA">Z - A</option>
              <option value="INC">Age Inc</option>
              <option value="DEC">Age Dec</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
