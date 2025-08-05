// src/components/OnTimeRateStats.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
const OnTimeRateStats: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">On-time rate</h2>
        <ArrowRight className="h-5 w-5 text-gray-500 cursor-pointer" />
      </div>
      <div className="flex items-end mb-2">
        <span className="text-5xl font-bold text-gray-800">96%</span>
        <span className="ml-4 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          High
        </span>
      </div>
      <p className="text-sm text-gray-500">
        Your scores have increased by <span className="text-green-600 font-semibold">12%</span> compared to last semester
      </p>
    </div>
  );
};

export default OnTimeRateStats;