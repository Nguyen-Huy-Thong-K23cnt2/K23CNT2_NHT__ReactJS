import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NhtThemSanPham({ onAddProduct }) {
  const [nhtId, setNhtId] = useState('');
  const [nhtNameProduct, setNhtNameProduct] = useState('');
  const [nhtQuantity, setNhtQuantity] = useState('');
  const [nhtPrice, setNhtPrice] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProduct = {
      nhtId,
      nhtNameProduct,
      nhtQuantity: parseInt(nhtQuantity),
      nhtPrice: parseInt(nhtPrice),
    };

    onAddProduct(newProduct);  // Gọi hàm thêm sản phẩm
    navigate('/san-pham');     // Quay lại trang sản phẩm sau khi thêm
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Thêm Sản Phẩm Mới</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nhtId" className="form-label">ID Sản Phẩm</label>
          <input
            type="text"
            className="form-control"
            id="nhtId"
            value={nhtId}
            onChange={(e) => setNhtId(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nhtNameProduct" className="form-label">Tên Sản Phẩm</label>
          <input
            type="text"
            className="form-control"
            id="nhtNameProduct"
            value={nhtNameProduct}
            onChange={(e) => setNhtNameProduct(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nhtQuantity" className="form-label">Số Lượng</label>
          <input
            type="number"
            className="form-control"
            id="nhtQuantity"
            value={nhtQuantity}
            onChange={(e) => setNhtQuantity(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nhtPrice" className="form-label">Giá</label>
          <input
            type="number"
            className="form-control"
            id="nhtPrice"
            value={nhtPrice}
            onChange={(e) => setNhtPrice(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success mt-4">Thêm Sản Phẩm</button>
        </div>
      </form>
    </div>
  );
}