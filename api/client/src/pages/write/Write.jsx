import { useState } from "react";
import "./Write.css";
import axios from "axios"; 
import { useContext } from "react";
import { Context } from "../../context/Context";


export default function Write() {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [file, setFile] = useState();
    const {user} = useContext(Context);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
               await axios.post("/upload", data); 
               
            } catch (error) {
                
            }
        }
        try {
            const res = await axios.post("/posts", newPost); 
            console.log("file:",res );
            window.location.replace("/post/" + res.data._id)
        } catch (error) {
            
        }
        
    }
  return (
    <>
        <div className="write">
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}
            
            <form action="" className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGrp">
                    <label htmlFor="fileInput">
                        <i className=" writeIcon fa fa-plus"></i>
                    </label>
                    <input style={{ display: "none"}} type="file" id="fileInput" onChange={(e)=>setFile(e.target.files[0])} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="writeFormGrp">
                    <textarea placeholder="Tell your story" type="text" className="writeInput writeText" onChange={(e)=>setDesc(e.target.value)}></textarea>
                </div>

                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    </>
    

  )
}
