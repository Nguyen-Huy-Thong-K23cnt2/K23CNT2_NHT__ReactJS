import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NhtReadApilLocal() {
  // Khởi tạo state
  const [nhtListUser, setNhtListUser] = useState([]);

  // URL API
  const apiUrl = "http://localhost:3001/users";

  // Lấy danh sách từ API
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((nhtResponse) => setNhtListUser(nhtResponse.data))
      .catch((error) => console.log("Lỗi khi gọi API:", error));
  }, []); // Chỉ chạy một lần khi component mount

  return (
    <div>
      <h2> Đọc dữ liệu từ API Local </h2>
      <table className="table table-bordered">
        <thead>
            <tr>
              <th> Full Name </th>
              <th>Age </th>
            </tr>
        </thead>
        <tbody>
           {nhtListUser.map((nhtItem, index)=>{
              return(
                <tr>
                  <td>{nhtItem.fullName}</td>
                  <td>{nhtItem.age}</td>
                </tr>
              )
           })
           }
        </tbody>
      </table>
    </div>
  );
}
