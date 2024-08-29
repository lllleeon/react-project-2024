import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './chp03/book.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import lirary from "./chp03/lirary";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
