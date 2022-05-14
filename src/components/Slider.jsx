import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import skills from "../db/Skills.js";

const isMobileDevice = window.innerWidth <= 480;
const isTabletDevice = window.innerWidth <= 768;

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={isMobileDevice ? 2 : isTabletDevice ? 3 : 5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="py-4"
    >
      {skills.map((skill, index) => (
        <SwiperSlide key={index} className="hover:scale-105 mx-4 my-2 shadow-xl w-full md:w-5/12 lg:w-2/12 h-min border-2 rounded-lg flex flex-col items-center py-2 bg-gray-100">
          <skill.skillImage size="6rem" className="icon-dev" />
          <a href={skill.skillLink} className="mt-4">
            {skill.skillName}
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
