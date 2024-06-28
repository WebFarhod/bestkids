import { Swiper, SwiperSlide } from "swiper/react";
import { OfferSliderItem } from "../../../../components/home";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { MdSportsSoccer } from "react-icons/md";
import { GiDrum } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <>
      <Swiper
        // slidesPerView={2}
        spaceBetween={24}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        //   centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          el: ".our-offer-slider",
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <div>
          {arr.map((item, index) => (
            <SwiperSlide key={index}>
              <OfferSliderItem
                icon={item.icon}
                name={item.title}
                description={item.body}
                link={`class-details/${1 + index}`}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="swiper-pagination our-offer-slider"></div>
    </>
  );
};

export default Slider;

const arr = [
  {
    icon: <MdSportsSoccer />,
    title: "Sport sinfi",
    body: "Sport bilan muntazam shugʻillanish va har doim tetik boʻlish",
  },
  {
    icon: <GiDrum />,
    title: "Musiqa sinfi",
    body: "Musiqaning har bir oxangida olam mujassam etgan",
  },
  {
    icon: <IoColorPaletteOutline />,
    title: "Chizmachilik sinfi",
    body: "Olamni moʻjizakor ranglar bilan kashf etamiz",
  },
  {
    icon: <MdSportsSoccer />,
    title: "Sport sinfi",
    body: "Sport bilan muntazam shugʻillanish va har doim tetik boʻlish",
  },
];
