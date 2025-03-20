import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NhtReadMockAPI() {
  // Khởi tạo state
  const [nhtListUser, setNhtListUser] = useState([]);

  // API URL
  const nhtApiOnline =
    "https://67dbd2f01fd9e43fe476122b.mockapi.io/k23cnt2_nguyenhuythong/nht_users";

  // Gọi API lấy danh sách user
  useEffect(() => {
    nhtFetchUsers();
  }, []);

  const nhtFetchUsers = () => {
    axios
      .get(nhtApiOnline)
      .then((response) => setNhtListUser(response.data))
      .catch((error) => console.error("Lỗi khi gọi API:", error));
  };

  // Xóa user
  const nhtDeleteUser = (nhtid) => {
    console.log("Xóa user có ID:", nhtid); // Debug ID trước khi gửi API
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
      axios
        .delete(`${nhtApiOnline}/${nhtid}`)
        .then(() => {
          alert("Xóa thành công!");
          setNhtListUser((prevList) =>
            prevList.filter((user) => user.nhtid !== nhtid) // Sửa lỗi cập nhật danh sách
          );
        })
        .catch((error) => console.error("Lỗi khi xóa:", error));
    }
  };

  // Render danh sách user
  return (
    <div className="alert alert-danger">
      <h2 className="text-center">Danh sách người dùng</h2>
      <table className="table table-bordered table-light">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {nhtListUser.map((nht_item) => (
            <tr key={nht_item.nhtid}>
              <td>{nht_item.nhtid}</td>
              <td>{nht_item.nhtFullName}</td>
              <td>{nht_item.nhtAge}</td>
              <td>{nht_item.nhtActive ? "✅" : "❌"}</td>
              <td>
                <button className="btn btn-warning mx-1">Sửa</button>
                <button
                  className="btn btn-danger"
                  onClick={() => nhtDeleteUser(nht_item.nhtid)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
