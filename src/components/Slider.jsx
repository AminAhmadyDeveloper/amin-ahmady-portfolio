import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import skillsDB from "../db/Skills.db.js";
import openInNewTab from "./../utils/openInNewTab.jsx";

const isMobileDevice = window.innerWidth <= 480;
const isTabletDevice = window.innerWidth <= 768;

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={isMobileDevice ? 3 : isTabletDevice ? 5 : 10}
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
      className="pb-4"
    >
      {skillsDB.map((skill, index) => (
        <SwiperSlide
          onClick={() => openInNewTab(skill.skillLink)}
          key={index}
          className="max-w-sm cursor-pointer hover:scale-105 mx-2 my-3 shadow-xl border-2 rounded-lg flex flex-col items-center py-2 bg-gray-100"
        >
          <skill.skillImage size="6rem" className="icon-dev" />
          <p className="mt-4 text-black">{skill.skillName}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
