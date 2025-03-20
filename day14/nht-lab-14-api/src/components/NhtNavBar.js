import React from "react";
import { Link } from "react-router-dom";

export default function NhtNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded shadow-sm mb-4">
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/">
           Quản Lý Người Dùng
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Danh Sách
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/create">
                ➕ Thêm Mới
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
