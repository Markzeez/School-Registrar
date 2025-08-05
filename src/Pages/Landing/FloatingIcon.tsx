import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  School,
  UserRoundCheck,
  ClipboardList,
  Users,
  FileText,
  GraduationCapIcon,
  Italic,
} from "lucide-react";

const floatingIcons = [
  <School key="school" />,
  <BookOpen key="book" />,
  <GraduationCap key="grad" />,
  <UserRoundCheck key="user-check" />,
  <ClipboardList key="clipboard" />,
  <Users key="users" />,
  <FileText key="file" />,
];

const Hero = () => {
  return (
    <section className="relative w-full mx-auto mt-[60px] h-[80vh] md:min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-[#f9f9f9] via-[#b1c1df] to-[#f9f9f9] overflow-hidden px-4 text-center rounded-3xl">
      {/* Floating icons - hidden on mobile, visible on md+ */}
      <div className="hidden md:block absolute inset-0 z-0">
        {floatingIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-5xl opacity-75 text-[#487ad6]"
            initial={{ y: 0 }}
            animate={{ y: [0, -30, 0] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              // Position icons on the left and right sides
              top: `${Math.random() * 90}%`,
              left: index % 2 === 0 ? `${Math.random() * 10}%` : 'auto', // Left side
              right: index % 2 !== 0 ? `${Math.random() * 10}%` : 'auto', // Right side
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Hero text */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-full md:max-w-4xl z-10 mt-4 px-2">
        <i className=" leading-tight font-mono text-[#000000] font-extralight">Premonition Student Academy</i> <br />
        <span className="font-semibold leading-tight text-[#000000]">Through Innovative Education</span>
      </h1>

      {/* Subtext */}
      <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 max-w-full md:max-w-xl z-10 font-semibold px-2">
        Discover flexible, globally recognized programs designed to manage academic journey.
      </p>

      {/* Buttons */}
      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 z-10">
        <button className="flex gap-2 bg-blue-400 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition">
          <GraduationCapIcon /> Apply
        </button>
        <button className="bg-blue-100 text-black px-6 py-3 rounded-2xl hover:border-b-1 font-semibold hover:bg-blue-200 transition flex items-center gap-2">
          Student portal
        </button>
      </div>
    </section>
  );
};

export default Hero;

// // src/components/HeroSection.tsx
// import React from 'react';

// const HeroSection: React.FC = () => {
//   return (
//     <section
//       className="relative flex items-center justify-center min-h-[500px] py-16 px-8 rounded-lg mx-auto mt-8 overflow-hidden"
//       style={{
//         background: 'linear-gradient(135deg, #F9F7FF 0%, #F2EDFF 100%)', // Custom gradient
//         maxWidth: '1200px', // Matches the width of the screenshot area
//       }}
//     >
//       {/* Background Gradient Circle (simulating the purple glow) */}
//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full filter blur-3xl opacity-50"
//         style={{
//           width: '500px',
//           height: '500px',
//           background: 'radial-gradient(circle, rgba(108,63,255,0.2) 0%, rgba(255,255,255,0) 70%)',
//           zIndex: 0,
//         }}
//       ></div>

//       {/* Floating Icons (simplified) */}
//       <div className="absolute top-1/4 left-16 p-4 bg-white rounded-lg shadow-md z-10 flex items-center justify-center opacity-70">
//         <svg className="w-8 h-8 text-ClassPulse-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
//       </div>
//       <div className="absolute bottom-1/4 right-16 p-4 bg-white rounded-lg shadow-md z-10 flex items-center justify-center opacity-70">
//         <svg className="w-8 h-8 text-ClassPulse-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.32 1.144l1.519 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.519-4.674a1 1 0 00-.32-1.144L2.812 8.497c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"></path></svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4">
//         <h2 className="text-6xl font-extrabold text-ClassPulse-text-dark leading-tight mb-4">
//           <span className="font-serif">Empowering</span> Ambitions
//         </h2>
//         <h2 className="text-6xl font-extrabold text-ClassPulse-text-dark leading-tight mb-8">
//           Through Innovative Education
//         </h2>
//         <p className="text-lg text-ClassPulse-text-light mb-10">
//           Discover flexible, globally recognized programs designed to elevate your career and academic journey.
//         </p>
//         <div className="flex space-x-4">
//           <button className="bg-ClassPulse-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ClassPulse-dark-purple transition duration-300">
//             Explore Programs
//           </button>
//           <button className="border border-ClassPulse-purple text-ClassPulse-purple px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ClassPulse-light-purple transition duration-300">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;