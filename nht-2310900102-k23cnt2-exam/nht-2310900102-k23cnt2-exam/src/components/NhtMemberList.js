import React, { useState } from "react";

const NhtMemberList = ({ members, removeMember, updateMember }) => {
  const [editMember, setEditMember] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({ fullname: "", username: "", password: "" });
//hàm chỉnh sửa thông tin
  const handleEdit = (member) => {
    setEditMember(member.id);
    setUpdatedInfo({ fullname: member.fullname, username: member.username, password: member.password });
  };
//lưu thông tin sau khi chỉnh sửa
  const handleUpdate = () => {
    updateMember({ id: editMember, ...updatedInfo });
    setEditMember(null);
  };

  return (
    <div className="card p-3 mt-3">
      <h2 className="text-secondary">Danh sách tài khoản</h2>
      <ul className="list-group">
        {members.map((member) => (
           <li key={member.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editMember === member.id ? (
              //Hiển thị form nếu đang chỉnh sửa
              <>
                <input type="text" className="form-control me-2" value={updatedInfo.fullname} onChange={(e) => setUpdatedInfo({ ...updatedInfo, fullname: e.target.value })} />
                <input type="text" className="form-control me-2" value={updatedInfo.username} onChange={(e) => setUpdatedInfo({ ...updatedInfo, username: e.target.value })} />
                <input type="password" className="form-control me-2" value={updatedInfo.password} onChange={(e) => setUpdatedInfo({ ...updatedInfo, password: e.target.value })} />
                <button className="btn btn-success" onClick={handleUpdate}>Lưu</button>
              </>
            ) : (
              //hiển thị thông tiên nếu không chỉnh sửa
              <>
                {member.fullname} ({member.username})
                <div className="d-flex gap-1">
                <button className="btn btn-warning me-2" onClick={() => handleEdit(member)}>Sửa</button>
                <button className="btn btn-danger" onClick={() => removeMember(member.id)}>Xóa</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NhtMemberList;