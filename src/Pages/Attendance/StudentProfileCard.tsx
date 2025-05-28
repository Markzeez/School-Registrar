import React from "react";

interface StudentProfileProps {
  name: string;
  className: string;
  attendance: number;
  avatarUrl: string;
  performance: string;
  School: string;
}

const StudentProfileCard: React.FC<StudentProfileProps> = ({
  name,
  className,
  attendance,
  avatarUrl,
  performance,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
      <div className="flex items-center space-x-4">
        <img
          src={avatarUrl}
          alt={name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm text-gray-600">Class: {className}</p>
          <p className="text-sm text-gray-600">School: {className}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-medium">Attendance: <span className="text-blue-600">{attendance}%</span></p>
        <p className="font-medium mt-2">Recent Performance: <span className="text-green-600">{performance}</span></p>
        <p className="font-medium mt-2">School: <span className="text-green-600">{performance}</span></p>
      </div>
    </div>
  );
};

export default StudentProfileCard;