import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "../services/nhtUserService";
import { useNavigate, useParams } from "react-router-dom";

export default function NhtUserEdit() {
  const [user, setUser] = useState({
    nhtFullName: "",
    nhtEmail: "",
    nhtPhone: "",
    nhtActive: true,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(id);
        setUser(response.data);
      } catch (error) {
        console.error("Lỗi khi tải user:", error);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, user);
      alert("Cập nhật thành công!");
      navigate("/");
    } catch (error) {
      console.error("Lỗi khi cập nhật user:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Chỉnh Sửa Người Dùng</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nhtFullName" className="form-control mb-2" value={user.nhtFullName} onChange={handleChange} required />
        <input type="email" name="nhtEmail" className="form-control mb-2" value={user.nhtEmail} onChange={handleChange} required />
        <input type="text" name="nhtPhone" className="form-control mb-2" value={user.nhtPhone} onChange={handleChange} required />
        <button className="btn btn-primary">Lưu</button>
      </form>
    </div>
  );
}
