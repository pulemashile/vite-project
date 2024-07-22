import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here    
    if(email !== null && password === confirmPassword) {
      setUser({ email, password });
      localStorage.setItem("user", JSON.stringify({ email, password })); 
      navigate("/login");
    } else {
      alert("Password mismatch");
    }
  };

  return (
    <div className="form">
      <div className="register">
        <h1 className="title">Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label>Email:</label> */}
            <input
              type="email" placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            {/* <label>Password:</label> */}
            <input
              type="password" placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            {/* <label>Confirm Password:</label> */}
            <input
              type="password" placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
            <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
