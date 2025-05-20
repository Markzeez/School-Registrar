// import { Outlet } from 'react-router-dom';

// import Navbar from '../../Component/Navbar';
// import Sidebar from '../Sidebar/Sidebar';
// import Footer from '../../Component/Footer';

// const RootLayout = () => {
//   return (
//     <>
//       <div className="flex bg-[#ffffff] dark:bg-gray-900 text-black dark:text-white">
//         <Navbar />

//         <Sidebar />
//         <main className="flex-grow p-6 dark:bg-gray-900 text-black dark:text-white">
//         <Outlet />
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default RootLayout;


import { Outlet } from 'react-router-dom';

import Navbar from '../../Component/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../../Component/Footer';

const RootLayout = () => {
  return (
    <>
      <div className="flex bg-[#ffffff] dark:bg-gray-900 text-black dark:text-white">
        <Navbar />

        
        <main className="flex-grow p-6 dark:bg-gray-900 text-black dark:text-white">
        <Sidebar />       
        <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
