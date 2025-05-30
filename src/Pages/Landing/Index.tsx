import CardFeature from "../../Component/CardFeature"
import FloatingIcon from "./FloatingIcon"
import Footer from "../../Component/Footer"
import NavBar from "../../Component/Navbar"
import Faq from "../Faq/Faq"
import Banner from "./Banner"
import HeroSection from "./HeroSection"
import Review from "./Review"
import SchoolStats from "./SchoolStats"
import InputSearch from "../Search/InputSearch"


const Index = () => {
  return (
    <div className="w-full h-auto">
    <NavBar/>
    <FloatingIcon/>
    <Banner/>
    <InputSearch/>
    <CardFeature/>
    <HeroSection/>
    <SchoolStats/>
    <Review/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default Index