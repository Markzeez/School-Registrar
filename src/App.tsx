import Banner from "./Pages/Landing/Banner"
import Footer from "./Component/Footer"
import Hero from "./Pages/Landing/Hero"
import HeroSection from "./Pages/Landing/HeroSection"
import Navbar from "./Component/Navbar"
import Review from "./Pages/Landing/Review"
import SchoolStats from "./Pages/Landing/SchoolStats"
import AuthTabs from "./Pages/Auth/AuthTabs"
import NewsletterSubscription from "./Pages/Subscription/NewLetterSubscription"
import EmailSubscriptionForm from "./Pages/Subscription/EmailSubscription"
import Search from "./Pages/Search/Search"
import CardFeature from "./Component/CardFeature"




const App = () => {
  return (
    <div className="overflow-scroll">
    <Navbar/>
    <Banner/>
    <CardFeature/>
    <HeroSection/>
    <SchoolStats/>
    <Review/>
    <EmailSubscriptionForm/>
    
    <Footer/>
    {/* <AuthTabs/> */}
    
    
    </div>
  )
}

export default App