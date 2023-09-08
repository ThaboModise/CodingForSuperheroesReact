import AboutProjectsColumns from "./AboutProjectsColumns"
import "./AboutProjectsMainDiv.css"


export default function AboutProjectsMainDiv(){
    
    return(
        <>
            <div className="main-divs" id="projects-main-div">
                <AboutProjectsColumns/>
            </div>
        </>
    )
}