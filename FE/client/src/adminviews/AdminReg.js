// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function AdminReg() {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const handleRegistration = (e) => {
// //     e.preventDefault();
// //     // Registration logic can go here
// //     alert("Registration successful!");
// //     navigate("/adminlogin"); // Redirect to Admin Login after registration
// //   };

// //   return (
// //     <div>
// //       <h4>Admin Registration</h4>
// //       <form onSubmit={handleRegistration}>
// //         <input
// //           type="text"
// //           placeholder="Username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <button type="submit">Register</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default AdminReg;


// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import "../index.css";

// function AdminReg() {
//     const [auserid, setAUserId] = useState();
//     const [auserpass, setAUserPass] = useState();
//     const [adminname, setAdminName] = useState();
//     const [acontact, setAContact] = useState();
//     const [aemail, setAEmail] = useState();
//     const [apicname, setAPicName] = useState();
//     const [aid, setAId] = useState();
//     const [image, setImage] = useState({ preview: '', data: '' });
//     const [status, setStatus] = useState();

//     const handleAUserIdText = (evt) => setAUserId(evt.target.value);
//     const handleAUserPassText = (evt) => setAUserPass(evt.target.value);
//     const handleAdminNameText = (evt) => setAdminName(evt.target.value);
//     const handleAContactText = (evt) => setAContact(evt.target.value);
//     const handleAEmailText = (evt) => setAEmail(evt.target.value);

//     // Fetch admin count for setting admin ID on component mount
//     useEffect(() => {
//         axios.get("http://localhost:9191/admin/getadmincount")
//             .then((res) => setAId(res.data.length + 1))
//             .catch((err) => alert(err));
//     }, []);

//     const handleRegisterButton = () => {
//         const obj = {
//             AUserId: auserid,
//             AUserPass: auserpass,
//             AdminName: adminname,
//             AContact: acontact,
//             AEmail: aemail,
//             APicName: apicname,
//             Aid: aid
//         };
//         axios.post("http://localhost:9191/admin/register", obj)
//             .then((res) => alert(res.data))
//             .catch((err) => alert(err));
//     };

//     // Handle image upload
//     const handleFileChange = (evt) => {
//         const img = {
//             preview: URL.createObjectURL(evt.target.files[0]),
//             data: evt.target.files[0]
//         };
//         setImage(img);
//         setAPicName(evt.target.files[0].name);
//     };

//     const handleSubmit = async (evt) => {
//         evt.preventDefault();
//         let formData = new FormData();
//         formData.append('file', image.data);
//         const response = await fetch('http://localhost:9191/admin/saveadminimage', {
//             method: 'POST',
//             body: formData,
//         });
//         if (response.statusText === "OK") {
//             setStatus("File Uploaded Successfully");
//         } else {
//             setStatus("Failed to Upload File");
//         }
//     };

//     return (
//         <div>
//             <center>
//                 <p>Admin Registration Form</p>
//                 <table>
//                     <tr><td>Admin Id</td><td>{aid}</td></tr>

//                     <tr>
//                         <td>User Id</td>
//                         <td><input type='text' onChange={handleAUserIdText} className='form-control' /></td>
//                     </tr>

//                     <tr>
//                         <td>Password</td>
//                         <td><input type='password' onChange={handleAUserPassText} className='form-control' /></td>
//                     </tr>

//                     <tr>
//                         <td>Admin Name</td>
//                         <td><input type='text' onChange={handleAdminNameText} className='form-control' /></td>
//                     </tr>

//                     <tr>
//                         <td>Contact</td>
//                         <td><input type='number' onChange={handleAContactText} className='form-control' /></td>
//                     </tr>

//                     <tr>
//                         <td>Email</td>
//                         <td><input type='email' onChange={handleAEmailText} className='form-control' /></td>
//                     </tr>

//                     <tr>
//                         <td>Select Photo</td>
//                         <td>
//                             <input type='file' onChange={handleFileChange} name='file' />
//                             <img src={image.preview} width={100} height={100} alt="Admin" />
//                         </td>
//                     </tr>

//                     <tr>
//                         <td>Click to Upload Admin Photo</td>
//                         <td><button onClick={handleSubmit} className='btn btn-danger'>Upload</button></td>
//                     </tr>

//                     <tr>
//                         <td></td>
//                         <td><button onClick={handleRegisterButton} className='btn btn-primary'>Register</button></td>
//                     </tr>
//                 </table>
//             </center>
//         </div>
//     );
// }

// export default AdminReg;

import React, { useState, useEffect } from 'react';
import axios from "axios";

function AdminReg() {
    const [auserid, setAUserId] = useState("");
    const [auserpass, setAUserPass] = useState("");
    const [adminname, setAdminName] = useState("");

    const handleAUserIdText = (evt) => setAUserId(evt.target.value);
    const handleAUserPassText = (evt) => setAUserPass(evt.target.value);
    const handleAdminNameText = (evt) => setAdminName(evt.target.value);

    const handleRegisterButton = () => {
        const obj = {
            AUserId: auserid,
            AUserPass: auserpass,
            AdminName: adminname
        };

        axios.post("http://localhost:9191/admin/register", obj).then((res) => {
            alert(res.data);
        }).catch((err) => {
            alert("Error occurred: " + err);
        });
    };

    return (
        <div>
            <center>
                <h4>Admin Registration Form</h4>
                <table>
                    <tr>
                        <td>Admin Id</td>
                        <td>
                            <input type='text' onChange={handleAUserIdText} className='form-control' />
                        </td>
                    </tr>

                    <tr>
                        <td>Password</td>
                        <td>
                            <input type='password' onChange={handleAUserPassText} className='form-control' />
                        </td>
                    </tr>

                    <tr>
                        <td>Admin Name</td>
                        <td>
                            <input type='text' onChange={handleAdminNameText} className='form-control' />
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>
                            <button type='submit' className='btn btn-primary' onClick={handleRegisterButton}>
                                Register
                            </button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
}

export default AdminReg;

