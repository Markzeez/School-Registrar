import React from "react";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  isFeatured?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Azeez Ibrahim",
    position: "Frontend Lead",
    image: "/images/lena.jpg", // Ensure these paths are correct or use placeholders
  },
  {
    name: "Joshua",
    position: "Backend Lead",
    image: "/images/sophia.jpg", // Ensure these paths are correct or use placeholders
    isFeatured: true,
  },
  {
    name: "Lucky Pius",
    position: "CTO",
    image: "/images/arielle.jpg", // Ensure these paths are correct or use placeholders
  },
  {
    name: "Daniel",
    position: "Frontend",
    image: "/images/arielle.jpg", // Ensure these paths are correct or use placeholders
  },
  {
    name: "Jesse",
    position: "Frontend",
    image: "/images/arielle.jpg", // Ensure these paths are correct or use placeholders
  },
  {
    name: "Fatimo",
    position: "Frontend",
    image: "/images/arielle.jpg", // Ensure these paths are correct or use placeholders
  },
  {
    name: "Amenze",
    position: "Product Design",
    image: "/images/arielle.jpg", // Ensure these paths are correct or use placeholders
  },
  {
    name: "Samuel",
    position: "Position",
    image: "/images/arielle.jpg", // Ensure these paths are correct or use placeholders
  },
  {
    name: "Arielle Copper",
    position: "Position",
    image: "/images/arielle.jpg", // Ensure these paths are correct or use placeholders
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 text-center mt-8 md:mt-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">OUR TEAM</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
        Lorem ipsum dolor sit amet, <span className="text-green-500 font-semibold">consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16 justify-items-center max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-2xl p-6 w-full max-w-xs transition-transform duration-300 hover:scale-105"
          >
            {/* Colored background shapes */}
            <div className="absolute inset-0 -z-10 rounded-2xl rotate-3 bg-gradient-to-r from-blue-400 to-teal-400 scale-105 opacity-75" />
            <div className="relative z-10">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto -mt-16 border-4 border-white shadow-md object-cover transform transition-transform duration-300 hover:scale-110"
              />
              <h3 className="mt-6 text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="italic text-gray-600 text-sm">{member.position}</p>
              <p className="text-sm text-gray-500 mt-4 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {member.isFeatured && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                  <span className="text-yellow-400 text-2xl" role="img" aria-label="Featured">★</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;