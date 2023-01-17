import Control from "./Components/Control";
import ListStudent from "./Components/ListStudent";
import Form from "./Components/Form";
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super();
    this.state = {
      studentlist: [
        {
          studentId: "SV001",
          studentName: "Nguyễn Văn A",
          age: 20,
          sex: true,
          birthDate: "2003-04-15",
          birthPlace: "HN",
          address: "Số 1 Phạm Hùng",
        },
        {
          studentId: "SV002",
          studentName: "Nguyễn Thị B",
          age: 22,
          sex: false,
          birthDate: "2001-09-09",
          birthPlace: "ĐN",
          address: "Số 1 Trần Duy Hưng",
        },
        {
          studentId: "SV003",
          studentName: "Nguyễn Văn C",
          age: 18,
          sex: true,
          birthDate: "2005-11-22",
          birthPlace: "HCM",
          address: "22 Lý Tự Trọng",
        },
      ],
      searchVal: "",
      sort: "",
    };
  }

  handleSearch = (searchData) => {
    this.setState({
      searchVal: searchData,
    });
  };
  handleSort = (val) => {
    this.setState({
      sort: val,
    });
  };
  render() {
    let studentArr = [];
    if (this.state.searchVal == "") {
      studentArr = this.state.studentlist;
    } else {
      studentArr = this.state.studentlist.filter((val) => {
        return val.studentName
          .trim()
          .toLowerCase()
          .includes(this.state.searchVal.trim().toLowerCase());
      });
    }
    switch (this.state.sort) {
      case "":
        studentArr = this.state.studentlist;
        break;
      case "AZ":
        studentArr.sort((a, b) =>
          a.studentName.split(" ")[a.studentName.split(" ").length - 1] >
          b.studentName.split(" ")[b.studentName.split(" ").length - 1]
            ? 1
            : a.studentName.split(" ")[a.studentName.split(" ").length - 1] <
              b.studentName.split(" ")[b.studentName.split(" ").length - 1]
            ? -1
            : 0
        );
        break;
      case "ZA":
        studentArr.sort((a, b) =>
          a.studentName.split(" ")[a.studentName.split(" ").length - 1] >
          b.studentName.split(" ")[b.studentName.split(" ").length - 1]
            ? -1
            : a.studentName.split(" ")[a.studentName.split(" ").length - 1] <
              b.studentName.split(" ")[b.studentName.split(" ").length - 1]
            ? 1
            : 0
        );
        break;
      case "INC":
        studentArr.sort((a, b) => (a.age > b.age ? 1 : a.age < b.age ? -1 : 0));
        break;
      case "DEC":
        studentArr.sort((a, b) => (a.age > b.age ? -1 : a.age < b.age ? 1 : 0));
        break;
      default:
        throw new Error("Invalid Error");
    }
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* <!-- START CONTROL --> */}
            <Control
              handleSearch={this.handleSearch}
              handleSort={this.handleSort}
            />
            {/* <!-- END CONTROL --> */}
            {/* <!-- START LIST STUDENT --> */}
            <ListStudent studentlist={studentArr} />
            {/* <!-- END LIST STUDENT --> */}
          </div>
        </div>
        {/* <!-- START FORM SINH VIEN --> */}
        <Form />
        {/* <!-- END FORM SINH VIÊN --> */}
      </div>
    );
  }
}

export default App;
