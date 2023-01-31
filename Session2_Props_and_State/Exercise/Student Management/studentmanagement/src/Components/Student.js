import React, { Component } from "react";

export class Student extends Component {
  constructor(props) {
    super(props);
  }
  handleOnClickEdit = (index) => {
    this.props.handleOnEditSelected(index);
    this.props.handleToggleUdapte(true);
  };
  handleOnClickShow = (index) => {
    this.props.handleSetIndexShowStudent(index);
    this.props.handleSetToggleShow(true, false);
  };
  render() {
    const { students } = this.props;
    return (
      <>
        {students.map((student, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.studentId}</td>
              <td>{student.studentName}</td>
              <td>{student.age}</td>
              <td>{student.sex ? "Nam" : "Nữ"}</td>
              <td>
                <div className="template-demo">
                  <button
                    type="button"
                    className="btn btn-danger btn-icon-text"
                    onClick={() => {
                      this.handleOnClickShow(index);
                    }}
                  >
                    Xem
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning btn-icon-text"
                    onClick={() => {
                      this.handleOnClickEdit(index);
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    type="button"
                    className="btn btn-success btn-icon-text"
                    onClick={() => {
                      this.props.handleSetSelectedStudentDeleteIndex(index);
                    }}
                  >
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </>
    );
  }
}

export default Student;
