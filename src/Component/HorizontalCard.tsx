import React from 'react';
import {
  CheckSquare,
  GraduationCap,
  Users,
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor?: string;
  image?: string;
  special?: boolean;
}

const features: Feature[] = [
  {
    icon: <CheckSquare size={30} />,
    title: 'Attendance Tracking',
    description:
      'Easily mark and monitor student attendance with real-time updates accessible by teachers, students, and parents, ensuring accurate records and timely interventions.',
    bgColor: 'bg-slate-100',
},
{
    icon: <GraduationCap size={30} />,
    title: 'Advanced Student Record Management',
    description:
    'Manage detailed student profiles including comprehensive academic records, performance analytics, disciplinary history, and enrollment information, providing a complete overview for administrative efficiency.',
    bgColor: 'bg-slate-100',
},
{
    icon: <Users size={30} />,
    title: 'Integrated Teacher & Parent Portal',
    description:
    'Enable seamless communication and collaboration between teachers and parents through dedicated portals. Access real-time announcements, detailed progress updates, assignment tracking, and direct feedback tools to foster a strong home-school partnership.',
    bgColor: 'bg-slate-100',
},

];

const FeatureCard: React.FC<Feature> = ({ icon, title, description, bgColor, image, special }) => {
  return (
    <div
    
      className={`${bgColor ?? ''} ${
        special ? 'row-span-3 text-white flex-col justify-between' : ''
      } p-6 rounded-2xl flex gap-4 items-start relative overflow-hidden`}
    >
      
      <div className="relative z-10 flex flex-col h-full">
        <div className={`${special ? 'text-white' : 'text-blue-800'}`}>{icon}</div>
        <h3 className={`font-semibold my-2 ${special ? 'text-lg' : 'text-sm'}`}>{title}</h3>
        <p className={`text-xs ${special ? 'text-white flex-grow' : ''}`}>{description}</p>
        {special && image && (
          <img
            src={image}
            alt="Student"
            className="mt-4 w-full h-auto object-cover rounded-md"
          />
        )}
      </div>
    </div>
  );
};

const CardFeature: React.FC = () => {
  return (
    <section className="p-6 bg-white rounded-lg ">
      <div className="grid grid-cols-1 md:grid-cols-3 **md:grid-rows-4** gap-4 auto-rows-fr"> {/* Changed grid-rows-2 to md:grid-rows-4 */}
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            bgColor={feature.bgColor}
            image={feature.image}
            special={feature.special}
          />
        ))}
      </div>
    </section>
  );
};

export default CardFeature;