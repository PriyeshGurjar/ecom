// import React,{useState} from "react";
// import ReactDOM from "react-dom/client";
// import AdminMain from "./AdminMain";

// function AdminLogin()
// {
//     const[uid,setUId]=useState();
//     const[upass,setUPass]=useState();

//     const handleUIdText=(evt)=>{
//         setUId(evt.target.value);
//     }
//         const handleUPassText=(evt)=>{
//             setUPass(evt.target.value);
//         }
//         const handleLoginButton=()=>{
//             if(uid=="admin"&&upass=="abc@123")
//             {
//                 const root=ReactDOM.createRoot(document.getElementById("root"));
//                 root.render(<AdminMain/>)
//             }else{
//                 alert("Invalid Id/Password");
//             }
//         }
//         return(
//             <div>
//                 <center>
//                     <h4 style={{backgroundColor:"yellow"}}>Administrator Login</h4>
//                     <table>
//                         <tr>
//                             <td>User ID</td>
//                             <td>
//                                 <input type="text"className="form-control"
//                                 onChange={handleUIdText}/>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>Password</td>
//                             <td>
//                                 <input type="password"onChange={handleUPassText}
//                                 className="form-control"/>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td></td>
//                             <td>
//                                 <button type="submit" className="btn btn-success"
//                                 onClick={handleLoginButton}>Login</button>
//                             </td>
//                         </tr>
//                     </table>
//                 </center>
//             </div>
//         );
// }export default AdminLogin;

import React, { useState } from "react";
import AdminHome from "./AdminHome";

function AdminLogin() {
  const [uid, setUId] = useState("");
  const [upass, setUPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // Add state to manage login status

  const handleUIdText = (evt) => {
    setUId(evt.target.value);
  };

  const handleUPassText = (evt) => {
    setUPass(evt.target.value);
  };

  const handleLoginButton = () => {
    if (uid == "admin" && upass == "123") {
      setLoggedIn(true); // Update login status instead of rendering directly
    } else {
      alert("Invalid Id/Password");
    }
  };

  // Conditionally render AdminMain based on login status
  if (loggedIn) {
    return <AdminHome />;
  }

  return (
    <div>
      <center>
        <h4 style={{ backgroundColor: "yellow" }}>Administrator Login</h4>
        <table>
          <tbody>
            <tr>
              <td>User Id</td>
              <td>
                <input type="text" onChange={handleUIdText} className="form-control" />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" onChange={handleUPassText} className="form-control" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit" onClick={handleLoginButton} className="btn btn-success">
                  Login
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default AdminLogin;