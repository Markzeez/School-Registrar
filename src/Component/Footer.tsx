import { BiArrowToTop } from "react-icons/bi";
import QRCode from "react-qr-code";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    About: ["Our Company", "Careers", "Press Kit"],
    Legal: ["Terms of Use", "Privacy Policy"],
    Support: ["Contact Us", "FAQ", "About Us"],
  };

  return (
    <footer className="relative z-10 px-4 py-8 bg-white mb-[-50px]">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row justify-evenly items-start gap-10">
        {/* Links Grid */}
        <div className="grid grid-cols-3 gap-y-2 text-xs w-full max-w-xl">
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <b className="block mb-1">{section}</b>
              {items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ))}
        </div>

        {/* QR Code Section */}
        <div className="flex items-center border-dashed border-2 border-[#989898] w-[300px] h-[100px] px-4">
          <div className="w-16">
            <QRCode
              size={64}
              style={{ width: "100%" }}
              value="https://your-app-link.com"
              viewBox="0 0 256 256"
            />
          </div>
          <p className="text-xs ml-4 text-left">
            Scan to download the app on Playstore and App Store
          </p>
        </div>
      </div>

      {/* Language Selector */}
      <div className="">
        <select
          aria-label="Language selector"
          className="bg-white outline-none text-sm border px-2 py-1 rounded"
        >
          <option>English (United Kingdom)</option>
        </select>
      </div>

      {/* Footer Note */}
      <div className="text-center py-4 text-sm bg-[#487ad6] text-white rounded-t-[120%]">
        © {currentYear} ClassPulse
      </div>

      {/* Scroll to Top Button */}
      <a href="#top" aria-label="Scroll to top">
        <BiArrowToTop className="fixed bottom-4 right-4 bg-[#487ad6] rounded-full p-2 text-white text-4xl hover:bg-gray-500 z-50" />
      </a>
    </footer>
  );
};

export default Footer;
