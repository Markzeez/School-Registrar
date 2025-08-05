import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  CalendarCheck,
  Settings,
  Bell,
  Menu,
  X,
  MessageSquare,
  FileText,
  User, // For PiUserSoundFill
  ClipboardList, // For TbReportSearch
  CalendarDays, // For MdEvent
} from "lucide-react"; // Import all necessary Lucide icons


interface ProfileProps {
  isCollapsed: boolean;
  name: string;
  email: string;
  imageUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ isCollapsed, name, email, imageUrl }) => {
  return (
    <div className={`flex items-center mt-auto p-2 rounded-lg ${isCollapsed ? 'justify-center' : ''}`}>
      <img
        src={imageUrl}
        alt="Profile"
        className={`rounded-full ${isCollapsed ? 'w-8 h-8' : 'w-10 h-10'} object-cover`}
      />
      {!isCollapsed && (
        <div className="ml-3">
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
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
        <span className="w-[100px] h-[30px] border-2 border-dashed ml-[-5px] mt-2 p-1 flex items-center justify-center rounded-md">
          {label}
        </span>
      )}
      {isCollapsed && (
        <span className="w-8 h-8 flex items-center justify-center rounded-md border-2 border-dashed">
            L
        </span>
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
    <div className="relative flex items-center p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer">
      <span className="text-xl">{icon}</span>
      {!isCollapsed && <span className="ml-3">{label}</span>}
      {badgeCount && badgeCount > 0 && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {badgeCount}
        </span>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative font-inter">
      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden fixed top-0 left-0 p-4 z-50 w-full flex justify-between items-center bg-[#F0F4F4] shadow-md rounded-b-lg">
        <Logo isCollapsed={false} label="Full Logo" />
        <button onClick={toggleMobileMenu} className="text-2xl focus:outline-none mr-4 p-2 rounded-md hover:bg-gray-200">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar for large screens */}
      <div
        className={`hidden lg:flex flex-col fixed left-0 top-0 mt-[58px] text-sm dark:bg-gray-900 text-black dark:text-white ${
          isHovered ? `w-[250px]` : `w-[80px]` // Width controlled by hover
        } h-[calc(100vh-65px)] transition-width duration-300 bg-[#F0F4F4] p-5 lg:p-8 z-30 rounded-r-lg shadow-lg`}
        onMouseEnter={() => setIsHovered(true)} // Set hovered to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Set hovered to false on mouse leave
      >
        <nav className="flex flex-col mt-4 space-y-1">
          <Link to={"/dashboard/home"}>
            <MenuItem isCollapsed={!isHovered} icon={<Home />} label="Home" />
          </Link>
          <Link to={"/dashboard/attendance"}>
            <MenuItem isCollapsed={!isHovered} icon={<CalendarDays />} label="Attendance" />
          </Link>
          <Link to={"/dashboard/profile"}>
            <MenuItem isCollapsed={!isHovered} icon={<User />} label="Profile" />
          </Link>
          <Link to={"/dashboard/report"}>
            <MenuItem isCollapsed={!isHovered} icon={<ClipboardList />} label="Report" />
          </Link>
          <Link to={"/dashboard/calendar"}>
            <MenuItem isCollapsed={!isHovered} icon={<CalendarCheck />} label="Calendar" />
          </Link>
          <MenuItem
            isCollapsed={!isHovered}
            icon={<Bell />}
            label="Notification"
            badgeCount={3}
          />
          {/* New Chat icon */}
          <Link to={"/dashboard/chat"}>
            <MenuItem isCollapsed={!isHovered} icon={<MessageSquare />} label="Chat" />
          </Link>
          {/* New Notes icon */}
          <Link to={"/dashboard/notes"}>
            <MenuItem isCollapsed={!isHovered} icon={<FileText />} label="Notes" />
          </Link>
          <Link to={"/dashboard/setting"}>
            <MenuItem isCollapsed={!isHovered} icon={<Settings />} label="Setting" />
          </Link>

          <Profile
            isCollapsed={!isHovered} // Collapse based on hover
            name="Azeez Ibrahim"
            email="azeez.ibrahim@example.com"
            imageUrl="https://res.cloudinary.com/dnyzybzho/image/upload/v1753458001/1652585820848_zkyumi.jpg"
          />
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
            } shadow-xl rounded-r-lg`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col mt-16 space-y-1 p-5">
              <Link to="/dashboard/home" onClick={toggleMobileMenu}>
                <MenuItem isCollapsed={false} icon={<Home />} label="Home" />
              </Link>
              <Link to="/dashboard/attendance" onClick={toggleMobileMenu}>
                <MenuItem isCollapsed={false} icon={<CalendarDays />} label="Attendance" />
              </Link>
              <Link to="/dashboard/profile" onClick={toggleMobileMenu}>
                <MenuItem isCollapsed={false} icon={<User />} label="Profile" />
              </Link>
              <Link to="/dashboard/report" onClick={toggleMobileMenu}>
                <MenuItem isCollapsed={false} icon={<ClipboardList />} label="Report" />
              </Link>
              <Link to="/dashboard/calendar" onClick={toggleMobileMenu}>
                <MenuItem isCollapsed={false} icon={<CalendarCheck />} label="Calendar" />
              </Link>
              <MenuItem
                isCollapsed={false}
                icon={<Bell />}
                label="Notification"
                badgeCount={3}
              />
              {/* New Chat icon for mobile */}
              <Link to={"/dashboard/chat"} onClick={toggleMobileMenu}>
                <MenuItem isCollapsed={false} icon={<MessageSquare />} label="Chat" />
              </Link>
              {/* New Notes icon for mobile */}
              <Link to={"/dashboard/notes"} onClick={toggleMobileMenu}>
                <MenuItem isCollapsed={false} icon={<FileText />} label="Notes" />
              </Link>
              <Link to="/dashboard/setting" onClick={toggleMobileMenu}>
                <MenuItem isCollapsed={false} icon={<Settings />} label="Setting" />
              </Link>

              <Profile
                isCollapsed={false}
                name="Rudra Devi"
                email="rudra.devi@gmail.com"
                imageUrl="https://placehold.co/150x150/E0E0E0/333333?text=RD"
              />
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
