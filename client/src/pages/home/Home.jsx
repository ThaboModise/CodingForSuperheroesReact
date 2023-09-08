import AboutMeDiv from "../../components/AboutMeDiv";
import AboutMeParalex from "../../components/AboutMeParalex";
import ContactMeDiv from "../../components/ContactMeDiv";
import ContactParalex from "../../components/ContactParalex";
import FooterDiv from "../../components/FooterDiv";
import ShowreelMainDiv from "../../components/ShowreelMainDiv";
import ShowreelParalex from "../../components/ShowreelParalex";
import "./Home.css";





export default function Home() {
  /*const [posts, setPost] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts");
      console.log("res:", res);
    }

    fetchPosts();
  },[]);*/

  return (
    <div className='home'>
      
      <AboutMeParalex/>
      <AboutMeDiv/>
      <ShowreelParalex/>
      <ShowreelMainDiv/>
      <ContactParalex/>
      <ContactMeDiv/>
      <FooterDiv/>
  
    </div>
  )
}
