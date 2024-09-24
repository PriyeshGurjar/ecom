// import React from "react";
// import VenderReg from "./VenderReg";
// import VenderLogin from "./VenderLogin";
// import {Link,Outlet} from "react-router-dom";
// import venderpic from "../venderpic.jpg";

// function VenderMain(){
//     return(
//         <div>
//             <center>
//                 <img src={venderpic} height={200} width={100}/>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/vendermain/venderlogin">Login</Link>
//                         </li>
//                         <li>
//                             <Link to="/vendermain/venderreg">Register</Link>
//                         </li>
//                     </ul>
//                     <Outlet>
//                 </nav>
//             </center>
//         </div>
//     );
// }export default VenderMain;

import React from "react";
import VenderReg from "./VenderReg";
import VenderLogin from "./VenderLogin";
import{Link,Outlet} from "react-router-dom";
import venderpic from "../venderpic.jpg";
import "../index.css";

function VenderMain(){
    return(
        <div>
            <center>
                <img src={venderpic} height={200} width={200} />

                <nav>
                    <ul>
                        <li>
                            <Link to="/vendermain/venderlogin">Login</Link>
                        </li>
                        <li>
                            <Link to="/vendermain/venderreg">Registration</Link>
                        </li>
                    </ul>
                    <Outlet/>
                </nav>
             
            </center>
        </div>
    );
}export default VenderMain;
