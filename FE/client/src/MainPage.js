//MainPage.js 
import React from "react";
import {BrowserRouter as Router  ,Link,Route,Routes} from "react-router-dom";
import CustomerMain from "./customerviews/CustomerMain";
import AdminMain from "./adminviews/AdminMain";
import VenderMain from "./vender/VenderMain";
import AdminLogin from "./adminviews/AdminLogin";
import AdminReg from "./adminviews/AdminReg";
// import mainpic from "./mainpic";
import CustomerLogin from "./customerviews/CustomerLogin";
import CustomerReg from "./customerviews/CustomerReg";
import VenderReg from "./vender/VenderReg";
import VenderLogin from "./vender/VenderLogin";
import "./index.css";

function MainPage(){
   
    return (
      <div className="app">
         {/* <Router> */}
              <nav>
              <Link to="adminmain">Admin</Link><span> </span>
              <Link to="customerMain">Customer</Link><span> </span>
              <Link to="vendermain">Vender</Link><span> </span>
              </nav>
              {/* main page Routing */}
              <Routes>
                  <Route path="/adminmain" element={<AdminMain/>}>
                        <Route path="adminlogin" element={<AdminLogin/>}/>
                        <Route path="adminreg" element={<AdminReg/>}/>
                  </Route>


                  <Route path="/customermain" element={<CustomerMain/>}>
                           <Route path="customerlogin" element={<CustomerLogin/>}/>
                           <Route path="customerreg" element={<CustomerReg/>}/>
                  </Route>

                  <Route path="/vendermain" element={<VenderMain/>}>
                           <Route path="venderlogin" element={<VenderLogin/>}/>
                           <Route path="venderreg" element={<VenderReg/>}/>
                   </Route>
              </Routes>
           {/* </Router> */}
      </div>
  );
}export default MainPage;