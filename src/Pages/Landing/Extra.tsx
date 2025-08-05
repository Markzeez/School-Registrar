import { Diameter } from 'lucide-react';
import React from 'react';
import { FaLock, FaGraduationCap, FaCode, FaReact, FaCamera, FaLaptopCode} from 'react-icons/fa';

const floatingIcons = [
  { icon: <FaLock />, position: 'top-8 left-10' },
  { icon: <FaGraduationCap />, position: 'top-28 left-4' },
  { icon: <FaCode />, position: 'bottom-20 left-10' },
  { icon: <FaReact />, position: 'top-10 right-10' },
  { icon: <FaCamera />, position: 'top-36 right-4' },
  { icon: <FaLaptopCode />, position: 'bottom-20 right-10' },
];

const Extra: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] bg-gradient-to-tr from-[#3f3e3e] via-[#201f1f] to-[#383737] text-white flex items-center justify-center overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} text-white text-2xl p-3 bg-white/10 rounded-full shadow-lg backdrop-blur-md hover:scale-110 transition`}
        >
          {item.icon}
        </div>
      ))}

      {/* Center Content */}
      <div className="text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 text-white text-2xl rounded-xl shadow-lg backdrop-blur-md">
            <Diameter />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold">Start Your Career Journey</h1>
          <p className="mt-2 text-gray-300 max-w-md mx-auto">
            Join our thriving community of over 3,000+ students who have chosen ClassPulse to enhance their skills and knowledge to new heights.
          </p>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-md shadow hover:bg-gray-200 transition">
          Start Application
        </button>
      </div>
    </section>
  );
};

export default Extra;
