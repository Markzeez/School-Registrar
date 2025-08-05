function Banner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen px-4 py-12 gap-8">
      {/* Left Content */}
      <div className="text-center md:text-left px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-snug">
          Smart <span className="text-[#487ad6]">Management Solutions</span>{" "}
          for Student and Teachers
        </h1>
        <p className="mt-4 text-lg text-[#0f0f0f] max-w-md mx-auto md:mx-0">
          We build tools to help schools track attendance efficiently, and for parents to view the attendance performance of their children, allowing them to stay informed in real-time.
        </p>
        {/* Optional CTA Button */}
        {/* <button className="mt-6 bg-[#487ad6] text-white font-bold rounded-full px-6 py-3 hover:bg-blue-600">
          Apply
        </button> */}
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="https://res.cloudinary.com/dnyzybzho/image/upload/v1753278903/Gemini_Generated_Image_hw2n5lhw2n5lhw2n_axu4ll.png"
          alt="Students in class"
          className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] rounded-3xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}

export default Banner;
