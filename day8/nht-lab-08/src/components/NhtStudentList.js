import React, { Component } from 'react';
import NhtStudent from './NhtStudent';

export default class NhtStudentList extends Component {
  render() {
    let { renderNhtStudents, onNhtHandleView, onNhtHandleEdit, onNhtHandleDelete } = this.props;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderNhtStudents.map((student, index) => (
            <NhtStudent 
              key={student.nhtID} 
              nhtIndex={index + 1} 
              renderNhtStudent={student} 
              onNhtHandleView={onNhtHandleView} 
              onNhtHandleEdit={onNhtHandleEdit}
              onNhtHandleDelete={onNhtHandleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
