import { NavLink } from "react-router-dom";
import "./Post.css";


export default function Post({post}) {

  const PF = "http://localhost:3131/images/";
  
  return (
    <div className="post">
      {post.photo && (
        <img src={PF + post.photo} alt="" className="postImg" />
      )}
        
        <div className="postInfo">
            <div className="postCategs">
              {
                post.categories.map(c=>(
                  <span className="postCateg">{c}</span>
                ))
              }   
            </div>
            <NavLink to={`/post/${post._id}`} className="link">
              <span className="postTitle">{post.title}</span>
            </NavLink>
            
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            <p className="postDesc">
                {post.desc}
                </p>
        </div>
    </div>
  )
}
