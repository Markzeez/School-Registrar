// src/components/MainContent.tsx
import React from 'react';
import GPAStats from './GPAStats';
import OnTimeRateStats from './OnTimeRateStats';
import MyTasks from './MyTasks';
import ClassAttendance from './ClassAttendance';
import MySchedule from './MySchedule';

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-row p-5 overflow-y-auto  gap-4">
      

     
       {/* Dashboard Widgets Grid */}
       <div className='flex flex-col flex-1 '>
      <div className="flex flex-row justify-between gap-3 mb-3 flex-1">
        <GPAStats />
        <OnTimeRateStats />
      </div>
        <MyTasks />

       </div>
      <div className="flex flex-col justify-evenly gap-2 flex-1 ">
        <ClassAttendance />
        <MySchedule />
      </div>
     
    </div>
  );
};

export default MainContent;