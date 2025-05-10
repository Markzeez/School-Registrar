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
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
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
  <div className="flex flex-col space-y-8 border-l-2 border-[#ffffff] px-5 mx-4">
    <p className="text-sm flex items-start gap-2">
      <MdRateReview className="text-lg text-[#ffffff]" />
      {content}
    </p>
    <div className="flex items-center gap-2">
      <FiUser className="text-lg text-[#ffffff]" />
      <div>
        <h1 className="font-semibold">{name}</h1>
        <p className="text-xs text-[#ffffff]">{role}</p>
      </div>
    </div>
  </div>
);

const CardCarousel = () => {
  return (
    <section className="w-full bg-[#487ad6] text-[#ffffff] px-4 py-12">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10 ">
        Join over 1 million <br />
        user
      </h2>

      <Slider {...settings} className="w-full lg:w-[80%] mx-auto">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </Slider>
    </section>
  );
};

export default CardCarousel;
