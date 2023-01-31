import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      studentName: "",
      age: 1,
      sex: true,
      birthDate: "",
      birthPlace: "",
      address: "",
    };
  }
  componentWillMount = () => {
    const index = this.props.selectedStudentIndex;
    const indexShow = this.props.selectedShowStudentIndex;
    const editStudent = this.props.studentlist;
    if (this.props.isToggleUdate) {
      this.setState({
        studentId: editStudent[index].studentId,
        studentName: editStudent[index].studentName,
        age: editStudent[index].age,
        sex: editStudent[index].sex,
        birthDate: editStudent[index].birthDate,
        birthPlace: editStudent[index].birthPlace,
        address: editStudent[index].address,
      });
    } else if (this.props.isToggleShow) {
      this.setState({
        studentId: editStudent[indexShow].studentId,
        studentName: editStudent[indexShow].studentName,
        age: editStudent[indexShow].age,
        sex: editStudent[indexShow].sex,
        birthDate: editStudent[indexShow].birthDate,
        birthPlace: editStudent[indexShow].birthPlace,
        address: editStudent[indexShow].address,
      });
    }
  };
  componentWillReceiveProps = (nextProps) => {
    const index = nextProps.selectedStudentIndex;
    const indexShow = nextProps.selectedShowStudentIndex;
    const editStudent = nextProps.studentlist;
    if (nextProps.isToggleUdate) {
      this.setState({
        studentId: editStudent[index].studentId,
        studentName: editStudent[index].studentName,
        age: editStudent[index].age,
        sex: editStudent[index].sex,
        birthDate: editStudent[index].birthDate,
        birthPlace: editStudent[index].birthPlace,
        address: editStudent[index].address,
      });
    } else if (nextProps.isToggleShow) {
      this.setState({
        studentId: editStudent[indexShow].studentId,
        studentName: editStudent[indexShow].studentName,
        age: editStudent[indexShow].age,
        sex: editStudent[indexShow].sex,
        birthDate: editStudent[indexShow].birthDate,
        birthPlace: editStudent[indexShow].birthPlace,
        address: editStudent[indexShow].address,
      });
    }
  };
  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.props.isToggleUdate) {
      this.props.handleUpdateStudent(this.state);
      this.props.handleToggleForm();
    } else {
      for (const [, value] of Object.entries(this.state)) {
        if (value.length == 0) {
          return alert("Something Wrong");
        }
      }
      for (let i = 0; i < this.props.studentlist.length; i++) {
        if (this.state.studentId === this.props.studentlist[i].studentId) {
          return alert("Something Wrong");
        }
      }
      this.props.handleAddStudent(this.state);
      this.props.handleToggleForm();
    }
  };
  render() {
    return (
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MSV..."
                    name="studentId"
                    value={this.state.studentId}
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name..."
                    name="studentName"
                    value={this.state.studentName}
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="age..."
                    name="age"
                    value={this.state.age}
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    name="sex"
                    onChange={this.handleOnChange}
                    value={this.state.sex}
                  >
                    <option value={true}>Nam</option>
                    <option value={false}>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    type={"date"}
                    name="birthDate"
                    value={this.state.birthDate}
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    name="birthPlace"
                    value={this.state.birthPlace}
                    onChange={this.handleOnChange}
                  >
                    <option value={"HN"}>Hà Nội</option>
                    <option value={"HCM"}>TP. Hồ Chí Minh</option>
                    <option value={"DN"}>Đà Nẵng</option>
                    <option value={"QN"}>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea
                    className="form-control"
                    placeholder="address..."
                    name="address"
                    value={this.state.address}
                    onChange={this.handleOnChange}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={this.handleOnSubmit}
                disabled={this.props.isToggleShow}
              >
                {this.props.isToggleUdate ? "UDATE" : "ADD"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
