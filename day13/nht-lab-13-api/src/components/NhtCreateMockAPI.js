import React, { useState } from 'react';
import axios from 'axios';

export default function NhtCreateMockAPI() {
    // Khởi tạo state
    const [nhtFullName, setNhtFullName] = useState('');
    const [nhtAge, setNhtAge] = useState('');
    const [nhtActive, setNhtActive] = useState('');
    const [nhtMessage, setNhtMessage] = useState('');

    // API endpoint
    const nhtCreateUser = "https://67dbd2f01fd9e43fe476122b.mockapi.io/k23cnt2_nguyenhuythong/nht_users";

    // Khi submit form
    const nhtHandleSubmit = (event) => {
        event.preventDefault();

        // Kiểm tra dữ liệu đầu vào
        if (!nhtFullName || !nhtAge || nhtActive === '') {
            setNhtMessage("⚠️ Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        // Tạo object chứa dữ liệu mới
        const newUser = {
            nhtFullName,
            nhtAge: Number(nhtAge),
            nhtActive: nhtActive === "true", // Chuyển đổi sang boolean
        };

        // Gửi dữ liệu lên API bằng axios
        axios.post(nhtCreateUser, newUser)
            .then((response) => {
                console.log("Thêm thành công!", response.data);
                setNhtMessage("✅ Thêm user thành công!");

                // Reset form sau khi thêm
                setNhtFullName('');
                setNhtAge('');
                setNhtActive('');
            })
            .catch((error) => {
                console.error("Lỗi khi thêm user:", error);
                setNhtMessage("❌ Lỗi khi thêm user, vui lòng thử lại!");
            });
    };

    return (
        <div className='alert alert-info p-3'>
            <h2>Thêm mới user</h2>
            <hr />
            
            {/* Thông báo trạng thái */}
            {nhtMessage && <div className="alert alert-warning">{nhtMessage}</div>}

            <form onSubmit={nhtHandleSubmit}>
                {/* Full Name */}
                <div className='row mb-3'>
                    <label htmlFor="nhtFullName" className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10">
                        <input
                            type='text'
                            id="nhtFullName"
                            value={nhtFullName}
                            onChange={(ev) => setNhtFullName(ev.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                {/* Age */}
                <div className='row mb-3'>
                    <label htmlFor="nhtAge" className="col-sm-2 col-form-label">Age</label>
                    <div className="col-sm-10">
                        <input
                            type='number'
                            id="nhtAge"
                            value={nhtAge}
                            onChange={(ev) => setNhtAge(ev.target.value)}
                            className="form-control"
                            min="1"
                            required
                        />
                    </div>
                </div>

                {/* Active */}
                <div className='row mb-3'>
                    <label className="col-sm-2 col-form-label">Active</label>
                    <div className="col-sm-10">
                        <select
                            className="form-select"
                            value={nhtActive}
                            onChange={(ev) => setNhtActive(ev.target.value)}
                            required
                        >
                            <option value="">Chọn trạng thái</option>
                            <option value="true">Hoạt động</option>
                            <option value="false">Khóa</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
}
