import SVGHeader from "./components/SVGHeader";
import TopBar from "./components/TopBar";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single_page/Single";
import Write from "./pages/write/Write";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App(props) {
  const {user} = useContext(Context);
  return (
    <Router>
        <SVGHeader/>
        <TopBar/>
        <Routes>
          <Route exact path={"/"}element={<Home/>}/>
          <Route  path="/blog" element={user ?<Blog/>: <Register/>}/>
          <Route  path="/login" element={user ?<Home/>: <Login/>}/>
          <Route  path="/write" element={user ?<Write/> :<Register/>}/>
          <Route  path="/register" element={user ? <Home/> :<Register/>}/>
          <Route  path="/settings" element={user ? <Settings/> :<Login/>}/>
          <Route  path="/post/:postId" element={<Single/>}/>
        </Routes>
    </Router>
  );
}

export default App;
