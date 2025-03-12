import React, { useState } from "react";

const NhtMemberAdd = ({ addMember }) => {
    //lưu thông tin thành viên mới
  const [newMember, setNewMember] = useState({ id: "", fullname: "", username: "", password: "" });
  //hàm xử lý thay đổi gía trị input
  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };
//hàm xử lý khi gửi form thêm tv
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMember.id && newMember.fullname && newMember.username && newMember.password) {
      addMember(newMember);
      setNewMember({ id: "", fullname: "", username: "", password: "" });
    }
  };

  return (
    <div className="card p-3 mt-3">
      <h2>Thêm thành viên</h2>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input type="text" className="form-control" name="id" placeholder="ID" value={newMember.id} onChange={handleChange} required />
        <input type="text" className="form-control" name="fullname" placeholder="Họ và tên" value={newMember.fullname} onChange={handleChange} required />
        <input type="text" className="form-control" name="username" placeholder="Username" value={newMember.username} onChange={handleChange} required />
        <input type="password" className="form-control" name="password" placeholder="Mật khẩu" value={newMember.password} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary" >Thêm</button>
      </form>
    </div>
  );
};

export default NhtMemberAdd;
