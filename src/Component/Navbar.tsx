import { useState } from "react";
import LogoBlue from "../assets/LogoBlue.png";
import { Link } from "react-router-dom"
// import { toast } from 'react-toastify'

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="fixed top-[-10px] left-0 w-full h-[60px] mt-1 bg-white z-20 border-b-1 border-[#6964646f]">
      <div className="flex justify-between items-center w-full py-2 px-6 md:px-10">
        {/* Logo and Title */}
        <Link to={"/"}>
        <div className="flex items-center gap-2">
          <img
            src={LogoBlue}
            className="w-[250px] h-[50px] object-cover mt-0.5 "
            alt="ClassPulse logo"
          />

        </div>
        </Link>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center text-base font-semibold ">
          <Link to={"/contact"} className="cursor-pointer text-[#487ad6] hover:text-blue-700/100">Contact</Link>
          <Link to={"/service"} className="cursor-pointer  hover:text-[#487ad6]">Services</Link>
          <Link to={"/About"} className="cursor-pointer hover:text-[#487ad6]">About</Link>
          <Link to={"signup"} className="bg-[#487ad6] text-white font-bold rounded-full px-5 py-2 hover:text-black">Get Started</Link>
          <Link to={'/login'} className="text-black font-bold rounded-full px-5 py-2 hover:text-[#487ad6]">Log In</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[60px] right-0 h-[75vh] w-3/4 bg-[#487ad6] shadow-lg rounded-bl-xl z-40 transform ${
          navbar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col p-6 gap-4 text-white md:hidden`}
      >
        <Link to={"/contact"} onClick={() => setNavbar(false)} className="cursor-pointer hover:text-black">Contact</Link>
        <Link to={"/service"} onClick={() => setNavbar(false)} className="cursor-pointer hover:text-black">Services</Link>
        <Link to={"/about"} onClick={() => setNavbar(false)} className="cursor-pointer hover:text-black">About</Link>
        <Link to={"/signup"} onClick={() => setNavbar(false)} className="bg-white text-[#487ad6] font-bold rounded-full px-4 py-2 hover:text-black">Get Started</Link>
        <Link to={"/login"} onClick={() => setNavbar(false)} className="text-white font-bold rounded-full px-4 py-2 border border-white hover:text-black">Log In</Link>
      </div>
    </div>
  );
};

export default NavBar;
