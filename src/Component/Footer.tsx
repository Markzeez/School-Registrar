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
    <footer className="relative bg-gradient-to-tr from-[#3f3e3e] via-[#201f1f] to-[#383737] text-white">
      {/* Newsletter Section */}
      <div className="text-center pt-8 pb-10 border-b border-gray-700 px-4 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-2xl font-semibold mb-3 leading-snug">
          Planning to enroll soon or later? <br className="hidden sm:block" />
          Stay connected with us!
        </h1>
        <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-xl mx-auto">
          Sign up for our newsletter to stay updated on our programs, special offers,
          <br className="hidden sm:inline" />
          expansion plans, and the latest news and events.
        </p>
        <div className="flex justify-center">
          <EmailSubscription />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* Logo Section */}
          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <img
              src={LogoBlue}
              className="w-36 sm:w-44 lg:w-52 h-auto object-contain"
              alt="ClassPulse logo"
            />
            <p className="text-sm">Now in Nigeria</p>
            <p className="text-sm">help@classpulse@gmail.com</p>
            <div className="flex gap-4 mt-2">
              <Facebook className="hover:text-blue-400 cursor-pointer" />
              <LinkedinIcon className="hover:text-blue-400 cursor-pointer" />
              <XIcon className="hover:text-blue-400 cursor-pointer" />
              <InstagramIcon className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-10 text-sm w-full sm:w-auto">
            {Object.entries(footerLinks).map(([section, items]) => (
              <div key={section}>
                <h3 className="mb-2 text-base font-semibold text-white">{section}</h3>
                {items.map((item) => (
                  <p
                    key={item}
                    className="mb-1 text-white hover:text-blue-500 cursor-pointer transition-colors duration-200"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-gray-400 mt-10 pt-4 border-t border-gray-700">
          © {currentYear} Designed by{" "}
          <span className="font-semibold underline">Markzeez</span>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#top"
        aria-label="Scroll to top"
        className="block"
      >
        <BiArrowToTop className="fixed bottom-3 right-4 sm:bottom-5 sm:right-6 border border-[#153164] bg-[#487ad6] rounded-full p-2 text-white text-4xl hover:bg-gray-500 z-50 shadow-lg" />
      </a>
    </footer>
  );
};

export default Footer;
