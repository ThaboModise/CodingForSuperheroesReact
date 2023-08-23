import "./Settings.css";
import axios from "axios";
import { useContext, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Context } from "../../context/Context";


export default function Settings() {
    const [file, setFile] = useState();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:3131/images/";

    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type: "UPDATE_START"});
        const updatedUser = {
            userId: user._id,
            username, email, password
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
               await axios.post("/upload", data); 
               
            } catch (error) {
                
            }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser); 
            setSuccess(true);
            dispatch({type: "UPDATE_SUCCESS", payload: res.data})
        } catch (error) {
            dispatch({type: "UPDATE_FAILURE"})
        }
        
    }
    return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className="settingsDeleteTitle">Delete account</span>
            </div>
            <form  className="settingsForm" onSubmit={handleSubmit}>
                <label htmlFor="">Profile Picture</label>
                <div className="settingsPP">
                    {console.log("pf user:", file)}
                    <img src={file ? URL.createObjectURL(file) :PF+user.profilePic} alt="" />
                    <label htmlFor="fileInput">
                        <i className=" settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display:"none"}} onChange={(e)=>setFile(e.target.files[0])} />
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={e=> setUsername(e.target.value)} />
                <label>Email</label>
                <input type="email" placeholder={user.email} onChange={e=> setEmail(e.target.value)} />
                <label>Password</label>
                <input type="text" placeholder="Mypasswordexample1!" onChange={e=> setPassword(e.target.value)}/>
                <button className="settingsSubmit" type="submit">Update</button>
                {success && <span style={{color: "green", textAlign: "center", marginTop: "20px"}}>Profile updated successfully!</span>}
               
            </form>
        </div>
        
    </div>
  )
}
