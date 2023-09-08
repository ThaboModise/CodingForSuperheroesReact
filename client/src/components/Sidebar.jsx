import './Sidebar.css';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(()=>{
        const getCats = async()=>{
            const res = await axios.get("/categories");
            setCats(res.data);
        }

        getCats();
    },[])
    
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="../../images/profilepic.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur laudantium voluptatum ea quis praesentium cupiditate asperiores accusantium non cum commodi alias ut saepe, 
                excepturi eius possimus deserunt, aliquid iste perspiciatis!</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((c)=>(
                    <NavLink to={`/blog?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </NavLink>
                    
                ))}
                
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-youtube"></i>
            </div>
        </div>
    </div>
  )
}
