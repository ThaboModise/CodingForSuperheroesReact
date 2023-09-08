import "./AboutColumns.css";

export default function AboutColumns(props){
    
     return(
        <>
            <div className="about-columns" id="bio-div" >
				<h2 style={{textAlign: "center",borderBottom:"1px solid #ff8500"}}>{props.hText}</h2>
				<p style={{textAlign: "justify"}}> 
        	        {props.pText}
				</p>
			</div>
        </>
     )
}