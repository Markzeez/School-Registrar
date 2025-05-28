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
    image: "/images/lena.jpg",
  },
  {
    name: "Joshua",
    position: "Backend Lead",
    image: "/images/sophia.jpg",
    isFeatured: true,
  },
  {
    name: "Lucky Pius",
    position: "CTO",
    image: "/images/arielle.jpg",
  },
   {
    name: "Daniel ",
    position: "Frontend",
    image: "/images/arielle.jpg",
  },
   {
    name: "Jesse",
    position: "Frontend",
    image: "/images/arielle.jpg",
  }, {
    name: "Fatimo",
    position: "Frontend",
    image: "/images/arielle.jpg",
  }, {
    name: "Amenze",
    position: "Product Design",
    image: "/images/arielle.jpg",
  },
   {
    name: "Samuel ",
    position: "position",
    image: "/images/arielle.jpg",
  },
   {
    name: "Arielle Copper",
    position: "position",
    image: "/images/arielle.jpg",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-12 text-center mt-[20px]">
      <h2 className="text-2xl font-bold mb-2">OUR TEAM</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10 text-xs">
        Lorem ipsum dolor sit amet, <span className="text-green-500">consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </p>

      <div className="grid grid-cols-3 justify-center gap-10 ml-20 space-y-5 mx-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-2xl p-6 w-72"
          >
            {/* Colored background shapes */}
            <div className="absolute inset-0 -z-10 rounded-2xl rotate-6 bg-gradient-to-r from-blue-400 to-teal-400 scale-105" />
            <div className="relative z-10">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto -mt-12 border-4 border-white shadow-md object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="italic text-gray-500">{member.position}</p>
              <p className="text-sm text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              {member.isFeatured && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full p-1 shadow-md">
                  <span className="text-yellow-400 text-xl">★</span>
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