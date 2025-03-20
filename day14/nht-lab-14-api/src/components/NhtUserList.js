import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/nhtUserService";
import { Link } from "react-router-dom";

export default function NhtUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Lỗi khi tải danh sách người dùng:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
      try {
        await deleteUser(id);
        fetchUsers();
      } catch (error) {
        console.error("Lỗi khi xóa người dùng:", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Danh Sách Người Dùng</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Điện Thoại</th>
            <th>Trạng Thái</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.nhtid}>
              <td>{user.nhtFullName}</td>
              <td>{user.nhtEmail}</td>
              <td>{user.nhtPhone}</td>
              <td>{user.nhtActive ? " Hoạt động" : " Không hoạt động"}</td>
              <td>
                <Link to={`/edit/${user.nhtid}`} className="btn btn-warning btn-sm mx-1">Sửa</Link>
                <button onClick={() => handleDelete(user.nhtid)} className="btn btn-danger btn-sm">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
