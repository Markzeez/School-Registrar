import { useState, useEffect, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';

// Constants
const SPONSORS = [
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Spotify_logo_with_text.svg',
];

// CountUp Component
const CountUp = ({ end, duration = 1000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = end / (duration / 50);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

// StatItem Component
const StatItem = memo(({ value, label }: { value: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md border w-full">
    <p className="text-2xl lg:text-4xl font-semibold text-[#487ad6]">{value}</p>
    <span className="text-xs lg:text-sm text-[#989898] mt-1">{label}</span>
  </div>
));

// SponsorSlide Component
const SponsorSlide = memo(({ logo }: { logo: string }) => (
  <div className="flex justify-center items-center h-24 px-6">
    <img
      src={logo}
      alt="Sponsor logo"
      className="h-full object-contain grayscale hover:grayscale-0 transition duration-300"
    />
  </div>
));

// Main Component
const SchoolStats = () => (
  <section className="relative bg-white text-[#487ad6] px-4 md:px-12">
    {/* Background */}
    <div className="absolute z-0 top-40 left-0 right-0 flex justify-center opacity-60 mx-auto">
      <img
        className="hidden lg:block h-[30%] max-h-[300px]"
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1698313456/raft/Vector_jvfnxb.png"
        alt="desktop grid"
      />
      <img
        className="block lg:hidden w-full max-w-md"
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1698312777/raft/Grid_h3yr87.png"
        alt="mobile grid"
      />
    </div>

    {/* First Section - Centered */}
    <div className="relative z-10 min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-10 w-full max-w-5xl">
        {/* Heading */}
        <header className="text-left lg:max-w-[70%]">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Powering Your School Management
          </h1>
          <p className="text-[#989898] text-sm md:text-base">
            Empower your institution with efficient student records, attendance tracking, and staff
            coordination—all in one place.
          </p>
        </header>

        {/* Sponsor Carousel */}
        <section className="bg-[#eceef0] p-6 rounded-lg shadow-md border border-[#3d3e3e]">
          <h2 className="text-xl lg:text-2xl font-semibold text-center mb-4 text-[#487ad6]">
            Trusted by Leading Brands
          </h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {SPONSORS.map((logo, index) => (
              <SwiperSlide key={index}>
                <SponsorSlide logo={logo} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <StatItem value={<CountUp end={25} />} label="Campuses" />
          <StatItem value={<CountUp end={12500} />} label="Students Enrolled" />
        </div>
      </div>
    </div>

    {/* Second Section - Below the Centered Area */}
    <section className="relative z-10 flex flex-col items-center lg:items-start lg:flex-row gap-8 mt-20 pb-10">
      {/* Left Column */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Trusted and Well Established
        </h2>
        <p className="text-[#989898] text-sm md:text-base">
          With years of experience and numerous campuses under our belt, we bring a powerful and
          proven solution to your educational ecosystem.
        </p>
      </div>

      {/* Right Column - Additional Stats */}
      <div className="flex flex-col items-center w-full lg:w-1/2 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full justify-items-center">
          <StatItem value={<CountUp end={350} />} label="Teachers" />
          <StatItem value={<CountUp end={95} />} label="Classes" />
        </div>
      </div>
    </section>
  </section>
);

export default SchoolStats;
