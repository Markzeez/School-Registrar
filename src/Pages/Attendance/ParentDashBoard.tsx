// src/components/ParentDashboard.jsx
import StudentProfileCard from "./StudentProfileCard";

const studentData = {
  name: "John Doe",
  className: "Grade 5 - A",
  attendance: 92,
  avatarUrl: "https://i.pravatar.cc/150?img=3",
  performance: "Excellent in Mathematics and Science",
  school: "", // Add actual school name if needed
};

const ParentDashboard = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Parent Dashboard</h1>
      <StudentProfileCard School={""} {...studentData} />
    </main>
  );
};

export default ParentDashboard;
