import React from "react";
import { Link,Outlet, Route, Routes } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminReg from "./AdminReg";
import mainpic from "../adminpic.jpg"
import "../index.css";

function AdminMain()
{
    return(
        <div>
            <center>
            <img src={mainpic} height={350} width={1000}/>
                <nav>
                    <ul>
                        <li>
                            <Link to="/adminmain/adminlogin">Login</Link>
                        </li>
                        <li>
                            <Link to="/adminmain/adminreg">Registration</Link>
                        </li>
                    </ul>
                    <Outlet/>
                    <Routes>
                        <Route path="/adminmain/adminlogin" element={<AdminLogin/>}></Route>
                    </Routes>
                </nav>
               </center>
        </div>
    );
} export default AdminMain;

// import React from "react";
// import { Link,Route,Routes } from "react-router-dom";
// // import adminpic from "./adminpic.jpg";
// import AdminLogin from "./AdminLogin";
// // import AdminReg from "./AdminReg";
// import "../index.css";

// // import StateMgt from "./StateMgt";
// // import CityMgt from "./CityMgt";
// // import ProductCatgMgt from "./ProductCatgMgt";
// // import VenderMgt from "../venderviews/VenderMgt";
// // import Product from "../productviews/Product";



// function AdminMain(){
//     return(
//         <div>
//         <center>
//         {/* <img src={adminpic} height={200} width={800}/> */}
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/adminlogin" >Login</Link>
//                 </li>
//                 {/* <li>
//                     <Link to="/adminreg">Registration</Link>
//                 </li> */}
//             </ul>
           
//         </nav>
//         {/* <Routes>
//                 <Route path="/statemgt" element={<StateMgt/>}></Route>
//                 <Route path="/citymgt" element={<CityMgt/>}></Route>
//             </Routes> */}
//         </center>
//     </div>
//     );
// } export default AdminMain;