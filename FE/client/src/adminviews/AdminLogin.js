import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AdminLogin() {
    const [uid, setUId] = useState("");
    const [upass, setUPass] = useState("");

    const navigate = useNavigate();

    const handleUIdText = (evt) => setUId(evt.target.value);
    const handleUPassText = (evt) => setUPass(evt.target.value);

    const handleLoginButton = (e) => {
        e.preventDefault();  // Prevent page reload
        

        const obj = { 
           AUserId: uid,
           AUserPass: upass 
          };

        axios.post("http://localhost:9191/admin/login", obj)
            .then((res) => {
                console.log("Response Data:", res.data);  // Check the response from the server

                if (res.data && res.data.AUserId) {
                  navigate("/adminhome");  // Navigate to Admin Home
              } else {
                  alert(res.data.message || "Invalid Id/Password");
              }
              
            })
            .catch((err) => {
                console.error("Error occurred:", err);  // Log error to console for better tracking
                alert("Error occurred: " + err);
            });
    };

    return (
        <div>
            <center>
                <h4>Admin Login Form</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>User Id</td>
                            <td>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    value={uid} 
                                    onChange={handleUIdText} 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Password</td>
                            <td>
                                <input 
                                    type='password' 
                                    className='form-control' 
                                    value={upass} 
                                    onChange={handleUPassText} 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>
                                <button 
                                    type='submit' 
                                    className='btn btn-success' 
                                    onClick={handleLoginButton}
                                >
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
