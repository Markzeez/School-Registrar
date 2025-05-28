// import { Sidebar } from "lucide-react";
import Navbar from "../../Component/Navbar";
import { Outlet } from "react-router-dom";
// import Footer from "../../Component/Footer";
// import SideNav from "../Sidebar/SideNav";
import Sidebar from "../Sidebar/Sidebar";

export default function RootLayout() {
  return (
    <div className="overflow-scroll bg-[#ece3e3]">
      <Sidebar/>
      <main className="ml-[200px] p-10">
        <Navbar />
        <Outlet />
         {/* <Footer/> */}
      </main>
     
    </div>
  );
}

