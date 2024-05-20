import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Api from './Api';
import reportWebVitals from './reportWebVitals';
import Ecom from './Ecom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Api /> */}
    <Ecom />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
