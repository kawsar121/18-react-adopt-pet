// AutoSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import dog from '../../assets/dog.png';
import cat from '../../assets/cat.png';
import rabit from '../../assets/rabit.png';

const slides = [
  {
    id: 1,
    title: "Happy Paws Animal Hospital",
    image: cat
  },
  {
    id: 2,
    title: "Green Valley Veterinary Clinic",
    image: dog
  },
  {
    id: 3,
    title: "Sunrise Animal Care Center",
    image: rabit
  }
];

function AutoSlider() {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500, // 2.5 seconds
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-72 object-cover rounded-xl"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-lg font-semibold p-3 rounded-b-xl">
                {slide.title}
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AutoSlider;
