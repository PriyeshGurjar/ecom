import React from 'react';
import ReactDOM from 'react-dom/client';
// import React,{StrictMode} from "react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateMgt from './adminviews/statemgt';
import CityMgt from './adminviews/citymgt';
import ProductCatgMgt from './adminviews/ProductCatgMgt';
import Product from './productview/product';
import CustomerLogin from './customerviews/CustomerLogin';
import CustomerReg from './customerviews/CustomerReg';
import VenderReg from './vender/VenderReg';
import VenderLogin from './vender/VenderLogin';
import { BrowserRouter } from 'react-router-dom';
import VenderMain from './vender/VenderMain';
import AdminLogin from './adminviews/AdminLogin';
import VenderMgt from './adminviews/VenderMgt';
import AdminMain from './adminviews/AdminMain';
import MainPage from './MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StateMgt/> */}
    {/* <CityMgt/> */}
    {/* <ProductCatgMgt/> */}
    {/* <Product/> */}
    {/* <ProductList/> */}
    {/* <CustomerReg/> */}
    <CustomerLogin/>
    {/* <VenderReg/> */}
     <VenderLogin/>
     {/* <VenderMgt/> */}
    
     
     <BrowserRouter>
     {/* <VenderMain/>
     <CustomerMain/>
     <AdminMain/> */}
 {/* <AdminLogin/> */}
     <MainPage/>
     </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
