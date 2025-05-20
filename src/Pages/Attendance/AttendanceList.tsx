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
  {
    id: 1,
    name: 'Alice Johnson',
    image: 'https://i.pravatar.cc/150?img=1',
    status: '',
  },
  {
    id: 2,
    name: 'Brian Lee',
    image: 'https://i.pravatar.cc/150?img=2',
    status: '',
  },
  {
    id: 3,
    name: 'Chloe Smith',
    image: 'https://i.pravatar.cc/150?img=3',
    status: '',
  },
  {
    id: 4,
    name: 'David Brown',
    image: 'https://i.pravatar.cc/150?img=4',
    status: '',
  },
  {
    id: 5,
    name: 'George Bush',
    image: 'https://i.pravatar.cc/150?img=5',
    status: '',
  },
  {
    id: 6,
    name: 'Marcus Philip',
    image: 'https://i.pravatar.cc/150?img=6',
    status: '',
  },
  {
    id: 7,
    name: 'Smith Green',
    image: 'https://i.pravatar.cc/150?img=7',
    status: '',
  },
  {
    id: 8,
    name: 'Michael James',
    image: 'https://i.pravatar.cc/150?img=8',
    status: '',
  },
  {
    id: 9,
    name: 'Nina Holmes',
    image: 'https://i.pravatar.cc/150?img=9',
    status: '',
  },
  {
    id: 10,
    name: 'Omar Streling',
    image: 'https://i.pravatar.cc/150?img=10',
    status: '',
  },
];

const AttendanceList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(
    [...initialStudents].sort((a, b) => a.name.localeCompare(b.name))
  );

  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  const [selectedClass, setSelectedClass] = useState<string>('JSS1');
  const [currentDate, setCurrentDate] = useState(dayjs());

  const markAttendance = (id: number, status: AttendanceStatus) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  return (
    <div className="p-6 w-[1000px] ml-[300px] bg-gray-200/25 rounded-xl shadow-md ">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-black">Student Attendance</h2>

        <p>Today: 17th MAy 2025</p>
        <p>Class: JSS 2</p>
        <div className="flex items-center gap-4">
          
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentView('grid')}
              className={`px-3 py-1 rounded ${
                currentView === 'grid'
                  ? 'bg-blue-400 text-white'
                  : 'bg-blue-200 text-black'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setCurrentView('list')}
              className={`px-3 py-1 rounded ${
                currentView === 'list'
                  ? 'bg-blue-400 text-white'
                  : 'bg-blue-200 text-black'
              }`}
            >
              List View
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          currentView === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
            : 'flex flex-col gap-4'
        }
      >
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-gray-200/100 text-black hover:bg-blue-100 p-4 rounded-xl shadow flex flex-col sm:flex-row sm:items-center sm:gap-4 text-center sm:text-left transition space-y-3"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-14 h-16 rounded-full object-cover mx-auto sm:mx-0"
            />
            <div className="grid ">
              <p className="text-sm font-semibold mb-1">{student.name}</p>
              <p className="text-xs text-gray-500 capitalize mb-2">
                {student.status || 'No status'}
              </p>
               <div className="flex gap-1 sm:mt-0 sm:ml-auto">
              <button
                onClick={() => markAttendance(student.id, 'present')}
                className="bg-green-300 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm cursor-pointer"
              >
                P
              </button>
              <button
                onClick={() => markAttendance(student.id, 'absent')}
                className="bg-red-300 hover:bg-red-600 text-white px-3 py-2 rounded-full text-sm cursor-pointer"
              >
                A
              </button>
              <button
                onClick={() => markAttendance(student.id, 'left')}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full text-sm cursor-pointer"
              >
                L
              </button>
            </div>
            </div>
           
          </div>
        ))}
      </div>
      <button className='bg-blue-400 text-white w-[100px] h-[40px] p-2  rounded  mt-3 cursor-pointer'>
        Submit
      </button>
    </div>
  );
};

export default AttendanceList;
