import "./AboutColumnsMainDiv.css";
import AboutMePageParalex from "./AboutMePageParalex";
import AboutColumns from "./AboutColumns";


export default function AboutColumnsMainDiv() {

  const textObjectsList = [
    {
        "h2": "Bio",
        "p": "My name is Thabo Modise and I was born in Johannesburg South Africa." +
             "I am a 3D designer with work experience in the marketing and gaming industry."  +
             "During this time I worked on two mobile games where I was the main level designer in a small team." +
             "Other interesting projects I took part in were virtual reality simulations  and product" + 
             "visualizations where I was tasked with modeling, rendering and texturing assets." + 
             "I am also a self taught programmer, with experience in wordpress theme development, mobile app and web development" + 
             "using technologies such as HTML, CSS, Javascript, Threejs and react native."
    },
    {
      "h2": "Mission",
      "p": "My mission is to raise awareness about the significance of technology and how it will shape every aspect of society" +
          "through my youtube channel. I would like to share my knowledge with beginners especially people from underpriviledged"  +
          "communities and teach them how to access the abundence of knowledge which exist on the internet. My goal is to debunk the myth " +
          "that you need to be a genius to be a programmer and highlight the financial prospects of having this skill. I aim to make" + 
          "my channel the hub for programming inspiration and potential for creative expression with this medium."
    },     
    {
      "h2": "Vision",
      "p": "My vision is to see people using this technology in the most creative of ways. I believe that once people realise it's potential they" +
          "can begin to use it as a tool for social change, protest, self expression and a means to shape and create the society they desire."  +
          "I would like to see the youth of africa taking charge and acting as pioneers in this digital revolution in order to restore their dignity and self" +
          "image in the face of our global society. Most importantly I would like to see this technology being used in a holistic way which helps us understand" + 
          "ourselves better as humanity instead of dividing us and loosing our connection in the process."
    }
  ];
  
  return (
    <>
      <AboutMePageParalex/>
      <div className="about-columns-main-divs" id="main-divs">
        
        {textObjectsList.map((obj)=>{
          return(<AboutColumns hText={obj.h2} pText={obj.p}/>)
        })}
      </div>
      
      
    </>
  )
}
