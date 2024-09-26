// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// function AdminHome() {
//   return (
//     <div>
//       <center>
//         <h4>Admin Home Page</h4>
//         <nav>
//           <ul>
//             <li>
//               <Link to="statemgt">State</Link>
//             </li>
//             <li>
//               <Link to="citymgt">City</Link>
//             </li>
//             <li>
//               <Link to="productcatg">Product Category</Link>
//             </li>
//             <li>
//               <Link to="vendermgt">Vendor Management</Link>
//             </li>
//             <li>
//               <Link to="product">Product Management</Link>
//             </li>
//           </ul>
//         </nav>
//         <Outlet /> {/* This is where nested routes will render */}
//       </center>
//     </div>
//   );
// }

// export default AdminHome;

import React from "react";
import { Link, Outlet } from "react-router-dom";

function AdminHome() {
  return (
    <div>
      <center>
        <h4>Admin Home Page</h4>
        <nav>
          <ul>
            <li>
              <Link to="statemgt">State Management</Link>
            </li>
            <li>
              <Link to="citymgt">City Management</Link>
            </li>
            <li>
              <Link to="productcatg">Product Category</Link>
            </li>
            <li>
              <Link to="vendermgt">Vendor Management</Link>
            </li>
            <li>
              <Link to="product">Product Management</Link>
            </li>
          </ul>
        </nav>
        <Outlet /> {/* This will render the selected management page */}
      </center>
    </div>
  );
}

export default AdminHome;

