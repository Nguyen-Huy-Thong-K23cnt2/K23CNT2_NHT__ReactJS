import React, { Component } from 'react';

export default class NhtStudent extends Component {
  render() {
    let { renderNhtStudent, nhtIndex, onNhtHandleView, onNhtHandleEdit, onNhtHandleDelete } = this.props;

    return (
      <tr>
        <td>{nhtIndex}</td>
        <td>{renderNhtStudent.nhtID}</td>
        <td>{renderNhtStudent.nhtStudentName}</td>
        <td>{renderNhtStudent.nhtAge}</td>
        <td>{renderNhtStudent.nhtGender}</td>
        <td>
          <button className="btn btn-info btn-sm me-2" onClick={() => onNhtHandleView(renderNhtStudent)}>Xem</button>
          <button className="btn btn-warning btn-sm me-2" onClick={() => onNhtHandleEdit(renderNhtStudent)}>Sửa</button>
          <button className="btn btn-danger btn-sm" onClick={() => onNhtHandleDelete(renderNhtStudent.nhtID)}>Xóa</button>
        </td>
      </tr>
    );
  }
}
