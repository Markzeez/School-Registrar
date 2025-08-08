function Banner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen px-4 py-12 gap-8">
      {/* Left Content */}
      <div className="text-center md:text-left px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-snug">
          Streamlined <span className="text-[#487ad6]">School Management</span>{" "}
          for Students, Teachers, and Parents
        </h1>
        <p className="mt-4 text-lg text-[#0f0f0f] max-w-md mx-auto md:mx-0">
          Our platform provides smart tools for tracking student attendance, helping teachers manage classrooms efficiently and keeping parents informed about their children's performance in real time.
        </p>
        {/* Optional CTA Button */}
        {/* <button className="mt-6 bg-[#487ad6] text-white font-bold rounded-full px-6 py-3 hover:bg-blue-600">
          Get Started
        </button> */}
      </div>

      {/* Right Image */}
      <div className="flex justify-center w-full">
        <img
          src="https://res.cloudinary.com/dnyzybzho/image/upload/v1753278903/Gemini_Generated_Image_hw2n5lhw2n5lhw2n_axu4ll.png"
          alt="Students in classroom"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl object-contain shadow-lg"
        />
      </div>
    </section>
  );
}

export default Banner;
