import React from "react";
import { Link } from "react-router-dom";
import "./NhtNavBar.css"; // Import file CSS riêng

export default function NhtNavBar() {
  return (
    <nav className="nht-navbar">
      <div className="nht-container">
        <Link className="nht-brand" to="/">Trang chủ</Link>

        {/* Nút menu cho mobile */}
        <input type="checkbox" id="menu-toggle" className="nht-menu-toggle" />
        <label htmlFor="menu-toggle" className="nht-menu-icon">&#9776;</label>

        <ul className="nht-menu">
          <li><Link to="/nht-list-user">Danh sách</Link></li>
          <li><Link to="/nht-create-user">Thêm mới</Link></li>
        </ul>
      </div>
    </nav>
  ); 
}
