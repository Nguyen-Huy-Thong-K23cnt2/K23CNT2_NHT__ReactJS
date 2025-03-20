import React, { useState } from "react";
import { createUser } from "../services/nhtUserService";
import { useNavigate } from "react-router-dom";

export default function NhtUserCreate() {
  const [user, setUser] = useState({
    nhtFullName: "",
    nhtEmail: "",
    nhtPhone: "",
    nhtActive: true,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(user);
      alert("Thêm mới thành công!");
      navigate("/");
    } catch (error) {
      console.error("Lỗi khi thêm người dùng:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Thêm Người Dùng</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nhtFullName" className="form-control mb-2" placeholder="Họ Tên" onChange={handleChange} required />
        <input type="email" name="nhtEmail" className="form-control mb-2" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="nhtPhone" className="form-control mb-2" placeholder="Điện Thoại" onChange={handleChange} required />
        <button className="btn btn-primary">Lưu</button>
      </form>
    </div>
  );
}
