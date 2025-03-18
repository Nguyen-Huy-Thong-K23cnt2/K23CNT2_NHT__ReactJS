import React from 'react';
import { Link } from 'react-router-dom';

export default function NhtNavNar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary rounded shadow-sm mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">NhtShop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/gioi-thieu">Giới Thiệu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/san-pham">Sản Phẩm</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/tin-tuc">Tin Tức</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/lien-he">Liên Hệ</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}