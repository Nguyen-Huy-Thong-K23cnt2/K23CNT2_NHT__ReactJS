import React from 'react';

const NhtStudentDetail = ({ student, onClose }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Thông tin chi tiết</h3>
        <p><strong>Mã sinh viên:</strong> {student.nhtID}</p>
        <p><strong>Họ tên:</strong> {student.nhtStudentName}</p>
        <p><strong>Tuổi:</strong> {student.nhtAge}</p>
        <p><strong>Giới tính:</strong> {student.nhtGender}</p>
        <p><strong>Ngày sinh:</strong> {student.nhtBirthday}</p>
        <p><strong>Nơi sinh:</strong> {student.nhtBirthPlace}</p>
        <p><strong>Địa chỉ:</strong> {student.nhtAddress}</p>
        <button className="btn btn-secondary" onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default NhtStudentDetail;
