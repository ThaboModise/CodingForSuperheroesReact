import Sidebar from "../../components/Sidebar";
import Posts from "../../Posts/Posts";
import SVGHeader from "../../components/SVGHeader";
import TopBar from "../../components/TopBar";
import "./Blog.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  //console.log(location);
  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts" + search);
      console.log(res.data);
     setPosts(res.data);
    }

    fetchPosts();
  },[search]);
  return (
    <>
      <div className="blog">
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
    </>
  )
}
