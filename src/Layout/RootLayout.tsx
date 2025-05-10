import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';


const RootLayout = () => {
  return (
    <div className=" bg-[#ffffff]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
