import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Introd from "../../components/Introd";
import Career from "../../components/Career";
import Score from "../../components/Score";
import Awards from "../../components/Award";
import Journey from "../../components/Journey";
import Imagegrid from "../../components/Imagegrid";
import Footer from "../../components/Footer";
import Match from "../../components/Match";
import Gold from "../../components/Gold";



export default function Home() {
  return (
    <>
       <Navbar />
      

       <Hero />
       
       
     
       <Score />
       <Awards />
       <Gold />
       <Journey />
       <Imagegrid />


       <Footer />
    </>
  
  )
}
