import React from 'react';

export default function NhtHome() {
  return (
    <div className="container mt-5">
      <h2 className="text-center " style={{color:"white"}}>Đây là trang chủ</h2>
      <div className="text-center">
        <img 
          src="https://media.audi.com/is/image/audi/nemo/sea/vn/Q7_883x883.jpg?width=864&auto=webp" 
          alt="Xe Audi" 
          className="img-fluid rounded" 
        />
      </div>
    </div>
  );
}