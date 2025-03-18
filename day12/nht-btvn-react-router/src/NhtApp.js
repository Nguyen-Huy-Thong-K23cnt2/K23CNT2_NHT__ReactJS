import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NhtNavNar from './components/NhtNavNar';
import NhtHome from './components/NhtHome';
import NhtGioiThieu from './components/NhtGioiThieu';
import NhtSanPham from './components/NhtSanPham';
import NhtTinTuc from './components/NhtTinTuc';
import NhtLienHe from './components/NhtLienHe';
import NhtThemSanPham from './components/NhtThemSanPham';  // Import NhtThemSanPham

export default function NhtApp() {
  // Danh sách sản phẩm ban đầu
  const [nhtSanPhams, setNhtSanPhams] = useState([
    { nhtId: 'SP001', nhtNameProduct: 'Xe Audi', nhtQuantity: 2, nhtPrice: 3850000000 },
    { nhtId: 'SP002', nhtNameProduct: 'Audi Q7', nhtQuantity: 1, nhtPrice: 3590000000 },
    { nhtId: 'SP003', nhtNameProduct: 'lamborghini', nhtQuantity: 0, nhtPrice: 18999200000  }
  ]);

  // Hàm thêm sản phẩm mới
  const nhtHandleAddProduct = (product) => {
    setNhtSanPhams((prev) => [...prev, product]);
  };

  return (
    <div className="container border my-5 rounded shadow-lg p-4 bg-light">
      <h1 className="text-center text-primary mb-4">
        <span className="text-warning">React Router DOM</span> - BTVN -{' '}
        <span className="text-danger">[Nguyễn Huy Thông - K23CNT2]</span>
      </h1>
      <hr />
      <Router>
        <NhtNavNar />
        <div className="bg-secondary p-3 rounded mb-4 shadow text-white">
          <Routes>
            <Route path="/" element={<NhtHome />} />
            <Route path="/gioi-thieu" element={<NhtGioiThieu />} />
            <Route path="/san-pham" element={<NhtSanPham nhtSanPhams={nhtSanPhams} />} />
            <Route path="/them-san-pham" element={<NhtThemSanPham onAddProduct={nhtHandleAddProduct} />} />
            <Route path="/tin-tuc" element={<NhtTinTuc />} />
            <Route path="/lien-he" element={<NhtLienHe />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}