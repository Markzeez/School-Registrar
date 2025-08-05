import { BiArrowToTop } from "react-icons/bi";
import EmailSubscription from "../Pages/Subscription/EmailSubscription";
import LogoBlue from "../assets/LogoBlue.png";
import { Facebook, InstagramIcon, LinkedinIcon, XIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    About: ["About Us", "Careers", "Our Teacher", "Partner"],
    Legal: ["Terms of Service", "Privacy Policy", "FAQ"],
    Support: ["Contact Us", "Help Center"],
  };

  return (
    <footer className="relative z-0 bg-gradient-to-tr from-[#3f3e3e] via-[#201f1f] to-[#383737] text-white">
      <div className="text-center pt-[15px] pb-8 border-b border-gray-700 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl sm:text-3xl font-semibold  mb-3 ">
          Planning to enroll soon or <br /> later? Stay connected with us!
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 mb-6">
          Sign up for our newsletter to stay updated on our programs, special offers,
          <br className="hidden sm:inline" /> expansion plans, and the latest news and events.
        </p>
        <div className="flex justify-center">
          <EmailSubscription />
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">

          {/* Logo Section */}
          <div className="flex flex-col items-start gap-2 justify-center lg:justify-start w-full lg:w-auto mb-6 lg:mb-0">
            <img
              src={LogoBlue}
              className="w-40 sm:w-48 lg:w-56 h-auto object-cover"
              alt="ClassPulse logo"
            />
            <p>Now in Nigeria</p>
            <p>help@classpulse@gmail.com</p>
            <div className="flex gap-4">
              <Facebook/>
              <LinkedinIcon/>
              <XIcon/>
              <InstagramIcon/>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-8 text-sm w-full lg:max-w-xl">
            {Object.entries(footerLinks).map(([section, items]) => (
              <div key={section}>
                <b className="block mb-2 text-base sm:text-lg text-white">{section}</b>
                {items.map((item) => (
                  <p
                    key={item}
                    className="text-white hover:text-blue-500 transition-colors duration-200 cursor-pointer mb-1"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="w-full text-center py-2 text-xs sm:text-sm text-gray-500 mt-8 border-t border-gray-700">
          © {currentYear} Designed by <span className="font-semibold underline">Markzeez with </span>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a href="#top" aria-label="Scroll to top" className="block">
        <BiArrowToTop className="fixed bottom-2 right-4 border border-[#153164] bg-[#487ad6] rounded-full p-2 text-white text-4xl hover:bg-gray-500 z-50 shadow-lg" />
      </a>
    </footer>
  );
};

export default Footer;