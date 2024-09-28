import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import CustomerMain from "./customerviews/CustomerMain";
import AdminMain from "./adminviews/AdminMain";   // AdminMain component handles both login and registration
import VenderMain from "./vender/VenderMain";
import StateMgt from "./adminviews/statemgt";
import CityMgt from "./adminviews/citymgt";
import ProductCatgMgt from "./adminviews/ProductCatgMgt";
import VenderMgt from "./adminviews/VenderMgt";
import Product from "./productview/product";
import AdminHome from "./adminviews/AdminHome";
import CustomerLogin from "./customerviews/CustomerLogin";
import CustomerReg from "./customerviews/CustomerReg";
import VenderLogin from "./vender/VenderLogin";
import VenderReg from "./vender/VenderReg";

function MainPage() {
  return (
    <div className="app">
      <nav>
        <Link to="/adminmain">Admin</Link>  {/* Now points to AdminMain */}
        <Link to="/customermain">Customer</Link>
        <Link to="/vendermain">Vendor</Link>
      </nav>
      <Routes>
        <Route path="/adminmain" element={<AdminMain />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/adminmain/statemgt" element={<StateMgt />} />
        <Route path="/adminmain/citymgt" element={<CityMgt />} />
        <Route path="/adminmain/productcatg" element={<ProductCatgMgt />} />
        <Route path="/adminmain/vendermgt" element={<VenderMgt />} />
        <Route path="/adminmain/product" element={<Product />} />

        {/* Routes for Customer and Vendor */}
        <Route path="/customermain" element={<CustomerMain />} />
        <Route path="/customermain/customerlogin" element={<CustomerLogin />} /> 
        <Route path="/customermain/customerreg" element={<CustomerReg />} />

        <Route path="/vendermain" element={<VenderMain />} />
        <Route path="/vendermain/venderlogin" element={<VenderLogin />} /> 
        <Route path="/vendermain/venderreg" element={<VenderReg />} />
      </Routes>
    </div>
  );
}

export default MainPage;
