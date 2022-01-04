import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LogIn from "./Components/LogInPage/LoginPage"

ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <App /> 
      {/* <Routes> */}
      {/* <Route path="/" element={<App />} /> */}
      {/* <Route path='/login' element={<LogIn/>} exact  /> */}
      {/* <Route path="invoices" element={<Invoices />} /> */}
    {/* </Routes> */}
    </BrowserRouter>
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

