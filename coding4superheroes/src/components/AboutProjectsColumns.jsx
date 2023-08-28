import "./AboutProjectsColumns.css";
import myImage from "./SEL_1.jpg";


export default function AboutProjectsColumns(){
    

    /*const slideIndex = [1,1,1,1,1,1];
		const slideId = ["mySlides1"]
		showSlides(1, 0);
		
		
		function plusSlides(n, no) {
		  showSlides(slideIndex[no] += n, no);
		}
		
		function showSlides(n, no) {
		  let i;
		  let x = document.getElementsByClassName(slideId[no]);
		  if (n > x.length) {slideIndex[no] = 1}    
		  if (n < 1) {slideIndex[no] = x.length}
		  for (i = 0; i < x.length; i++) {
			 x[i].style.display = "none";  
		  }
		  x[slideIndex[no]-1].style.display = "block";  
		}*/
    
    return(
        <>
            <div className="projects-columns">
				<h2 style={{textAlign: "center", borderBottom:"1px solid #ff8500" }}>Art and Design</h2>
				<h4 style={{fontWeight: "bold"}}>DESCRIPTION:</h4>
				<p style={{textAlign: "left"}}>A colaborative mural project in the city of Schwelm Germany sponsored by Weltbaustelle for the SDG's. </p>			
				<div className="slideshow-container">
					<div className="mySlides6">
					  <img src={myImage} style={{width:"100%"}}/>
					</div>
				  
				</div>

			</div>
        </>
    )
}