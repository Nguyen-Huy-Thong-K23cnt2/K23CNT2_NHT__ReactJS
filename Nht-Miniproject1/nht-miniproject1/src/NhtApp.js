
import { NhtThemeProvider } from "./context/NhtThemeContext";
import NhtTodoList from "./components/NhtTodoList";
import NhtThemeToggle from "./components/NhtThemeToggle";
import "./index.css";
import React from 'react';

export default function NhtApp() {
  return (
    <NhtThemeProvider>
      <div className="nht-app">
        <h1>Quản Lý Công Việc</h1>
        <NhtThemeToggle />
        <NhtTodoList />
      </div>
    </NhtThemeProvider>
  );
}
