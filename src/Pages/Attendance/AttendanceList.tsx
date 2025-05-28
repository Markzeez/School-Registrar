import React, { useState } from 'react';
import dayjs from 'dayjs';

type AttendanceStatus = 'present' | 'absent' | 'left' | '';

interface Student {
  id: number;
  name: string;
  image: string;
  status: AttendanceStatus;
}

const initialStudents: Student[] = [
  { id: 1, name: 'Alice Johnson', image: 'https://i.pravatar.cc/150?img=1', status: '' },
  { id: 2, name: 'Brian Lee', image: 'https://i.pravatar.cc/150?img=2', status: '' },
  { id: 3, name: 'Chloe Smith', image: 'https://i.pravatar.cc/150?img=3', status: '' },
  { id: 4, name: 'David Brown', image: 'https://i.pravatar.cc/150?img=4', status: '' },
  { id: 5, name: 'George Bush', image: 'https://i.pravatar.cc/150?img=5', status: '' },
  { id: 6, name: 'Marcus Philip', image: 'https://i.pravatar.cc/150?img=6', status: '' },
  { id: 7, name: 'Smith Green', image: 'https://i.pravatar.cc/150?img=7', status: '' },
  { id: 8, name: 'Michael James', image: 'https://i.pravatar.cc/150?img=8', status: '' },
  { id: 9, name: 'Nina Holmes', image: 'https://i.pravatar.cc/150?img=9', status: '' },
  { id: 10, name: 'Omar Streling', image: 'https://i.pravatar.cc/150?img=10', status: '' },
];

const classOptions = ['JSS1', 'JSS2', 'JSS3', 'SS1', 'SS2', 'SS3'];

const AttendanceList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(
    [...initialStudents].sort((a, b) => a.name.localeCompare(b.name))
  );

  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  const [selectedClass, setSelectedClass] = useState<string>('JSS1');
  const [currentDate] = useState(dayjs());

  const markAttendance = (id: number, status: AttendanceStatus) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  return (
    <div className="p-6 w-fit ml-[300px] bg-red-200 rounded-xl shadow-md">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-black">Student Attendance</h2>

        <p>Today: {currentDate.format('DD MMM YYYY')}</p>

        <div className="flex items-center gap-2">
          <label htmlFor="class" className="text-sm font-medium text-gray-700">Class:</label>
          <select
            id="class"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="p-2 rounded border bg-white"
          >
            {classOptions.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setCurrentView('grid')}
            className={`px-3 py-1 rounded ${currentView === 'grid' ? 'bg-blue-400 text-white' : 'bg-blue-200 text-black'}`}
          >
            Grid View
          </button>
          <button
            onClick={() => setCurrentView('list')}
            className={`px-3 py-1 rounded ${currentView === 'list' ? 'bg-blue-400 text-white' : 'bg-blue-200 text-black'}`}
          >
            List View
          </button>
        </div>
      </div>

      <div className={currentView === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' : 'flex flex-col gap-4'}>
        {students.map((student) => {
          let bgColor = 'bg-gray-200/100';
          if (student.status === 'present') bgColor = 'bg-green-100';
          else if (student.status === 'absent') bgColor = 'bg-red-100';
          else if (student.status === 'left') bgColor = 'bg-yellow-100';

          return (
            <div
              key={student.id}
              className={`${bgColor} text-black hover:bg-opacity-90 p-4 rounded-xl shadow flex flex-col sm:flex-row sm:items-center sm:gap-4 text-center sm:text-left transition space-y-3`}
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-14 h-16 rounded-full object-cover mx-auto sm:mx-0"
              />
              <div className="grid">
                <p className="text-sm font-semibold mb-1">{student.name}</p>
                <p className="text-xs text-gray-500 capitalize mb-2">{student.status || 'No status'}</p>
                <div className="flex gap-1">
                  <button
                    onClick={() => markAttendance(student.id, 'present')}
                    className="bg-green-300 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    P
                  </button>
                  <button
                    onClick={() => markAttendance(student.id, 'absent')}
                    className="bg-red-300 hover:bg-red-600 text-white px-3 py-2 rounded-full text-sm"
                  >
                    A
                  </button>
                  <button
                    onClick={() => markAttendance(student.id, 'left')}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    L
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="bg-blue-400 text-white w-[100px] h-[40px] p-2 rounded mt-3">
        Submit
      </button>
    </div>
  );
};

export default AttendanceList;
