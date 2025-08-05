import { FiUser } from 'react-icons/fi';
import { MdRateReview } from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Robert Fox',
    role: 'Happy RAFT user',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, cumque, cum suscipit laudantium asperiores praesentium vel...',
  },
  {
    name: 'Jane Doe',
    role: 'Product Manager',
    content:
      'This tool has transformed the way our team collaborates. Highly recommended!',
  },
  {
    name: 'John Smith',
    role: 'Software Engineer',
    content:
      'The user interface is intuitive and smooth. I use it daily for my projects.',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'ease-in-out',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const TestimonialCard = ({ name, role, content }: Testimonial) => (
  <div className="bg-[#3c6bc2] p-6 rounded-xl mx-3 h-full flex flex-col justify-between min-h-[200px]">
    <p className="text-sm text-white mb-4 flex gap-2">
      <MdRateReview className="text-xl text-white" />
      {content}
    </p>
    <div className="flex items-center gap-3">
      <FiUser className="text-lg text-white" />
      <div>
        <h1 className="font-semibold text-white">{name}</h1>
        <p className="text-xs text-white opacity-80">{role}</p>
      </div>
    </div>
  </div>
);

const CardCarousel = () => {
  return (
    <section className="w-full bg-[#487ad6] text-white px-4 py-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 leading-snug">
        Join over 3 thousand <br />
        happy users
      </h2>

      <Slider {...settings} className="w-full max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div key={index}>
            <TestimonialCard {...item} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CardCarousel;
