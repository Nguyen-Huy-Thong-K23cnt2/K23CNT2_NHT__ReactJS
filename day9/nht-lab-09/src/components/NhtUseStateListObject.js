import React, { useState } from 'react';

export default function NhtUseStateListObject() {
    // Danh sách sinh viên ban đầu
    const listStudent = [
        { nhtId: 1, nhtName: "Nguyễn Huy Thông", nhtAge: 19 },
        { nhtId: 2, nhtName: "Phạm Tuấn Anh", nhtAge: 19 },
        { nhtId: 3, nhtName: "Nguyễn Duy Khánh", nhtAge: 20 },
        { nhtId: 4, nhtName: "Nguyễn Quốc Duy", nhtAge: 19 }
    ];

    // State quản lý danh sách sinh viên
    const [NhtStudents, setNhtStudents] = useState(listStudent);

    // Xử lý sửa thông tin sinh viên
    const handleEdit = (student) => {
        const newName = prompt('Nhập tên mới:', student.nhtName);
        const newAge = prompt('Nhập tuổi mới:', student.nhtAge);

        if (newName && newAge) {
            // Cập nhật danh sách sinh viên
            setNhtStudents(prevStudents =>
                prevStudents.map(s =>
                    s.nhtId === student.nhtId ? { ...s, nhtName: newName, nhtAge: parseInt(newAge) } : s
                )
            );
        }
    };

    // Xử lý xóa sinh viên khỏi danh sách
    const handleDelete = (studentId) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa sinh viên này?")) {
            setNhtStudents(NhtStudents.filter(student => student.nhtId !== studentId));
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Danh Sách Sinh Viên</h2>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {NhtStudents.map((student, index) => (
                        <tr key={index}>
                            <td>{student.nhtId}</td>
                            <td>{student.nhtName}</td>
                            <td>{student.nhtAge}</td>
                            <td>
                                <button className="btn btn-success mx-2" onClick={() => handleEdit(student)}>Sửa</button>
                                <button className="btn btn-danger mx-2" onClick={() => handleDelete(student.nhtId)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}