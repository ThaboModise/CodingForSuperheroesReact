import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register",
        {
          username,
          email,
          password,
        }
      )
      res.data && window.location.replace("/login");
    } 
    catch (error) {
      setError(true);
    }
    
  }
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input className="registerInput" type="text" placeholder="Enter username"
              onChange={(e => setUsername(e.target.value))}
            />
            <label>Email</label>
            <input className="registerInput" type="text" placeholder="Enter email"
              onChange={(e => setEmail(e.target.value))}
            />
            <label>Password</label>
            <input className="registerInput" type="password" placeholder="Enter password" 
              onChange={(e => setPassword(e.target.value))}
            />
            <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="registerLoginButton">
          <NavLink className="link" to="/login">LOGIN</NavLink>
        </button>
        {error && <span style={{color: "red", marginTop: "10px"}}>Something went wrong!</span>}
    </div>
  )
}
