import { useContext } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  
  const {dispatch, isFetching} = useContext(Context);
  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      const res = await axios.post("/auth/login",{
        username: userRef.current.value,
        password: passwordRef.current.value
      });

      dispatch({type:"LOGIN_SUCCESS",payload: res.data})
    } catch (error) {
      dispatch({type:"LOGIN_FAILURE"})
    }
  }

  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input className="loginInput" type="text" placeholder="Enter username" ref={userRef} />
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter password" ref={passwordRef } />
            <button className="loginButton" disabled={isFetching}>Login </button>
        </form>
        <button className="loginRegisterButton" type="submit">
        <ul className='topList'>
             <NavLink className="link" to="/register">REGISTER</NavLink>
            </ul>
        </button>
    </div>
  )
}
