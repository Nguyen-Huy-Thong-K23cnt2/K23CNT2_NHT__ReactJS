import React, { useState } from 'react';

const NhtEventForm1 = () => {
    const [nhtStudentName, setNhtStudentName] = useState("Huy Thông");

    // Xử lý sự kiện thay đổi input
    const nhtHandleChange = (event) => {
        setNhtStudentName(event.target.value);
    };

    // Xử lý submit form
    const nhtHandleSubmit = (event) => {
        alert('Hello: ' + nhtStudentName);
        event.preventDefault();
    };

    return (
        <div className='alert alert-info'>
            <h2>Form input</h2>
            <form onSubmit={nhtHandleSubmit}>
                <label htmlFor='nhtStudentName'>
                    <input 
                        type='text' 
                        name='nhtStudentName' 
                        id='nhtStudentName' 
                        value={nhtStudentName} 
                        onChange={nhtHandleChange} 
                    />
                </label>
                <button className='btn btn-primary'>Click Here</button>
            </form>
        </div>
    );
};

export default NhtEventForm1;
