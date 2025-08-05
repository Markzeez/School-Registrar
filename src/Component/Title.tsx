function Title() {
  return (
    <div className="w-full h-auto mx-auto flex flex-col md:flex-row justify-between items-center md:items-start p-4 md:p-8">
      {/* Title */}
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold w-full md:w-[80%] text-center md:text-left mb-6 md:mb-0">
        Unlocking New Possibilities for Personalized Education
      </div>

      {/* Description */}
      <div className="text-base sm:text-lg md:text-xl font-extralight w-full md:w-[70%] text-center md:text-left">
        Experience the flexibility of monitoring and open to notification through educational individual pace and schedule
      </div>
    </div>
  );
}

export default Title;