import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col gap-12">
      {/* Top section: About Us text and button */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex-1 text-center md:text-left space-y-4">
          <p className="text-sm font-semibold" style={{ color: '#FB6D39' }}>About Us</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Nurturing Tomorrow's Leaders <br className="hidden md:inline" />Through Empowered Education
          </h1>
          <button
            className="px-8 py-3 rounded-md text-white w-fit transition hover:opacity-90"
            style={{ backgroundColor: '#487ad6' }}
          >
            Explore Our Programs
          </button>
        </div>
        <p className="flex-1 text-gray-600 text-center md:text-left text-base sm:text-lg max-w-xl">
          Discover how our innovative school management application streamlines operations, enhances communication,
          and creates a vibrant learning environment for students, teachers, and parents alike. We're dedicated
          to fostering academic excellence and holistic development.
        </p>
      </div>

      {/* Bottom section: Image card and Mission/Vision cards */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
        {/* Image Card */}
        <div className="rounded-xl overflow-hidden shadow-lg w-full md:w-2/3 lg:w-1/2">
          {/* Using a placeholder image relevant to education. You'll want to replace this with an actual image. */}
          <img
            src="https://res.cloudinary.com/dnyzybzho/image/upload/v1753452770/Gemini_Generated_Image_4niu3t4niu3t4niu_a98rry.png" // Placeholder image for education
            alt="Students engaging in learning"
            className="w-full h-48 sm:h-60 md:h-80 object-cover"
          />
          <div className="p-6" style={{ backgroundColor: '#EFEDEE' }}>
            <h2 className="font-semibold text-xl text-gray-900">Our Journey in Education</h2>
            <p className="text-sm text-gray-700 mt-2">
              EduConnect was founded with the belief that technology can transform education. We've grown from
              a simple idea to a comprehensive platform supporting schools in delivering high-quality education
              and fostering strong community connections.
            </p>
          </div>
        </div>

        {/* Mission and Vision Cards */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-6 w-full md:w-1/3 lg:w-1/2">
          <div className="p-6 rounded-xl flex-1" style={{ backgroundColor: '#B6FA82' }}>
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="text-sm text-gray-700 mt-2">
              To empower educational institutions with intuitive technology, simplifying administration
              and enriching the learning experience for every student.
            </p>
          </div>
          <div className="p-6 rounded-xl flex-1 text-white" style={{ backgroundColor: '#487ad6' }}>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="text-sm mt-2">
              To be the leading platform for school management, fostering a global community of
              connected and thriving educational environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;