import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NhtApp from './NhtApp';
import reportWebVitals from './reportWebVitals';

const nhtRoot = ReactDOM.createRoot(document.getElementById('nhtRoot'));
nhtRoot.render(
  <React.StrictMode>
    <NhtApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
