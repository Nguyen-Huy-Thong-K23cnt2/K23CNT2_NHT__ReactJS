import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NhtApp from "./NhtApp";
import reportWebVitals from "./reportWebVitals";
import { NhtThemeProvider } from "./context/NhtThemeContext"; // Import đúng

// Kiểm tra phần tử có tồn tại không trước khi render
const rootElement = document.getElementById("nhtRoot");
if (rootElement) {
  const nhtRoot = ReactDOM.createRoot(rootElement);
  nhtRoot.render(
    <React.StrictMode>
      <NhtThemeProvider>
        <NhtApp />
      </NhtThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error("Không tìm thấy phần tử có ID 'nhtRoot'. Kiểm tra lại index.html!");
}

// Bật đo lường hiệu suất nếu cần
reportWebVitals(console.log);
