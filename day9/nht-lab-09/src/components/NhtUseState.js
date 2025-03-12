
import React, { useState } from 'react'

export default function NhtUseState() {
    // tạo state là count và hàm cập nhập state là setCount
    const [count, setCount] = useState(0);
    // Hàm sử lý sự kiện tăng
    const nhtHandleTang = () => {

        setCount(count + 1)
    }

    // hàm sử lý sự kiện reset
    const nhtHandleReset = () => {
        setCount(0)
    }


    // state là mảng list
    const danh_sach = [100, 200, 300, 400]
    // khỏi tạo state
    const [list, setList] = useState(danh_sach)

    // Hàm sử lý sự kiện, thêm phần tử ngẫu nhiên vào ds
    const nhtHandleAddNewRandom = () => {
        // setList(prev =>{
        //     return  [...prev,
        //         parseInt(Math.random()*100)
        //     ]
        // })

        setList([
            ...list,
            parseInt(Math.random() * 1000)


        ])
    }
    return (
        <div className='alert alert-info'>
            <h2>Sử dụng UseState</h2>
            <div>
                <b>Count: {count}</b>
                <button onClick={nhtHandleTang}>Tăng</button>
                <button onClick={() => setCount(count - 1)}>Giảm</button>
                <button onClick={nhtHandleReset}>Đặt lại </button>
            </div>
            <div>
                <h3>List:{list.toString()}</h3>
                <button onClick={nhtHandleAddNewRandom}>Add new (Random)</button>
            </div>
        </div>
    )
}
