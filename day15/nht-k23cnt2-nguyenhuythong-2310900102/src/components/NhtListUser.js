import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NhtListUser() {
  const [nhtListUser, setNhtListUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const nhtApi =
    "https://67e0d33458cc6bf785230a80.mockapi.io/nht_k23cnt2_2310900102/nht_users";

  // Fetch danh sách user từ API
  useEffect(() => {
    axios
      .get(nhtApi)
      .then((response) => {
        setNhtListUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
        setError("Lỗi khi tải danh sách người dùng!");
        setLoading(false);
      });
  }, []);

  // Xử lý xóa user
  const nhtHandleDelete = async (nhtId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
      try {
        await axios.delete(`${nhtApi}/${nhtId}`);
        setNhtListUser(nhtListUser.filter((user) => user.id !== nhtId));
      } catch (error) {
        console.error("Lỗi khi xóa:", error);
        alert("Không thể xóa người dùng!");
      }
    }
  };

  // Xử lý chỉnh sửa user
  const nhtHandleUpdate = (nhtId) => {
    navigate(`/nht-edit-user/${nhtId}`);
  };

  return (
    <div className="container">
      <h2 className="text-center">Danh Sách Người Dùng</h2>

      {/* Hiển thị loading */}
      {loading && <p className="text-center text-primary">Đang tải dữ liệu...</p>}

      {/* Hiển thị lỗi nếu có */}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* Hiển thị bảng dữ liệu */}
      {!loading && !error && (
        <table className="table table-striped table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Họ Tên</th>
              <th>Email</th>
              <th>Điện Thoại</th>
              <th>Trạng Thái</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {nhtListUser.length > 0 ? (
              nhtListUser.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nht_name}</td>
                  <td>{user.nht_email}</td>
                  <td>{user.nht_phone}</td>
                  <td>
                    {user.nht_active ? (
                      <span className="badge bg-success">Hoạt động</span>
                    ) : (
                      <span className="badge bg-danger">Tạm khóa</span>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => nhtHandleUpdate(user.id)}
                    >
                      ✏️ Sửa
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => nhtHandleDelete(user.id)}
                    >
                      🗑️ Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
