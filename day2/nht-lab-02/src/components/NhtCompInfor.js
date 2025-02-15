import React, { Component } from 'react'

export default class nhtCompInfor extends Component {
    constructor(props){
        super(props);
        this.state={
            Information: "Trình bày thông tin cá nhân",
        };
    }

  render() {
    return (
      <div>
        {this.state.Information}
        <p>Họ Và Tên: {this.props.nhtFullName}</p>
        <p>Mã Sinh Viên: {this.props.nhtKey}</p>
        <p>Ngày Sinh: {this.props.nhtDate}</p>
        <p>Điện Thoại: {this.props.nhtNumber}</p>
        <p>Tên Lớp: {this.props.nhtClass}</p>
      </div>
    )
  }
}
