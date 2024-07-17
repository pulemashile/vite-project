import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/todo")  // Handle login logic here
    console.log('Login:', { email, password });
  };
  

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button onClick={() =>{navigate("/todo")}}type="submit">Login</button>
      </form>
    </div>
  );
}
 
     
  

export default Login
