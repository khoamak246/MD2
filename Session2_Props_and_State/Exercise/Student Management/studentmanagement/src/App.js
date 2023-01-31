import Control from "./Components/Control";
import ListStudent from "./Components/ListStudent";
import Form from "./Components/Form";
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
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
          birthPlace: "DN",
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
      isToggleForm: false,
      isToggleUdate: false,
      isToggleShow: false,
      selectedStudentIndex: 0,
      showStudent: 0,
    };
  }
  handleAddStudent = (newStd) => {
    this.setState({
      studentlist: [...this.state.studentlist, newStd],
    });
  };
  handleUpdateStudent = (val) => {
    let index = this.state.selectedStudentIndex;
    let newArr = [];
    for (let i = 0; i < this.state.studentlist.length; i++) {
      if (i !== index) {
        newArr.push(this.state.studentlist[i]);
      } else {
        newArr.push(val);
      }
    }
    this.setState({
      studentlist: newArr,
    });
  };
  handleOnEdit = (index) => {
    this.setState({
      selectedStudentIndex: index,
    });
  };
  handleToggleForm = () => {
    this.setState({
      isToggleForm: !this.state.isToggleForm,
      isToggleUdate: false,
    });
  };
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
  handleToggleUdapte = (val) => {
    this.setState({
      isToggleForm: val,
      isToggleUdate: val,
      isToggleShow: false,
    });
  };
  handleGetIndexShowStudent = (index) => {
    this.setState({
      showStudent: index,
    });
  };
  handleToggleShow = (open, close) => {
    this.setState({
      isToggleForm: open,
      isToggleUdate: close,
      isToggleShow: open,
    });
  };
  handleDeleteStudent = (val) => {
    let newArr = [];
    this.state.studentlist.forEach((element) => {
      newArr.push(element);
    });
    newArr.splice(val, 1);
    this.setState({
      studentlist: newArr,
      isToggleForm: false,
      isToggleUdate: false,
      isToggleShow: false,
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
        this.state.searchVal = "";
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
              handleToggleForm={this.handleToggleForm}
            />
            {/* <!-- END CONTROL --> */}
            {/* <!-- START LIST STUDENT --> */}
            <ListStudent
              studentlist={studentArr}
              handleOnEdit={this.handleOnEdit}
              handleToggleUdapte={this.handleToggleUdapte}
              handleGetIndexShowStudent={this.handleGetIndexShowStudent}
              handleToggleShow={this.handleToggleShow}
              selectedStudentDeleteIndex={this.handleDeleteStudent}
            />
            {/* <!-- END LIST STUDENT --> */}
          </div>
        </div>
        {/* <!-- START FORM SINH VIEN --> */}
        {this.state.isToggleForm ? (
          <Form
            handleToggleForm={this.handleToggleForm}
            handleAddStudent={this.handleAddStudent}
            studentlist={this.state.studentlist}
            isToggleUdate={this.state.isToggleUdate}
            selectedStudentIndex={this.state.selectedStudentIndex}
            handleUpdateStudent={this.handleUpdateStudent}
            isToggleShow={this.state.isToggleShow}
            selectedShowStudentIndex={this.state.showStudent}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
