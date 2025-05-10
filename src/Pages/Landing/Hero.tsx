import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserGraduate />,
    title: 'Student Enrollment',
    description: 'Register and manage student data easily and securely.',
    color: 'text-blue-600',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Teacher Attendance',
    description: 'Track daily teacher attendance and monitor performance.',
    color: 'text-green-600',
  },
  {
    icon: <FaUsers />,
    title: 'Parent Access',
    description: 'Parents can view student attendance and progress online.',
    color: 'text-purple-600',
  },
  {
    icon: <FaCalendarAlt />,
    title: 'Class Scheduling',
    description: 'Organize and manage classes with flexible scheduling tools.',
    color: 'text-orange-500',
  },
];

const FeatureCard = ({ icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
  <div className="bg-white p-6 rounded-3xl shadow hover:shadow-lg transition-shadow duration-300 text-left">
    <div className={`text-2xl mb-4 ${color}`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const Hero = () => {
  return (
    <section className="bg-blue-50 py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 max-w-2xl mx-auto leading-snug">
        We Provide the Best School Registrar Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            color={feature.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
