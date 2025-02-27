import React, { useState } from 'react';

const NhtEventForm3 = () => {
    const [nhtGioiTinh, setNhtGioiTinh] = useState("Nam");

    const nhtHandleChange = (event) => {
        setNhtGioiTinh(event.target.value);
    };

    const nhtHandleSubmit = (event) => {
        event.preventDefault();
        alert('Giới tính của bạn là: ' + nhtGioiTinh);
    };

    return (
        <div className='alert alert-success'>
            <h2>Form Input - Radio</h2>
            <form onSubmit={nhtHandleSubmit}>
                <div>
                    <label>Giới tính:</label>
                    <input type='radio' name='nhtGioiTinh' id='nhtNam' className='mx-2'
                        value="Nam" checked={nhtGioiTinh === 'Nam'} onChange={nhtHandleChange} /> 
                    <label htmlFor='nhtNam'>Nam</label>

                    <input type='radio' name='nhtGioiTinh' id='nhtNu' className='mx-2'
                        value="Nữ" checked={nhtGioiTinh === 'Nữ'} onChange={nhtHandleChange} /> 
                    <label htmlFor='nhtNu'>Nữ</label>

                    <input type='radio' name='nhtGioiTinh' id='nhtKhac' className='mx-2'
                        value="Khác" checked={nhtGioiTinh === 'Khác'} onChange={nhtHandleChange} /> 
                    <label htmlFor='nhtKhac'>Khác</label>
                </div>
                <button type="submit" className='btn btn-success mt-3'>Submit</button>
            </form>
        </div>
    );
};

export default NhtEventForm3;
