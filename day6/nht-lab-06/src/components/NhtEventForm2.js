import React, { useState } from 'react';

const NhtEventForm2 = () => {
    const [nhtCourse, setNhtCourse] = useState('CSS3');

    const nhtHandleChange = (event) => {
        setNhtCourse(event.target.value);
    };

    const nhtHandleSubmit = (event) => {
        alert('Khóa Học Đã Chọn Khi Submit: ' + nhtCourse);
        event.preventDefault();
    };

    return (
        <div className='alert alert-danger'>
            <h2>Form Select</h2>
            <form onSubmit={nhtHandleSubmit}>
                <label>
                    Chọn khóa học:
                    <select name='nhtCourse' id='nhtCourse' value={nhtCourse} onChange={nhtHandleChange}>
                        <option value="HTML3">HTML3</option>
                        <option value="CSS3">CSS3</option>
                        <option value="JS">JavaScript</option>
                        <option value="reactjs">ReactJS</option>
                        <option value="BOOTSTRAP5">BOOTSTRAP5</option>
                    </select>
                </label>
                <button className='btn btn-primary'>Click Here</button>
            </form>
        </div>
    );
};

export default NhtEventForm2;
