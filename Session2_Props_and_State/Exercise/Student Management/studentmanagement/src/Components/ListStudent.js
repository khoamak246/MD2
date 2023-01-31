import React, { Component } from "react";
import Student from "./Student";
export class ListStudent extends Component {
  constructor(props) {
    super(props);
  }
  handleOnEditSelected = (index) => {
    this.props.handleOnEdit(index);
  };
  handleSetToggleUpdate = (val) => {
    this.props.handleToggleUdapte(val);
  };
  handleSetIndexShowStudent = (val) => {
    this.props.handleGetIndexShowStudent(val);
  };
  handleSetToggleShow = (open, close) => {
    this.props.handleToggleShow(open, close);
  };
  handleSetSelectedStudentDeleteIndex = (val) => {
    this.props.selectedStudentDeleteIndex(val);
  };
  render() {
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <Student
                students={this.props.studentlist}
                handleOnEditSelected={this.handleOnEditSelected}
                handleToggleUdapte={this.handleSetToggleUpdate}
                handleSetIndexShowStudent={this.handleSetIndexShowStudent}
                handleSetToggleShow={this.handleSetToggleShow}
                handleSetSelectedStudentDeleteIndex={
                  this.handleSetSelectedStudentDeleteIndex
                }
              />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListStudent;
