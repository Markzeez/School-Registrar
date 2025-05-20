function Banner() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-12">
      {/* Left Content */}
      <div className="flex-1 mb-10 md:mb-0 text-center md:text-left mx-[45px]">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-snug">
          Smart <span className="text-[#487ad6]">Attendance Solutions</span> <br />
          for Student and Teachers
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#0f0f0f] max-w-md mx-auto md:mx-0">
          We build tools to help schools track attendance efficiently, and for parent to be able view attendance performance of their children allowing parents to stay informed in real-time.
        </p>
        <button className="w-[150px] bg-[#487ad6] text-white font-bold rounded-full px-4 py-3 hover:bg-blue-600">
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://res.cloudinary.com/dnyzybzho/image/upload/v1746789968/pexels-pavel-danilyuk-8423018_ztlaly.jpg"
          alt="Students in class"
          className="w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}

export default Banner;
