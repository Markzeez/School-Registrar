import React from 'react';
import { FaUserGraduate, FaShieldAlt, FaChalkboardTeacher } from 'react-icons/fa';
import { MdAssignmentTurnedIn } from 'react-icons/md';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    icon: <MdAssignmentTurnedIn size={30} />,
    title: 'Attendance Tracking',
    description:
      'Easily mark and monitor student attendance with real-time updates accessible by teachers, students, and parents.',
    bgColor: 'bg-blue-700/30',
  },
  {
    icon: <FaUserGraduate size={30} />,
    title: 'Student Record Management',
    description:
      'Manage detailed student profiles including academic records, performance, and enrollment history.',
    bgColor: 'bg-blue-600/50',
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: 'Data Security',
    description:
      'We prioritize your data security with encrypted systems ensuring only authorized access to sensitive student information.',
    bgColor: 'bg-blue-900/40',
  },
  {
    icon: <FaChalkboardTeacher size={30} />,
    title: 'Teacher & Parent Portal',
    description:
      'Enable seamless communication between teachers and parents with announcements, progress updates, and feedback tools.',
    bgColor: 'bg-blue-800/10',
  },
];

const FeatureCard: React.FC<Feature> = ({  title, description, bgColor }) => {
  return (
    <div className={`${bgColor} mx-auto p-4 my-2 rounded-2xl flex items-start gap-4`}>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">{title}</h3>
        <p className="text-[10px] ">{description}</p>
      </div>
    </div>
  );
};

const CardFeature: React.FC = () => {
  return (
    <section className="p-4 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            bgColor={feature.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default CardFeature;
