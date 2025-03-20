import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NhtNavBar from "./components/NhtNavBar";

const NhtUserList = lazy(() => import("./components/NhtUserList"));
const NhtUserCreate = lazy(() => import("./components/NhtUserCreate"));
const NhtUserEdit = lazy(() => import("./components/NhtUserEdit"));

export default function NhtApp() {
  return (
    <Router>
      <div className="container mt-4">
        {/* Thanh điều hướng */}
        <NhtNavBar />

        <h1 className="text-center">Nht Quản Lý Người Dùng</h1>

        {/* Hiển thị loading khi tải component */}
        <Suspense fallback={<p className="text-center">Đang tải...</p>}>
          <Routes>
            <Route path="/" element={<NhtUserList />} />
            <Route path="/create" element={<NhtUserCreate />} />
            <Route path="/edit/:id" element={<NhtUserEdit />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
