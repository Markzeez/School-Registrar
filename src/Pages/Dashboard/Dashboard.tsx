// src/pages/Dashboard/Dashboard.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from  '../Sidebar/Sidebar'; // Adjust path if needed
import Navbar from '../../Component/Navbar'; // Adjust path if needed

const Dashboard: React.FC = () => {
  return (
    <div className="flex bg-[#EFEDEE] min-h-screen">
      
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:ml-[250px] p-5 lg:p-10"> 
        <Navbar />

        <main className="flex-1 mt-4"> 
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;