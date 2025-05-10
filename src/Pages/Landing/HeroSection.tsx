

const steps = [
  { title: 'Create Account', desc: 'Create an account for the student to get started.' },
  { title: 'Register Courses', desc: 'Select the courses the student will be attending.' },
  { title: 'View Attendance', desc: 'Monitor student attendance throughout the semester.' },
  { title: 'Payment', desc: 'Make payments for the attendance registration via paystack.' },
];

const HeroSection = () => {
  return (
    <div className="flex flex-col  md:flex-row items-center justify-between bg-blue-50 p-8 rounded-lg shadow-md">
      
      <div className="w-full md:w-1/2 flex justify-center mx-[-110px] ">
        <img src="https://res.cloudinary.com/dnyzybzho/image/upload/v1746794055/pexels-mikhail-nilov-8342281_ha208i.jpg" alt="School Registrar Illustration" className="max-w-xs rounded-tr-3xl rounded-bl-3xl" />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Simple <span className="text-[#487ad6]">School Registration</span>
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          We make the student registration process easy and efficient. From enrollment to payments, we got you covered!
        </p>

        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-[#487ad6] text-white font-bold">{i + 1}</span>
              <div>
                <h4 className="font-semibold text-gray-800">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#487ad6] transition">
            Get Started
          </button>
          <button className="border border-[#487ad6] text-[#487ad6] px-4 py-2 rounded hover:bg-blue-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
