// src/components/MySchedule.tsx
import React from 'react';

interface ScheduleItemProps {
  time: string;
  lesson: string;
  teacher: string;
  teacherAvatar: string;
  location: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  time,
  lesson,
  teacher,
  teacherAvatar,
  location,
}) => (
  <div className="flex items-center p-4 bg-gray-50 rounded-lg mb-3">
    <div className="w-1/5 text-gray-600 font-medium">{time}</div>
    <div className="w-2/5 flex items-center">
      <img
        src={teacherAvatar}
        alt={teacher}
        className="w-8 h-8 rounded-full mr-3"
      />
      <div>
        <h3 className="font-medium text-gray-800">{lesson}</h3>
        <p className="text-sm text-gray-500">{teacher}</p>
      </div>
    </div>
    <div className="w-2/5 text-gray-600 text-right">{location}</div>
  </div>
);

const MySchedule: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">My schedule</h2>
        <select className="p-2 border rounded-lg text-sm text-gray-700">
          <option>today</option>
          <option>this week</option>
        </select>
      </div>
      <div className="space-y-4">
        <ScheduleItem
          time="8:20"
          lesson="Biology"
          teacher="Terry Melton"
          teacherAvatar="https://via.placeholder.com/32" // Replace with actual avatar
          location="B2, room 120"
        />
        <ScheduleItem
          time="9:00"
          lesson="Chemistry"
          teacher="Olive Castillo"
          teacherAvatar="https://via.placeholder.com/32" // Replace with actual avatar
          location="B2, room 124"
        />
        <ScheduleItem
          time="10:00"
          lesson="Literature"
          teacher="Jeremy Curry"
          teacherAvatar="https://via.placeholder.com/32" // Replace with actual avatar
          location="B5, room 223"
        />
        <ScheduleItem
          time="10:55"
          lesson="Art History"
          teacher="Eleanor Padilla"
          teacherAvatar="https://via.placeholder.com/32" // Replace with actual avatar
          location="B4, room 178"
        />
      </div>
    </div>
  );
};

export default MySchedule;