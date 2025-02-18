import React, { Component } from 'react';

class NhtClassComp extends Component {
  constructor(props) {
    super(props);
    // Khởi tạo state
    this.state = {
      fullName: 'Nguyễn Huy Thông',
      age: 20,
      phone: '0967599296',
    };
  }

  // Hàm xử lý sự kiện
  changeInfo = () => {
    // Cập nhật state
    this.setState({
      fullName: 'Huy Thông',
    });
  };

  render() {
    let users = this.props.renderUsers;
    console.log('Users:', users);

    return (
      <div className='alert alert-success'>
        <h2>Trình bày dữ liệu từ state</h2>
        <p>Full Name: {this.state.fullName}</p>
        <p>Age: {this.state.age}</p>
        <p>Phone: {this.state.phone}</p>
        <hr />
        <button className='btn btn-primary' onClick={this.changeInfo}>
          Change Info
        </button>
        <hr />
        <h3>Lấy dữ liệu từ props</h3>
        <p>Name: {this.props.renderName}</p>

        {/* Kiểm tra users trước khi truy xuất thuộc tính */}
        <p>FullName: {users && users.fullName ? users.fullName : 'No Data'}</p>
        <p>Age: {users && users.age ? users.age : 'No Data'}</p>
        <p>Phone: {users && users.phone ? users.phone : 'No Data'}</p>
      </div>
    );
  }
}

export default NhtClassComp;
