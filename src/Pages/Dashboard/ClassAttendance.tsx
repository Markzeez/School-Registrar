// src/components/ClassAttendance.tsx
import React from 'react';
import { Check, X } from 'lucide-react';

interface AttendanceRecord {
  [date: string]: boolean; // "2025-07-01": true
}

// Sample attendance data (mark some days present/absent for demo)
const attendanceData: AttendanceRecord = {
  '2025-07-01': true,
  '2025-07-02': false,
  '2025-07-03': true,
  '2025-07-04': true,
  '2025-07-05': false,
  '2025-07-08': true,
  '2025-07-10': false,
  '2025-07-15': true,
  '2025-07-20': false,
};

const getDaysInMonth = (year: number, month: number): Date[] => {
  const days: Date[] = [];
  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const ClassAttendance: React.FC = () => {
  const currentMonth = 6; // July (0-based)
  const currentYear = 2025;
  const days = getDaysInMonth(currentYear, currentMonth);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Class Attendance - July 2025</h2>
        <select className="p-2 border rounded-lg text-sm text-gray-700">
          <option>Month</option>
          <option disabled>Week (coming soon)</option>
        </select>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-600 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {/* Empty slots before the first day */}
        {Array.from({ length: days[0].getDay() }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {/* Actual days */}
        {days.map((date) => {
          const dateStr = date.toISOString().split('T')[0]; // "2025-07-03"
          const isWeekend = date.getDay() === 0 || date.getDay() === 6;
          const present = attendanceData[dateStr];

          return (
            <div
              key={dateStr}
              className={`flex flex-col items-center justify-center border rounded-md p-2 h-20 ${
                isWeekend ? 'bg-gray-100 text-gray-400' : ''
              }`}
            >
              <span className="text-xs mb-1">{date.getDate()}</span>
              {present === true ? (
                <Check className="text-green-600 w-5 h-5" />
              ) : present === false ? (
                <X className="text-red-600 w-5 h-5" />
              ) : (
                <span className="text-gray-400 text-xs">N/A</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassAttendance;
