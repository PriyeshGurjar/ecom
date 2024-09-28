import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminReg from "./AdminReg";
import mainpic from "../adminpic.jpg";
import "../index.css";

function AdminMain() {
    const [showLogin, setShowLogin] = useState(true); // Default to showing the login form

    // Function to show the login form
    const handleShowLogin = () => {
        setShowLogin(true);
    };

    // Function to show the registration form
    const handleShowReg = () => {
        setShowLogin(false);
    };

    return (
        <div>
            <center>
                {/* Display the main image */}
                <img src={mainpic} height={350} width={1000} alt="Admin Main"/>
                
                <h4>Admin Access</h4>
                
                {/* Buttons to toggle between Login and Registration */}
                <nav>
                    <button className="btn btn-primary" onClick={handleShowLogin}>
                        Admin Login
                    </button>
                    <button className="btn btn-secondary" onClick={handleShowReg} style={{ marginLeft: "10px" }}>
                        Admin Registration
                    </button>
                </nav>
                
                {/* Conditionally render AdminLogin or AdminReg based on the state */}
                <div style={{ marginTop: "20px" }}>
                    {showLogin ? <AdminLogin /> : <AdminReg />}
                </div>
            </center>
        </div>
    );
}

export default AdminMain;
