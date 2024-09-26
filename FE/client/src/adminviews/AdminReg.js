import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminReg() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    // Registration logic can go here
    alert("Registration successful!");
    navigate("/adminlogin"); // Redirect to Admin Login after registration
  };

  return (
    <div>
      <h4>Admin Registration</h4>
      <form onSubmit={handleRegistration}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AdminReg;
