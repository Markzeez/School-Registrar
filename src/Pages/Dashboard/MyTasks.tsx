// src/components/MyTasks.tsx
import React from 'react';
import { Plus } from 'lucide-react';

interface TaskProps {
  title: string;
  dueDate: string;
  status: 'In progress' | 'To do' | 'Done';
  comments?: number;
}

const TaskItem: React.FC<TaskProps> = ({ title, dueDate, status, comments }) => (
  <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center mb-3">
    <div>
      <h3 className="font-medium text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{dueDate}</p>
    </div>
    <div className="flex items-center space-x-3">
      {comments !== undefined && comments > 0 && (
        <span className="text-sm text-gray-500">{comments} comments</span>
      )}
      {comments === 0 && (
        <span className="text-sm text-gray-500">No comments</span>
      )}
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          status === 'To do'
            ? 'bg-blue-100 text-blue-700'
            : status === 'In progress'
            ? 'bg-orange-100 text-orange-700'
            : 'bg-green-100 text-green-700'
        }`}
      >
        {status}
      </span>
    </div>
  </div>
);

const MyTasks: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">My tasks</h2>
        <button className="flex items-center p-2 bg-purple-600 text-white rounded-lg">
           <Plus  className="h-5 w-5 mr-1" />
        </button>
      </div>
      <div className="flex space-x-2 mb-6">
        <button className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm">
          All tasks
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 font-medium text-sm">
          To do
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 font-medium text-sm">
          In progress
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 font-medium text-sm">
          Done
        </button>
      </div>
      <div className="space-y-4">
        <TaskItem
          title="Conduct a virtual experiment on chemical reactions and prepare a report"
          dueDate="Chemistry, Jun 8"
          status="To do"
          comments={7}
        />
        <TaskItem
          title="Complete a term-matching task in Biology"
          dueDate="Biology, Jun 3"
          status="In progress"
          comments={0}
        />
        <TaskItem
          title="Study the influence of cultural traditions on contemporary art"
          dueDate="Art History, Jun 2"
          status="In progress"
          comments={0}
        />
      </div>
      <button className="w-full mt-6 p-3 bg-gray-800 text-white rounded-lg font-medium">
        View all tasks
      </button>
    </div>
  );
};

export default MyTasks;