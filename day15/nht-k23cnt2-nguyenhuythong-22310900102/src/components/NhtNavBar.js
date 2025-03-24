import React from 'react';
import { Link } from 'react-router-dom';

export default function NhtNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded shadow-sm mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">NhtApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">🏠 Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nht-list-user">📋 List Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nht-create-user">➕ Create User</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
