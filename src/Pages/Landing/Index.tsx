import CardFeature from "../../Component/CardFeature"
import FloatingIcon from "./FloatingIcon"
import Footer from "../../Component/Footer"
import NavBar from "../../Component/Navbar"
import Banner from "./Banner"
import HeroSection from "./HeroSection"
import Review from "./Review"
import SchoolStats from "./SchoolStats"
import Title from "../../Component/Title"
import HelpDesk from "./HelpDesk"
import FAQSection from "../Faq/Faq"
import Extra from "./Extra"
import HorizontalCard from "../../Component/HorizontalCard"


const Index = () => {
  return (
    <div className="w-full h-auto">
    <NavBar/>
    <FloatingIcon/>
    <Title/>
    <HorizontalCard/>
    <Banner/>
    <CardFeature/>
    <HeroSection/>
    <SchoolStats/>
    <HelpDesk/>
    <Review/>
    <Extra/>
    <FAQSection/>
    <Footer/>
    </div>
  )
}

export default Index