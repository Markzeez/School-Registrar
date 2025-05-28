// src/components/AboutUs.tsx

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:grid-cols-2 gap-8">
      <div className="flex flex-row space-y-6">
        <div className='flex-1 py-6 space-y-2'>

        <p className="text-sm text-emerald-600 font-semibold">About Us</p>
        <h1 className="text-3xl font-bold text-gray-900">
          Empower Your Business’s <br />Financial Future Effortlessly
        </h1>
        
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-md w-fit hover:bg-emerald-700 transition">
          Get Started
        </button>
        </div>
        <p className="text-gray-600 flex-1 mt-[50px]">
          Take control of your business’s financial future with effortless strategies that ensure stability and growth.
          Empower your decisions with expert insights, streamlining your path to long-term success.
          Focus on what matters most—growing your business.
        </p>
      </div>

      <div className="flex flex-row gap-6">
        <div className="rounded-xl overflow-hidden shadow-lg w-[700px] h-[600px]">
          <img
            src="https://www.pexels.com/photo/cheerful-adorable-multiethnic-schoolgirls-preparing-textbooks-for-learning-5896587/" // Replace with your actual image path
            alt="Team meeting"
            className="w-full h-60 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="font-semibold text-lg">Our Story</h2>
            <p className="text-sm text-gray-600 mt-2">
              TechInnovate, a leading IT company, revolutionizes the industry with cutting-edge AI solutions,
              driving innovation and connectivity for businesses worldwide.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:grid-cols-2 gap-4">
          <div className="bg-green-100 p-6 rounded-xl w-[300px] h-[300px]">
            <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
            <p className="text-sm text-gray-700 mt-2">
              To deliver innovative IT solutions that empower businesses.
            </p>
          </div>
          <div className="bg-emerald-800 p-6 rounded-xl text-white w-[300px] h-[300px]">
            <h3 className="text-lg font-semibold">Our Vision</h3>
            <p className="text-sm mt-2">
              To lead in technology and shape a smarter, more connected future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;