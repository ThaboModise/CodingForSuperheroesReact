import "./AboutMeDiv.css";


export default function AboutMeDiv(props) {

  return (
    <div className="main-divs" style={{position: "relative"}} id="about-me">
		<div id="about-text-container">
			<h2>Thabo Modise</h2>
			<p> I am a designer, programmer and philosopher by heart.<br/>
			Specializing in 3D design and web development.</p>
		</div>
		
		<img src="../../images/AboutMeConnectedDots_centered_green_overlay.jpg" width="100%" alt=""/>
	</div>
  )
}
