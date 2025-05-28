// PieChartComponent.tsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Sample data for the pie chart
const pieData = [
  { name: 'Present', value: 800, style: { fill: '#FFBB28' } },
  { name: 'Late', value: 100, style: { fill: '#FF8042' } },
  { name: 'Absent', value: 200 },
  
];

// Colors for each slice
const COLORS = ['#FFBB28', '#FF8042'];

const PieChartComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4 bg-blue-100 rounded-lg shadow-lg w-[250px] max-w-md mx-auto">
      <PieChart width={300} height={300}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {pieData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
