import React, { useState } from "react";

const NhtEventForm4 = () => {
  const [nhtSelectCheckBox, setNhtSelectCheckBox] = useState(["Apple"]); // Trái cây mặc định

  const fruitOptions = ["Apple", "Banana", "Orange"];

  // Hàm xử lý khi chọn checkbox
  const nhtHandleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setNhtSelectCheckBox((prevSelected) =>
      checked ? [...prevSelected, value] : prevSelected.filter((item) => item !== value)
    );
  };

  // Hàm xử lý khi form được submit
  const nhtHandleSubmit = (event) => {
    event.preventDefault();
    alert("Selected fruits: " + nhtSelectCheckBox.join(", "));
  };

  return (
    <div className="alert alert-success">
      <h2>Form Input - Checkbox</h2>
      <form onSubmit={nhtHandleSubmit}>
        <h3>Select your favorite fruits</h3>
        {fruitOptions.map((fruit) => (
          <div key={fruit}>
            <input
              type="checkbox"
              id={fruit}
              value={fruit}
              checked={nhtSelectCheckBox.includes(fruit)}
              onChange={nhtHandleCheckboxChange}
            />
            <label htmlFor={fruit}>{fruit}</label>
          </div>
        ))}
        <div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NhtEventForm4;
