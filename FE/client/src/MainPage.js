// import React from "react";
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import CustomerMain from "./customerviews/CustomerMain";
// import AdminMain from "./adminviews/AdminMain";
// import VenderMain from "./vender/VenderMain";
// import AdminLogin from "./adminviews/AdminLogin";
// import AdminReg from "./adminviews/AdminReg";
// import CustomerLogin from "./customerviews/CustomerLogin";
// import CustomerReg from "./customerviews/CustomerReg";
// import VenderReg from "./vender/VenderReg";
// import VenderLogin from "./vender/VenderLogin";
// import "./index.css";

// function MainPage() {
//     return (
//         <div className="app">
            
//                 <nav>
//                     <Link to="adminmain">Admin</Link><span> </span>
//                     <Link to="customermain">Customer</Link><span> </span>
//                     <Link to="vendermain">Vender</Link><span> </span>
//                 </nav>

//                 {/* main page Routing */}
//                 <Routes>
//                     {/* Admin Routes */}
//                     <Route path="/adminmain/*" element={<AdminMain />}>
//                         <Route path="adminlogin" element={<AdminLogin />} />
//                         <Route path="adminreg" element={<AdminReg />} />
//                     </Route>

//                     {/* Customer Routes */}
//                     <Route path="/customermain/*" element={<CustomerMain />}>
//                         <Route path="customerlogin" element={<CustomerLogin />} />
//                         <Route path="customerreg" element={<CustomerReg />} />
//                     </Route>

//                     {/* Vender Routes */}
//                     <Route path="/vendermain/*" element={<VenderMain />}>
//                         <Route path="venderlogin" element={<VenderLogin />} />
//                         <Route path="venderreg" element={<VenderReg />} />
//                     </Route>
//                 </Routes>
           
//         </div>
//     );
// }

// export default MainPage;



// import React from "react";
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import CustomerMain from "./customerviews/CustomerMain";
// import AdminHome from "./adminviews/AdminHome";
// import VenderMain from "./vender/VenderMain";
// import StateMgt from "./adminviews/statemgt";
// import CityMgt from "./adminviews/citymgt";
// import ProductCatgMgt from "./adminviews/ProductCatgMgt";
// import VenderMgt from "./adminviews/VenderMgt";
// import Product from "./productview/product";

// function MainPage() {
//   return (
//     <div className="app">
//       <nav>
//         <Link to="/adminmain">Admin</Link>
//         <Link to="/customermain">Customer</Link>
//         <Link to="/vendermain">Vendor</Link>
//       </nav>
//       <Routes>
//         {/* Main Routes */}
//         <Route path="/adminmain" element={<AdminHome />}>
//           {/* Nested Routes under Admin */}
//           <Route path="statemgt" element={<StateMgt />} />
//           <Route path="citymgt" element={<CityMgt />} />
//           <Route path="productcatg" element={<ProductCatgMgt />} />
//           <Route path="vendermgt" element={<VenderMgt />} />
//           <Route path="product" element={<Product />} />
//         </Route>
//         <Route path="/customermain" element={<CustomerMain />} />
//         <Route path="/vendermain" element={<VenderMain />} />
//       </Routes>
//     </div>
//   );
// }

// export default MainPage;
// import React from "react";
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import CustomerMain from "./customerviews/CustomerMain";
// import AdminLogin from "./adminviews/AdminLogin"; // Admin Login Component
// import AdminReg from "./adminviews/AdminReg";     // Admin Registration Component
// import AdminHome from "./adminviews/AdminHome";   // Admin Home after login
// import VenderMain from "./vender/VenderMain";
// import StateMgt from "./adminviews/statemgt";
// import CityMgt from "./adminviews/citymgt";
// import ProductCatgMgt from "./adminviews/ProductCatgMgt";
// import VenderMgt from "./adminviews/VenderMgt";
// import Product from "./productview/product";

// function MainPage() {
//   return (
//     <div className="app">
//       <nav>
//         <Link to="/adminlogin">Admin</Link> {/* Redirect to Admin Login */}
//         <Link to="/customermain">Customer</Link>
//         <Link to="/vendermain">Vendor</Link>
//       </nav>
//       <Routes>
//         {/* Routes for Login/Registration */}
//         <Route path="/adminlogin" element={<AdminLogin />} />
//         <Route path="/adminreg" element={<AdminReg />} />

//         {/* After successful login, redirect to Admin Home */}
//         <Route path="/adminmain" element={<AdminHome />}>
//           <Route path="statemgt" element={<StateMgt />} />
//           <Route path="citymgt" element={<CityMgt />} />
//           <Route path="productcatg" element={<ProductCatgMgt />} />
//           <Route path="vendermgt" element={<VenderMgt />} />
//           <Route path="product" element={<Product />} />
//         </Route>

//         <Route path="/customermain" element={<CustomerMain />} />
//         <Route path="/vendermain" element={<VenderMain />} />
//       </Routes>
//     </div>
//   );
// }

// export default MainPage;


import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import CustomerMain from "./customerviews/CustomerMain";
import AdminLogin from "./adminviews/AdminLogin"; // Admin Login Component
import AdminReg from "./adminviews/AdminReg";     // Admin Registration Component
import AdminHome from "./adminviews/AdminHome";   // Admin Home after login
import VenderMain from "./vender/VenderMain";
import StateMgt from "./adminviews/statemgt";
import CityMgt from "./adminviews/citymgt";
import ProductCatgMgt from "./adminviews/ProductCatgMgt";
import VenderMgt from "./adminviews/VenderMgt";
import Product from "./productview/product";

function MainPage() {
  return (
    <div className="app">
      <nav>
        <Link to="/adminlogin">Admin</Link> {/* Redirect to Admin Login */}
        <Link to="/customermain">Customer</Link>
        <Link to="/vendermain">Vendor</Link>
      </nav>
      <Routes>
        {/* Routes for Admin Login/Registration */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminreg" element={<AdminReg />} />

        {/* After successful login, redirect to Admin Home */}
        <Route path="/adminmain" element={<AdminHome />}>
          <Route path="statemgt" element={<StateMgt />} />
          <Route path="citymgt" element={<CityMgt />} />
          <Route path="productcatg" element={<ProductCatgMgt />} />
          <Route path="vendermgt" element={<VenderMgt />} />
          <Route path="product" element={<Product />} />
        </Route>

        <Route path="/customermain" element={<CustomerMain />} />
        <Route path="/vendermain" element={<VenderMain />} />
      </Routes>
    </div>
  );
}

export default MainPage;
