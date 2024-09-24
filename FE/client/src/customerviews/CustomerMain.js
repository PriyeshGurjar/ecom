import React from "react";
import CustomerReg from "./CustomerReg";
import CustomerLogin from "./CustomerLogin";
import {Link,Route,Routes} from "react-router-dom";
// import custpic from "../custpic.jpeg";
import "../index.css";

function CustomerMain(){
    return(
        <div>
            <center>
                {/* <img src={custpic}  height={200} width={800}/> */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/customermain/customerlogin">Login</Link>
                        </li>
                        <li>
                            <Link to="/customermain/customerreg">Register</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                <Route path="/customerlogin" element={<CustomerLogin/>}></Route>
                <Route path="/customerreg" element={<CustomerReg/>}></Route>
                </Routes>
            </center>
        </div>
    );
}export default CustomerMain;