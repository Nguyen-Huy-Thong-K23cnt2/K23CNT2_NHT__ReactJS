import React, { Component } from 'react';

export default class NhtForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nhtID: '',
      nhtStudentName: '',
      nhtAge: '',
      nhtGender: '',
      nhtBirthday: '',
      nhtBrithPlace: '',
      nhtAddress: ''
    };
  }

  // Cập nhật state khi props thay đổi
  componentDidUpdate(prevProps) {
    if (prevProps.renderNhtStudent !== this.props.renderNhtStudent && this.props.renderNhtStudent) {
      this.setState({ ...this.props.renderNhtStudent });
    }
  }

  // Xử lý thay đổi dữ liệu input
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Gửi dữ liệu cập nhật khi nhấn "Lưu"
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNhtHandleUpdate(this.state);
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="nhtID" value={this.state.nhtID} readOnly />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="nhtStudentName" value={this.state.nhtStudentName} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="nhtAge" value={this.state.nhtAge} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" name="nhtGender" value={this.state.nhtGender} onChange={this.handleChange}>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control" name="nhtBirthday" value={this.state.nhtBirthday} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="nhtBrithPlace" value={this.state.nhtBrithPlace} onChange={this.handleChange}>
                  <option value="HN">Hà Nội</option>
                  <option value="TpHCM">TP. Hồ Chí Minh</option>
                  <option value="ĐN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                  <option value="HD">Hải Dương</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" name="nhtAddress" value={this.state.nhtAddress} onChange={this.handleChange} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">Lưu</button>
          </form>
        </div>
      </div>
    );
  }
}
