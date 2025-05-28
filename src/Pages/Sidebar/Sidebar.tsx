import { useState } from "react";
import { BiBell, BiHome } from "react-icons/bi";
import { FaCalendarCheck, FaCog } from "react-icons/fa";
// import ThemeToggle from "../../Component/ThemeToggle";
import { MdEvent } from "react-icons/md";
import Profile from "../Profile/Profile";
import { PiUserSoundFill } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Hamburger and close icons



const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden  fixed top-0 left-0 p-4 z-50 w-full flex justify-between items-center">
        <Logo isCollapsed={false} label="Full Logo" />
        <button onClick={toggleMobileMenu} className="text-2xl focus:outline-none">
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar for large screens */}
      <div
        className={`hidden lg:flex flex-col fixed  mt-[55px] text-sm dark:bg-gray-900  text-black dark:text-white ${
          isCollapsed ? `w-[100px]` : `w-[200px]`
        } h-screen bg-yellow-400 transition-width duration-300`}
      >
        <nav className="flex flex-col mt-4 space-y-1">
          
          <Link to={"/home"}>
            <MenuItem isCollapsed={isCollapsed} icon={<BiHome />} label="Home" />
          </Link>
         <Link to={"/attendance"}> <MenuItem isCollapsed={isCollapsed} icon={<MdEvent />} label="Attendance" /></Link>
          <MenuItem isCollapsed={isCollapsed} icon={<PiUserSoundFill />} label="Profile" />
          <MenuItem isCollapsed={isCollapsed} icon={<TbReportSearch />} label="Report" />
           <MenuItem isCollapsed={isCollapsed} icon={<FaCalendarCheck/>} label="Calendar" />
          {/* Notification MenuItem with Badge */}
          <MenuItem
            isCollapsed={isCollapsed}
            icon={<BiBell />}
            label="Notification"
            badgeCount={3} // Showing 3 notifications
          />
          <MenuItem isCollapsed={isCollapsed} icon={<LuMessagesSquare />} label="Add Comment" />
          <MenuItem isCollapsed={isCollapsed} icon={<FaCog />} label="Setting" />

          <Profile
            isCollapsed={isCollapsed}
            name="Azeez ibrahim"
            email="rudra.devi@gmail.com"
            imageUrl="https://www.pexels.com/photo/street-photography-18718906/"
          />

          <button
            onClick={toggleSidebar}
            className="text-black text-xs ml-[-50px] p-2 focus:outline-none dark:bg-gray-900 dark:text-white"
          >
            {isCollapsed ? ">> " : "<<"}
          </button>
          {/* <ThemeToggle /> */}
        </nav>
      </div>

      {/* Sidebar for mobile screens */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-40`}
          onClick={toggleMobileMenu}
        >
          <div
            className={`fixed top-0 left-0 w-[250px] h-full bg-white dark:bg-gray-900 text-black dark:text-white transition-transform transform ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <nav className="flex flex-col mt-16 space-y-1">
             
              <Link to="/">
                <MenuItem isCollapsed={false} icon={<BiHome />} label="Home" />
              </Link>
              <MenuItem isCollapsed={false} icon={<MdEvent />} label="Attendance" />
              <MenuItem isCollapsed={false} icon={<PiUserSoundFill />} label="Profile" />
              <MenuItem isCollapsed={false} icon={<TbReportSearch />} label="Report" />
              {/* Notification MenuItem with Badge */}
              <MenuItem
                isCollapsed={false}
                icon={<BiBell />}
                label="Notification"
                badgeCount={3}
              />
              <MenuItem isCollapsed={false} icon={<LuMessagesSquare />} label="Add Comment" />
              <MenuItem isCollapsed={false} icon={<FaCog />} label="Setting" />

              <Profile
                isCollapsed={false}
                name="Rudra Devi"
                email="rudra.devi@gmail.com"
                imageUrl="http://"
              />
              {/* <ThemeToggle /> */}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  isCollapsed: boolean;
  badgeCount?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isCollapsed, badgeCount }) => {
  return (
    <div className="relative flex items-center p-2 hover:bg-blue-100 cursor-pointer">
      <span className="text-xl">{icon}</span>
      {!isCollapsed && <span className="ml-3">{label}</span>}
      {badgeCount && badgeCount > 0 && (
        <span className="absolute right-2 top-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {badgeCount}
        </span>
      )}
    </div>
  );
};

interface LogoProps {
  isCollapsed: boolean;
  label: string;
}

const Logo: React.FC<LogoProps> = ({ isCollapsed, label }) => {
  return (
    <div className="flex items-center p-2 cursor-pointer">
      {!isCollapsed && (
        <span className="w-[100px] h-[30px] border-2 border-dashed ml-[-5px] mt-2 p-1">
          {label}
        </span>
      )}
    </div>
  );
};

export default Sidebar;
