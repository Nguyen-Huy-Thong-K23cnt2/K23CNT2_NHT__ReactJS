import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import NhtApp from "./NhtApp";

// Lấy phần tử gốc để render ứng dụng
const rootElement = document.getElementById("NhtRoot");

if (rootElement) {
  const NhtRoot = ReactDOM.createRoot(rootElement);
  NhtRoot.render(
    <React.StrictMode>
      <NhtApp />
    </React.StrictMode>
  );
} else {
  console.error("Không tìm thấy phần tử NhtRoot trong DOM!");
}

// Đo hiệu suất (tùy chọn)
if (process.env.NODE_ENV === "development") {
  reportWebVitals(console.log);
}
