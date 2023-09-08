import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../context/Context';
import './TopBar.css'
import axios  from "axios";


const user = false;
export default function TopBar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:3131/images/";

  const handleLogout = async ()=>{
    dispatch({type: "LOG_OUT"});
  }
  return (
    <div className="topbar">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-youtube"></i>
        </div>
        <div className="topCenter">
          <ul className='topList'>
            <li className='topListItem'>
              <NavLink to={"/"} className="link">HOME</NavLink>
            </li>
            <li className='topListItem'>
            <NavLink to={"/about"} className="link">ABOUT</NavLink>
            </li>
            <li className='topListItem'>
            <NavLink to={"/blog"} className="link">BLOG</NavLink>
            </li>
            <li className='topListItem'>
            <NavLink to={"/work"} className="link">WORK</NavLink>
            </li>
            <li className='topListItem'>
            <NavLink to={"/write"} className="link">WRITE</NavLink>
            </li>
            <li className='topListItem' onClick={handleLogout}>
            {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
          <Link to={"/settings"}>
            <img className='topImg' src={PF + user.profilePic} alt="" />
          </Link>
            ):
            (
            <ul className='topList'>
              <li className='topListItem'><NavLink className="link" to="/login">LOGIN</NavLink></li>
              <li className='topListItem'><NavLink className="link" to="/register">REGISTER</NavLink></li>
            </ul>
            )
          }
          
          <i className=' topSearchIcon fa fa-search'></i>
        </div>
    </div>
  )
}

