import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  School,
  UserRoundCheck,
  ClipboardList,
  Users,
  FileText,
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
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-white overflow-hidden px-4 text-center">
      {/* Floating icons */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-5xl opacity-75 text-blue-400"
          initial={{ y: 0 }}
          animate={{ y: [0, -30, 0] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Hero text */}
      <h1 className="text-3xl mt-[50px] mb-[-20px] md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl z-10">
        The ultimate{" "}
       <i><span className="text-blue-300 font-semibold ">school registrar</span></i>{" "}
        app for <i><span className="text-blue-300 font-semibold">students</span>,</i>
        <span className="text-blue-300 font-semibold"> teachers</span> &{" "}
       <i> <span className="text-blue-300 font-semibold">parents</span>.</i>
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-lg text-gray-600 max-w-xl z-10 font-semibold">
        Manage attendance, student profiles, and performance – all in one place.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 z-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Register a School
        </button>
        <button className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-200 transition flex items-center gap-2">
          Book a Demo <span>📅</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
