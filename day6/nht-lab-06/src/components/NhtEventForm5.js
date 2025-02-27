import React, { useState } from "react";

const NhtEventForm5 = ({ onNhtHandleSubmit }) => {
  const [formData, setFormData] = useState({
    nhtName: "Huy Thông",
    nhtAge: 20,
    nhtGender: "Male",
    nhtCourse: "CSS3",
  });

  // Danh sách khóa học
  const courseOptions = ["HTML3", "CSS3", "JavaScript", "ReactJS", "BOOTRAP5"];
  const genderOptions = ["Male", "Female", "None"];

  // Hàm xử lý thay đổi dữ liệu trên form
  const nhtHandleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Hàm xử lý khi submit form
  const nhtHandleSubmit = (event) => {
    event.preventDefault();
    alert(`Thông tin sinh viên:\n- Họ tên: ${formData.nhtName}\n- Tuổi: ${formData.nhtAge}\n- Giới tính: ${formData.nhtGender}\n- Khóa học: ${formData.nhtCourse}`);
    
    // Gửi dữ liệu lên component cha (NhtApp)
    onNhtHandleSubmit(formData);
  };

  return (
    <div className="alert alert-danger">
      <h2>Form Student Info</h2>
      <form onSubmit={nhtHandleSubmit}>
        <div>
          <label htmlFor="nhtName">Student Name:</label>
          <input
            type="text"
            name="nhtName"
            id="nhtName"
            value={formData.nhtName}
            onChange={nhtHandleChange}
            className="mx-2 text-center"
            required
          />
        </div>

        <div>
          <label htmlFor="nhtAge">Student Age:</label>
          <input
            type="number"
            name="nhtAge"
            id="nhtAge"
            value={formData.nhtAge}
            onChange={nhtHandleChange}
            className="mx-2 text-center"
            required
            min="10" // Đảm bảo nhập tuổi hợp lệ
          />
        </div>

        <div>
          <label>Student Gender:</label>
          {genderOptions.map((gender) => (
            <div key={gender} className="d-inline mx-2">
              <input
                type="radio"
                name="nhtGender"
                id={gender}
                value={gender}
                checked={formData.nhtGender === gender}
                onChange={nhtHandleChange}
              />
              <label htmlFor={gender}>{gender}</label>
            </div>
          ))}
        </div>

        <div>
          <label>Chọn khóa học:</label>
          <select
            name="nhtCourse"
            id="nhtCourse"
            value={formData.nhtCourse}
            onChange={nhtHandleChange}
            className="mx-2 text-center"
            required
          >
            {courseOptions.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default NhtEventForm5;
