import React, { Component } from 'react';

export default class NhtForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nhtID: '',
      nhtStudentName: '',
      nhtAge: '',
      nhtGender: 'Nam',
      nhtBirthday: '',
      nhtBirthPlace: 'HN',
      nhtAddress: ''
    };
  }

  // Cập nhật form khi nhận dữ liệu từ props
  componentDidUpdate(prevProps) {
    if (prevProps.renderNhtStudent !== this.props.renderNhtStudent) {
      if (this.props.renderNhtStudent) {
        this.setState({ ...this.props.renderNhtStudent });
      } else {
        // Nếu đang ở chế độ "Thêm mới", reset form
        this.setState({
          nhtID: '',
          nhtStudentName: '',
          nhtAge: '',
          nhtGender: 'Nam',
          nhtBirthday: '',
          nhtBirthPlace: 'HN',
          nhtAddress: ''
        });
      }
    }
  }

  // Xử lý thay đổi dữ liệu input
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Gửi dữ liệu khi nhấn "Lưu"
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.isAddingNew) {
      this.props.onNhtHandleSaveNew({ ...this.state, nhtID: `SV${Date.now()}` }); // Tạo mã SV tự động
    } else {
      this.props.onNhtHandleUpdate(this.state);
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{this.props.isAddingNew ? "Thêm sinh viên mới" : "Chỉnh sửa thông tin"}</h3>
          <form onSubmit={this.handleSubmit}>
            {!this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="nhtID" value={this.state.nhtID} readOnly />
                </div>
              </div>
            )}
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="nhtStudentName" value={this.state.nhtStudentName} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" name="nhtAge" value={this.state.nhtAge} onChange={this.handleChange} required />
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
                <input type="date" className="form-control" name="nhtBirthday" value={this.state.nhtBirthday} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="nhtBirthPlace" value={this.state.nhtBirthPlace} onChange={this.handleChange}>
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
                <textarea className="form-control" name="nhtAddress" value={this.state.nhtAddress} onChange={this.handleChange} required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">{this.props.isAddingNew ? "Thêm" : "Lưu"}</button>
          </form>
        </div>
      </div>
    );
  }
}
