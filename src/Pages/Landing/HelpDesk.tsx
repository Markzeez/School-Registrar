import React from 'react';
import { Phone, Mail, MessageSquare, PhoneCall } from 'lucide-react'; // Importing Lucide icons

const steps = [
  {
    title: 'Call us at +2348135656630',
    desc: 'We are available everyday from 10am-6pm (Nigeria).',
    icon: Phone, // Assigning Lucide icon component
  },
  {
    title: 'Email Us: help@classpulse.com', // Corrected email format
    desc: 'Our team usually replies within 24/7.',
    icon: Mail, // Assigning Lucide icon component
  },
  {
    title: 'Chat with us on Live Chat', // Simplified title
    desc: 'Live chat support is available with limited availability based on agent availability and working hours. For urgent queries, please contact us via phone.',
    icon: MessageSquare, // Assigning Lucide icon component
  },
  {
    title: 'Request a Call Back by Leaving a Message', // Corrected typo and rephrased
    desc: 'If you have time limitations or calling restrictions and would like us to call you, simply provide the following information.',
    icon: PhoneCall, // Assigning Lucide icon component
  },
];

const HelpDesk = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-50 p-6 sm:p-8 rounded-lg shadow-md max-w-6xl mx-auto my-8">
      {/* Left Content - Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 md:pr-8">
        <img
          src="https://res.cloudinary.com/dnyzybzho/image/upload/v1753817147/download_yzs4hf.png"
          alt="School Registrar Illustration"
          className="max-w-xs sm:max-w-sm object-cover rounded-tr-3xl rounded-bl-3xl w-full h-auto" // Added w-full h-auto for better responsiveness
        />
      </div>

      {/* Right Content - Text and Steps Section */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
          Still have a question?
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 font-Roboto leading-relaxed">
          Chat with our friendly team for personalized assistance. <br className="hidden sm:inline" /> We're here to
          support you every step of the way.
        </p>

        <ol className="space-y-5 sm:space-y-6">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 sm:gap-4">
              <span className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-[#487ad6] text-white font-bold text-lg">
                {/* Render Lucide Icon */}
                {React.createElement(step.icon, { size: 20 })}
              </span>
              <div>
                <h4 className="font-semibold text-gray-800 text-base sm:text-lg">{step.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 pr-2 sm:pr-0">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default HelpDesk;
