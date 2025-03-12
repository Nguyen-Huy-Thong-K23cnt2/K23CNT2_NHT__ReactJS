import React, { useEffect, useState } from 'react';

export default function NhtUseEffect1() {
    // 1. Khởi tạo state count với giá trị ban đầu là 0
    const [count, setCount] = useState(0);

    // 2. useEffect chạy sau mỗi lần render hoặc re-render
    useEffect(() => {
        console.log("useEffect: (callback) - Chạy sau mỗi lần render hoặc re-render");
    });

    // 3. useEffect chỉ chạy một lần duy nhất khi component mount
    useEffect(() => {
        console.log("useEffect: (callback), [] - Chạy duy nhất 1 lần khi component mount");
    }, []);

    // 4. useEffect chạy khi count thay đổi (tối ưu hơn)
    useEffect(() => {
        console.log("Count has changed:", count);
    }, [count]); // Chỉ chạy khi count thay đổi

    return (
        <div>
            {/* Tiêu đề */}
            <h2 className='alert alert-danger'>useEffect (callback)</h2>

            {/* Hiển thị giá trị của count */}
            <h2>Count: {count}</h2>

            {/* Nút bấm tăng count */}
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}