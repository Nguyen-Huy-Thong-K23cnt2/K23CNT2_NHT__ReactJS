import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function NhtEditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const nhtApi = "https://67e0d33458cc6bf785230a80.mockapi.io/nht_k23cnt2_2310900102/nht_users";

  // Khởi tạo dữ liệu mặc định
  const [nhtUser, setNhtUser] = useState({
    id: 0,
    nht_name: "",
    nht_email: "",
    nht_phone: "",
    nht_active: true,
  });

  // Fetch dữ liệu user khi component mount
  useEffect(() => {
    axios
      .get(`${nhtApi}/${id}`)
      .then((response) => {
        setNhtUser(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu:", error);
      });
  }, [id]); // Thêm `id` vào dependency để tránh lỗi useEffect

  // Xử lý thay đổi dữ liệu trong input
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNhtUser((prevUser) => ({
      ...prevUser,
      [name]: type === "radio" ? checked : value,
    }));
  };

  // Xử lý cập nhật dữ liệu
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nhtUser.nht_name || !nhtUser.nht_email || !nhtUser.nht_phone) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    axios
      .put(`${nhtApi}/${id}`, nhtUser)
      .then(() => {
        alert("Cập nhật thành công!");
        navigate("/nht-list-user");
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật:", error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Chỉnh Sửa Người Dùng</h2>
      <form onSubmit={handleSubmit}>
        {/* FullName */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="nht_name"
            value={nhtUser.nht_name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="nht_email"
            value={nhtUser.nht_email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="nht_phone"
            value={nhtUser.nht_phone}
            onChange={handleChange}
          />
        </div>

        {/* Active Status */}
        <div className="mb-3">
          <label className="form-label">Trạng thái</label>
          <div>
            <label className="me-3">
              <input
                type="radio"
                name="nht_active"
                value="true"
                checked={nhtUser.nht_active === true}
                onChange={() => setNhtUser({ ...nhtUser, nht_active: true })}
              />
              Hoạt động
            </label>
            <label>
              <input
                type="radio"
                name="nht_active"
                value="false"
                checked={nhtUser.nht_active === false}
                onChange={() => setNhtUser({ ...nhtUser, nht_active: false })}
              />
              Tạm khóa
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary me-2">
            Cập Nhật
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate("/nht-list-user")}>
            Quay Lại
          </button>
        </div>
      </form>
    </div>
  );
}
