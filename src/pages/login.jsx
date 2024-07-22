import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [currentUser, setCurrentUser] = useState({});

   
 
               // console.log(currentUser);

  const navigate = useNavigate();

  const handleSubmit = (e) => 
  {
    e.preventDefault();

    setCurrentUser( JSON.parse( localStorage.getItem('user') ) )  ;
    console.log('Login:' );
    console.log(currentUser );
      
      // , { email, password });

    // Store email and password in local storage
    // localStorage.setItem('email', email);
    // localStorage.setItem('password', password);
    if(email===currentUser.email
       && password===currentUser.password)
      {
        //alert("login to " + currentUser.email)
        navigate("/todo");
      }
      else{ alert("email or password incorrect"); }
  };

  return (
    <div className="form">
    <div className="register">
      <h1 className="title">Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label>Email:</label> */}
          <input 
            type="email" placeholder="email"
            // value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          {/* <label>Password:</label> */}
          <input 
            type="password" placeholder="password"
            // value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
