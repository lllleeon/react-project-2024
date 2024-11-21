import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import './chp03/book.css'
//import './ch04/css.css'
//import '/ch04/Clock.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import lirary from "./chp03/lirary";
import ConfirmDialog from "./ch04/ConfirmDialog";
import Clock from "./ch04/Clock";
import CommentList from "./chp05/CommentList";
import NotificationList from "./chp6/NotificationList";
import Accommodate from "./chp07/Accommodate";
import Toggle from "./chpo8/Toggle";
import MyButton from "./chpo8/MyButton";
import Counter from "./chpo8/Counter";
import ConfirmButton from "./chpo8/ConfirmButton";
import ConfirmButton2 from "./chpo8/ConfirmButton2";
import ConfirmButton3 from "./chpo8/ConfirmButton3";
import RequestForm from "./chp11/RequestForm";

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(()=>{root.render(
//    // <React.StrictMode>
//      //   <Clock/>
//    // </React.StrictMode>
// );},1000)

root.render(
  <React.StrictMode>
      <RequestForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
