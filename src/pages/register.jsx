import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    // Handle registration logic here    
    if(email !== null && password===confirmPassword)
    {
      localStorage.setItem("user", JSON.stringify(user)); 
      setUser( {email , password} );
    }
    else{alert("password mismatch ")}

   

   //alert("button pess")
    console.log(user);

    if(user !== null)
      navigate("/login"); //login

    console.log("Register:", { email, password, confirmPassword });
  };

  return (
    <div className="register">
      <h1>Register Page</h1>
      <div>
        <form onSubmit={ handleSubmit }>
          <div className="form">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
